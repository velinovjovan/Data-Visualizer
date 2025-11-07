import { useState, useEffect } from "react";
import Stats from "../components/Stats";
import Features from "../components/Features";
import LandingContent from "../components/LandingContent";
import CTA from "../components/CTA";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('[id^="section-"]')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <LandingContent />
      <Stats isVisible={isVisible} />
      <Features isVisible={isVisible} />
      <CTA isVisible={isVisible} />
    </div>
  );
}
