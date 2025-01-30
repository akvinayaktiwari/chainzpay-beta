import React from 'react';
import { Twitter, Linkedin, Instagram } from '../SocialIcons';

export const TopNav = () => (
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
