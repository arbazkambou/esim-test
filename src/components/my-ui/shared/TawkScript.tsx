"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const tawkPropertyId = "6268502a7b967b11798ca3d1";
const tawkWidgetId = "1g1jnia59";

export default function TawkScript() {
  const [loadChat, setLoadChat] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoadChat(true), 20000);
    return () => clearTimeout(timeout);
  }, []);

  return loadChat ? (
    <Script id="tawk-to-script" strategy="lazyOnload">
      {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
        // Custom styling of Offset starts here
    Tawk_API.customStyle = {
      visibility: {
        //for desktop only
        desktop: {
          position: 'bl', 
          xOffset: 20, 
          yOffset: 20 
        },
        // for mobile only
        mobile: {
          position: 'bl', 
          xOffset: 20, 
          yOffset: 96 
        },
        // change settings of bubble if necessary
        bubble: {
          rotate: '0deg',
          xOffset: -20,
          yOffset: 0
        }
      }
    }
      `}
    </Script>
  ) : null;
}
