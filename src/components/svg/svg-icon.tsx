import React from "react";

type IconTypes = "cart" | "heart" | "heartfilled" | "remove" | "login" | "logout" | "user" | "userlarge";

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
