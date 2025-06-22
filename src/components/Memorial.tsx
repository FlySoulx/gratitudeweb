import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface MemorialProps {
  onBack: () => void;
}

const Memorial: React.FC<MemorialProps> = ({ onBack }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const memorialStats = {
    totalBalance: 42101.37,
    totalContributions: 1985,
    recentContributions: [
      { amount: 10, contributor: 'kind-stranger.algo', timeAgo: '2 hours ago' },
      { amount: 25, contributor: 'grateful-heart.algo', timeAgo: '5 hours ago' },
      { amount: 50, contributor: 'memory-keeper.algo', timeAgo: '1 day ago' },
      { amount: 15, contributor: 'loving-daughter.algo', timeAgo: '2 days ago' },
      { amount: 100, contributor: 'thankful-son.algo', timeAgo: '3 days ago' }
    ]
  };

  const validateForm = () => {
    const isAmountValid = amount.trim() !== '' && parseFloat(amount) >= 1;
    const isMessageValid = message.trim() !== '';
    
    return isAmountValid && isMessageValid;
  };

  const handleContribute = async () => {
    if (!validateForm()) {
      setShowValidation(true);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const getValidationMessage = () => {
    const issues = [];
    
    if (amount.trim() === '' || parseFloat(amount) < 1) {
      issues.push('amount (minimum 1 IKE)');
    }
    if (message.trim() === '') {
      issues.push('personal reflection');
    }
    
    return `Please provide: ${issues.join(', ')}`;
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="h-10 w-10 text-white fill-current" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-4 text-purple-400"
            >
              Memorial Contribution Sent
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 mb-8"
            >
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="text-left space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contribution Amount:</span>
                    <span className="text-purple-400 font-bold">{amount} IKE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">New Memorial Balance:</span>
                    <span className="text-white font-bold">{(memorialStats.totalBalance + parseFloat(amount)).toLocaleString()} IKE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Contributors:</span>
                    <span className="text-white">{(memorialStats.totalContributions + 1).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 border border-purple-500/50 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5 fill-current" />
                  <div className="text-left">
                    <p className="text-purple-300 font-medium mb-2">Your Gratitude Lives On</p>
                    <p className="text-purple-200 text-sm">
                      Your contribution has been permanently recorded on the blockchain. 
                      Your personal reflection remains private, but your act of remembrance 
                      is now part of the eternal record of human gratitude.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <motion.button
                onClick={onBack}
                className="w-full bg-purple-500 hover:bg-purple-600 p-4 rounded-xl font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Return to Dashboard
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="h-10 w-10 text-purple-400 fill-current" />
            <h1 className="text-4xl font-bold">IKE Coin Memorial Well</h1>
          </div>
          <p className="text-gray-400 text-lg">A sacred space to honor those who are no longer with us</p>
        </motion.div>

        {/* Purpose Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-purple-500/20 border border-purple-500/30 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start space-x-4">
            <Info className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-purple-300 mb-3">Purpose of the Memorial Well</h2>
              <p className="text-purple-200 leading-relaxed">
                The Memorial Well is a sacred space to honor those who are no longer with us. 
                Your contribution amount will be publicly visible on the Gratitude Ledger, 
                but your personal reflection will always remain private. Each contribution 
                becomes part of an eternal record of love, remembrance, and gratitude.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contribution Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send to Memorial Well</h2>

            {/* Validation Notice */}
            {showValidation && !validateForm() && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6 flex items-start space-x-3"
              >
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 font-medium mb-1">Required Information Missing</p>
                  <p className="text-red-300 text-sm">{getValidationMessage()}</p>
                </div>
              </motion.div>
            )}

            <div className="space-y-6">
              {/* Amount */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Amount (IKE) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    if (showValidation) setShowValidation(false);
                  }}
                  placeholder="1"
                  className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    showValidation && (amount.trim() === '' || parseFloat(amount) < 1)
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-gray-600 focus:border-purple-500'
                  }`}
                  disabled={isSubmitting}
                />
                <p className="text-sm text-gray-400 mt-2">Minimum contribution: 1 IKE</p>
              </div>

              {/* Personal Reflection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Personal Reflection (Private) <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (showValidation) setShowValidation(false);
                  }}
                  placeholder="This reflection is for you... Share your memories, gratitude, or thoughts about those you wish to honor."
                  rows={4}
                  className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                    showValidation && message.trim() === ''
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-gray-600 focus:border-purple-500'
                  }`}
                  disabled={isSubmitting}
                />
                <p className="text-sm text-gray-400 mt-2">
                  Your reflection will remain completely private and encrypted.
                </p>
              </div>

              {/* Contribute Button */}
              <motion.button
                onClick={handleContribute}
                disabled={isSubmitting}
                className={`w-full p-4 rounded-xl flex items-center justify-center space-x-3 font-medium transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-purple-500 hover:bg-purple-600'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Contributing...</span>
                  </>
                ) : (
                  <>
                    <Heart className="h-5 w-5 fill-current" />
                    <span>Contribute to the Well</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Memorial Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Current Balance */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-bold text-purple-300 mb-4">Current Well Balance</h3>
              <div className="text-4xl font-bold text-white mb-2">
                {memorialStats.totalBalance.toLocaleString()} 
                <span className="text-2xl text-purple-400 ml-2">IKE</span>
              </div>
              <p className="text-sm text-purple-200">
                From {memorialStats.totalContributions.toLocaleString()} acts of remembrance
              </p>
            </div>

            {/* Recent Contributions */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Recent Contributions</h3>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {memorialStats.recentContributions.map((contribution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gray-900 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-white fill-current" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{contribution.contributor}</p>
                        <p className="text-xs text-gray-400">{contribution.timeAgo}</p>
                      </div>
                    </div>
                    <div className="text-purple-400 font-bold">
                      {contribution.amount} IKE
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Memorial Quote */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <blockquote className="text-center">
                <p className="text-gray-300 italic mb-4">
                  "Gratitude is not only the greatest of virtues, but the parent of all others."
                </p>
                <footer className="text-sm text-gray-400">— Cicero</footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Memorial;