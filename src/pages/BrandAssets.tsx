import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import React from 'react';

const COLORS = {
  gold: '#F59E0B',
  violet: '#7C3AED',
  silver: '#CBD5E1',
  navy: '#020617'
};

// Reelbom Fixed: Perfect Alignment + No outer black line on solid
const ReelbomLogo = ({ isSolid = false, className = "", idPrefix = "trans" }: { isSolid?: boolean, className?: string, idPrefix?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`luxuryGradRB${idPrefix}`} gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={COLORS.gold} />
        <stop offset="100%" stopColor={COLORS.violet} />
      </linearGradient>
    </defs>
    {isSolid && <circle cx="20" cy="20" r="17.4" fill={COLORS.navy} />}
    <circle cx="20" cy="20" r="16.5" stroke={COLORS.silver} strokeWidth="1.8" />
    <path d="M 20 3.5 A 16.5 16.5 0 0 1 36.5 20" stroke={`url(#luxuryGradRB${idPrefix})`} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <g transform="translate(20, 20)">
      <path d="M -5 -7.5 C -7 -7.5 -8.5 -6.5 -8.5 -5 L -8.5 5 C -8.5 6.5 -7 7.5 -5 7.5 C -3 7.5 7.5 2.5 8.5 0 C 9.5 -2.5 -3 -7.5 -5 -7.5 Z" fill={`url(#luxuryGradRB${idPrefix})`} />
      <circle cx="0" cy="0" r="1.3" fill="white" />
    </g>
  </svg>
);

// Guiden Fixed: No borders, Pure Silver + Gradient + No inward bleeding
const GuidenLogo = ({ isSolid = false, className = "", idPrefix = "trans" }: { isSolid?: boolean, className?: string, idPrefix?: string }) => {
  const maskId = `innerCircleMask${idPrefix}`;
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`luxuryGradGD${idPrefix}`} gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor={COLORS.violet} />
        </linearGradient>
        {/* Clip path to prevent triangles from bleeding inside the circle */}
        <clipPath id={maskId}>
          <path d="M 0 0 H 40 V 40 H 0 Z M 20 20 m -16.5 0 a 16.5 16.5 0 1 1 33 0 a 16.5 16.5 0 1 1 -33 0" clipRule="evenodd" />
        </clipPath>
      </defs>
      {isSolid && <circle cx="20" cy="20" r="17.4" fill={COLORS.navy} />}
      <circle cx="20" cy="20" r="16.5" stroke={COLORS.silver} strokeWidth="1.8" />
      
      <g clipPath={`url(#${maskId})`}>
        <g fill={COLORS.silver}>
          <path d="M18.5 4.5 L21.5 4.5 L20 0.5 Z" />
          <path d="M18.5 35.5 L21.5 35.5 L20 39.5 Z" />
          <path d="M35.5 18.5 L35.5 21.5 L39.5 20 Z" />
          <path d="M4.5 18.5 L4.5 21.5 L0.5 20 Z" />
        </g>
      </g>

      <g transform="rotate(45 20 20)">
        <path d="M20 8 L28 20 L20 32 L12 20 Z" fill={`url(#luxuryGradGD${idPrefix})`} />
        <circle cx="20" cy="20" r="1.3" fill="white" />
      </g>
    </svg>
  );
};

