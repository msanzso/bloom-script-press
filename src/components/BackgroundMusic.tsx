import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.volume = 0.15;
      audio.play().then(() => setPlaying(true)).catch(() => {
        // Autoplay blocked, wait for user interaction
        const handler = () => {
          audio.play().then(() => setPlaying(true)).catch(() => {});
          document.removeEventListener('click', handler);
        };
        document.addEventListener('click', handler);
      });
    };

    tryPlay();
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        {/* Replace with your actual music file URL */}
        <source src="https://cdn.pixabay.com/audio/2024/11/29/audio_a39d68e3e4.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggle}
        className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/20 transition-colors"
        aria-label="Toggle music"
      >
        {playing ? <Volume2 size={16} className="text-foreground" /> : <VolumeX size={16} className="text-foreground" />}
      </button>
    </>
  );
};

export default BackgroundMusic;
