import React from 'react';
import { motion } from 'framer-motion';
import { Send, Download, BarChart3, BookOpen, Heart, Link, Users } from 'lucide-react';
import { Screen } from '../App';

interface DashboardProps {
  balance: number;
  onNavigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ balance, onNavigate }) => {
  const recentActivity = [
    { type: 'received', from: 'alice.algo', amount: 50, timeAgo: '2 hours ago' },
    { type: 'sent', to: 'bob.algo', amount: 25, timeAgo: '1 day ago' },
    { type: 'received', from: 'charlie.algo', amount: 75, timeAgo: '2 days ago' },
    { type: 'sent', to: 'diana.algo', amount: 100, timeAgo: '3 days ago' },
    { type: 'received', from: 'eve.algo', amount: 30, timeAgo: '5 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-center"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome, ike.algo!</h1>
          <p className="text-blue-100 mb-6">Your IKE Coin Wallet</p>
          <div className="text-5xl font-bold mb-4">
            {balance.toLocaleString()} IKE
          </div>
          <p className="text-blue-100 text-sm">
            Keep the gratitude flowing! Share the love with amazing creators and service providers.
          </p>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <motion.button
            onClick={() => onNavigate('send')}
            className="bg-green-500 hover:bg-green-600 p-6 rounded-2xl text-center flex flex-col items-center justify-center transition-colors group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="h-8 w-8 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Send IKE</span>
          </motion.button>

          <motion.button
            onClick={() => onNavigate('receive')}
            className="bg-gray-800 hover:bg-gray-700 border border-gray-600 p-6 rounded-2xl text-center flex flex-col items-center justify-center transition-colors group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-8 w-8 mb-3 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
            <span className="font-bold">Receive</span>
          </motion.button>

          <motion.button
            onClick={() => onNavigate('gratitude-ledger')}
            className="bg-gray-800 hover:bg-gray-700 border border-gray-600 p-6 rounded-2xl text-center flex flex-col items-center justify-center transition-colors group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <BookOpen className="h-8 w-8 mb-3 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
            <span className="font-bold text-sm">Gratitude Ledger</span>
          </motion.button>

          <motion.button
            onClick={() => onNavigate('memorial')}
            className="bg-gray-800 hover:bg-gray-700 border border-gray-600 p-6 rounded-2xl text-center flex flex-col items-center justify-center transition-colors group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart className="h-8 w-8 mb-3 text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all" />
            <span className="font-bold text-sm">Memorial</span>
          </motion.button>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Activity</h2>
              <motion.button
                onClick={() => onNavigate('history')}
                className="text-teal-400 hover:text-teal-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                View All
              </motion.button>
            </div>
            
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gray-900 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'received' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {activity.type === 'received' ? (
                        <Download className="h-5 w-5 text-white" />
                      ) : (
                        <Send className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {activity.type === 'received' ? 'Received from' : 'Sent to'} {activity.from || activity.to}
                      </p>
                      <p className="text-xs text-gray-400">{activity.timeAgo}</p>
                    </div>
                  </div>
                  <div className={`font-bold text-sm ${
                    activity.type === 'received' ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {activity.type === 'received' ? '+' : '-'}{activity.amount} IKE
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold mb-6">Tools & Features</h2>
            
            <div className="space-y-4">
              <motion.button
                onClick={() => onNavigate('receive')}
                className="w-full bg-gray-900 hover:bg-gray-750 border border-gray-600 p-4 rounded-xl flex items-center space-x-3 transition-colors text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="font-medium">Promissory Links</div>
                  <div className="text-sm text-gray-400">Create claimable IKE links</div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => onNavigate('ledger')}
                className="w-full bg-gray-900 hover:bg-gray-750 border border-gray-600 p-4 rounded-xl flex items-center space-x-3 transition-colors text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BarChart3 className="h-5 w-5 text-teal-400" />
                <div>
                  <div className="font-medium">Personal Ledger</div>
                  <div className="text-sm text-gray-400">Your transaction history</div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => onNavigate('account')}
                className="w-full bg-gray-900 hover:bg-gray-750 border border-gray-600 p-4 rounded-xl flex items-center space-x-3 transition-colors text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Users className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="font-medium">Account Settings</div>
                  <div className="text-sm text-gray-400">Manage your profile</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Inspiration Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 text-center"
        >
          <blockquote className="text-lg italic text-gray-300 mb-4">
            "Gratitude is not only the greatest of virtues, but the parent of all others."
          </blockquote>
          <footer className="text-sm text-gray-400">— Cicero</footer>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;