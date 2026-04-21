import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BrandAssets() {
  const downloadPng = (svgUrl: string, fileName: string) => {
    const img = new Image();
    img.src = svgUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 524;
      canvas.height = 524;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 524, 524);
        ctx.drawImage(img, 0, 0, 524, 524);
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = fileName.replace('.svg', '.png');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };
  };

  return (
    <div className="min-h-screen bg-dark py-24 px-6 selection:bg-primary selection:text-white text-white">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            메인으로 돌아가기 (Back to Home)
          </Link>
        </motion.div>

        <div className="text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black italic mb-6">가이든 브랜드 자산</h1>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-primary italic font-bold text-lg md:text-xl break-keep leading-relaxed">
                "숨겨진 공간을 발견하셨군요. 오늘 하루, 기분 좋은 직감이 당신을 이끌 거예요. 가이든의 숨겨진 브랜드 자산을 공유합니다."
              </p>
            </div>
            <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[10px]">Brand Identity Assets / 524px High-Resolution</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Navy Version */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-[3rem] flex flex-col items-center"
            >
              <div className="w-40 h-40 mb-8 flex items-center justify-center p-6 bg-white/5 rounded-3xl group">
                <img src="/guiden-logo-navy.svg" alt="Navy Logo" className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500" />
              </div>
              <h3 className="text-lg font-black mb-6 text-secondary uppercase tracking-tighter tracking-widest">Dark Navy Frame</h3>
              <div className="flex flex-col gap-3 w-full max-w-[180px]">
                <a 
                  href="/guiden-logo-navy.svg" 
                  download="guiden-logo-navy.svg"
                  className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black hover:bg-white/10 transition-all text-center tracking-widest uppercase"
                >
                  Download SVG
                </a>
                <button 
                  onClick={() => downloadPng('/guiden-logo-navy.svg', 'guiden-logo-navy.png')}
                  className="w-full py-3 bg-primary rounded-full text-[10px] font-black text-white hover:scale-105 transition-all tracking-widest uppercase"
                >
                  Download PNG
                </button>
              </div>
            </motion.div>

            {/* White Version */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="glass p-10 rounded-[3rem] flex flex-col items-center"
            >
              <div className="w-40 h-40 mb-8 flex items-center justify-center p-6 bg-gray-800 rounded-3xl group">
                <img src="/guiden-logo-white.svg" alt="White Logo" className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500" />
              </div>
              <h3 className="text-lg font-black mb-6 text-white uppercase tracking-tighter tracking-widest">White Frame</h3>
              <div className="flex flex-col gap-3 w-full max-w-[180px]">
                <a 
                  href="/guiden-logo-white.svg" 
                  download="guiden-logo-white.svg"
                  className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black hover:bg-white/10 transition-all text-center tracking-widest uppercase"
                >
                  Download SVG
                </a>
                <button 
                  onClick={() => downloadPng('/guiden-logo-white.svg', 'guiden-logo-white.png')}
                  className="w-full py-3 bg-primary rounded-full text-[10px] font-black text-white hover:scale-105 transition-all tracking-widest uppercase"
                >
                  Download PNG
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-12 border-t border-white/5"
          >
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
              © 2026 GUIDEN. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
