import { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// Simple sound synthesis for MVP
const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
  } catch (e) {
    console.error('AudioContext not supported', e);
  }
};

const colorsData = [
  { name: 'Rojo', hex: '#FF3B30' },
  { name: 'Azul', hex: '#007AFF' },
  { name: 'Verde', hex: '#34C759' },
  { name: 'Amarillo', hex: '#FFCC00' },
  { name: 'Morado', hex: '#AF52DE' },
  { name: 'Naranja', hex: '#FF9500' }
];

export default function GameColors() {
  const [stars, setStars] = useState(0);
  const [round, setRound] = useState(1);
  const [options, setOptions] = useState([]);
  const [target, setTarget] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const MAX_ROUNDS = 10;

  const generateRound = () => {
    const shuffled = [...colorsData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3); // 3 options
    const correctTarget = selected[Math.floor(Math.random() * 3)];
    
    setOptions(selected);
    setTarget(correctTarget);
  };

  useEffect(() => {
    generateRound();
  }, []);

  const handleChoice = (color) => {
    if (color.name === target.name) {
      playSound('success');
      const newStars = stars + 1;
      setStars(newStars);
      
      if (round < MAX_ROUNDS) {
        setRound(r => r + 1);
        generateRound();
      } else {
        finishGame(newStars);
      }
    } else {
      playSound('error');
      // Visual feedback can be added here (e.g., shaking animation)
      if (round < MAX_ROUNDS) {
         setRound(r => r + 1);
         generateRound();
      } else {
         finishGame(stars);
      }
    }
  };

  const finishGame = async (finalStars) => {
    setGameOver(true);
    
    // Save progress using existing API
    try {
      // We use a dummy childId since full flow isn't wired, 
      // but the API is expected to receive this payload.
      await fetch('http://localhost:3000/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          childId: 'dummy-uuid', // would be real in full flow
          activityId: 'dummy-uuid', // would be real
          starsEarned: finalStars,
          score: finalStars * 10
        })
      });
    } catch (err) {
      console.warn("Error silenciado al guardar progreso MVP (CORS/Token):", err);
    }
  };

  if (gameOver) {
    return (
      <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '4rem' }}>
        <h1 className="heading-xl">¡Juego Terminado! 🎉</h1>
        <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>Ganaste {stars} estrellas ⭐</p>
        <button 
          onClick={() => navigate('/kids')}
          className="game-card"
          style={{ padding: '1rem 2rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-lg)', fontSize: '1.5rem', fontWeight: 'bold' }}
        >
          Volver a Juegos
        </button>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '1rem' }}>
        <Link to="/kids" style={{ fontSize: '3rem', textDecoration: 'none' }}>⬅️</Link>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-light)' }}>
          Ronda {round}/{MAX_ROUNDS}
        </div>
        <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-accent)', textShadow: '2px 2px 0 #000' }}>
          ⭐ {stars}
        </div>
      </div>

      <h1 className="heading-xl">Toca el color:</h1>
      <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--color-text)', marginBottom: '3rem', animation: 'float 2s infinite' }}>
        {target?.name}
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {options.map((opt, i) => (
          <div 
            key={i}
            onClick={() => handleChoice(opt)}
            className="game-card"
            style={{ 
              width: '120px', height: '120px', 
              background: opt.hex, 
              borderRadius: '50%',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              boxShadow: '0 10px 15px rgba(0,0,0,0.2)'
            }}
          />
        ))}
      </div>
      
    </div>
  );
}
