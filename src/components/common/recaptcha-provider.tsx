"use client";

import { ReCaptchaProvider as NextReCaptchaProvider } from "next-recaptcha-v3";
import { ReactNode, useEffect } from "react";

interface ReCaptchaProviderWrapperProps {
     children: ReactNode;
}

export default function ReCaptchaProviderWrapper({ children }: ReCaptchaProviderWrapperProps) {
     useEffect(() => {
          let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

          const showBadgeWhileScrolling = () => {
               document.body.classList.add("recaptcha-badge-visible");

               if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
               }

               scrollTimeout = setTimeout(() => {
                    document.body.classList.remove("recaptcha-badge-visible");
               }, 700);
          };

          const hideBadgeImmediately = () => {
               if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
               }

               document.body.classList.remove("recaptcha-badge-visible");
          };

          window.addEventListener("scroll", showBadgeWhileScrolling, { passive: true });
          window.addEventListener("touchmove", showBadgeWhileScrolling, { passive: true });
          window.addEventListener("wheel", showBadgeWhileScrolling, { passive: true });

          hideBadgeImmediately();

          return () => {
               if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
               }

               window.removeEventListener("scroll", showBadgeWhileScrolling);
               window.removeEventListener("touchmove", showBadgeWhileScrolling);
               window.removeEventListener("wheel", showBadgeWhileScrolling);
               document.body.classList.remove("recaptcha-badge-visible");
          };
     }, []);

     return (
          <NextReCaptchaProvider
               reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               useEnterprise
          >
               {children}
          </NextReCaptchaProvider>
     );
}