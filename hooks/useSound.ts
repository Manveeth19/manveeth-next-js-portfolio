// hooks/useSound.ts

import { useRef, useCallback, useEffect } from 'react';

/**
 * A hook to play a sound file on demand.
 * @param src The source path of the audio file (e.g., '/sounds/click.mp3')
 * @returns A function to call to play the sound.
 */
export const useSound = (src: string): () => void => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.load();
    }
  }, [src]);

  const playSound = useCallback(() => {
    if (audioRef.current) {
      // 1. Stop the sound if it's already playing
      audioRef.current.pause();
      // 2. Reset the playback position to the start
      audioRef.current.currentTime = 0;
      // 3. Play the sound
      audioRef.current.play().catch(error => {
        // Suppress common automatic playback errors
        if (error.name !== 'NotAllowedError') {
          console.error('Audio playback failed:', error);
        }
      });
    }
  }, []);

  return playSound;
};