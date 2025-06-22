import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Shield, Users, AlertTriangle, CheckCircle, MessageCircle, Star } from 'lucide-react';

interface CommunityGuidelinesProps {
  onBack: () => void;
}

const CommunityGuidelines: React.FC<CommunityGuidelinesProps> = ({ onBack }) => {
  const guidelines = [
    {
      icon: Heart,
      title: 'Lead with Gratitude',
      description: 'Express genuine appreciation and thankfulness in all interactions.',
      rules: [
        'Share authentic gratitude messages',
        'Acknowledge others\' contributions meaningfully',
        'Focus on positive impact and value created',
        'Be specific about what you\'re grateful for'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Respect & Inclusion',
      description: 'Create a welcoming environment for all community members.',
      rules: [
        'Treat everyone with dignity and respect',
        'Embrace diversity of perspectives and backgrounds',
        'Use inclusive language in all communications',
        'Support newcomers and help them feel welcome'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Protect yourself and others in the digital space.',
      rules: [
        'Never share private keys or sensitive wallet information',
        'Report suspicious activity or potential scams',
        'Verify transactions before confirming',
        'Use official channels and verified links only'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'Quality Communication',
      description: 'Maintain high standards for all public messages and interactions.',
      rules: [
        'Keep messages constructive and meaningful',
        'Avoid spam, repetitive, or low-value content',
        'Use appropriate language for all audiences',
        'Fact-check information before sharing'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const prohibitedActivities = [
    'Harassment, bullying, or discriminatory behavior',
    'Spam, excessive self-promotion, or irrelevant content',
    'Sharing false, misleading, or harmful information',
    'Attempting to manipulate IKE Coin prices or markets',
    'Impersonating others or creating fake accounts',
    'Sharing inappropriate, offensive, or illegal content',
    'Attempting to hack, exploit, or abuse the platform',
    'Soliciting private information or conducting scams'
  ];

  const reportingSteps = [
    {
      step: '1',
      title: 'Document the Issue',
      description: 'Take screenshots and note relevant transaction IDs or user addresses'
    },
    {
      step: '2',
      title: 'Contact Support',
      description: 'Reach out through official channels with detailed information'
    },
    {
      step: '3',
      title: 'Follow Up',
      description: 'Provide additional information if requested by the moderation team'
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
          <span>Back to Landing Page</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold">Community Guidelines</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building a positive, safe, and meaningful community for expressing gratitude and supporting excellence
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-teal-300 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            The Gratitude Web exists to create a world where appreciation is tangible and meaningful. 
            Our community guidelines ensure that every interaction contributes to a positive ecosystem 
            where gratitude, excellence, and human connection flourish. Together, we're building more 
            than a platform—we're cultivating a movement of mindful appreciation.
          </p>
        </motion.div>

        {/* Core Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Core Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${guideline.color} rounded-xl flex items-center justify-center`}>
                    <guideline.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{guideline.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-4">{guideline.description}</p>
                
                <ul className="space-y-2">
                  {guideline.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prohibited Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Prohibited Activities</h2>
          <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-300">The following activities are strictly prohibited:</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm text-red-200">{activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reporting Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Reporting Violations</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <p className="text-gray-300 mb-6 text-center">
              If you encounter behavior that violates our community guidelines, please report it immediately. 
              Your reports help us maintain a safe and positive environment for everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reportingSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-900 font-bold">{step.step}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enforcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Enforcement & Consequences</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-yellow-300 mb-4">Progressive Enforcement</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm text-gray-300">First violation: Warning and education</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm text-gray-300">Repeated violations: Temporary restrictions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm text-gray-300">Severe violations: Account suspension or ban</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-green-300 mb-4">Appeals Process</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  If you believe an enforcement action was taken in error, you may appeal the decision 
                  within 30 days. Appeals are reviewed by our community team and decided based on the 
                  evidence and circumstances of each case.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-purple-300">Together We Build Excellence</h3>
            <Star className="h-6 w-6 text-purple-400" />
          </div>
          <p className="text-purple-200 leading-relaxed max-w-3xl mx-auto">
            These guidelines aren't just rules—they're the foundation of our shared values. 
            By following them, you're helping create a space where gratitude flows freely, 
            excellence is recognized, and every member feels valued and respected. 
            Thank you for being part of this meaningful community.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Questions or Concerns?</h3>
          <p className="text-gray-400 mb-6">
            If you have questions about these guidelines or need to report an issue, 
            please don't hesitate to reach out to our community team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="text-teal-400 hover:text-teal-300 px-6 py-3 rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community Discord
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;