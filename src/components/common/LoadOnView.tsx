import React, { Suspense, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LoadOnViewProps {
     children: React.ReactNode;
     fallback?: React.ReactNode;
}

export default function LoadOnView({ children, fallback = null }: LoadOnViewProps) {
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
     const [shouldLoad, setShouldLoad] = useState(false);

     React.useEffect(() => {
          if (inView) setShouldLoad(true);
     }, [inView]);

     return (
          <div ref={ref}>
               {shouldLoad ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
          </div>
     );
}
