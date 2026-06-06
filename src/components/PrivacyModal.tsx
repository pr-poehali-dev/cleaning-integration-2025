import Icon from "@/components/ui/icon";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ open, onClose }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass-card border border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl shadow-black/60">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
              <Icon name="ShieldCheck" size={18} className="text-neon" />
            </div>
            <h2 className="font-heading text-xl font-bold">Политика конфиденциальности</h2>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
            <Icon name="X" size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-5 text-sm text-white/65 leading-relaxed space-y-4">
          <p className="text-white/40 text-xs">Последнее обновление: июнь 2025 г.</p>

          <section>
            <h3 className="text-white font-semibold mb-2">1. Общие положения</h3>
            <p>Настоящая политика конфиденциальности регулирует порядок обработки и использования персональных данных пользователей сайта «Аренда Чистоты» (далее — Компания). Используя сайт, вы соглашаетесь с условиями данной политики.</p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">2. Какие данные мы собираем</h3>
            <p>При заполнении формы заявки мы собираем:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/55">
              <li>Имя и фамилию</li>
              <li>Номер телефона</li>
              <li>Тип запрашиваемой услуги</li>
            </ul>
            <p className="mt-2">Также автоматически могут собираться технические данные: IP-адрес, тип браузера, данные об использовании cookie-файлов.</p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">3. Цели обработки данных</h3>
            <p>Собранные данные используются исключительно для:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/55">
              <li>Обработки вашей заявки и обратного звонка</li>
              <li>Согласования деталей оказания услуги</li>
              <li>Улучшения качества работы сайта</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">4. Использование cookie</h3>
            <p>Сайт использует cookie-файлы для корректной работы и улучшения пользовательского опыта. Cookie не содержат личных данных и не передаются третьим лицам. Вы можете отключить cookie в настройках браузера, однако это может повлиять на работу сайта.</p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">5. Передача данных третьим лицам</h3>
            <p>Мы не передаём, не продаём и не раскрываем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных действующим законодательством РФ.</p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">6. Хранение данных</h3>
            <p>Персональные данные хранятся не дольше, чем это необходимо для целей обработки, либо до момента отзыва согласия пользователем.</p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">7. Ваши права</h3>
            <p>Вы вправе в любой момент:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/55">
              <li>Запросить информацию об обрабатываемых данных</li>
              <li>Потребовать исправления или удаления данных</li>
              <li>Отозвать согласие на обработку</li>
            </ul>
            <p className="mt-2">Для этого свяжитесь с нами по телефону: <a href="tel:89189682882" className="text-neon hover:underline">8 918 968-28-82</a></p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">8. Контакты</h3>
            <p>По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
            <p className="mt-1">Телефон: <a href="tel:89189682882" className="text-neon hover:underline">8 918 968-28-82</a></p>
            <p>Город: Краснодар</p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/8">
          <button onClick={onClose} className="neon-btn w-full py-3 rounded-xl font-bold text-sm">
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}
