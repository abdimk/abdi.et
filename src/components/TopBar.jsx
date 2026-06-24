'use client';

import React, { useEffect, useState } from 'react';
import { Send, Github, Code, Linkedin, Mail, Moon, Sun } from 'lucide-react';

const GOAL = 10_000;

const STORAGE_KEY = 'night-light';

const TopBar = () => {
  const [hours, setHours] = useState(0);
  const [targetHours, setTargetHours] = useState(0);
  const [nightLight, setNightLight] = useState(false);
  const [ready, setReady] = useState(false);

  // Restore night light preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const isOn = stored !== null ? stored === 'true' : false; // default OFF
    setNightLight(isOn);
    document.documentElement.classList.toggle('night-light', isOn);
    setReady(true);
  }, []);

  const toggleNightLight = () => {
    const next = !nightLight;
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.classList.toggle('night-light', next);
    setNightLight(next);
  };

  useEffect(() => {
    // Fetch real WakaTime total hours from proxy
    fetch('/v1/wakatime')
      .then((r) => r.json())
      .then((data) => {
        if (data?.hours) setTargetHours(data.hours);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (targetHours === 0) return;

    const frameRate = 15;
    const duration = 1400;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      setHours(Math.floor(progress * targetHours));
      if (currentFrame >= totalFrames) {
        clearInterval(counter);
        setHours(targetHours);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [targetHours]);

  return (
    <div className="w-full py-2 px-0 flex flex-col sm:flex-row justify-between items-start text-sm mb-4">
      <div className="mb-2 sm:mb-0">
        <strong>
          <a href="https://wakatime.com/@abdisa" target="_blank" rel="noopener noreferrer" title="View WakaTime profile">
            <img
              src="https://wakatime.com/static/img/wakatime.svg"
              alt="WakaTime"
              className="inline-block mr-1 align-middle opacity-80 hover:opacity-100 transition-opacity duration-200"
              style={{ width: '14px', height: '14px' }}
            />
          </a>
          <span id="hours-count">{hours.toLocaleString()}</span> hrs
        </strong>
        <br />
        <small>out of <u className="no-underline">{GOAL.toLocaleString()}</u> ~ {targetHours ? Math.round((targetHours / GOAL) * 100) : '…'}%</small>
      </div>

      <div className="flex gap-4 sm:gap-4 items-center">
        {/* Night light toggle — only show after localStorage is read */}
        <a href="https://t.me/iamnetkas/" target="_blank" title="Telegram" className="text-text-color hover:text-dot-color transition-colors duration-300">
          <Send className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://github.com/abdimk" target="_blank" title="GitHub" className="text-text-color hover:text-dot-color transition-colors duration-300">
          <Github className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://leetcode.com/u/abdisa/" target="_blank" title="LeetCode Profile" className="text-text-color hover:text-dot-color transition-colors duration-300">
          <Code className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/abdisa-merga/" target="_blank" title="LinkedIn" className="text-text-color hover:text-dot-color transition-colors duration-300">
          <Linkedin className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="mailto:abdisamk@gmail.com" target="_blank" title="Email" className="text-text-color hover:text-dot-color transition-colors duration-300">
          <Mail className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
        </a>

        {ready && (
          <>
            <span className="text-text-color opacity-30 select-none">|</span>
            <button
              onClick={toggleNightLight}
              title={nightLight ? 'Turn off night light' : 'Turn on night light'}
              className="text-text-color hover:text-dot-color transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-dot-color focus-visible:outline-none rounded-sm"
            >
              {nightLight ? (
                <Sun className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
              ) : (
                <Moon className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
              )}
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default TopBar;