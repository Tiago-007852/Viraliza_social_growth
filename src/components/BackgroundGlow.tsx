import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left/Center Glow (Purple/Blue) */}
      <div 
        className="fixed top-0 left-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Bottom Right Glow (Cyan/Blue) */}
      <div 
        className="fixed bottom-0 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-cyan-900/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle radial ambient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(59, 130, 246, 0.25) 40%, rgba(6, 182, 212, 0.15) 70%, transparent 90%)',
        }}
      />
    </div>
  );
};
