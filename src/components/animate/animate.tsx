'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Animate({ children }: { children: React.ReactNode }) {
     return (
          <LazyMotion features={domAnimation}>
               <m.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
               >
                    {children}
               </m.div>
          </LazyMotion>
     )
}