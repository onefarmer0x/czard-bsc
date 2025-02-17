import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center">
      <Head>
        <title>CZARD - The Crypto Wizard</title>
        <meta name="description" content="The magic of patience in crypto! Join the CZARD memecoin movement." />
      </Head>
      
      <header className="w-full py-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-purple-400 drop-shadow-lg">
          CZARD - The Market Mage
        </h1>
        <p className="mt-4 text-lg text-gray-300">The real magic is patience.</p>
      </header>
      
      <main className="flex flex-col items-center space-y-8 px-6">
        <Image 
          src="/czard-wizard.png" 
          alt="CZard the Crypto Wizard" 
          width={300} 
          height={300} 
          className="rounded-xl shadow-lg"
        />
        
        <p className="text-center text-xl max-w-2xl">
          Join CZARD, the master of DeFi sorcery, as he fights off rug pulls, protects HODLers, and boosts market momentum with ancient trading magic!
        </p>
        
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold text-lg">
          Join the Magic
        </Button>
      </main>
      
      <section className="mt-16 text-center max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-purple-400">Tokenomics</h2>
        <p className="text-gray-300 mt-4">
          - Total Supply: 1 Trillion CZARD<br/>
          - Burn Mechanism: 5% per transaction<br/>
          - Rewards for HODLers: 3% Reflection<br/>
          - Anti-Whale System: Max transaction limit enforced
        </p>
      </section>

      <section className="mt-16 text-center max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-purple-400">Roadmap</h2>
        <p className="text-gray-300 mt-4">
          - Phase 1: Community Building & Initial Airdrop<br/>
          - Phase 2: CZARD NFT Collection & DEX Listings<br/>
          - Phase 3: Staking & Utility Development<br/>
          - Phase 4: Mainstream Partnerships & Growth
        </p>
      </section>
      
      <footer className="mt-16 pb-10 text-center text-gray-400">
        <p>Follow us on <a href="#" className="text-purple-400 hover:text-purple-300">Twitter</a> & <a href="#" className="text-purple-400 hover:text-purple-300">Discord</a></p>
        <p className="mt-2">&copy; 2025 CZARD. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
