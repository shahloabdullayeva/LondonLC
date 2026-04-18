import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "London LC – IELTS Practice Platform",
  description: "Authentic IELTS Reading and Listening practice for London Language Centre students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Inline script: read stored theme and stamp it on <html> before
  // the first paint, so the cream / slate / custom themes don't
  // flash the default dark chrome on load. Handles both the v1
  // plain-string preset format AND the v2 JSON custom-palette format.
  const noFlashScript = `(function(){try{var r=localStorage.getItem('london-lc.site-theme');if(!r)return;if(r==='dark'||r==='sepia'||r==='slate'){document.documentElement.dataset.siteTheme=r;return;}var c=JSON.parse(r);if(!c)return;if(c.kind==='preset'){document.documentElement.dataset.siteTheme=c.name;return;}if(c.kind!=='custom'||typeof c.bg!=='string')return;var h=c.bg.replace('#','');if(h.length===3)h=h.split('').map(function(x){return x+x;}).join('');var n=parseInt(h,16);if(isNaN(n))return;var R=(n>>16)&255,G=(n>>8)&255,B=n&255;var lum=function(r,g,b){var ch=function(v){v=v/255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);};return 0.2126*ch(r)+0.7152*ch(g)+0.0722*ch(b);};var dark=lum(R,G,B)<0.5;var tc=c.text?c.text:(dark?'rgb(255,255,255)':'rgb(24,24,24)');var T=c.text?(function(){var hh=c.text.replace('#','');if(hh.length===3)hh=hh.split('').map(function(x){return x+x;}).join('');var nn=parseInt(hh,16);return[(nn>>16)&255,(nn>>8)&255,nn&255];})():(dark?[255,255,255]:[24,24,24]);var rgba=function(a){return'rgba('+T[0]+','+T[1]+','+T[2]+','+a+')';};var mix=function(t){return[Math.round(R+((dark?255:0)-R)*t),Math.round(G+((dark?255:0)-G)*t),Math.round(B+((dark?255:0)-B)*t)];};var hex=function(a){return'#'+a.map(function(x){return x.toString(16).padStart(2,'0');}).join('');};var s=document.documentElement.style;s.setProperty('--site-bg',c.bg);s.setProperty('--site-bg-elevated',hex(mix(dark?0.02:0.03)));s.setProperty('--site-card',hex(mix(dark?0.05:0.04)));s.setProperty('--site-card-2',hex(mix(dark?0.09:0.08)));s.setProperty('--site-nav',hex(mix(dark?0.03:0.03)));s.setProperty('--site-text',tc);s.setProperty('--site-text-muted',rgba(0.65));s.setProperty('--site-text-sub',rgba(0.42));s.setProperty('--site-border',rgba(0.1));s.setProperty('--site-border-strong',rgba(0.2));s.setProperty('--site-accent',c.accent||(dark?'#c4b5fd':'#4c5f7f'));s.setProperty('--site-accent-dim',rgba(0.08));s.setProperty('--site-accent-border',rgba(0.18));s.setProperty('--site-glow-1',rgba(0.04));s.setProperty('--site-glow-2',rgba(0.02));document.documentElement.dataset.siteTheme='custom';}catch(e){}})();`;

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,200..900;1,9..144,200..900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZR8XWQZF8P" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZR8XWQZF8P');`}
        </Script>
      </head>
      <body>
        {children}
        <Sidebar />
        <ThemeToggle variant="floating" />
      </body>
    </html>
  );
}
