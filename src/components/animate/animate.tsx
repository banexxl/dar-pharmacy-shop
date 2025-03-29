'use client'

import { motion } from 'framer-motion'

export default function Animate({ children }: { children: React.ReactNode }) {
     return (
          <motion.div
               layout // <-- helps preserve layout across animated components
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
          >
               {children}
          </motion.div>
     )
}