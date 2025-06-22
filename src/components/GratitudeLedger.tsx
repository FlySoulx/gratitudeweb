import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, Heart, ExternalLink, MessageCircle, Trophy, Zap } from 'lucide-react';

interface GratitudeLedgerProps {
  onBack: () => void;
}

interface LedgerEntry {
  id: string;
  type: 'tip' | 'promissory_claimed' | 'memorial' | 'promissory_created';
  from: string;
  to?: string;
  amount: number;
  timestamp: string;
  message: string;
  isPublic: boolean;
  category: string;
  amplifications?: number;
  isHackathonProject?: boolean;
}

const GratitudeLedger: React.FC<GratitudeLedgerProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'tips' | 'promissory' | 'memorial'>('all');

  const ledgerEntries: LedgerEntry[] = [
    {
      id: '1',
      type: 'promissory_claimed',
      from: 'janesmith.algo',
      to: 'a-friend.algo',
      amount: 500,
      timestamp: 'June 22, 2025, 10:30 AM',
      message: 'A friend sent me this. What a lovely surprise!',
      isPublic: true,
      category: 'Kindness/Thoughtfulness'
    },
    {
      id: '2',
      type: 'memorial',
      from: 'kind-stranger.algo',
      amount: 10,
      timestamp: 'June 22, 2025, 9:15 AM',
      message: 'In memory of my grandmother who taught me the power of gratitude',
      isPublic: false,
      category: 'Memorial'
    },
    {
      id: '3',
      type: 'tip',
      from: 'secret-admirer.algo',
      to: '@helpful-dev',
      amount: 200,
      timestamp: 'June 21, 2025, 8:00 PM',
      message: 'Your open source contributions have saved me countless hours. Thank you!',
      isPublic: false,
      category: 'Innovation & Technology'
    },
    {
      id: '4',
      type: 'promissory_created',
      from: 'janesmith.algo',
      to: 'a-friend.com',
      amount: 500,
      timestamp: 'June 21, 2025, 7:45 PM',
      message: 'Thank you for being such an amazing friend and always being there for me.',
      isPublic: true,
      category: 'Kindness/Thoughtfulness'
    },
    {
      id: '5',
      type: 'tip',
      from: 'user.algo',
      to: 'helpful-tutorial.com',
      amount: 100,
      timestamp: 'June 21, 2025, 4:30 PM',
      message: 'This tutorial saved me hours of frustration. Thank you!',
      isPublic: true,
      category: 'Teaching & Education',
      amplifications: 9,
      isHackathonProject: true
    },
    {
      id: '6',
      type: 'tip',
      from: 'another-user.algo',
      to: 'local-cafe.com',
      amount: 25,
      timestamp: 'June 21, 2025, 2:15 PM',
      message: 'Best coffee and friendliest staff in town! Made my day.',
      isPublic: true,
      category: 'Great Service',
      amplifications: 2
    }
  ];

  const hackathonProjects = [
    { name: 'Project Phoenix', amount: 12500 },
    { name: 'The Artful Dodger', amount: 9800 },
    { name: 'Code for a Cause', amount: 7200 }
  ];

  const filteredEntries = ledgerEntries.filter(entry => {
    const matchesSearch = searchTerm === '' || 
      entry.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (entry.to && entry.to.toLowerCase().includes(searchTerm.toLowerCase())) ||
      entry.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterType === 'all' || 
      (filterType === 'tips' && entry.type === 'tip') ||
      (filterType === 'promissory' && (entry.type === 'promissory_claimed' || entry.type === 'promissory_created')) ||
      (filterType === 'memorial' && entry.type === 'memorial');

    return matchesSearch && matchesFilter;
  });

  const getEntryIcon = (type: string) => {
    switch (type) {
      case 'tip':
        return <Heart className="h-5 w-5" />;
      case 'promissory_claimed':
      case 'promissory_created':
        return <Zap className="h-5 w-5" />;
      case 'memorial':
        return <Heart className="h-5 w-5" />;
      default:
        return <Heart className="h-5 w-5" />;
    }
  };

  const getEntryColor = (type: string) => {
    switch (type) {
      case 'tip':
        return 'bg-blue-500';
      case 'promissory_claimed':
        return 'bg-green-500';
      case 'promissory_created':
        return 'bg-yellow-500';
      case 'memorial':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getEntryLabel = (type: string) => {
    switch (type) {
      case 'tip':
        return 'Direct Tip';
      case 'promissory_claimed':
        return 'Promissory Claimed';
      case 'promissory_created':
        return 'Promissory Link Sent';
      case 'memorial':
        return 'Memorial Contribution';
      default:
        return 'Transaction';
    }
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
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">I</span>
            </div>
            <h1 className="text-4xl font-bold">Gratitude Ledger</h1>
          </div>
          <p className="text-gray-400 text-lg">A live feed of gratitude flowing through the IKE Coin ecosystem</p>
        </motion.div>

        {/* Hackathon Pool */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="h-6 w-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-yellow-300">Hackathon Gratitude Pool</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hackathonProjects.map((project, index) => (
              <div key={project.name} className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300">#{index + 1} {project.name}</span>
                  <span className="text-yellow-400 font-bold">{project.amount.toLocaleString()} IKE</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by URL, address, or .algo name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="bg-gray-900 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
              >
                <option value="all">All Transactions</option>
                <option value="tips">Direct Tips</option>
                <option value="promissory">Promissory Links</option>
                <option value="memorial">Memorial</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Ledger Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                {/* Left side - Transaction details */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 ${getEntryColor(entry.type)} rounded-full flex items-center justify-center`}>
                      {getEntryIcon(entry.type)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-300">{getEntryLabel(entry.type)}</span>
                        {entry.isHackathonProject && (
                          <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                            Hackathon Project
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{entry.timestamp}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-white mb-2">
                      <span className="font-semibold text-teal-400">{entry.from}</span>
                      {entry.type === 'tip' && entry.to && (
                        <>
                          <span className="text-gray-400"> tipped </span>
                          <span className="font-semibold text-teal-400">{entry.to}</span>
                        </>
                      )}
                      {entry.type === 'promissory_claimed' && entry.to && (
                        <>
                          <span className="text-gray-400"> → </span>
                          <span className="font-semibold text-teal-400">{entry.to}</span>
                          <span className="text-gray-400"> claimed promissory link</span>
                        </>
                      )}
                      {entry.type === 'promissory_created' && entry.to && (
                        <>
                          <span className="text-gray-400"> created promissory link for </span>
                          <span className="font-semibold text-teal-400">{entry.to}</span>
                        </>
                      )}
                      {entry.type === 'memorial' && (
                        <span className="text-gray-400"> made a memorial contribution</span>
                      )}
                    </p>

                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-green-400">{entry.amount} IKE</span>
                      <span className="text-sm text-gray-400">• {entry.category}</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="bg-gray-900 rounded-xl p-4 mb-4">
                    {entry.isPublic ? (
                      <p className="text-gray-300 italic">"{entry.message}"</p>
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">This message is private.</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4">
                    {entry.amplifications && (
                      <motion.button
                        className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Zap className="h-4 w-4" />
                        <span>Amplify ({entry.amplifications})</span>
                      </motion.button>
                    )}
                    
                    <motion.button
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View on Explorer</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-gray-800 hover:bg-gray-700 border border-gray-600 px-8 py-4 rounded-xl font-medium transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Load More Entries
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GratitudeLedger;