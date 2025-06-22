import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Wallet, Settings, Shield, Bell, LogOut, Copy, Check } from 'lucide-react';

interface AccountProps {
  onBack: () => void;
}

const Account: React.FC<AccountProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const walletAddress = 'IKEALGO123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const displayAddress = `${walletAddress.slice(0, 8)}...${walletAddress.slice(-8)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accountSections = [
    {
      title: 'Profile',
      icon: User,
      items: [
        { label: 'Username', value: 'ike.algo' },
        { label: 'Email', value: 'user@example.com' },
        { label: 'Member Since', value: 'January 2025' }
      ]
    },
    {
      title: 'Wallet',
      icon: Wallet,
      items: [
        { label: 'Address', value: displayAddress, copyable: true },
        { label: 'Balance', value: '1,985 IKE' },
        { label: 'Network', value: 'Algorand Mainnet' }
      ]
    },
    {
      title: 'Preferences',
      icon: Settings,
      items: [
        { label: 'Language', value: 'English' },
        { label: 'Currency', value: 'USD' },
        { label: 'Theme', value: 'Dark' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { label: 'Two-Factor Auth', value: 'Enabled' },
        { label: 'Last Login', value: '2 hours ago' },
        { label: 'Active Sessions', value: '1 device' }
      ]
    }
  ];

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
          <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Account Settings</h1>
          <p className="text-gray-400">Manage your IKE Coin account and preferences</p>
        </motion.div>

        {/* Account Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {accountSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * sectionIndex }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center">
                  <section.icon className="h-5 w-5 text-teal-400" />
                </div>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-gray-400">{item.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{item.value}</span>
                      {item.copyable && (
                        <motion.button
                          onClick={handleCopyAddress}
                          className="p-1 hover:bg-gray-700 rounded transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-400" />
                          )}
                        </motion.button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <motion.button
            className="bg-gray-800 border border-gray-700 hover:bg-gray-750 p-4 rounded-xl flex items-center justify-center space-x-3 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="font-medium">Notification Settings</span>
          </motion.button>

          <motion.button
            className="bg-red-600 hover:bg-red-700 p-4 rounded-xl flex items-center justify-center space-x-3 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sign Out</span>
          </motion.button>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 p-6 bg-gray-800/50 border border-gray-700 rounded-2xl"
        >
          <h3 className="text-lg font-bold mb-2">Need Help?</h3>
          <p className="text-gray-400 mb-4">
            Contact our support team or visit our documentation for assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="text-teal-400 hover:text-teal-300 px-6 py-2 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;