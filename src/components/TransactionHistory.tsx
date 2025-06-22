import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowDownLeft, ArrowUpRight, MessageCircle } from 'lucide-react';

interface TransactionHistoryProps {
  onBack: () => void;
}

interface Transaction {
  id: string;
  type: 'received' | 'sent';
  from?: string;
  to?: string;
  amount: number;
  timeAgo: string;
  hasMessage: boolean;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'received' | 'sent'>('received');

  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'received',
      from: 'artist.algo',
      amount: 100,
      timeAgo: '3 days ago',
      hasMessage: true
    },
    {
      id: '2',
      type: 'received',
      from: 'grace.algo',
      amount: 25,
      timeAgo: '6 days ago',
      hasMessage: true
    },
    {
      id: '3',
      type: 'received',
      from: 'mentor.algo',
      amount: 500,
      timeAgo: '7 days ago',
      hasMessage: true
    }
  ];

  const filteredTransactions = transactions.filter(tx => tx.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
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
          <h1 className="text-4xl font-bold mb-4">Transaction History</h1>
          <p className="text-gray-400">Review your past IKE coin transactions.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 border border-gray-700 rounded-2xl p-2 mb-8"
        >
          <div className="grid grid-cols-2 gap-2">
            <motion.button
              onClick={() => setActiveTab('received')}
              className={`p-4 rounded-xl font-medium transition-colors ${
                activeTab === 'received'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Received
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('sent')}
              className={`p-4 rounded-xl font-medium transition-colors ${
                activeTab === 'sent'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sent
            </motion.button>
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
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  {transaction.type === 'received' ? (
                    <ArrowDownLeft className="h-6 w-6 text-white" />
                  ) : (
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  )}
                </div>
                <div>
                  <div className="font-medium">
                    From: {transaction.from || transaction.to}
                  </div>
                  <div className="text-sm text-gray-400">{transaction.timeAgo}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-400 font-bold">
                      +{transaction.amount}
                    </span>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-xs">I</span>
                    </div>
                  </div>
                </div>
                
                {transaction.hasMessage && (
                  <motion.button
                    className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Message
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {activeTab === 'sent' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No sent transactions yet.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;