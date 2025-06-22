import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SendTip from './components/SendTip';
import ReceiveIKE from './components/ReceiveIKE';
import TransactionHistory from './components/TransactionHistory';
import Account from './components/Account';
import LandingPage from './components/LandingPage';
import Ledger from './components/Ledger';
import GratitudeLedger from './components/GratitudeLedger';
import Memorial from './components/Memorial';

export type Screen = 'landing' | 'dashboard' | 'send' | 'receive' | 'history' | 'account' | 'ledger' | 'gratitude-ledger' | 'memorial';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [userBalance] = useState(1985);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onGetStarted={() => navigateToScreen('dashboard')} />;
      case 'dashboard':
        return <Dashboard balance={userBalance} onNavigate={navigateToScreen} />;
      case 'send':
        return <SendTip onBack={() => navigateToScreen('dashboard')} onSuccess={() => navigateToScreen('dashboard')} />;
      case 'receive':
        return <ReceiveIKE onBack={() => navigateToScreen('dashboard')} />;
      case 'history':
        return <TransactionHistory onBack={() => navigateToScreen('dashboard')} />;
      case 'account':
        return <Account onBack={() => navigateToScreen('dashboard')} />;
      case 'ledger':
        return <Ledger onBack={() => navigateToScreen('dashboard')} />;
      case 'gratitude-ledger':
        return <GratitudeLedger onBack={() => navigateToScreen('dashboard')} />;
      case 'memorial':
        return <Memorial onBack={() => navigateToScreen('dashboard')} />;
      default:
        return <Dashboard balance={userBalance} onNavigate={navigateToScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {currentScreen !== 'landing' && (
        <Header onNavigate={navigateToScreen} />
      )}
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentScreen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={currentScreen === 'landing' ? '' : 'pt-20'}
        >
          {renderScreen()}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;