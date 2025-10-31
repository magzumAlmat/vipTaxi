import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultSlides = [
  {
    id: 1,
    image: "http://localhost:3000/images/0.png",
    title: "Toyota Alphard",
    description: "Премиум люксовый минивэн с максимальным комфортом",
  },
  {
    id: 2,
   image: "http://localhost:3000/images/2.png",
    title: "Hyundai Staria",
    description: "Современный и стильный семейный минивэн",
  },
  {
    id: 3,
    image: "http://localhost:3000/images/1.png",
    title: " ",
    description: " ",
  },
   {
    id: 4,
    image: "http://localhost:3000/images/11.png",
      title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/3.png",
     title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/3.png",
     title: " ",
    description: " ",
  },
   {
    id: 6,
   image: "http://localhost:3000/images/4.png",
     title: " ",
    description: " ",
  },
   {
    id: 7,
   image: "http://localhost:3000/images/5.png",
      title: " ",
    description: " ",
  },
   {
    id: 8,
   image: "http://localhost:3000/images/6.png",
     title: " ",
    description: " ",
  },
   {
    id: 9,
   image: "http://localhost:3000/images/7.png",
      title: " ",
    description: " ",
  },
   {
    id: 10,
   image: "http://localhost:3000/images/8.png",
     title: " ",
    description: " ",
  },
   {
    id: 11,
   image: "http://localhost:3000/images/9.png",
      title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/11.png",
     title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/12.png",
      title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/13.png",
      title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/14.png",
    title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/15.png",
     title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/16.png",
     title: " ",
    description: " ",
  },
   {
    id: 5,
   image: "http://localhost:3000/images/2.png",
     title: " ",
    description: " ",
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
      <div className="relative h-96 md:h-[64rem] w-full overflow-hidden">
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

