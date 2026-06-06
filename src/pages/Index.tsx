import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/9b8e5809-3eed-40de-a586-aa4d126be120/files/7893760d-fce7-411d-ad83-bd7eb1611ff0.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/9b8e5809-3eed-40de-a586-aa4d126be120/files/c20d9430-4399-4e0f-8bc5-b652facff4c0.jpg";
const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/9b8e5809-3eed-40de-a586-aa4d126be120/files/451972a8-8615-48fb-94c4-3982470bb1b9.jpg";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const services = [
  { icon: "Sofa", title: "Диваны и кресла", desc: "Глубокая химчистка мягкой мебели любой сложности" },
  { icon: "BedDouble", title: "Матрасы", desc: "Удаление пятен, запахов и аллергенов из матрасов" },
  { icon: "LayoutGrid", title: "Ковры и ковровые покрытия", desc: "Чистка ковров и паласов с выездом на дом" },
  { icon: "CarFront", title: "Автомобильный салон", desc: "Химчистка сидений, обивки и потолка авто" },
  { icon: "Armchair", title: "Стулья и пуфы", desc: "Восстановление внешнего вида тканевой мебели" },
  { icon: "Sparkles", title: "Устранение пятен и запахов", desc: "Выведение сложных пятен и неприятных запахов" },
];

const advantages = [
  { icon: "ShieldCheck", title: "Гарантия результата", desc: "Если останетесь недовольны — перечистим бесплатно" },
  { icon: "Clock", title: "Сушка за 2–4 часа", desc: "Быстрое высыхание — мебель готова к использованию в тот же день" },
  { icon: "Leaf", title: "Безопасная химия", desc: "Только сертифицированные средства, безопасные для детей и животных" },
  { icon: "Star", title: "Лауреат 2025", desc: "Премия «Лучшая химчистка мебели» по версии экспертов рынка" },
];

const portfolio = [
  { img: PORTFOLIO_IMG, label: "Квартира 85 м²", time: "3 часа", result: "Идеальная чистота" },
  { img: HERO_IMG, label: "Офис 200 м²", time: "4 часа", result: "Корпоративный стандарт" },
  { img: TEAM_IMG, label: "Ресторан", time: "5 часов", result: "Санитарные нормы" },
];

const reviews = [
  { name: "Анастасия М.", rating: 5, text: "Заказала химчистку дивана после кота. Результат превзошёл ожидания! Ни пятнышка, ни запаха. Мастер аккуратный и профессиональный.", city: "Краснодар" },
  { name: "Дмитрий К.", rating: 5, text: "Чистили матрас и два кресла. Всегда вовремя, всегда качественно. Рекомендую без оговорок!", city: "Краснодар" },
  { name: "Елена Р.", rating: 5, text: "Химчистка дивана — огонь! Думала, уже не отмоется, а они его как новый сделали. Цена адекватная, мастера аккуратные.", city: "Краснодар" },
];

const stats = [
  { value: "2500+", label: "довольных клиентов" },
  { value: "8", label: "лет на рынке" },
  { value: "98%", label: "положительных отзывов" },
  { value: "30 мин", label: "время выезда" },
];

