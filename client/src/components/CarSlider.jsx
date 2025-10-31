import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=600&fit=crop",
    title: "Toyota Alphard",
    description: "Премиум люксовый минивэн с максимальным комфортом",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1200&h=600&fit=crop",
    title: "Hyundai Staria",
    description: "Современный и стильный семейный минивэн",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1494976866556-6812c9d1c72e?w=1200&h=600&fit=crop",
    title: "Mercedes-Benz V-Class",
    description: "Элегантный премиум класс для деловых людей",
  },
];

export default function CarSlider({ slides = defaultSlides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Смена слайда каждые 5 секунд

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl group">
      {/* Slides Container */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
              <div className="animate-fade-in-up">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-lg text-gray-200 max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-accent w-8 h-2"
                : "bg-white/40 hover:bg-white/60 w-2 h-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 text-white text-sm">
        <div className={`w-2 h-2 rounded-full ${autoPlay ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
        <span>{autoPlay ? "Автопрокрутка" : "Пауза"}</span>
      </div>
    </div>
  );
}

