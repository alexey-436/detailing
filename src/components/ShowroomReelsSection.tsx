import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Eye, Heart, Share2, Sparkles, X, ArrowRight } from 'lucide-react';
import { REELS_DATA } from '../data/detailingSiteData';
import { ReelVideo, ThemeMode } from '../types';

interface ShowroomReelsSectionProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const ShowroomReelsSection: React.FC<ShowroomReelsSectionProps> = ({
  theme,
  onOpenBooking,
}) => {
  const [activeReel, setActiveReel] = useState<ReelVideo | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likesMap, setLikesMap] = useState<{ [id: string]: number }>({});
  const [likedStatus, setLikedStatus] = useState<{ [id: string]: boolean }>({});
  const isDark = theme === 'dark';

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentLiked = likedStatus[id];
    setLikedStatus({ ...likedStatus, [id]: !currentLiked });
    setLikesMap({
      ...likesMap,
      [id]: (likesMap[id] || 0) + (currentLiked ? -1 : 1),
    });
  };

  return (
    <section
      id="reels"
      className={`scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 relative transition-colors duration-300 border-b ${
        isDark ? 'bg-[#0B0D14] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
                isDark ? 'bg-white/5 border-white/15 text-slate-300' : 'bg-blue-50 border-blue-200 text-blue-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Шоурум Результатів у Форматі Reels</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              Бекстейдж із Боксів
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Короткі вертикальні відео робочого процесу: гідрофобні тести, лазерна інспекція та фінішний глянець.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-md transition cursor-pointer self-start md:self-auto flex items-center gap-2"
          >
            <span>Забронювати візит</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Vertical Reels Grid with Staggered Motion */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {REELS_DATA.map((reel, idx) => {
            const isLiked = likedStatus[reel.id];
            const likesCount = (likesMap[reel.id] ?? reel.likes);

            return (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => {
                  setActiveReel(reel);
                  setIsPlaying(true);
                  setIsMuted(false);
                }}
                className={`group relative aspect-[9/16] rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-lg ${
                  isDark ? 'border-white/10 bg-[#121520] hover:border-blue-500/50' : 'border-slate-200 bg-slate-100 hover:border-blue-400 hover:shadow-xl'
                }`}
              >
                {/* Poster image */}
                <img
                  src={reel.videoPoster}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Top Badge: Views */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-blue-400" />
                    <span>{reel.views}</span>
                  </span>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-600 text-white font-bold">
                    {reel.duration}
                  </span>
                </div>

                {/* Center Play Pulse Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Content & Meta */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    {reel.car} • {reel.service}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-white line-clamp-2 mt-1 leading-snug">
                    {reel.title}
                  </h4>

                  {/* Likes button */}
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={(e) => handleLike(reel.id, e)}
                      className={`flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition ${
                        isLiked ? 'text-red-400' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-400' : ''}`} />
                      <span>{likesCount}</span>
                    </button>
                    <span className="text-[10px] text-slate-400">Дивитися відео →</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Player Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 animate-fadeIn">
          <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black flex flex-col justify-between">
            {/* Video element */}
            <video
              key={activeReel.id}
              src={activeReel.videoSrc}
              poster={activeReel.videoPoster}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top Bar Controls */}
            <div className="relative z-10 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between">
              <div className="text-white text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>{activeReel.car}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveReel(null)}
                  className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Bar Info */}
            <div className="relative z-10 p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {activeReel.service}
              </span>
              <h3 className="text-sm font-black mt-1">
                {activeReel.title}
              </h3>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => {
                    const r = activeReel;
                    setActiveReel(null);
                    onOpenBooking();
                  }}
                  className="flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer text-center shadow-lg"
                >
                  Замовити таку послугу
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
