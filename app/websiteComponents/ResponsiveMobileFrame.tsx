import React from 'react';
import { DeviceConfig } from '../constants/devices';

interface ResponsiveMobileFrameProps {
  children: React.ReactNode;
  device: DeviceConfig;
  className?: string;
  scale?: number;
}

export default function ResponsiveMobileFrame({ 
  children, 
  device, 
  className = '',
  scale = 1 
}: ResponsiveMobileFrameProps) {
  const frameStyles = {
    ios: {
      borderRadius: '2.5rem',
      padding: '1.5rem 0.75rem 2rem 0.75rem',
      background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      border: '2px solid #333'
    },
    android: {
      borderRadius: '2rem',
      padding: '1.25rem 0.5rem 1.75rem 0.5rem',
      background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      border: '2px solid #333'
    },
    generic: {
      borderRadius: '2rem',
      padding: '1rem 0.5rem 1.5rem 0.5rem',
      background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      border: '2px solid #333'
    }
  };

  const displayWidth = device.width / device.pixelRatio;
  const displayHeight = device.height / device.pixelRatio;

  return (
    <div 
      className={`relative mx-auto ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
    >
      {/* Mobile Frame */}
      <div 
        className="relative bg-gray-900 border-gray-700"
        style={{
          width: `${displayWidth}px`,
          height: `${displayHeight}px`,
          ...frameStyles[device.platform]
        }}
      >
        {/* Status Bar - iOS */}
        {device.platform === 'ios' && (
          <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-8 text-white text-xs">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <span className="ml-2">Carrier</span>
            </div>
            <div className="text-center font-medium">9:41</div>
            <div className="flex items-center gap-1">
              <span>100%</span>
              <div className="w-6 h-3 border border-white rounded-sm">
                <div className="w-full h-full bg-green-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        )}

        {/* Status Bar - Android */}
        {device.platform === 'android' && (
          <div className="absolute top-3 left-0 right-0 flex justify-between items-center px-6 text-white text-xs">
            <div className="flex items-center gap-1">
              <span>9:41</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              </div>
              <div className="w-5 h-2.5 border border-white rounded-sm">
                <div className="w-4/5 h-full bg-green-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        )}

        {/* Screen Content */}
        <div 
          className="bg-background rounded-2xl overflow-hidden relative"
          style={{
            width: '100%',
            height: device.platform === 'ios' ? 'calc(100% - 3rem)' : 
                   device.platform === 'android' ? 'calc(100% - 2.5rem)' : 'calc(100% - 2rem)',
            marginTop: device.platform === 'ios' ? '3rem' : 
                      device.platform === 'android' ? '2.5rem' : '2rem'
          }}
        >
          {children}
        </div>

        {/* Home Indicator (iOS) */}
        {device.platform === 'ios' && device.height > 700 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
        )}
      </div>

      {/* Device Info */}
      <div className="mt-2 text-center">
        <span className="text-xs text-muted-foreground">
          {device.name} • {device.width}×{device.height}px
        </span>
      </div>
    </div>
  );
}
