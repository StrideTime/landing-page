type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string;
  variant?: 1 | 2 | 3 | 4;
};

export function Logo({ size = 32, showText = false, className = '', variant = 1 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Render different logo variants */}
      {variant === 1 && <LogoVariant1 size={size} />}
      {variant === 2 && <LogoVariant2 size={size} />}
      {variant === 3 && <LogoVariant3 size={size} />}
      {variant === 4 && <LogoVariant4 size={size} />}

      {/* App Name */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight">Stride</span>
        </div>
      )}
    </div>
  );
}

// Variant 1: S with Diagonal Split Background
function LogoVariant1({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="7"
        className="fill-background stroke-border"
        strokeWidth="2"
      />
      {/* Subtle diagonal accent in corner */}
      <path
        d="M23 2.5C26.5 2.8 29.2 5.5 29.5 9L23 2.5Z"
        className="fill-blue-600/10 dark:fill-blue-500/10"
      />
      <text
        x="16"
        y="24"
        textAnchor="middle"
        className="fill-blue-600 dark:fill-blue-500"
        style={{ fontSize: '22px', fontWeight: '700', fontFamily: 'system-ui, -apple-system' }}
      >
        S
      </text>
    </svg>
  );
}

// Variant 2: Speed - Diagonal Bars
function LogoVariant2({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="7"
        className="fill-background stroke-border"
        strokeWidth="2"
      />
      {/* Diagonal speed bars - getting taller/more visible */}
      <rect
        x="9"
        y="18"
        width="2.5"
        height="6"
        rx="1.25"
        className="fill-blue-600 dark:fill-blue-500"
        opacity="0.3"
        transform="rotate(-15 10 21)"
      />
      <rect
        x="14"
        y="14"
        width="2.5"
        height="10"
        rx="1.25"
        className="fill-blue-600 dark:fill-blue-500"
        opacity="0.6"
        transform="rotate(-15 15.5 19)"
      />
      <rect
        x="19"
        y="10"
        width="2.5"
        height="14"
        rx="1.25"
        className="fill-blue-600 dark:fill-blue-500"
        transform="rotate(-15 20.5 17)"
      />
    </svg>
  );
}

// Variant 3: Three Chevrons Pointing Right - Final with Better Spacing
function LogoVariant3({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="7"
        className="fill-background stroke-border"
        strokeWidth="2"
      />
      {/* Three chevrons pointing right with increasing opacity - better centered */}
      <path
        d="M10 10L16 16L10 22"
        className="stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
      />
      <path
        d="M14 10L20 16L14 22"
        className="stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path
        d="M18 10L24 16L18 22"
        className="stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Variant 4: Progress Circle with Checkmark
function LogoVariant4({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="7"
        className="fill-background stroke-border"
        strokeWidth="2"
      />
      {/* Background track (full circle - light) */}
      <circle
        cx="16"
        cy="16"
        r="8"
        className="stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="2.5"
        opacity="0.15"
      />
      {/* Progress arc (75% complete) */}
      <path
        d="M16 8C20.418 8 24 11.582 24 16C24 20.418 20.418 24 16 24"
        className="stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Checkmark in center */}
      <path
        d="M13 16L15 18L19 14"
        className="stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Compact version using variant 1 by default
export function LogoMark({ size = 24, className = '', variant = 1 }: { size?: number; className?: string; variant?: 1 | 2 | 3 | 4 }) {
  return (
    <div className={className}>
      {variant === 1 && <LogoVariant1 size={size} />}
      {variant === 2 && <LogoVariant2 size={size} />}
      {variant === 3 && <LogoVariant3 size={size} />}
      {variant === 4 && <LogoVariant4 size={size} />}
    </div>
  );
}