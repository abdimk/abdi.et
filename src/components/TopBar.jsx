'use client';

import React, { useEffect, useState } from 'react';
import { Send, Github, Code, Linkedin, Mail } from 'lucide-react';

const GOAL = 10_000;

const TopBar = () => {
  const [hours, setHours] = useState(0);
  const [targetHours, setTargetHours] = useState(0);

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
        <strong><span id="hours-count">{hours.toLocaleString()}</span> hrs</strong>
        <br />
        <small>out of <u className="no-underline">{GOAL.toLocaleString()}</u> ~ {targetHours ? Math.round((targetHours / GOAL) * 100) : '…'}%</small>
      </div>

      <div className="flex gap-4 sm:gap-4">
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
      </div>
    </div>
  );
};

export default TopBar;