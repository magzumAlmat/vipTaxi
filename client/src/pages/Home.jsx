import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Star, Zap, Shield, Users } from "lucide-react";
import PricingCards from "@/components/PricingCards";
import Reviews from "@/components/Reviews";
import CarSlider from "@/components/CarSlider";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold">VIP TAXI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-accent transition-colors">
              Услуги
            </a>
            <a href="#pricing" className="hover:text-accent transition-colors">
              Цены
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Контакты
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Заказать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-accent font-semibold text-sm">
                  ✨ Премиум сервис такси
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ваш <span className="text-accent">премиум</span> транспорт
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Быстрое, безопасное и комфортное такси для деловых людей и особых случаев.
                Профессиональные водители и люксовые автомобили.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Заказать сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/30 hover:bg-accent/5"
                >
                  Узнать больше
                </Button>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-3xl" />
              <div className="relative h-full rounded-3xl border border-accent/20 bg-card/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                </div>
                <div className="relative z-10 text-center">
                  <img src="/images/17.jpg" alt="mers" />

                  {/* <div className="text-6xl mb-4">🚗</div>

                  <p className="text-accent font-semibold">Премиум класс</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Slider Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Наш автопарк</h2>
            <p className="text-muted-foreground max-w-2xl">
              Выберите идеальный автомобиль для вашей поездки из нашего премиум парка
            </p>
          </div>
          <CarSlider />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают VIP TAXI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы предоставляем лучший сервис в городе с гарантией качества и безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Молниеносный сервис",
                description: "Приезд за 3-5 минут в любую точку города",
              },
              {
                icon: Shield,
                title: "Полная безопасность",
                description: "Проверенные водители и застрахованные автомобили",
              },
              {
                icon: Star,
                title: "Премиум комфорт",
                description: "Люксовые автомобили последних моделей",
              },
              {
                icon: Clock,
                title: "Круглосуточно",
                description: "Доступны 24 часа в сутки, 7 дней в неделю",
              },
              {
                icon: Users,
                title: "Профессиональные водители",
                description: "Опытные и вежливые специалисты",
              },
              {
                icon: MapPin,
                title: "Отслеживание в реальном времени",
                description: "Видите машину на карте в любой момент",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <PricingCards />

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-background to-accent/5 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к премиум поездке?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Заказите такси прямо сейчас и получите скидку 10% на первую поездку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Скачать приложение
            </Button>
            <Button size="lg" variant="outline" className="border-accent/30">
              Заказать по телефону
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="font-bold">VIP TAXI</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Премиум сервис такси для вашего комфорта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Такси в город
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Трансфер в аэропорт
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Корпоративные услуги
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +7 (999) 123-45-67
                </li>
                <li>support@viptaxi.ru</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors" />
                <a href="#" className="w-8 h-8 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors" />
                <a href="#" className="w-8 h-8 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 VIP TAXI. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

