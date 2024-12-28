'use client';
import { useEffect } from "react";

const ElfsightWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-fbdb1126-c249-435f-8a13-07fce024f7e9"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfsightWidget;