export default function Index() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#060d14] text-white min-h-screen font-sans overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neon to-neon-blue flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-[#060d14]" />
            </div>
            <span className="font-heading font-bold text-xl tracking-wide">АРЕНДА<span className="neon-text"> ЧИСТОТЫ</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["about","О нас"],["services","Услуги"],["advantages","Преимущества"],["portfolio","Портфолио"],["reviews","Отзывы"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link text-sm font-medium">{label}</button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:89189682882" className="text-sm text-white/70 hover:text-neon transition-colors flex items-center gap-1">
              <Icon name="Phone" size={14} />
              8 918 968-28-82
            </a>
            <button onClick={() => scrollTo("contacts")} className="neon-btn px-5 py-2 rounded-xl text-sm">
              Вызвать мастера
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-3">
            {[["about","О нас"],["services","Услуги"],["advantages","Преимущества"],["portfolio","Портфолио"],["reviews","Отзывы"],["contacts","Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-white/80 py-1 hover:text-neon transition-colors">{label}</button>
            ))}
            <a href="tel:89189682882" className="neon-btn px-5 py-2 rounded-xl text-sm text-center mt-2">
              8 918 968-28-82
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Аренда Чистоты" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d14] via-[#060d14]/80 to-transparent" />
        </div>
        <div className="orb w-96 h-96 bg-neon/20 top-20 left-10 opacity-30" style={{ filter: "blur(100px)" }} />
        <div className="orb w-80 h-80 bg-purple-500/20 bottom-20 right-10 opacity-20" style={{ filter: "blur(120px)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 animate-fade-in opacity-0 border border-neon/30">
              <span className="w-2 h-2 rounded-full bg-neon pulse-ring inline-block" />
              <span className="text-sm text-neon font-medium">Лауреат «Лучшая химчистка мебели Краснодара 2025»</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-in-d1 opacity-0">
              МЕБЕЛЬ<br />
              <span className="gradient-text">ЧИСТАЯ,</span><br />
              КАК НОВАЯ
            </h1>

            <p className="text-lg text-white/60 mb-8 max-w-md leading-relaxed animate-fade-in-d2 opacity-0">
              Профессиональная химчистка диванов, кресел, матрасов и ковров в Краснодаре. Выезд на дом, сушка за 2–4 часа. Гарантия результата.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-d3 opacity-0">
              <button onClick={() => scrollTo("contacts")} className="neon-btn px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-2">
                <Icon name="Sparkles" size={18} />
                Заказать химчистку
              </button>
              <a href="tel:89189682882" className="glass-card px-8 py-4 rounded-2xl text-base font-medium flex items-center gap-2 hover:border-neon/40 transition-all border border-white/10">
                <Icon name="Phone" size={18} className="text-neon" />
                8 918 968-28-82
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs text-white/40 tracking-widest uppercase">Листай</span>
          <Icon name="ChevronDown" size={20} className="text-neon" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="reveal glass-card rounded-2xl p-6 text-center border border-white/8 hover:border-neon/30 transition-all">
                <div className="font-heading text-4xl font-bold text-neon mb-1">{s.value}</div>
                <div className="text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="orb w-72 h-72 bg-blue-500/10 top-0 right-0 opacity-20" style={{ filter: "blur(100px)" }} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 text-neon text-sm font-medium tracking-widest uppercase mb-4">
                <div className="w-8 h-px bg-neon" />
                О нас
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                8 ЛЕТ ДЕЛАЕМ<br />
                <span className="gradient-text">БЕЗУПРЕЧНО</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Аренда Чистоты — команда профессионалов по химчистке мягкой мебели с выездом на дом. Обслуживаем Краснодар и пригород, используя только профессиональное оборудование и безопасную сертифицированную химию.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Каждый наш мастер проходит специализированное обучение. Мы несём ответственность за результат и гарантируем, что вы останетесь довольны.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neon/10 border border-neon/30 flex items-center justify-center">
                  <Icon name="Award" size={22} className="text-neon" />
                </div>
                <div>
                  <div className="font-semibold">Лауреат премии 2025</div>
                  <div className="text-sm text-white/50">«Лучшая химчистка мебели Краснодара»</div>
                </div>
              </div>
            </div>

            <div className="reveal relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={TEAM_IMG} alt="Команда CleanPro" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-3xl border border-neon/20 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3 border border-neon/20 float-anim">
                <div className="text-2xl font-heading font-bold text-neon">2500+</div>
                <div className="text-xs text-white/50">объектов убрано</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="orb w-96 h-96 bg-neon/5 left-0 top-1/2 -translate-y-1/2 opacity-30" style={{ filter: "blur(120px)" }} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 text-neon text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-neon" />Услуги<div className="w-8 h-px bg-neon" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">ЧТО МЫ <span className="gradient-text">ЧИСТИМ</span></h2>
            <p className="text-white/50 mt-4">Химчистка мебели с выездом на дом по всему Краснодару</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="reveal glass-card rounded-2xl p-6 border border-white/8 hover:border-neon/30 hover:bg-white/[0.07] transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-all">
                  <Icon name={s.icon} size={22} className="text-neon" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-neon text-sm opacity-0 group-hover:opacity-100 transition-all">
                  <span>Заказать</span><Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/[0.03] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 text-neon text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-neon" />Преимущества<div className="w-8 h-px bg-neon" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">ПОЧЕМУ <span className="gradient-text">ВЫБИРАЮТ</span> НАС</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="reveal flex gap-5 glass-card rounded-2xl p-6 border border-white/8 hover:border-neon/25 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon/20 to-blue-500/20 border border-neon/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={a.icon} size={24} className="text-neon" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{a.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 text-neon text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-neon" />Портфолио<div className="w-8 h-px bg-neon" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">НАШИ <span className="gradient-text">РАБОТЫ</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <div key={i} className="reveal group rounded-3xl overflow-hidden glass-card border border-white/8 hover:border-neon/30 transition-all">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d14] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold mb-2">{p.label}</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-sm text-white/50">
                      <Icon name="Clock" size={13} className="text-neon" />{p.time}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-white/50">
                      <Icon name="CheckCircle" size={13} className="text-neon" />{p.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative">
        <div className="orb w-80 h-80 bg-purple-500/10 right-0 top-1/2 opacity-25" style={{ filter: "blur(100px)" }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 text-neon text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-neon" />Отзывы<div className="w-8 h-px bg-neon" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">ЧТО <span className="gradient-text">ГОВОРЯТ</span> КЛИЕНТЫ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="reveal glass-card rounded-2xl p-6 border border-white/8 hover:border-neon/20 transition-all flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(r.rating)].map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-neon" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon/30 to-blue-500/30 flex items-center justify-center text-sm font-bold text-neon">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{r.name}</div>
                    <div className="text-xs text-white/40">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/[0.04] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 text-neon text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-neon" />Контакты<div className="w-8 h-px bg-neon" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">ЗАКАЖИТЕ <span className="gradient-text">ХИМЧИСТКУ</span></h2>
            <p className="text-white/50 mt-4">Оставьте заявку — перезвоним в течение 15 минут</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="reveal glass-card rounded-3xl p-8 border border-white/8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-neon/20 border border-neon/30 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-neon" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Заявка принята!</h3>
                  <p className="text-white/50">Перезвоним вам в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-heading text-2xl font-bold mb-2">Оставить заявку</h3>
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neon/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neon/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Тип услуги</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0d1b28] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon/50 transition-colors"
                    >
                      <option value="">Выберите услугу...</option>
                      <option>Химчистка дивана</option>
                      <option>Химчистка кресел</option>
                      <option>Химчистка матраса</option>
                      <option>Химчистка ковра</option>
                      <option>Химчистка автомобильного салона</option>
                      <option>Удаление пятен и запахов</option>
                    </select>
                  </div>
                  <button type="submit" className="neon-btn w-full py-4 rounded-xl text-base font-bold mt-2 flex items-center justify-center gap-2">
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </button>
                  <p className="text-xs text-white/30 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              )}
            </div>

            <div className="reveal flex flex-col gap-5">
              {[
                { icon: "Phone", title: "Телефон", value: "8 918 968-28-82", href: "tel:89189682882" },
                { icon: "MapPin", title: "Адрес", value: "Краснодар, принимаем заявки со всего города", href: null },
                { icon: "Clock", title: "Режим работы", value: "Пн–Вс: 8:00 – 22:00, без выходных", href: null },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-5 border border-white/8 flex gap-4 items-center hover:border-neon/25 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={22} className="text-neon" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-white hover:text-neon transition-colors">{item.value}</a>
                    ) : (
                      <div className="font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-2xl p-5 border border-white/8">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Написать мастеру</div>
                <div className="flex gap-3">
                  <a href="https://max.ru/u/f9LHodD0cOIhDoRH_6LXfcSUOHBuL1Ox9Kjst5F3mN4736vAC4pXtz-GKzc" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl border border-white/10 hover:border-neon/30 hover:text-neon transition-all text-sm">
                    <Icon name="MessageSquare" size={16} className="text-neon" />Макс
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/8 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon to-neon-blue flex items-center justify-center">
              <Icon name="Sparkles" size={14} className="text-[#060d14]" />
            </div>
            <span className="font-heading font-bold">АРЕНДА<span className="neon-text"> ЧИСТОТЫ</span></span>
          </div>
          <div className="text-sm text-white/30">© 2025 Аренда Чистоты — Химчистка мебели в Краснодаре</div>
          <a href="tel:89189682882" className="text-sm text-white/50 hover:text-neon transition-colors">8 918 968-28-82</a>
        </div>
      </footer>
    </div>
  );
}