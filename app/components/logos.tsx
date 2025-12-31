'use client';
import React from 'react';

const RotatingLogoGrid = () => {
  // Company logos
  const logoUrls = [
    '/sparkseed.png',
    '/traqo.png',
    '/a.png',
    '/pick-up.png',
    '/indian.png',
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logoUrls, ...logoUrls];

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8 overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-track {
          animation: scroll 30s linear infinite;
        }

        .logo-track:hover {
          animation-play-state: paused;
        }

        .logo-item {
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          transform: scale(1.15);
        }
      `}</style>

      <div className="w-full max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight text-[#3a3a38]">
            Here are the companies who trusted us
          </h2>
          <p className="text-xl text-[#355E3B] font-semibold">
            not with money — but with their dreams.
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f5f5f0] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f5f5f0] to-transparent z-10"></div>

          <div className="logo-track flex gap-12 items-center">
            {duplicatedLogos.map((logoUrl, index) => (
              <div
                key={index}
                className="logo-item flex-shrink-0 w-40 h-32 flex items-center justify-center"
              >
                <div className="w-full h-full flex items-center justify-center bg-white rounded-lg shadow-lg border border-[#3a3a38]/10 p-4">
                  <img 
                    src={logoUrl} 
                    alt={`Company logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 border-t-2 border-[#355E3B] pt-8 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-[#3a3a38]">
            And we did <span className="font-bold text-[#355E3B]">everything to honour that trust</span> — 
            We still are — We always will.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RotatingLogoGrid;