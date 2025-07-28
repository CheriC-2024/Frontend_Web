export interface ProgressBarProps {
  steps: number;
  currentStep: number;
  gapClass?: string;
  className?: string;
}

export default function ProgressBar({
  steps,
  currentStep,
  gapClass = 'gap-x-7',
  className = '',
}: ProgressBarProps) {
  return (
    <div className={`flex items-center ${gapClass} ${className}`}>
      {Array.from({ length: steps }).map((_, idx) => {
        const isActive = idx < currentStep;
        return (
          <span
            key={idx}
            className={`
              w-3 h-3 rounded-full
              ${isActive ? 'bg-primary' : 'bg-gray-300'}
            `}
          />
        );
      })}
    </div>
  );
}
