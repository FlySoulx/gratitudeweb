import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, Mail, Twitter, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Roadmap', href: '#roadmap' }
    ],
    Community: [
      { name: 'Discord', href: '#', external: true },
      { name: 'Telegram', href: '#', external: true },
      { name: 'Blog', href: '#', external: true },
      { name: 'Newsletter', href: '#newsletter' }
    ],
    Resources: [
      { name: 'Documentation', href: '#', external: true },
      { name: 'API Reference', href: '#', external: true },
      { name: 'Help Center', href: '#support' },
      { name: 'Contact Us', href: '#contact' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Security', href: '#security' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Mail, href: '#', name: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Heart className="h-10 w-10 text-primary-400 fill-current" />
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Coins className="h-5 w-5 text-gratitude-400" />
                  </motion.div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Gratitude Web</div>
                  <div className="text-sm text-primary-400 font-medium">Powered by IKE Coin</div>
                </div>
              </motion.div>
              
              <motion.p
                className="text-gray-300 mb-8 max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Transform your daily gratitude practice into meaningful rewards. 
                Join thousands of users building mindful habits while earning IKE Coins.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                        whileHover={{ x: 2 }}
                      >
                        <span>{link.name}</span>
                        {link.external && (
                          <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        )}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest updates on IKE Coin, new features, and community highlights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
              />
              <motion.button
                className="bg-gradient-to-r from-primary-600 to-gratitude-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="py-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm">
            © 2025 Gratitude Web. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-gray-400">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span className="text-gray-400">for mindful living</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;