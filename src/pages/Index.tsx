import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const AVATAR_URL = "https://cdn.poehali.dev/projects/f8180cbd-2b1c-4224-86e2-f1a7d1f032a8/files/4ece04a0-6543-4de9-8238-33ea5c7c5d73.jpg";

const modules = [
  { num: "01", title: "Основы работы с Китаем", desc: "Рынок Китая, схемы работы, возможности заработка и ошибки новичков." },
  { num: "02", title: "Поиск товаров", desc: "Анализ спроса, трендов и выбор прибыльных товаров." },
  { num: "03", title: "Китайские площадки", desc: "Taobao, 1688, Poizon, Pinduoduo и необходимые сервисы." },
  { num: "04", title: "Поставщики", desc: "Поиск, проверка, переговоры и защита от мошенников." },
  { num: "05", title: "Закупка товара", desc: "Оформление заказов, оплата и контроль качества." },
  { num: "06", title: "Логистика", desc: "Доставка, таможня, консолидация и расчёт себестоимости." },
  { num: "07", title: "Масштабирование", desc: "Рост прибыли, автоматизация и развитие бизнеса." },
];

const reviews = [
  { name: "Марина К.", city: "Москва", text: "За первый месяц вернула стоимость курса на перепродаже детской одежды. Всё чётко и по делу!", stars: 5 },
  { name: "Андрей Л.", city: "Екатеринбург", text: "Боялся мошенников, но Галина дала реальные инструменты проверки. Уже 3 успешных закупки.", stars: 5 },
  { name: "Светлана Д.", city: "Новосибирск", text: "Сижу в декрете, нашла свою нишу. Теперь зарабатываю больше, чем на работе.", stars: 5 },
  { name: "Роман В.", city: "Краснодар", text: "Открыл онлайн-магазин через 3 недели после старта. Курс — это реально рабочий инструмент.", stars: 5 },
];

const plans = [
  {
    name: "Выгодные закупки",
    subtitle: "для себя",
    price: "15 000 ₽",
    monthly: "от 1 500 ₽/мес",
    popular: false,
    features: ["Модули 1–7", "Чат участников", "Групповые встречи", "Записи уроков"],
    cta: "Начать обучение",
  },
  {
    name: "Онлайн-магазин",
    subtitle: "самый популярный",
    price: "25 000 ₽",
    monthly: "от 2 500 ₽/мес",
    popular: true,
    features: ["Всё из тарифа 1", "Продажи в соцсетях", "Запуск онлайн-магазина", "Поддержка при старте"],
    cta: "Выбрать тариф",
  },
  {
    name: "VIP",
    subtitle: "до первых денег",
    price: "39 900 ₽",
    monthly: "от 3 990 ₽/мес",
    popular: false,
    features: ["Всё из тарифа 2", "Индивидуальные консультации", "Персональная стратегия", "Сопровождение до результата"],
    cta: "Получить VIP",
  },
];

