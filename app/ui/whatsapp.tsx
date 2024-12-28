"use client"
import { useEffect } from "react";

const WhatsAppChat: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-526165f3-60c1-4a7e-a3ab-0a16ee717d3e"
      data-elfsight-app-lazy
      style={{
        position: "fixed",
        left: "10px", // Adjust as needed
        bottom: "10px", // Adjust as needed
        margin: "16px", // Optional margin
      }}
    ></div>
  );
};

export default WhatsAppChat;
