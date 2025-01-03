import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserProvider } from 'ethers'; // Updated import for ethers v6
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownNotification from './DropdownNotification';

const Header = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress(); // Fetch the connected wallet address
        setWalletAddress(address);
      } catch (err) {
        console.error('Error connecting wallet:', err);
      }
    } else {
      alert('Please install a web3 wallet like MetaMask!');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/"
              className="text-lg font-medium text-bodydark hover:text-primary dark:text-bodydark2 dark:hover:text-primary"
            >
              USAi Nation
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="text-lg font-medium text-bodydark hover:text-primary dark:text-bodydark2 dark:hover:text-primary"
            >
              Calendar
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <DarkModeSwitcher />
          <DropdownNotification />

          {walletAddress ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-bodydark dark:text-bodydark2">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={disconnectWallet}
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
