import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function PriceCalculator() {
  const [distance, setDistance] = useState(5);
  const [carType, setCarType] = useState("comfort");

  const basePrices = {
    econom,
    comfort,
    luxury,
  };

  const pricePerKm = {
    econom,
    comfort,
    luxury,
  };

  const selectedPrice = basePrices[carType;
  const perKmPrice = pricePerKm[carType;
  const totalPrice = selectedPrice + distance * perKmPrice;

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-accent/20">
      <div className="flex items-center gap-2 mb-6">
        <Zap className="w-5 h-5 text-accent" />
        <h3 className="text-2xl font-bold">Рассчитать стоимость</h3>
      </div>

      <div className="space-y-6">
        {/* Car Type Selection */}
        <div>
          <label className="block text-sm font-semibold mb-3">Класс автомобиля</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "econom", label: "Эконом", emoji: "🚗" },
              { id: "comfort", label: "Комфорт+", emoji: "🚙" },
              { id: "luxury", label: "Люкс", emoji: "🏎️" },
            ].map((car) => (
              <button
                key={car.id}
                onClick={() => setCarType(car.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  carType === car.id
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <div className="text-2xl mb-2">{car.emoji}</div>
                <div className="text-sm font-semibold">{car.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Distance Slider */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Расстояние="text-accent">{distance} км</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>1 км</span>
            <span>100 км</span>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-background/50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Базовая стоимость:</span>
            <span className="font-semibold">{selectedPrice}₸</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {distance} км × {perKmPrice}₸/км:
            </span>
            <span className="font-semibold">{distance * perKmPrice}₸</span>
          </div>
          <div className="border-t border-border pt-2 flex justify-between">
            <span className="font-semibold">Итого:</span>
            <span className="text-2xl font-bold text-accent">{totalPrice}₸</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold">
          Заказать за {totalPrice}₸
        </Button>
      </div>
    </Card>
  );
}

