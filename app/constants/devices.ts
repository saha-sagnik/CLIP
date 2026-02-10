// Device configurations for preview
export interface DeviceConfig {
  id: string;
  name: string;
  width: number;
  height: number;
  platform: 'ios' | 'android' | 'generic';
  pixelRatio: number;
}

export const devices: DeviceConfig[] = [
  // iPhone devices
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    width: 393,
    height: 852,
    platform: 'ios',
    pixelRatio: 3
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    width: 390,
    height: 844,
    platform: 'ios',
    pixelRatio: 3
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    width: 375,
    height: 667,
    platform: 'ios',
    pixelRatio: 2
  },
  {
    id: 'iphone-13-mini',
    name: 'iPhone 13 mini',
    width: 375,
    height: 812,
    platform: 'ios',
    pixelRatio: 3
  },
  
  // iPad devices
  {
    id: 'ipad-air',
    name: 'iPad Air',
    width: 820,
    height: 1180,
    platform: 'ios',
    pixelRatio: 2
  },
  {
    id: 'ipad-mini',
    name: 'iPad Mini',
    width: 744,
    height: 1133,
    platform: 'ios',
    pixelRatio: 2
  },
  
  // Android devices
  {
    id: 'pixel-7',
    name: 'Pixel 7',
    width: 412,
    height: 915,
    platform: 'android',
    pixelRatio: 2.625
  },
  {
    id: 'pixel-7-pro',
    name: 'Pixel 7 Pro',
    width: 412,
    height: 892,
    platform: 'android',
    pixelRatio: 3.5
  },
  {
    id: 'samsung-s21',
    name: 'Samsung Galaxy S21',
    width: 360,
    height: 800,
    platform: 'android',
    pixelRatio: 3
  },
  {
    id: 'samsung-s21-ultra',
    name: 'Samsung Galaxy S21 Ultra',
    width: 384,
    height: 854,
    platform: 'android',
    pixelRatio: 3.5
  },
  
  // Generic
  {
    id: 'mobile-generic',
    name: 'Mobile (Generic)',
    width: 375,
    height: 667,
    platform: 'generic',
    pixelRatio: 2
  },
  {
    id: 'tablet-generic',
    name: 'Tablet (Generic)',
    width: 768,
    height: 1024,
    platform: 'generic',
    pixelRatio: 2
  }
];

export const getDeviceById = (id: string): DeviceConfig | undefined => {
  return devices.find(device => device.id === id);
};

export const getDevicesByPlatform = (platform: 'ios' | 'android' | 'generic') => {
  return devices.filter(device => device.platform === platform);
};
