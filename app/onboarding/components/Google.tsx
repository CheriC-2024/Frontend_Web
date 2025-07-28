import Image from 'next/image';
import React from 'react';

export interface GoogleSignInButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button text (defaults to 'Sign in with Google') */
  text?: string;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  text = 'Sign in with Google',
  className = '',
  ...props
}) => (
  <button
    type="button"
    className={`
      flex items-center justify-center
      px-12 py-2.5
      border-2 border-neutral-gray-300 rounded-full bg-white
      ${className}
    `}
    {...props}
  >
    <Image
      src="/icons/google.svg"
      alt="Google logo"
      width={18}
      height={18}
      className="inline-block"
    />
    <span className="ml-2.5 text-body2 text-[#1f1f1f]">{text}</span>
  </button>
);

export default GoogleSignInButton;
