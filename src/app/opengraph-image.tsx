import { ImageResponse } from 'next/og';

export const alt = 'Omega Coffe — Coffee, Games & Good Moments in L\'Aouina, Tunis';
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
          backgroundColor: '#121212',
          color: '#F9F7F2',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 96, letterSpacing: '-0.03em', marginBottom: 24 }}>
          Omega <span style={{ color: '#C5A059', fontStyle: 'italic', marginLeft: 12 }}>Coffe</span>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#F9F7F2', opacity: 0.7 }}>
          {'Coffee · Games · Good Moments — L\u2019Aouina, Tunis'}
        </div>
      </div>
    ),
    { ...size }
  );
}