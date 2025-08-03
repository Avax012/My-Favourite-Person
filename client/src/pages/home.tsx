import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Star, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slideshow from "@/components/slideshow";
import HeartMessage from "@/components/heart-message";
import AudioPlayer from "@/components/audio-player";
import SongInstructions from "@/components/song-instructions";

export default function Home() {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [slideshowCompleted, setSlideshowCompleted] = useState(false);
  const [showHeartMessage, setShowHeartMessage] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [showSongInstructions, setShowSongInstructions] = useState(false); // Hide instructions since song is now added

  const handleJourneyClick = () => {
    setShowSlideshow(true);
    setShowAudioPlayer(true); // Show audio player when journey starts
  };

  const handleSlideshowComplete = () => {
    setShowSlideshow(false);
    setSlideshowCompleted(true);
  };

  const handleHeartClick = () => {
    setShowHeartMessage(true);
  };

  const floatingHearts = [
    { top: "10%", left: "15%", delay: 0, size: "text-2xl" },
    { top: "20%", right: "20%", delay: 1, size: "text-lg" },
    { bottom: "30%", left: "10%", delay: 2, size: "text-xl" },
    { top: "60%", right: "15%", delay: 3, size: "text-sm" },
    { bottom: "20%", right: "30%", delay: 4, size: "text-lg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-friendship overflow-x-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingHearts.map((heart, index) => (
          <motion.div
            key={index}
            className={`heart-float ${heart.size}`}
            style={{
              top: heart.top,
              left: heart.left,
              right: heart.right,
              bottom: heart.bottom,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut",
            }}
          >
            <Heart className="text-coral opacity-30" />
          </motion.div>
        ))}
      </div>

      {/* Main Landing Page */}
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
        {/* Welcome Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8">
            <motion.h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-friendship mb-4 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Welcome
            </motion.h1>
            <motion.h2
              className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              My Favourite Person
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-coral-dusty mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center items-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="text-golden text-2xl" />
            </motion.div>
            <motion.div
              className="animate-glow"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-coral text-3xl" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Star className="text-golden text-2xl" />
            </motion.div>
          </motion.div>

          <motion.p
            className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A special collection of memories, moments, and the beautiful journey we've shared together.
            Ready to take a trip down memory lane?
          </motion.p>
        </motion.div>

        {/* Journey Button */}
        {!slideshowCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              onClick={handleJourneyClick}
              className="group relative px-12 py-6 bg-gradient-coral-dusty text-white font-serif text-xl md:text-2xl font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden border-0"
            >
              <span className="absolute inset-0 bg-gradient-lavender-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-3">
                <Camera className="text-2xl" />
                <span>AK - A Journey</span>
                <ArrowRight className="text-xl transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        )}

        {/* Words from Heart Button - appears after slideshow */}
        {slideshowCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              onClick={handleHeartClick}
              className="group relative px-12 py-6 bg-gradient-lavender-coral text-white font-serif text-xl md:text-2xl font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden border-0 animate-glow"
            >
              <span className="absolute inset-0 bg-gradient-peach-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-3">
                <Heart className="text-2xl" />
                <span>Words from my Heart</span>
                <ArrowRight className="text-xl transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        )}

        {/* Subtitle */}
        <motion.p
          className="font-sans text-sm md:text-base text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Click to begin our photo journey together
        </motion.p>
      </main>

      {/* Slideshow Modal */}
      {showSlideshow && (
        <Slideshow 
          onClose={() => setShowSlideshow(false)}
          onComplete={handleSlideshowComplete}
        />
      )}

      {/* Heart Message Modal */}
      {showHeartMessage && (
        <HeartMessage onClose={() => setShowHeartMessage(false)} />
      )}

      {/* Audio Player */}
      <AudioPlayer 
        isVisible={showAudioPlayer} 
        autoPlay={showSlideshow}
      />

      {/* Song Instructions Modal */}
      {showSongInstructions && (
        <SongInstructions onClose={() => setShowSongInstructions(false)} />
      )}
    </div>
  );
}
