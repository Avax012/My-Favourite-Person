import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  image: string;
  title: string;
  caption: string;
}

import image1 from "@assets/Screenshot_20250803_001559_Gallery_1754165733504.jpg";
import image2 from "@assets/Screenshot_20250803_001726_Gallery_1754165733530.jpg";
import image3 from "@assets/Screenshot_20250803_001759_Gallery_1754165733549.jpg";
import image4 from "@assets/Screenshot_20250803_001828_Gallery_1754165733567.jpg";
import image5 from "@assets/Screenshot_20250803_001900_Gallery_1754165733583.jpg";
import image6 from "@assets/Screenshot_20250803_002518_Gallery_1754165733600.jpg";
import image7 from "@assets/Screenshot_20250803_002401_Gallery_1754165733617.jpg";
import image8 from "@assets/Screenshot_20250803_002606_Gallery_1754165733634.jpg";
import image9 from "@assets/Screenshot_20250803_002652_Gallery_1754165733650.jpg";
import image10 from "@assets/Screenshot_20250803_003047_Gallery_1754165733674.jpg";
import image11 from "@assets/20250803_005054_1754165733697.jpg";
import image12 from "@assets/Snapchat-506128890_1754165733719.jpg";
import image13 from "@assets/Snapchat-677465145_1754165998808.jpg";

const slides: Slide[] = [
  {
    id: 1,
    image: image1,
    title: "The Beginning",
    caption: "moments before we first met"
  },
  {
    id: 2,
    image: image2,
    title: "First Touch",
    caption: "The first time I ever held your hand"
  },
  {
    id: 3,
    image: image3,
    title: "Discovery",
    caption: "when I got to know you love orchids"
  },
  {
    id: 4,
    image: image4,
    title: "Captured",
    caption: "The first candid in my phone"
  },
  {
    id: 5,
    image: image5,
    title: "Sweet Moments",
    caption: "our first ice cream together"
  },
  {
    id: 6,
    image: image6,
    title: "Journey Together",
    caption: "our first metro ride"
  },
  {
    id: 7,
    image: image7,
    title: "Traditions",
    caption: "When I wanted you to do shringar"
  },
  {
    id: 8,
    image: image8,
    title: "Care",
    caption: "just doing my duties"
  },
  {
    id: 9,
    image: image9,
    title: "Growth",
    caption: "from food fails to delicacies"
  },
  {
    id: 10,
    image: image10,
    title: "Treasures",
    caption: "the most priceless collection"
  },
  {
    id: 11,
    image: image11,
    title: "Genuine Gift",
    caption: "the first genuine gift I received from a friend"
  },
  {
    id: 12,
    image: image12,
    title: "Hidden Messages",
    caption: "the hidden messages you give me"
  },
  {
    id: 13,
    image: image13,
    title: "Perfect Moment",
    caption: "The most adorable I've looked so far with my favourite person"
  }
];

interface SlideshowProps {
  onClose: () => void;
  onComplete: () => void;
}

export default function Slideshow({ onClose, onComplete }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideshowCompleted, setSlideshowCompleted] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= slides.length) {
        setSlideshowCompleted(true);
        setIsPlaying(false);
        setTimeout(() => {
          onComplete();
        }, 2000); // Wait 2 seconds then close slideshow
        return prev; // Stay on the last slide
      }
      return next;
    });
  }, [onComplete]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
        case " ":
          e.preventDefault();
          nextSlide();
          break;
        case "Escape":
          onClose();
          break;
        case "p":
        case "P":
          toggleAutoPlay();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide, onClose, toggleAutoPlay]);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="slideshow-container max-w-4xl w-full max-h-full rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="bg-gradient-coral-dusty p-6 text-white">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">AK - A Journey</h3>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-200 hover:bg-white/20"
            >
              <X className="text-2xl" />
            </Button>
          </div>
          <p className="font-sans text-sm md:text-base opacity-90 mt-2">Our beautiful memories together</p>
        </div>

        {/* Slideshow Content */}
        <div className="relative bg-white">
          {/* Slide Container */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <motion.h4
                    className="text-white font-serif text-xl md:text-2xl font-semibold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-200 font-sans text-sm md:text-base"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slides[currentSlide].caption}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Button
              onClick={prevSlide}
              variant="secondary"
              size="icon"
              className="bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
            >
              <ChevronLeft className="text-xl" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <Button
              onClick={nextSlide}
              variant="secondary"
              size="icon"
              className="bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
            >
              <ChevronRight className="text-xl" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-opacity duration-200 ${
                    index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50 hover:opacity-75"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Auto-play Controls */}
          <div className="bg-gradient-peach-lavender p-4">
            <div className="flex justify-center items-center space-x-6">
              <Button
                onClick={toggleAutoPlay}
                variant="secondary"
                className="flex items-center space-x-2 bg-white text-gray-700 hover:shadow-md transition-all duration-200"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? "Auto-play" : "Manual"}</span>
              </Button>
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-sm font-sans">Slide</span>
                <span className="font-semibold">{currentSlide + 1}</span>
                <span className="text-sm">of</span>
                <span className="font-semibold">{slides.length}</span>
              </div>

            </div>
          </div>
        </div>
      </motion.div>


    </motion.div>
  );
}
