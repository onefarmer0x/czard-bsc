import React from 'react';
import { Github, Twitter, Send, ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react';

const CzardLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            CZARD
          </h1>
          <p className="text-2xl text-blue-300">The Crypto Wizard</p>
        </div>
        
        <p className="text-xl mb-8">{"The real magic is patience"}</p>
        
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-bold">
            Buy on PancakeSwap
          </button>
          <button className="border border-purple-600 hover:bg-purple-900 px-6 py-3 rounded-lg font-bold">
            View Chart
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Magical Powers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-900/50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp size={48} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pump Spell</h3>
            <p>Harness the power of market momentum through ancient trading magic</p>
          </div>
          <div className="bg-purple-900/50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck size={48} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">HODL Shield</h3>
            <p>Protection against FUD and panic selling with mystical barriers</p>
          </div>
          <div className="bg-purple-900/50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle size={48} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rug Reveal</h3>
            <p>Expose scams before they strike with ancient divination</p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="container mx-auto px-4 py-16">
        <div className="flex justify-center gap-8">
          <a href="#" className="text-purple-400 hover:text-purple-300">
            <Send size={32} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300">
            <Twitter size={32} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300">
            <Github size={32} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CzardLanding;
