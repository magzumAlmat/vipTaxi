
import { Card } from "@/components/ui/card";

export default function Prices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наши услуги и расценки</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены на все виды услуг. Выберите подходящий вариант для вас
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img src="/images/0.png" alt="Аренда 1 час" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1">Аренда 1 час</h3>
              <div className="text-3xl font-bold text-accent">10 000₸</div>
            </div>
          </Card>
          <Card className="overflow-hidden border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img src="/images/1.png" alt="Большое Алматиское озеро БАО" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1">Большое Алматиское озеро БАО</h3>
              <div className="text-3xl font-bold text-accent">90 000₸</div>
            </div>
          </Card>
          <Card className="overflow-hidden border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img src="/images/2.png" alt="С отеля экскурсия" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1">С отеля экскурсия</h3>
              <div className="text-3xl font-bold text-accent">от 40 000₸</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
