import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, User, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

interface SendTipProps {
  onBack: () => void;
  onSuccess: () => void;
}

const SendTip: React.FC<SendTipProps> = ({ onBack, onSuccess }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [transactionId] = useState('TXID123456789ABCDEF');

  const validateForm = () => {
    const isRecipientValid = recipient.trim() !== '';
    const isAmountValid = amount.trim() !== '' && parseFloat(amount) >= 1;
    const isMessageValid = message.trim() !== '';
    
    return isRecipientValid && isAmountValid && isMessageValid;
  };

  const handleSend = async () => {
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

  const handleBackToDashboard = () => {
    setShowSuccess(false);
    onSuccess();
  };

  const getValidationMessage = () => {
    const issues = [];
    
    if (recipient.trim() === '') {
      issues.push('recipient address');
    }
    if (amount.trim() === '' || parseFloat(amount) < 1) {
      issues.push('amount (minimum 1 IKE)');
    }
    if (message.trim() === '') {
      issues.push('gratitude message');
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
              IKE Coin Sent Successfully!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-4 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Recipient:</span>
                    <span className="text-white font-mono text-sm">{recipient.slice(0, 8)}...{recipient.slice(-8)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-green-400 font-bold">{amount} IKE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Visibility:</span>
                    <span className="text-white">{isPublic ? 'Public' : 'Private'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transaction ID:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-mono text-sm">{transactionId.slice(0, 8)}...</span>
                      <ExternalLink className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-500/50 rounded-xl p-4">
                <p className="text-blue-300 text-sm">
                  Your gratitude message has been {isPublic ? 'publicly recorded' : 'privately encrypted'} on the blockchain.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <motion.button
                onClick={handleBackToDashboard}
                className="w-full bg-teal-500 hover:bg-teal-600 p-4 rounded-xl font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Dashboard
              </motion.button>
              
              <motion.button
                className="w-full bg-gray-700 hover:bg-gray-600 p-4 rounded-xl font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View on Blockchain Explorer
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

        {/* Send Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 border border-gray-700 rounded-2xl p-8"
        >
          <h1 className="text-3xl font-bold mb-2">Send IKE Coin</h1>
          <p className="text-gray-400 mb-8">Send IKE Coin with a personal note to show your gratitude.</p>

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
            {/* Recipient */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Recipient <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => {
                  setRecipient(e.target.value);
                  if (showValidation) setShowValidation(false);
                }}
                placeholder="Paste wallet address, URL or name of person you wish to send your appreciation"
                className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                  showValidation && recipient.trim() === ''
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-gray-600 focus:border-teal-500'
                }`}
                disabled={isSubmitting}
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Amount <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    if (showValidation) setShowValidation(false);
                  }}
                  placeholder="Minimum 1 IKE"
                  className={`w-full bg-gray-900 border rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    showValidation && (amount.trim() === '' || parseFloat(amount) < 1)
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-gray-600 focus:border-teal-500'
                  }`}
                  disabled={isSubmitting}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-xs">I</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Minimum amount: 1 IKE</p>
            </div>

            {/* Gratitude Message */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Gratitude Message <span className="text-red-400">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (showValidation) setShowValidation(false);
                }}
                placeholder="Write your message of gratitude..."
                rows={4}
                className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                  showValidation && message.trim() === ''
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-gray-600 focus:border-teal-500'
                }`}
                disabled={isSubmitting}
              />
            </div>

            {/* Public/Private Toggle */}
            <div className="bg-gray-900 border border-gray-600 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Message Visibility</span>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm ${!isPublic ? 'text-white' : 'text-gray-400'}`}>
                    Private
                  </span>
                  <motion.button
                    onClick={() => setIsPublic(!isPublic)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      isPublic ? 'bg-teal-500' : 'bg-gray-600'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full"
                      animate={{ x: isPublic ? 26 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                  <span className={`text-sm ${isPublic ? 'text-white' : 'text-gray-400'}`}>
                    Public
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                {isPublic 
                  ? "Public: Your message and amount will be visible on the blockchain ledger for everyone to see."
                  : "Private: Your message will be encrypted. Only the transaction amount will be visible on the blockchain ledger."
                }
              </p>
            </div>

            {/* Send Button */}
            <motion.button
              onClick={handleSend}
              disabled={isSubmitting}
              className={`w-full p-4 rounded-xl flex items-center justify-center space-x-3 font-medium transition-colors ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-teal-500 hover:bg-teal-600'
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
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send IKE Coin</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SendTip;