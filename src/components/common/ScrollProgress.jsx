import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = (window.scrollY / totalHeight) * 100;

      setProgress(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 bg-blue-600 transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}