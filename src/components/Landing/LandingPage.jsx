// src/components/LandingPage.jsx
import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

// Top Navigation Block
const TopNav = () => (
  <div className="flex justify-between items-center w-full py-4 px-8">
    <div className="flex gap-8">
      <a href="#team" className="text-white hover:text-green-400 transition-all">Our Team</a>
      <a href="#about" className="text-white hover:text-green-400 transition-all">About Us</a>
    </div>
    <div className="text-2xl font-bold">ChainZPay</div>
    <div className="flex gap-4">
      <Instagram className="hover:text-green-400 transition-all cursor-pointer" />
      <Twitter className="hover:text-green-400 transition-all cursor-pointer" />
      <Linkedin className="hover:text-green-400 transition-all cursor-pointer" />
    </div>
  </div>
);

// Hero Block with Card
const HeroBlock = () => (
  <div className="relative text-center py-16 px-8">
    {/* Background floating elements */}
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

// Choose Block
const ChooseBlock = () => (
  <div className="text-center py-16 px-8 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent" />
    <div className="relative">
      <h2 className="text-4xl font-bold mb-8">
        <span className="text-green-400">Maximum</span> Value,
        <span className="text-green-400"> Minimum</span> Friction
      </h2>
      <p className="max-w-2xl mx-auto text-lg">
        Transform your crypto into credit card payments with the
        <span className="text-green-400"> lowest fees</span> and
        <span className="text-green-400"> zero complexity</span>
      </p>
    </div>
  </div>
);

// Process Block
const ProcessBlock = () => (
  <div className="py-16 px-8">
    <h2 className="text-4xl text-center mb-16">How it Works?</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        {
          icon: '💳',
          title: 'CONNECT',
          description: 'Bridge your crypto wallet to the ChainzPay matrix and initiate your journey'
        },
        {
          icon: '🔐',
          title: 'VERIFY',
          description: 'Link your traditional banking node by selecting your institution and dropping your card credentials'
        },
        {
          icon: '📊',
          title: 'QUANTIFY',
          description: 'Set your transfer quantum from sats to whales, we process it all'
        },
        {
          icon: '⚡',
          title: 'EXECUTE',
          description: 'Watch as your crypto transforms into fiat at lightning speed'
        }
      ].map((step, index) => (
        <div key={index} className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-6 border border-green-400/20 rounded-lg bg-black/50 backdrop-blur-sm">
            <div className="text-3xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Team Block
const TeamBlock = () => (
  <div className="py-16 px-8">
    <h2 className="text-4xl text-center mb-16">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        {
          name: 'Abhisheak Raina',
          role: 'Founder',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Alexander Kohli',
          role: 'Founder',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Steve Chahal',
          role: 'Founder',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Sofia Bahuguna',
          role: 'Founder',
          image: '/api/placeholder/200/200'
        }
      ].map((member, index) => (
        <div key={index} className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-lg blur-sm" />
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-lg object-cover relative"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
            <div className="flex justify-center gap-4 mt-2">
              <Twitter className="w-4 h-4 hover:text-green-400 cursor-pointer" />
              <Linkedin className="w-4 h-4 hover:text-green-400 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Backers Block
const BackersBlock = () => (
  <div className="py-16 px-8 text-center">
    <h2 className="text-4xl mb-16">
      Backed by <span className="text-green-400">visionaries who</span><br />
      <span className="text-green-400">believe in Us</span>
    </h2>
    <div className="flex justify-center gap-12 flex-wrap max-w-4xl mx-auto">
      {[1, 2, 3, 4, 5].map((partner) => (
        <div
          key={partner}
          className="w-32 h-16 bg-white/10 rounded backdrop-blur-sm relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  </div>
);

// CTA Block
const CTABlock = () => (
  <div className="py-16 px-8 text-center">
    <div className="max-w-4xl mx-auto p-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-lg" />
      <div className="absolute inset-0 border border-green-400/20 rounded-lg" />
      <div className="relative">
        <h2 className="text-3xl mb-8">
          Launch app and get <span className="text-green-400">10% off</span> on<br />
          your first transaction.
        </h2>
        <button className="bg-green-400 text-black px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors">
          Launch App
        </button>
      </div>
    </div>
  </div>
);

// Footer Block
const FooterBlock = () => (
  <div className="px-8 py-6 border-t border-white/10">
    <div className="flex justify-between items-center">
      <div className="flex gap-6">
        <a href="#" className="text-sm hover:text-green-400">Contact Us</a>
        <a href="#" className="text-sm hover:text-green-400">FAQs</a>
        <a href="#" className="text-sm hover:text-green-400">About</a>
        <a href="#" className="text-sm hover:text-green-400">Careers</a>
        <a href="#" className="text-sm hover:text-green-400">Privacy Policy</a>
        <a href="#" className="text-sm hover:text-green-400">Terms & Conditions</a>
      </div>
      <div className="flex gap-4">
        <Instagram className="w-4 h-4 hover:text-green-400 cursor-pointer" />
        <Twitter className="w-4 h-4 hover:text-green-400 cursor-pointer" />
        <Linkedin className="w-4 h-4 hover:text-green-400 cursor-pointer" />
      </div>
    </div>
  </div>
);

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-black" />

      {/* Main Content */}
      <div className="relative z-10">
        <TopNav />
        <HeroBlock />
        <ChooseBlock />
        <ProcessBlock />
        <TeamBlock />
        <BackersBlock />
        <CTABlock />
        <FooterBlock />
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, 15px); }
          75% { transform: translate(-15px, -5px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
