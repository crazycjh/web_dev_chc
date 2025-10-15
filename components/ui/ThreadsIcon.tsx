import React from 'react';
import Image from 'next/image';

interface ThreadsIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const ThreadsIcon: React.FC<ThreadsIconProps> = ({ size = 24, strokeWidth = 1, className = '' }) => {
  return <Image src="/static/social/threads.png" alt="Threads" width={size} height={size} className={className} />;
};