export default function BrandAssets() {
  const downloadSVG = (svgId: string, fileName: string) => {
    const svgElement = document.getElementById(svgId);
    if (!svgElement) return;
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadPNG = (svgId: string, fileName: string) => {
    const svgElement = document.getElementById(svgId)?.firstElementChild as SVGElement;
    if (!svgElement) return;

    // Clone the SVG to modify attributes for proper rendering
    const clonedSvg = svgElement.cloneNode(true) as SVGElement;
    clonedSvg.setAttribute('width', '560');
    clonedSvg.setAttribute('height', '560');
    
    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 560;
    canvas.width = size;
    canvas.height = size;
    
    const img = new Image();
    // Use proper base64 encoding that handles non-ASCII characters
    const encodedData = btoa(unescape(encodeURIComponent(svgData)));
    img.src = `data:image/svg+xml;base64,${encodedData}`;
    
    img.onload = () => {
      if (ctx) {
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
  };

  return (
    <div className="min-h-screen bg-dark py-24 px-6 selection:bg-primary selection:text-white text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12 text-left">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="w-4 h-4" />
            메인으로 돌아가기
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black italic mb-6 tracking-tighter uppercase">Brand Assets</h1>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-primary italic font-bold text-lg md:text-xl break-keep leading-relaxed underline decoration-white/20 underline-offset-8">
              "숨겨진 공간을 찾아내셨군요. 오늘 하루, 기분 좋은 직감이 당신을 이끌 거예요. <br/> 릴봄과 가이든의 비밀스러운 브랜드 자산을 공유합니다."
            </p>
          </div>
          <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[10px]">Pure Identity System / Resolution Focus (560px)</p>
        </motion.div>

        <div className="space-y-32">
          {/* Reelbom Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-white/10 flex-grow" />
              <h2 className="text-2xl font-black italic text-primary uppercase tracking-widest">Reelbom</h2>
              <div className="h-px bg-white/10 flex-grow" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-widest flex justify-between">
                  <span>Transparent</span>
                  <span className="text-white/20">SVG / PNG</span>
                </h3>
                <div className="aspect-square bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-2xl flex items-center justify-center p-12 mb-8 shadow-inner overflow-hidden">
                  <div id="rb-t-svg">
                    <ReelbomLogo idPrefix="T-rb" className="w-48 h-48 drop-shadow-2xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('rb-t-svg', 'reelbom-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('rb-t-svg', 'reelbom-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
              <div className="glass p-8 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-primary mb-6 uppercase tracking-widest flex justify-between">
                  <span>Solid Identity</span>
                  <span className="text-primary italic">DEEP NAVY</span>
                </h3>
                <div className="aspect-square bg-[#020617] rounded-2xl flex items-center justify-center p-12 mb-8 shadow-2xl overflow-hidden">
                  <div id="rb-s-svg">
                    <ReelbomLogo isSolid idPrefix="S-rb" className="w-48 h-48 drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('rb-s-svg', 'reelbom-solid')} className="py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('rb-s-svg', 'reelbom-solid')} className="py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Guiden Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-white/10 flex-grow" />
              <h2 className="text-2xl font-black italic text-secondary uppercase tracking-widest">Guiden</h2>
              <div className="h-px bg-white/10 flex-grow" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-widest flex justify-between">
                  <span>Pure Silver</span>
                  <span className="text-white/20">SVG / PNG</span>
                </h3>
                <div className="aspect-square bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-2xl flex items-center justify-center p-12 mb-8 shadow-inner overflow-hidden">
                  <div id="gd-t-svg">
                    <GuidenLogo idPrefix="T-gd" className="w-48 h-48 drop-shadow-2xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('gd-t-svg', 'guiden-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('gd-t-svg', 'guiden-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
              <div className="glass p-8 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-secondary mb-6 uppercase tracking-widest flex justify-between">
                  <span>Solid Identity</span>
                  <span className="text-secondary italic">TRUSTED</span>
                </h3>
                <div className="aspect-square bg-[#020617] rounded-2xl flex items-center justify-center p-12 mb-8 shadow-2xl overflow-hidden">
                  <div id="gd-s-svg">
                    <GuidenLogo isSolid idPrefix="S-gd" className="w-48 h-48 drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('gd-s-svg', 'guiden-solid')} className="py-4 bg-secondary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('gd-s-svg', 'guiden-solid')} className="py-4 bg-secondary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 text-gray-600 font-bold uppercase tracking-widest italic text-[10px]">
          © 2026 REELBOM x GUIDEN. LUXURY IDENTITY SYSTEM COMPLETE.
        </div>
      </div>
    </div>
  );
}
