import clsx from 'clsx';

export default function Button({
  children,
  className,
  variant = 'primary',
  disabled,
}) {
  return (
    <button
      className={clsx(
        'flex items-center py-[6px] px-3 rounded-sm border',
        variant === 'secondary' && 'bg-primary-whitebg border-secondary',
        variant === 'primary' && 'bg-primary text-white border-primary',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
