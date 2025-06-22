import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowDownLeft, ArrowUpRight, Eye, EyeOff, ExternalLink, Filter } from 'lucide-react';

interface LedgerProps {
  onBack: () => void;
}

interface LedgerTransaction {
  id: string;
  type: 'received' | 'sent';
  from?: string;
  to?: string;
  amount: number;
  timestamp: string;
  message: string;
  isPublic: boolean;
  txHash: string;
  blockHeight: number;
}

const Ledger: React.FC<LedgerProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<'all' | 'sent' | 'received'>('all');
  const [showPrivateMessages, setShowPrivateMessages] = useState(false);

  const transactions: LedgerTransaction[] = [
    {
      id: '1',
      type: 'received',
      from: 'artist.algo',
      amount: 150,
      timestamp: '2025-01-15 14:30:22',
      message: 'Thank you for the beautiful artwork! Your creativity inspires me every day.',
      isPublic: true,
      txHash: 'ABC123DEF456GHI789',
      blockHeight: 1234567
    },
    {
      id: '2',
      type: 'sent',
      to: 'teacher.algo',
      amount: 75,
      timestamp: '2025-01-14 09:15:45',
      message: 'Grateful for your patience and wisdom in helping me learn.',
      isPublic: false,
      txHash: 'XYZ789ABC123DEF456',
      blockHeight: 1234520
    },
    {
      id: '3',
      type: 'received',
      from: 'mentor.algo',
      amount: 300,
      timestamp: '2025-01-13 16:45:12',
      message: 'Your guidance has been invaluable to my growth. Thank you!',
      isPublic: true,
      txHash: 'DEF456GHI789JKL012',
      blockHeight: 1234489
    },
    {
      id: '4',
      type: 'sent',
      to: 'volunteer.algo',
      amount: 50,
      timestamp: '2025-01-12 11:20:33',
      message: 'Thank you for your selfless service to the community.',
      isPublic: true,
      txHash: 'GHI789JKL012MNO345',
      blockHeight: 1234445
    },
    {
      id: '5',
      type: 'received',
      from: 'friend.algo',
      amount: 25,
      timestamp: '2025-01-11 19:55:07',
      message: 'Just wanted to show appreciation for being such a great friend!',
      isPublic: false,
      txHash: 'JKL012MNO345PQR678',
      blockHeight: 1234401
    }
  ];

  const filteredTransactions = transactions.filter(tx => {
    if (filter === 'all') return true;
    return tx.type === filter;
  });

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatTxHash = (hash: string) => {
    return `${hash.slice(0, 8)}...${hash.slice(-8)}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blockchain Ledger</h1>
          <p className="text-gray-400">Complete transaction history on the IKE Coin blockchain</p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Filter Tabs */}
            <div className="flex items-center space-x-2 bg-gray-900 rounded-xl p-2">
              {(['all', 'sent', 'received'] as const).map((filterType) => (
                <motion.button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                    filter === filterType
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filterType}
                </motion.button>
              ))}
            </div>

            {/* Privacy Toggle */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400">Show Private Messages</span>
              <motion.button
                onClick={() => setShowPrivateMessages(!showPrivateMessages)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  showPrivateMessages ? 'bg-teal-500' : 'bg-gray-600'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full"
                  animate={{ x: showPrivateMessages ? 26 : 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Transaction List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Left side - Transaction info */}
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    transaction.type === 'received' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {transaction.type === 'received' ? (
                      <ArrowDownLeft className="h-6 w-6 text-white" />
                    ) : (
                      <ArrowUpRight className="h-6 w-6 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium">
                        {transaction.type === 'received' ? 'From:' : 'To:'} {formatAddress(transaction.from || transaction.to || '')}
                      </span>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.isPublic 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-600/50 text-gray-300'
                      }`}>
                        {transaction.isPublic ? 'Public' : 'Private'}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-3">
                      {transaction.timestamp} • Block #{transaction.blockHeight.toLocaleString()}
                    </div>

                    {/* Message */}
                    <div className="bg-gray-900 rounded-xl p-4 mb-3">
                      {transaction.isPublic || showPrivateMessages ? (
                        <p className="text-gray-300 text-sm leading-relaxed">
                          "{transaction.message}"
                        </p>
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-500">
                          <EyeOff className="h-4 w-4" />
                          <span className="text-sm">Private message (encrypted)</span>
                        </div>
                      )}
                    </div>

                    {/* Transaction Hash */}
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>TX:</span>
                      <span className="font-mono">{formatTxHash(transaction.txHash)}</span>
                      <motion.button
                        className="hover:text-gray-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Right side - Amount */}
                <div className="text-right lg:text-left lg:min-w-[120px]">
                  <div className="flex items-center justify-end lg:justify-start space-x-2">
                    <span className={`text-2xl font-bold ${
                      transaction.type === 'received' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {transaction.type === 'received' ? '+' : '-'}{transaction.amount}
                    </span>
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-xs">I</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {transactions.filter(tx => tx.type === 'received').reduce((sum, tx) => sum + tx.amount, 0)}
            </div>
            <div className="text-gray-400">Total Received</div>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {transactions.filter(tx => tx.type === 'sent').reduce((sum, tx) => sum + tx.amount, 0)}
            </div>
            <div className="text-gray-400">Total Sent</div>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">
              {transactions.length}
            </div>
            <div className="text-gray-400">Total Transactions</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ledger;