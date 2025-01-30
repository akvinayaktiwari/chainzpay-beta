import React from 'react';

export const HeroBlock = () => (
  <div className="relative text-center py-16 px-8">
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-green-400/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>

    <h1 className="text-5xl font-bold mb-8 relative animate-fadeIn">
      Pay Your Credit Card<br />
      <span className="text-green-400 inline-block">
        Bills Via Crypto
        <div className="absolute -inset-2 bg-green-400/20 blur-xl -z-10" />
      </span>
    </h1>

    <button className="bg-green-400 text-black px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-all hover:scale-105">
      Launch App
    </button>

    <div className="relative mt-16 max-w-lg mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 blur-2xl" />
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <div className="w-12 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded" />
            <div className="text-lg">**** **** **** 5287</div>
            <div className="text-sm text-gray-400">Anmol Singh</div>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-50" />
        </div>
      </div>
    </div>
  </div>
);
