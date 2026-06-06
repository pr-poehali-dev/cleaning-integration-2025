import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface Props {
  onPrivacyClick: () => void;
}

export default function CookieBanner({ onPrivacyClick }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl animate-fade-in opacity-0">
      <div className="glass-card border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-9 h-9 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon name="Cookie" size={18} className="text-neon" />
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Мы используем куки для улучшения работы сайта.{" "}
            <button
              onClick={onPrivacyClick}
              className="text-neon underline underline-offset-2 hover:text-neon/80 transition-colors"
            >
              Политика конфиденциальности
            </button>
          </p>
        </div>
        <button
          onClick={accept}
          className="neon-btn px-5 py-2 rounded-xl text-sm font-bold whitespace-nowrap flex-shrink-0"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
