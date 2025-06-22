import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, QrCode, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface ReceiveIKEProps {
  onBack: () => void;
}

const ReceiveIKE: React.FC<ReceiveIKEProps> = ({ onBack }) => {
  const [recipientName, setRecipientName] = useState('');
  const [amount, setAmount] = useState('100');
  const [reasonForGratitude, setReasonForGratitude] = useState('Artistic Creation');
  const [message, setMessage] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedLink] = useState('https://ikecoin.app/claim/abc123def456');
  const userBalance = 1985;

  const gratitudeReasons = [
    'Artistic Creation',
    'Teaching & Education',
    'Community Service',
    'Innovation & Technology',
    'Environmental Impact',
    'Healthcare & Wellness',
    'Mentorship & Guidance',
    'Creative Writing',
    'Music & Performance',
    'Acts of Kindness',
    'Other'
  ];

  const validateForm = () => {
    const isRecipientValid = recipientName.trim() !== '';
    const isAmountValid = amount.trim() !== '' && parseFloat(amount) >= 1;
    const isMessageValid = message.trim() !== '';
    
    return isRecipientValid && isAmountValid && isMessageValid;
  };

  const handleCreateLink = async () => {
    if (!validateForm()) {
      setShowValidation(true);
      return;
    }
    
    setIsCreating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsCreating(false);
      setShowSuccess(true);
    }, 2000);
  };

  const getValidationMessage = () => {
    const issues = [];
    
    if (recipientName.trim() === '') {
      issues.push('recipient name/identifier');
    }
    if (amount.trim() === '' || parseFloat(amount) < 1) {
      issues.push('amount (minimum 1 IKE)');
    }
    if (message.trim() === '') {
      issues.push('personal message');
    }
    
    return `Please provide: ${issues.join(', ')}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedLink);
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
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-4 text-green-400"
            >
              Promissory Link Created!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 mb-8"
            >
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-left space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Recipient:</span>
                    <span className="text-white">{recipientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-green-400 font-bold">{amount} IKE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reason:</span>
                    <span className="text-white">{reasonForGratitude}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Visibility:</span>
                    <span className="text-white">{isPublic ? 'Public' : 'Private'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="text-yellow-300 font-medium mb-2">How It Works</p>
                    <p className="text-yellow-200 text-sm">
                      Create a link that holds IKE in escrow. When a recipient clicks it 
                      and connects their wallet, they'll receive the coins and your 
                      message. Perfect for when you don't know their wallet address!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-600 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <p className="text-sm text-gray-400 mb-1">Share this link:</p>
                    <p className="text-white font-mono text-sm break-all">{generatedLink}</p>
                  </div>
                  <motion.button
                    onClick={handleCopyLink}
                    className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Copy className="h-4 w-4" />
                  </motion.button>
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
                className="w-full bg-teal-500 hover:bg-teal-600 p-4 rounded-xl font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Dashboard
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </motion.button>

        {/* Create Link Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4">Promissory Gratitude Link</h1>
            <p className="text-gray-400">
              Create a link for someone to claim IKE Coins.
            </p>
          </div>

          {/* How It Works Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-yellow-500/20 border border-yellow-500/50 rounded-xl p-4"
          >
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-300 font-medium mb-2">How It Works</p>
                <p className="text-yellow-200 text-sm">
                  Create a link that holds IKE in escrow. When a recipient clicks it 
                  and connects their wallet, they'll receive the coins and your 
                  message. Perfect for when you don't know their wallet address!
                </p>
              </div>
            </div>
          </motion.div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Enter Details</h2>
              <p className="text-gray-400">
                The amount will be reserved from your balance until the link is claimed.
              </p>
            </div>

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
              {/* Recipient Name */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Recipient Name, Web URL or Identifier <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => {
                    setRecipientName(e.target.value);
                    if (showValidation) setShowValidation(false);
                  }}
                  placeholder="e.g. John Smith or excellent-person.com, etc."
                  className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    showValidation && recipientName.trim() === ''
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-gray-600 focus:border-teal-500'
                  }`}
                  disabled={isCreating}
                />
              </div>

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
                  placeholder="100"
                  className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    showValidation && (amount.trim() === '' || parseFloat(amount) < 1)
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-gray-600 focus:border-teal-500'
                  }`}
                  disabled={isCreating}
                />
                <p className="text-sm text-gray-400 mt-2">Your balance: {userBalance.toLocaleString()} IKE</p>
              </div>

              {/* Reason for Gratitude */}
              <div>
                <label className="block text-sm font-medium mb-3">Reason for Gratitude</label>
                <select
                  value={reasonForGratitude}
                  onChange={(e) => setReasonForGratitude(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  disabled={isCreating}
                >
                  {gratitudeReasons.map((reason) => (
                    <option key={reason} value={reason} className="bg-gray-900">
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Message */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Personal Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (showValidation) setShowValidation(false);
                  }}
                  placeholder="Write your message of appreciation..."
                  rows={4}
                  className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                    showValidation && message.trim() === ''
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-gray-600 focus:border-teal-500'
                  }`}
                  disabled={isCreating}
                />
              </div>

              {/* Message Visibility */}
              <div className="bg-gray-900 border border-gray-600 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Message Visibility: {isPublic ? 'Public' : 'Private'}</span>
                  <motion.button
                    onClick={() => setIsPublic(!isPublic)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      isPublic ? 'bg-teal-500' : 'bg-gray-600'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    disabled={isCreating}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full"
                      animate={{ x: isPublic ? 26 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
                <p className="text-sm text-gray-400">
                  If public, the message will be visible on the ledger after the recipient claims the IKE.
                </p>
              </div>

              {/* Create Button */}
              <motion.button
                onClick={handleCreateLink}
                disabled={isCreating}
                className={`w-full p-4 rounded-xl flex items-center justify-center space-x-3 font-medium transition-colors ${
                  isCreating 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                }`}
                whileHover={!isCreating ? { scale: 1.02 } : {}}
                whileTap={!isCreating ? { scale: 0.98 } : {}}
              >
                {isCreating ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="text-white">Creating...</span>
                  </>
                ) : (
                  <span className="font-bold">Create Promissory Link</span>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReceiveIKE;