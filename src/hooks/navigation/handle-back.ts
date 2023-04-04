import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useHandleBackButton() {

          const router = useRouter();

          useEffect(() => {
                    const handleRouteChange = (url: String, { shallow }: any) => {
                              if (!shallow) {
                                        // This means that the user clicked the back button
                                        router.back();
                              }
                    };

                    router.events.on('routeChangeComplete', handleRouteChange);

                    // Remove event listener on unmount
                    return () => {
                              router.events.off('routeChangeComplete', handleRouteChange);
                    };
          }, [router]);
}
