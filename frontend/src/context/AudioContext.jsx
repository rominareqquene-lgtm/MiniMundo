import { createContext, useState, useCallback } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Play synthesized fallback sound
  const playSynthesizedSound = (type) => {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      const now = ctx.currentTime;
      
      switch(type) {
        case 'correct':
        case 'star':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
          gainNode.gain.setValueAtTime(0.5, now);
          gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
          break;
        case 'incorrect':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(150, now);
          gainNode.gain.setValueAtTime(0.5, now);
          gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
          break;
        case 'finish':
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(300, now);
          osc.frequency.linearRampToValueAtTime(600, now + 0.2);
          osc.frequency.linearRampToValueAtTime(900, now + 0.4);
          gainNode.gain.setValueAtTime(0.5, now);
          gainNode.gain.linearRampToValueAtTime(0.01, now + 0.6);
          osc.start(now);
          osc.stop(now + 0.6);
          break;
        case 'click':
          osc.type = 'square';
          osc.frequency.setValueAtTime(600, now);
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
          break;
        default:
          break;
      }
    } catch (e) {
      console.error('Web Audio API no soportada', e);
    }
  };

  const playAudio = useCallback((type) => {
    if (!soundEnabled) return;

    // Try playing real file first
    const audioPath = `/src/assets/audio/${type}.mp3`;
    const audio = new Audio(audioPath);
    
    audio.play().catch((err) => {
      // If file is not found (404) or blocked, fallback to synthesized sound
      playSynthesizedSound(type);
    });
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ soundEnabled, toggleSound, playAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
