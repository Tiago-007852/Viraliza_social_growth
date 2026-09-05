import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left/Center Glow (Purple 900/20 blur-3xl) */}
      <div 
        className="fixed top-0 left-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Bottom Right Glow (Indigo 900/20 blur-3xl) */}
      <div 
        className="fixed bottom-0 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle radial ambient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
        }}
      />
    </div>
  );
};
