export default function Button({ children, variant = 'primary', ...props }) {
  const bg = variant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)';
  const hoverBg = variant === 'primary' ? 'var(--color-primary-hover)' : 'var(--color-secondary-hover)';
  
  return (
    <button 
      {...props}
      style={{
        padding: '1rem 2rem',
        borderRadius: 'var(--radius-full)',
        border: 'none',
        background: bg,
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: '800',
        cursor: 'pointer',
        boxShadow: '0 4px 0 ' + hoverBg,
        transition: 'transform 0.1s',
        width: '100%',
        ...props.style
      }}
      onMouseDown={e => e.currentTarget.style.transform = 'translateY(4px)'}
      onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {children}
    </button>
  );
}
