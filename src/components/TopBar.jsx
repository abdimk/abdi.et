import React, { useEffect, useState } from 'react';
import { Send, Github, Code, Linkedin, Mail } from 'lucide-react';

const TopBar = () => {
  const [visits, setVisits] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const animateCountUp = (setter, endValue, startValue, duration = 1200) => {
      const frameRate = 15;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let currentFrame = 0;

      const counter = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const currentValue = Math.floor(progress * (endValue - startValue) + startValue);
        setter(currentValue);

        if (currentFrame === totalFrames) {
          clearInterval(counter);
          setter(endValue);
        }
      }, 1000 / frameRate);

      return () => clearInterval(counter); // Cleanup
    };

    // Note: These values seem to be reversed (startValue > endValue).
    // If you want them to count *up*, ensure endValue is greater than startValue.
    // Assuming you want them to count UP to these numbers from a lower base:
    const cleanupVisits = animateCountUp(setVisits, 7000, 0, 1000); // Changed startValue to 0, endValue to 7000
    const cleanupHours = animateCountUp(setHours, 8750, 0, 1200);   // Changed startValue to 0, endValue to 8750


    return () => {
      cleanupVisits();
      cleanupHours();
    };
  }, []);

  return (
    <div className="w-full py-2 px-0 flex flex-col sm:flex-row justify-between items-start text-sm mb-4">
      <div className="mb-2 sm:mb-0">
        {/* Using `Math.floor` or `toFixed` might be better for consistent display if values are not integers */}
        {/* <span id="visits-count">{visits.toLocaleString()}</span> • */}
        {/* <strong> <span id="hours-count">{hours.toLocaleString()}</span> hrs</strong> */}
        <br />
        {/* <small>out of <u className="no-underline">10,000</u> ~ 27%</small> */}
      </div>

      <div className="flex gap-4 sm:gap-4">
        {/* Removed hover:opacity-0. Added hover:text-dot-color for a color change and hover:scale-110 for a subtle growth. */}
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