import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GameLetters() {
  const [stars, setStars] = useState(0);
  const [currentVowel, setCurrentVowel] = useState('A');
  const vowels = ['A', 'E', 'I', 'O', 'U'];

  const handleCorrect = () => {
    setStars(prev => prev + 1);
    const nextIdx = (vowels.indexOf(currentVowel) + 1) % vowels.length;
    setCurrentVowel(vowels[nextIdx]);
  };

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '2rem' }}>
        <Link to="/kids" style={{ fontSize: '3rem', textDecoration: 'none' }}>⬅️</Link>
        <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-accent)', textShadow: '2px 2px 0 #000' }}>
          ⭐ {stars}
        </div>
      </div>

      <h1 className="heading-xl">Encuentra la letra:</h1>
      <div style={{ fontSize: '8rem', fontWeight: '900', color: 'var(--color-primary)', textShadow: '4px 4px 0 #000', marginBottom: '2rem', animation: 'float 2s infinite' }}>
        {currentVowel}
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {vowels.map(v => (
          <div 
            key={v}
            onClick={() => v === currentVowel ? handleCorrect() : alert('¡Intenta otra vez!')}
            className="game-card"
            style={{ 
              width: '120px', height: '120px', 
              background: 'var(--color-secondary)', 
              borderRadius: 'var(--radius-lg)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              fontSize: '4rem', color: '#fff', fontWeight: '900',
              boxShadow: '0 10px 0 var(--color-secondary-hover)'
            }}
          >
            {v}
          </div>
        ))}
      </div>
      
    </div>
  );
}
