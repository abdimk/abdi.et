'use client';

import React, { useEffect, useState } from 'react';
import { Send, Github, Code, Linkedin, Mail, Moon, Sun, SunDim } from 'lucide-react';

const GOAL = 10_000;

const STORAGE_KEY = 'theme-mode';
const THEMES = ['normal', 'nightlight', 'darktheme'];

const TopBar = () => {
  const [hours, setHours] = useState(0);
  const [targetHours, setTargetHours] = useState(0);
  const [theme, setTheme] = useState('normal');
  const [ready, setReady] = useState(false);

  // Restore theme preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initialTheme = THEMES.includes(stored) ? stored : 'normal';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('night-light', initialTheme === 'nightlight');
    document.documentElement.classList.toggle('dark-theme', initialTheme === 'darktheme');
    setReady(true);
  }, []);

  const cycleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];

    localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.classList.toggle('night-light', nextTheme === 'nightlight');
    document.documentElement.classList.toggle('dark-theme', nextTheme === 'darktheme');
    setTheme(nextTheme);
  };

  const themeConfig = {
    normal: { icon: Sun, title: 'Switch to night light' },
    nightlight: { icon: SunDim, title: 'Switch to dark theme' },
    darktheme: { icon: Moon, title: 'Switch to normal mode' },
  };

  const ThemeIcon = themeConfig[theme].icon;

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
              onClick={cycleTheme}
              title={themeConfig[theme].title}
              className="text-text-color hover:text-dot-color transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-dot-color focus-visible:outline-none rounded-sm"
            >
              <ThemeIcon className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default TopBar;