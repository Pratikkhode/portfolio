import React from 'react';
import { Code } from 'lucide-react';

const Logo = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="flex items-center space-x-2 bg-yellow-500 px-3 py-2 rounded-lg shadow-lg">
        <Code className="w-6 h-6 text-black" />
        <span className="text-black font-bold text-lg">PK</span>
      </div>
    </div>
  );
};

export default Logo;