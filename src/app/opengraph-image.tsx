import { ImageResponse } from 'next/og';

export const alt = "BLOO COFFEE — Specialty Coffee Shop in L'Aouina, Tunis";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a3a52',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 96, letterSpacing: '-0.03em', marginBottom: 24, fontWeight: 800 }}>
          BLOO <span style={{ color: '#f0f4f8', fontStyle: 'italic', marginLeft: 12 }}>COFFEE</span>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#f0f4f8', opacity: 0.8 }}>
          {'Coffee Shop in L\u2019Aouina, Tunis — 09:00 to 23:00'}
        </div>
      </div>
    ),
    { ...size }
  );
}