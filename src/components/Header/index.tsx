// src/components/Header.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { BrowserProvider } from 'ethers';


const Header = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (err) {
        console.error('Error connecting wallet:', err);
      }
    } else {
      alert('Please install a web3 wallet like MetaMask!');
    }
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Existing elements like logo, etc. */}
      <nav className="space-x-4">
        <Link to="/" className="text-white">Home</Link> {/* Home Link */}
        <Link to="/agents" className="text-white">Agents</Link> {/* Link to AgentsPage */}
        {/* Add other links here */}
      </nav>
      {/* Wallet Connection Button */}
      <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
