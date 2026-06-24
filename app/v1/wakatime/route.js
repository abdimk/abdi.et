import { NextResponse } from 'next/server';

const WAKATIME_BADGE_URL =
  'https://wakatime.com/badge/user/018d066c-dd62-4dd2-9f06-ec2ba958c693.svg';

/**
 * Parse WakaTime badge text into total hours.
 * Badge text examples:
 *   "610 hrs 42 mins"
 *   "2 yrs 50 wks"
 *   "3 wks 4 days"
 *   "1,234 hrs"
 */
function parseToHours(text) {
  // Remove commas from numbers like "1,234"
  const clean = text.replace(/,/g, '');

  let total = 0;

  const yrs  = clean.match(/(\d+)\s*yr/);
  const wks  = clean.match(/(\d+)\s*wk/);
  const days  = clean.match(/(\d+)\s*day/);
  const hrs  = clean.match(/(\d+)\s*hr/);
  const mins = clean.match(/(\d+)\s*min/);

  if (yrs)  total += parseInt(yrs[1])  * 365 * 24;
  if (wks)  total += parseInt(wks[1])  * 7   * 24;
  if (days) total += parseInt(days[1]) * 24;
  if (hrs)  total += parseInt(hrs[1]);
  if (mins) total += Math.round(parseInt(mins[1]) / 60);

  return total;
}

export async function GET() {
  try {
    const res = await fetch(WAKATIME_BADGE_URL, {
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) throw new Error(`WakaTime badge fetch failed: ${res.status}`);

    const svg = await res.text();

    // Extract the visible time text — it appears in a <text> tag after "wakatime" text nodes.
    // Pattern: something like >610 hrs 42 mins<
    const match = svg.match(/textLength[^>]+>\s*([\d,]+\s*(?:yr|wk|day|hr|min)[^<]*)<\/text>/i);

    if (!match) throw new Error('Could not parse WakaTime badge text');

    const rawText = match[1].trim();
    const totalHours = parseToHours(rawText);

    return NextResponse.json({
      raw: rawText,
      hours: totalHours,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
