import { motion } from "framer-motion";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeartMessageProps {
  onClose: () => void;
}

export default function HeartMessage({ onClose }: HeartMessageProps) {
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
        className="max-w-4xl w-full max-h-full bg-gradient-friendship rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="bg-gradient-coral-dusty p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Heart className="text-3xl animate-glow" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold">Words that barely express</h3>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-200 hover:bg-white/20"
            >
              <X className="text-2xl" />
            </Button>
          </div>
        </div>

        {/* Message Content */}
        <div className="p-8 md:p-12 max-h-96 md:max-h-[500px] overflow-y-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Decorative hearts */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="text-coral text-2xl opacity-60" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Heart className="text-dusty-rose text-3xl opacity-80" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Heart className="text-coral text-2xl opacity-60" />
              </motion.div>
            </div>

            {/* Main message */}
            <motion.p
              className="font-sans text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              If you're reading this then yes you're my favourite person. The one I cherish so much. The one so precious to me I'll burn the world for her but I won't show even a matchstick worth of anger towards her. I was on a journey to nowhere when you hopped in my boat and set the course towards a better life. Words aren't enough to express the love and care I have for you so I try every possible action to care for you. I want to see you laughing and smiling and doing childish things and anything or anyone that comes in the way of that will be facing me first. I just want to say I love you so much and you're the bestest friend I could ask for.
            </motion.p>

            {/* Signature hearts */}
            <motion.div
              className="mt-12 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                >
                  <Heart className="text-coral text-lg" fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}