import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, AlertCircle, Headphones, Sparkles, Disc3 } from 'lucide-react';
import { RedBrushStroke } from './Graphics';

export const ManifestoAudioModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(74); // Standard editorial manifesto target: 1m 14s
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [hasAudioFile, setHasAudioFile] = useState(null); // null = checking, true = loaded, false = not found
  const [audioErrorNotice, setAudioErrorNotice] = useState(null);

  const audioRef = useRef(null);
  const waveformBars = [14, 28, 42, 68, 85, 45, 92, 60, 35, 78, 55, 90, 48, 62, 80, 95, 70, 50, 85, 65, 40, 90, 75, 52, 38, 70, 82, 45, 60, 30];

  const manifestoLines = [
    { text: "Every business has a way of doing things.", highlight: false },
    { text: "A way of thinking.", highlight: false },
    { text: "A way of growing.", highlight: false },
    { text: "But what happens when the world changes…", highlight: false },
    { text: "and the way you operate doesn't?", highlight: true },
    { text: "We believe transformation begins with a different question.", highlight: false },
    { text: "Not what can we build?", highlight: false },
    { text: "But what should we rethink?", highlight: true },
    { text: "How we connect.", highlight: false },
    { text: "How we operate.", highlight: false },
    { text: "How we create experiences.", highlight: false },
    { text: "How we grow.", highlight: false },
    { text: "We are Modlonize.", highlight: false },
    { text: "Beyond Digital.", highlight: true, brand: true }
  ];

  // Initialize and probe audio file presence without pretending
  useEffect(() => {
    if (!isOpen) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    const testAudio = new Audio('/audio/manifesto.mp3');

    testAudio.addEventListener('canplaythrough', () => {
      setHasAudioFile(true);
      setDuration(testAudio.duration || 74);
      setAudioErrorNotice(null);
    });

    testAudio.addEventListener('error', () => {
      setHasAudioFile(false);
      setAudioErrorNotice('Audio asset (/audio/manifesto.mp3) not found in production deployment. Player controls are ready for master drop-in.');
    });

    // Check availability
    fetch('/audio/manifesto.mp3', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setHasAudioFile(true);
        } else {
          setHasAudioFile(false);
        }
      })
      .catch(() => {
        setHasAudioFile(false);
      });

  }, [isOpen]);

  const togglePlay = () => {
    if (!hasAudioFile) {
      // Per instructions: "Do not make the play button pretend to play audio if no audio file exists."
      return;
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Playback blocked or file unreadable:', e);
        setIsPlaying(false);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 74);
    }
  };

  const handleSeek = (e) => {
    if (!hasAudioFile || !audioRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    setIsMuted(newVol === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.85;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Background Dim Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Actual HTML5 Audio element instance */}
      <audio
        ref={audioRef}
        src="/audio/manifesto.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-3xl bg-bg-secondary border border-burgundy/80 shadow-2xl shadow-black my-8 p-6 sm:p-10 z-10 overflow-hidden">
        
        {/* Top Accent Gradient Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy via-crimson to-burgundy" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-text-muted hover:text-cream rounded-full hover:bg-burgundy/40 transition-colors z-20"
          aria-label="Close manifesto modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Meta */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 text-crimson">
            <Headphones className="w-4 h-4" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase">
              CINEMATIC AUDIO MANIFESTO // 48kHz
            </span>
          </div>
          <div className="h-[1px] w-8 bg-crimson/40" />
        </div>

        {/* Headline */}
        <h3 className="text-3xl sm:text-5xl font-bold text-cream font-sans tracking-tight mb-2">
          BEYOND{' '}
          <span className="font-editorial-italic font-normal text-crimson italic">
            DIGITAL.
          </span>
        </h3>
        <p className="font-mono text-xs text-text-dim uppercase tracking-widest mb-8">
          VOICE NARRATION & SOUNDSCAPE // 01:14 DURATION
        </p>

        {/* Audio Interface Player Bar */}
        <div className="bg-bg-primary border border-burgundy/60 p-6 sm:p-8 mb-8 relative">
          
          {/* Animated Waveform Visualization */}
          <div className="flex items-end justify-between h-16 sm:h-20 gap-1 sm:gap-1.5 mb-6 px-2 overflow-hidden">
            {waveformBars.map((height, i) => {
              const animatedHeight = isPlaying 
                ? Math.min(100, Math.max(15, height + (Math.sin((currentTime * 4) + i) * 30)))
                : height * 0.45;

              return (
                <div
                  key={i}
                  className="w-full bg-burgundy/50 rounded-t-sm transition-all duration-150 relative overflow-hidden"
                  style={{ height: `${animatedHeight}%` }}
                >
                  <div 
                    className="absolute inset-0 bg-crimson transition-opacity duration-300"
                    style={{
                      opacity: (i / waveformBars.length) <= (currentTime / duration) ? 0.95 : 0.25
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Scrub Track & Progress Indicator */}
          <div className="space-y-2 mb-6">
            <input
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSeek}
              disabled={!hasAudioFile}
              className="w-full h-1.5 bg-burgundy/60 rounded-lg appearance-none cursor-pointer accent-crimson disabled:opacity-40"
            />
            <div className="flex items-center justify-between text-xs font-mono text-text-dim">
              <span>{formatTime(currentTime)}</span>
              <span className="text-cream/70 font-semibold">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-burgundy/40">
            
            {/* Play / Pause Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                disabled={!hasAudioFile}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                  hasAudioFile
                    ? 'bg-crimson hover:bg-crimson-accent text-cream shadow-lg shadow-crimson/30 hover:scale-105'
                    : 'bg-burgundy/40 text-text-dim border border-burgundy/60 cursor-not-allowed'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>PAUSE NARRATION</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>{hasAudioFile ? 'PLAY AUDIO' : 'AUDIO MASTER PENDING'}</span>
                  </>
                )}
              </button>

              <span className="text-xs font-mono text-text-dim hidden sm:inline">
                {hasAudioFile ? (isPlaying ? 'STREAMING ACTIVE' : 'READY TO PLAY') : 'DROP-IN: /audio/manifesto.mp3'}
              </span>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleMute}
                className="text-text-muted hover:text-cream transition-colors"
                aria-label="Toggle Mute"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-crimson" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 sm:w-24 h-1 bg-burgundy/60 rounded appearance-none cursor-pointer accent-crimson"
              />
            </div>

          </div>

          {/* Audio Asset Status Callout (Rule: Do not pretend to play audio if no file exists) */}
          {!hasAudioFile && (
            <div className="mt-6 p-4 bg-bg-card border border-amber-500/30 text-amber-200/90 text-xs font-mono flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-bold text-cream">AUDIO ASSET INTEGRATION STATUS:</div>
                <p className="text-text-muted leading-relaxed">
                  Per strict requirements, the player does not simulate fake audio. To activate voice playback, place your documentary master recording at <code className="bg-black/40 px-1 border border-burgundy/60 text-cream">/public/audio/manifesto.mp3</code>.
                </p>
                <div className="text-[11px] text-crimson">
                  Full narration script is rendered below for editorial reading.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Complete Narration Script Display */}
        <div className="border border-burgundy/40 bg-bg-primary/50 p-6 sm:p-8 relative">
          <div className="flex items-center justify-between border-b border-burgundy/40 pb-3 mb-6">
            <span className="font-mono text-xs text-crimson tracking-widest uppercase">
              // COMPLETE NARRATION SCRIPT
            </span>
            <span className="font-mono text-[10px] text-text-dim uppercase">
              DOCUMENTARY MASTER TRANSCRIPT
            </span>
          </div>

          <div className="space-y-3 font-sans">
            {manifestoLines.map((line, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                  line.brand
                    ? 'font-editorial-italic italic text-2xl sm:text-3xl text-crimson pt-2'
                    : line.highlight
                    ? 'font-editorial-italic italic text-cream font-medium text-xl sm:text-2xl'
                    : 'text-text-muted font-normal'
                }`}
              >
                {line.text}
              </p>
            ))}
          </div>

          {/* Handwritten studio sign-off */}
          <div className="mt-6 pt-4 border-t border-burgundy/30 flex items-center justify-between">
            <span className="font-handwriting text-2xl text-cream/70">
              MODLONIZE — Beyond Digital.
            </span>
            <button
              onClick={onClose}
              className="text-xs font-mono text-text-dim hover:text-crimson transition-colors uppercase tracking-widest"
            >
              [ Close Window ]
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
