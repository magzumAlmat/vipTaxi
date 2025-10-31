import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Александр К.",
    role: "Бизнесмен",
    rating: 5,
    text: "Отличный сервис Водитель приехал вовремя, машина чистая и комфортная. Буду пользоваться только VIP TAXI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    initials: "АК",
  },
  {
    name: "Мария С.",
    role: "Путешественница",
    rating: 5,
    text: "Заказала трансфер в аэропорт. Все прошло идеально Водитель был вежлив, маршрут оптимальный.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    initials: "МС",
  },
  {
    name: "Иван П.",
    role: "Корпоративный клиент",
    rating: 5,
    text: "Используем VIP TAXI для корпоративных поездок. Надежно, быстро, профессионально. Рекомендую",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    initials: "ИП",
  },
];

export default function Reviews() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 10,000 довольных клиентов доверяют нам каждый день
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card
              key={idx}
              className="p-6 border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar with skeleton placeholder */}
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover bg-gradient-to-br from-accent/20 to-accent/10"
                    onError={(e) => {
                      (e.target).style.display = "none";
                    }}
                  />
                  {/* Fallback skeleton with initials */}
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center font-semibold text-sm text-accent border border-accent/20">
                    {review.initials}
                  </div>
                </div>

                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

