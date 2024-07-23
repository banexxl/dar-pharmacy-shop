import { Colors } from "@/styles/theme";
import React from "react";

type IconTypes = "cart" | "heart" | "heartfilled" | "remove" | "login" | "logout" | "user" | "userlarge" | "logo";

interface IProps {
     type: IconTypes;
     className?: string;
     width?: number;
     height?: number;
     color?: string;
}

const SvgIcon = ({ type, className = "", width, height, color }: IProps) => {
     let icon = <path />;
     switch (type) {
          case "cart":
               icon = (
                    <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
               );
               break;
          case "heart":
               icon = (
                    <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
               );
               break;
          case "heartfilled":
               icon = (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path d="M22 9.07503C22 10.7199 21.2857 12.1591 20.1633 13.2899L12.5102 20.7944C12.3061 20.8972 12.2041 21 12 21C11.7959 21 11.5918 20.8972 11.4898 20.7944L3.83673 13.1871C2.71429 12.0563 2 10.5142 2 8.86943C2 7.3274 2.71429 5.88818 3.83673 4.75737C5.06122 3.62655 6.59184 2.90694 8.22449 3.00974C9.55102 3.00974 10.7755 3.52375 11.7959 4.34616C14.2449 2.39293 17.7143 2.59853 19.9592 4.86017C21.2857 5.88818 22 7.4302 22 9.07503Z" fill="red" />
                    </svg>
               );
               break;
          case "remove":
               icon = (
                    <svg
                         className="w-6 h-6"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                         ></path>
                    </svg>
               );
               break
          case "login":
               icon = (
                    <svg
                         className="w-6 h-6"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4 "
                         ></path>
                         <polyline xmlns="http://www.w3.org/2000/svg" points="10 17 15 12 10 7" />
                         <line xmlns="http://www.w3.org/2000/svg" x1="15" y1="12" x2="3" y2="12" />
                    </svg>
               );
               break
          case "logout":
               icon = (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path strokeWidth="2" d="M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17" />
                    </svg>
               );
               break
          case "user":
               icon = (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path fill="none" strokeWidth="2" d="M8,24 L8,19 M16,24 L16,19 M3,24 L3,19 C3,14.0294373 7.02943725,11 12,11 C16.9705627,11 21,14.0294373 21,19 L21,24 M12,11 C14.7614237,11 17,8.76142375 17,6 C17,3.23857625 14.7614237,1 12,1 C9.23857625,1 7,3.23857625 7,6 C7,8.76142375 9.23857625,11 12,11 Z" />
                    </svg>
               );
               break;
          case "logo":
               icon = (
                    <svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M48 15.7676V26.3101C48 30.2424 44.8028 33.4392 40.8699 33.4392H22.8393C21.0527 33.4392 19.4669 32.5763 18.4733 31.2486C17.7918 30.3379 17.3874 29.2108 17.3874 27.9881C17.3874 25.0842 19.677 22.6993 22.5463 22.5497C22.6991 19.6776 25.0811 17.3915 27.9886 17.3915C30.9948 17.3915 33.4405 19.8368 33.4405 22.8394V29.5164H31.0266V22.8394C31.0266 21.1678 29.6636 19.805 27.9886 19.805C26.3167 19.805 24.9506 21.1678 24.9506 22.8394C24.9506 23.0909 24.9824 23.3393 25.0429 23.5813C25.148 23.992 25.027 24.4251 24.7245 24.7276C24.4251 25.0269 23.992 25.1479 23.5812 25.0428C23.3392 24.9823 23.0908 24.9536 22.8393 24.9536C21.1674 24.9536 19.8012 26.3164 19.8012 27.9881C19.8012 29.6629 21.1674 31.0257 22.8393 31.0257H40.8699C43.4716 31.0257 45.5862 28.9083 45.5862 26.3101V16.9743H32.2335C31.5648 16.9743 31.0266 16.433 31.0266 15.7676V7.12916C31.0266 4.53095 28.9089 2.41354 26.3072 2.41354H16.9734V15.7676C16.9734 16.433 16.432 16.9743 15.7665 16.9743H7.1301C4.52836 16.9743 2.41385 19.0886 2.41385 21.69V31.0257H15.7665C16.0977 31.0257 16.4002 31.1594 16.6199 31.3791C16.8365 31.5988 16.9734 31.8981 16.9734 32.2324V40.8677C16.9734 43.4722 19.0879 45.5865 21.6865 45.5865H31.0266V34.9771H33.4405V46.7932C33.4405 47.4587 32.8991 48 32.2335 48H21.6865C17.7568 48 14.5595 44.8 14.5595 40.8677V33.4392H1.20693C0.541366 33.4392 0 32.8979 0 32.2324V21.69C0 17.7608 3.19724 14.5608 7.1301 14.5608H14.5595V1.20677C14.5595 0.538112 15.0977 0 15.7665 0H26.3072C30.24 0 33.4405 3.19682 33.4405 7.12916V14.5608H46.7931C47.4618 14.5608 48 15.0989 48 15.7676Z" fill="#970D12" />
                    </svg>
               );
               break;
          case "userlarge":
               icon = (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path fill="none" stroke="#000" strokeWidth="2" d="M16,12 C18.3736719,13.1826446 20,15.6506255 20,19 L20,23 L4,23 L4,19 C4,15.6457258 5.6310898,13.1754259 8,12 M12,13 C15.3137085,13 18,10.3137085 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7 C6,10.3137085 8.6862915,13 12,13 Z M18,7 C16.5,7 15,7.3599999 13,5 C11,7.3599999 8.5,8 6,7 M7,13 L12.0249378,18.2571942 L17,13 M12,18 L12,23" />
                    </svg>
               );
               break;
          default: {
               icon = <path />;
          }
     }

     return (
          <svg
               className={className}
               height={height}
               width={width}
               style={{ color, height, width }}
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
          >
               {icon}
          </svg>
     );
};

export default SvgIcon;
