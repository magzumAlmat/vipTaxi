import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Camera, Car, Moon } from "lucide-react";

const pricingCards = [
  {
    id: 1,
    icon: <Clock className="w-8 h-8" />,
    title: "Почасовая аренда",
    price: "10 000₸",
    description: "1 час вождения",
    image: "http://89.207.250.181:3000/images/solo1.png",
    details: ["Профессиональный водитель", "Премиум автомобиль", "Полная безопасность"],
  },
  {
    id: 2,
    icon: <MapPin className="w-8 h-8" />,
    title: "Озеро БАО",
    price: "90 000₸",
    description: "Экскурсия с отеля",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    details: ["Красивейшее озеро", "Полный день", "Включены все услуги"],
  },
  {
    id: 3,
    icon: <Camera className="w-8 h-8" />,
    title: "Экскурсия по городу",
    price: "от 40 000₸",
    description: "С отеля с гидом",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    details: ["Опытный гид", "Интересные маршруты", "Фотоостановки"],
  },
  {
    id: 4,
    icon: <Car className="w-8 h-8" />,
    title: "Трансфер",
    price: "35 000₸",
    description: "Доставка до пункта назначения",
    
   image: "http://89.207.250.181:3000/images/solo3.png",
    details: ["Быстрая доставка", "Удобный маршрут", "Безопасность гарантирована"],
  },
  {
    id: 5,
    icon: <Moon className="w-8 h-10" />,
    title: "Ночная аренда",
    price: "Доплата",
    description: "После 22:00 (минимум 3 часа)",
    image: "http://89.207.250.181:3000/images/solo2.jpg",
    details: ["Дополнительная плата", "Минимум 3 часа", "Премиум сервис"],
  },
];

export default function PricingCards() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наши услуги и расценки</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены на все виды услуг. Выберите подходящий вариант для вас
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCards.map((card) => (
            <Card
              key={card.id}
              className="overflow-hidden border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-accent/20 text-accent">
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{card.description}</p>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-accent">{card.price}</div>
                </div>

                {/* Details */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {card.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Заказать
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card/50 border border-border/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6">Важная информация</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-accent mb-3">Ночная тариф</h4>
              <p className="text-muted-foreground">
                При аренде автомобиля после 22:00 применяется отдельная доплата. Минимальный период бронирования составляет 3 часа.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Условия бронирования</h4>
              <p className="text-muted-foreground">
                Все цены указаны за услуги с профессиональным водителем. Возможны скидки при длительной аренде. Свяжитесь с нами для уточнения деталей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

