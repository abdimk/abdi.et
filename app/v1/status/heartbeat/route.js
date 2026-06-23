import { execSync } from 'child_process';
import { NextResponse } from 'next/server';

const startTime = Date.now();

// Vercel injects these at build time — works in serverless.
// Falls back to git CLI for local development.
function getGitInfo() {
  // Vercel environment variables (set automatically on every deploy)
  if (process.env.VERCEL_GIT_COMMIT_SHA) {
    return {
      hash:    process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7),
      message: process.env.VERCEL_GIT_COMMIT_MESSAGE ?? null,
      author:  process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME ?? null,
      date:    null, // not provided by Vercel env
      branch:  process.env.VERCEL_GIT_COMMIT_REF ?? null,
    };
  }

  // Local dev fallback — git CLI
  try {
    const hash    = execSync('git rev-parse --short HEAD',          { cwd: process.cwd() }).toString().trim();
    const message = execSync('git log -1 --pretty=%s',             { cwd: process.cwd() }).toString().trim();
    const author  = execSync('git log -1 --pretty=%an',            { cwd: process.cwd() }).toString().trim();
    const date    = execSync('git log -1 --pretty=%cd --date=iso', { cwd: process.cwd() }).toString().trim();
    const branch  = execSync('git rev-parse --abbrev-ref HEAD',     { cwd: process.cwd() }).toString().trim();
    return { hash, message, author, date, branch };
  } catch {
    return null;
  }
}

function formatUptime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days    = Math.floor(totalSeconds / 86400);
  const hours   = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export async function GET(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp    = request.headers.get('x-real-ip');
  const ip        = forwarded ? forwarded.split(',')[0].trim() : (realIp ?? '127.0.0.1');

  const uptimeMs = Date.now() - startTime;

  const body = {
    status:    'ok',
    timestamp: new Date().toISOString(),
    caller_ip: ip,
    uptime: {
      ms:    uptimeMs,
      human: formatUptime(uptimeMs),
    },
    server: {
      node_version: process.version,
      platform:     process.platform,
      arch:         process.arch,
      env:          process.env.NODE_ENV ?? 'unknown',
      vercel:       !!process.env.VERCEL,
      region:       process.env.VERCEL_REGION ?? null,
    },
    git: getGitInfo(),
  };

  return NextResponse.json(body, { status: 200 });
}
