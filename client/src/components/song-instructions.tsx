import { motion } from "framer-motion";
import { Music, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SongInstructionsProps {
  onClose: () => void;
}

export default function SongInstructions({ onClose }: SongInstructionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-md w-full mx-4"
      >
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-coral-dusty rounded-full flex items-center justify-center mb-4">
            <Music className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Add "Meherbaan" Song
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            To complete your friendship surprise with the perfect background music
          </p>

          <div className="space-y-4 text-left">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Step 1: Download the Song
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Download "Meherbaan" from JioSaavn, Spotify, or your preferred music platform
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Step 2: Add to Project
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Upload the file as "meherbaan.mp3" in your project's public folder
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={onClose}
              className="w-full bg-gradient-coral-dusty text-white hover:bg-gradient-lavender-coral transition-all duration-300"
            >
              Got it!
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            The song will automatically play when your friend views the slideshow
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}