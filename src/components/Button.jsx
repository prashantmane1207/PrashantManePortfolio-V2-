import { Link } from 'react-router-dom'

export default function Button({
  href,
  to,
  onClick,
  children,
  variant = 'primary',
  className = '',
  as,
  type = 'button',
}) {
  const base =
    'focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-sm transition-all duration-300 active:scale-[0.97]'
  const variants = {
    primary:
      'bg-primary text-white hover:bg-accent hover:shadow-glow',
    outline:
      'border border-white/15 text-text hover:border-accent hover:text-accent',
    ghost: 'text-text-muted hover:text-accent',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