const ticker = ["Taobao", "1688", "Poizon", "Pinduoduo", "WeChat", "Прямые поставки", "Без знания языка", "Выгода до 80%", "Проверенные поставщики"];

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", plan: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-golos overflow-x-hidden">

      {/* HERO */}
      <section className="hero-gradient relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, #f04e0d 0%, transparent 70%)" }} />
        <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full opacity-15 animate-float2"
          style={{ background: "radial-gradient(circle, #f5a623 0%, transparent 70%)" }} />

        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-6">
          <div className="font-oswald text-white text-lg tracking-widest uppercase opacity-90">
            🇨🇳 Китай без посредников
          </div>
          <button
            onClick={() => scrollTo("subscribe")}
            className="hidden md:block text-sm font-semibold px-5 py-2.5 rounded-full text-white border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            Записаться
          </button>
        </nav>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 pt-28 pb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-white/80 text-sm font-golos">Набор открыт — осталось 7 мест</span>
          </div>

          <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6 animate-slide-up text-glow">
            КИТАЙ<br />
            <span className="text-brand-orange">БЕЗ</span>{" "}
            <span className="relative inline-block">
              ПОСРЕДНИКОВ
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-yellow rounded-full" />
            </span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 font-golos animate-slide-up delay-200">
            От выгодных закупок для себя до собственного онлайн-бизнеса.
            Без знания языка, больших вложений и опыта.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up delay-400">
            <button
              onClick={() => scrollTo("subscribe")}
              className="group px-8 py-4 rounded-2xl font-oswald text-lg tracking-wide text-white glow-orange transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623)" }}
            >
              Начать обучение
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollTo("program")}
              className="px-8 py-4 rounded-2xl font-oswald text-lg tracking-wide text-white border border-white/25 hover:bg-white/10 transition-all duration-300"
            >
              Смотреть программу
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up delay-600">
            {[
              { num: "1 год+", label: "опыта работы" },
              { num: "15+", label: "учеников" },
              { num: "50+", label: "закупок" },
              { num: "1,5 млн ₽", label: "оборот" },
            ].map((s) => (
              <div key={s.label} className="border border-white/10 rounded-2xl px-5 py-4 bg-white/5 backdrop-blur-sm">
                <div className="font-oswald text-2xl md:text-3xl text-brand-yellow mb-1">{s.num}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs">Прокрути вниз</span>
          <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-brand-orange overflow-hidden py-3.5 relative">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="font-oswald text-white text-lg tracking-widest uppercase flex items-center gap-4">
              {item} <span className="text-white/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* PAIN POINTS */}
      <section className="py-24 bg-[#faf7f5]">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="reveal">
            <p className="text-brand-orange font-oswald tracking-widest uppercase text-sm mb-3">Вы узнаёте себя?</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-dark mb-12 leading-tight">
              ЭТИ МЫСЛИ УЖЕ<br />БЫЛИ У ВАС?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "ShoppingBag", text: "Хочу экономить на покупках для семьи" },
              { icon: "TrendingUp", text: "Ищу дополнительный источник дохода" },
              { icon: "AlertTriangle", text: "Боюсь потерять деньги на закупках" },
              { icon: "Search", text: "Не понимаю, как искать поставщиков" },
              { icon: "Clock", text: "Хочу управлять своим временем" },
              { icon: "Globe", text: "Интересует бизнес без офиса и склада" },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-4 p-5 rounded-2xl bg-white border border-brand-orange/10 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(240,78,13,0.12), rgba(245,166,35,0.12))" }}>
                  <Icon name={item.icon} size={20} className="text-brand-orange" />
                </div>
                <p className="text-brand-dark font-golos font-medium leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl opacity-20 animate-gradient"
                  style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623, #f04e0d)", backgroundSize: "200% 200%" }} />
                <img
                  src={AVATAR_URL}
                  alt="Галина — эксперт по работе с Китаем"
                  className="relative rounded-3xl w-full object-cover aspect-[4/5] shadow-2xl"
                />
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-brand-orange/15">
                  <div className="font-oswald text-2xl text-brand-orange">10+</div>
                  <div className="text-sm text-muted-foreground">успешных кейсов</div>
                </div>
              </div>
            </div>
            <div className="reveal delay-200">
              <p className="text-brand-orange font-oswald tracking-widest uppercase text-sm mb-3">О себе</p>
              <h2 className="font-oswald text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
                МЕНЯ ЗОВУТ<br /><span className="text-brand-orange">ГАЛИНА</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Я эксперт по работе с Китаем и помогаю людям выгодно закупать товары напрямую у поставщиков и создавать доход на товарном бизнесе.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Более 1 года опыта работы с Китаем",
                  "Более 15 учеников из России",
                  "Более 50 успешных закупок",
                  "Более 1 500 000 ₽ оборота",
                  "Более 10 успешных кейсов",
                ].map((fact, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623)" }}>
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                    <span className="text-brand-dark font-medium">{fact}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollTo("subscribe")}
                className="group px-7 py-3.5 rounded-xl font-oswald text-base tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623)" }}
              >
                Записаться на курс
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS BANNER */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "✅", text: "Покупать напрямую у поставщиков" },
              { icon: "💰", text: "Экономить до 50–80% на покупках" },
              { icon: "🏪", text: "Запустить свой онлайн-магазин" },
              { icon: "🚀", text: "Получать основной доход" },
            ].map((item, i) => (
              <div key={i} className="reveal flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/10 border border-white/20">
                <span className="text-4xl">{item.icon}</span>
                <p className="text-white font-golos font-medium text-sm leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(240,78,13,0.5) 60px, rgba(240,78,13,0.5) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(240,78,13,0.5) 60px, rgba(240,78,13,0.5) 61px)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16">
          <div className="reveal text-center mb-16">
            <p className="text-brand-orange font-oswald tracking-widest uppercase text-sm mb-3">Программа</p>
            <h2 className="font-oswald text-4xl md:text-6xl text-white leading-tight">
              7 МОДУЛЕЙ —<br /><span className="text-brand-yellow">ПОЛНАЯ СИСТЕМА</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {modules.map((m, i) => (
              <div key={i} className="reveal module-card bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="font-oswald text-5xl text-brand-orange/30 leading-none select-none">{m.num}</span>
                  <div>
                    <h3 className="font-oswald text-xl text-white mb-2 uppercase tracking-wide">{m.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 p-8 rounded-3xl border border-brand-yellow/20 bg-white/5">
            <p className="text-brand-yellow font-oswald text-xl tracking-wide uppercase mb-5">🎁 Бонусы курса</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "База проверенных поставщиков",
                "Шаблоны переписок",
                "Чек-лист безопасной закупки",
                "Таблица расчёта прибыли",
                "Подборка трендовых товаров",
                "Полезные сервисы для работы",
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/70 text-sm">
                  <span className="text-brand-yellow">✦</span> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-[#faf7f5]">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="reveal text-center mb-16">
            <p className="text-brand-orange font-oswald tracking-widest uppercase text-sm mb-3">Тарифы</p>
            <h2 className="font-oswald text-4xl md:text-6xl text-brand-dark leading-tight">
              ВЫБЕРИТЕ СВОЙ<br />ФОРМАТ
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`reveal relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "shadow-2xl md:scale-105 border-2 border-transparent"
                    : "border-2 border-brand-orange/20 bg-white hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <div className="absolute inset-0 -z-10 rounded-3xl"
                    style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623)" }} />
                )}
                <div className="flex-1 p-7">
                  {plan.popular && (
                    <div className="inline-block bg-white/20 text-white text-xs font-oswald tracking-widest uppercase px-3 py-1 rounded-full mb-4 border border-white/30">
                      🔥 Самый популярный
                    </div>
                  )}
                  <p className={`font-oswald text-xs tracking-widest uppercase mb-1 ${plan.popular ? "text-white/70" : "text-brand-orange"}`}>
                    {plan.subtitle}
                  </p>
                  <h3 className={`font-oswald text-2xl mb-5 uppercase tracking-wide ${plan.popular ? "text-white" : "text-brand-dark"}`}>
                    {plan.name}
                  </h3>
                  <div className={`font-oswald text-4xl mb-1 ${plan.popular ? "text-white" : "text-brand-dark"}`}>
                    {plan.price}
                  </div>
                  <div className={`text-sm mb-7 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
                    {plan.monthly}
                  </div>
                  <div className="space-y-3">
                    {plan.features.map((f, j) => (
                      <div key={j} className={`flex items-center gap-2.5 text-sm ${plan.popular ? "text-white/90" : "text-brand-dark"}`}>
                        <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${plan.popular ? "bg-white/20" : "bg-brand-orange/10"}`}>
                          <Icon name="Check" size={11} className={plan.popular ? "text-white" : "text-brand-orange"} />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-7 pt-4">
                  <button
                    onClick={() => {
                      setFormData((p) => ({ ...p, plan: plan.name }));
                      scrollTo("subscribe");
                    }}
                    className={`w-full py-3.5 rounded-xl font-oswald text-base tracking-wide transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-white text-brand-orange hover:shadow-xl"
                        : "text-white hover:shadow-lg"
                    }`}
                    style={plan.popular ? {} : { background: "linear-gradient(135deg, #f04e0d, #f5a623)" }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="reveal text-center mb-16">
            <p className="text-brand-orange font-oswald tracking-widest uppercase text-sm mb-3">Отзывы</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-dark leading-tight">
              ЧТО ГОВОРЯТ<br /><span className="text-brand-orange">УЧЕНИКИ</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="reveal bg-[#faf7f5] rounded-3xl p-7 border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-brand-yellow text-lg">★</span>
                  ))}
                </div>
                <p className="text-brand-dark font-golos leading-relaxed mb-6 text-base">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-oswald text-base"
                    style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623)" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">{r.name}</div>
                    <div className="text-muted-foreground text-xs">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section id="subscribe" className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, #f04e0d 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 animate-float2"
          style={{ background: "radial-gradient(circle, #f5a623 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <div className="reveal">
            <p className="text-brand-orange font-oswald tracking-widest uppercase text-sm mb-3">Сделай первый шаг</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-white mb-4 leading-tight">
              НАЧНИТЕ УЖЕ<br /><span className="text-brand-yellow">СЕГОДНЯ</span>
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              Оставьте контакты, и я свяжусь с вами в течение 24 часов, отвечу на вопросы и помогу выбрать нужный тариф.
            </p>
          </div>

          {submitted ? (
            <div className="reveal p-10 rounded-3xl border border-brand-yellow/30 bg-white/5 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-oswald text-2xl text-white mb-2">Заявка отправлена!</h3>
              <p className="text-white/60">Галина свяжется с вами в течение 24 часов.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal delay-200 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-golos focus:outline-none focus:border-brand-orange transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон или Telegram"
                required
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-golos focus:outline-none focus:border-brand-orange transition-colors"
              />
              <select
                value={formData.plan}
                onChange={(e) => setFormData((p) => ({ ...p, plan: e.target.value }))}
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white/60 font-golos focus:outline-none focus:border-brand-orange transition-colors appearance-none"
              >
                <option value="" className="bg-brand-dark text-white/60">Выберите тариф (необязательно)</option>
                <option value="Выгодные закупки" className="bg-brand-dark text-white">Выгодные закупки — 15 000 ₽</option>
                <option value="Онлайн-магазин" className="bg-brand-dark text-white">Онлайн-магазин — 25 000 ₽</option>
                <option value="VIP" className="bg-brand-dark text-white">VIP — 39 900 ₽</option>
              </select>
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-oswald text-lg tracking-wide text-white transition-all duration-300 hover:scale-105 glow-orange"
                style={{ background: "linear-gradient(135deg, #f04e0d, #f5a623)" }}
              >
                Отправить заявку 🚀
              </button>
              <p className="text-white/25 text-xs mt-1">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center">
        <p className="text-white/30 text-sm font-golos">
          © 2025 Китай без посредников · Галина · Эксперт по работе с Китаем
        </p>
      </footer>
    </div>
  );
}
