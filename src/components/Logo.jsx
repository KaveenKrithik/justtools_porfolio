import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, ...props }) {
  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group" 
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="49"
        height="49"
        rx="14.5"
        className={clsx(
          'transition-colors duration-300',
          invert ? 'fill-black group-hover:fill-white' : 'fill-white group-hover:fill-black'
        )}
        stroke="#DDDDDD"
      />
      <circle
        cx="24.5583"
        cy="24.6477"
        r="6.64767"
        className={clsx(
          'transition-colors duration-300',
          invert ? 'fill-white group-hover:fill-black' : 'fill-black group-hover:fill-white'
        )}
      />
    </svg>
  );
}



export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="38"
        y="22"
        className={clsx(
          'font-display font-semibold text-lg',
          invert ? 'text-white' : 'text-neutral-950',
        )}
      >
        Just Tools
      </text>
    </svg>
  )
}
