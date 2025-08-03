import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  isVisible?: boolean;
  autoPlay?: boolean;
  className?: string;
}

export default function AudioPlayer({ isVisible = true, autoPlay = false, className = "" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);

  // For now using a placeholder - user should add their Meherbaan song file
  // You can replace this with a local file path or upload the song to your project
  const audioSrc = "/meherbaan.mp3"; // User should add meherbaan.mp3 to public folder

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      // Add a small delay to ensure audio element is ready
      setTimeout(() => {
        handlePlay();
      }, 500);
    }
  }, [autoPlay]);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio play failed - user interaction may be required:", error);
        // Browser may require user interaction first
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed top-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-3 z-40 ${className}`}
    >
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => console.log("Audio loaded successfully")}
        onError={(e) => console.log("Audio error:", e)}
      />
      
      <div className="flex items-center space-x-2">
        {/* Compact Song Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
            🎵 Meherbaan
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-1">
          {/* Play/Pause */}
          <Button
            onClick={togglePlayPause}
            className="h-8 w-8 rounded-full bg-gradient-coral-dusty text-white hover:bg-gradient-lavender-coral transition-all duration-300 hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3 ml-0.5" />
            )}
          </Button>

          {/* Volume */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMuted ? (
              <VolumeX className="h-3 w-3" />
            ) : (
              <Volume2 className="h-3 w-3" />
            )}
          </Button>
        </div>
      </div>


    </motion.div>
  );
}