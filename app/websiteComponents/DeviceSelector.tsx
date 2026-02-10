"use client";

import React, { useState } from 'react';
import { DeviceConfig, devices, getDevicesByPlatform } from '../constants/devices';
import { ChevronDownIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

interface DeviceSelectorProps {
  selectedDevice: DeviceConfig;
  onDeviceChange: (device: DeviceConfig) => void;
}

export default function DeviceSelector({ selectedDevice, onDeviceChange }: DeviceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'ios' | 'android' | 'generic'>('all');

  const filteredDevices = selectedPlatform === 'all' 
    ? devices 
    : getDevicesByPlatform(selectedPlatform);

  const platforms = [
    { id: 'all', label: 'All Devices', icon: '📱' },
    { id: 'ios', label: 'iOS', icon: '🍎' },
    { id: 'android', label: 'Android', icon: '🤖' },
    { id: 'generic', label: 'Generic', icon: '📱' }
  ];

  return (
    <div className="relative">
      {/* Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 bg-card border border-violet-500/30 rounded-lg hover:bg-violet-500/10 transition-colors min-w-[280px]"
      >
        <DevicePhoneMobileIcon className="w-5 h-5 text-violet-400" />
        <div className="flex-1 text-left">
          <div className="text-sm font-medium text-foreground">{selectedDevice.name}</div>
          <div className="text-xs text-muted-foreground">
            {selectedDevice.width}×{selectedDevice.height}px • {selectedDevice.platform.toUpperCase()}
          </div>
        </div>
        <ChevronDownIcon className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full left-0 mt-2 w-[320px] bg-card border border-violet-500/30 rounded-lg shadow-2xl z-50 overflow-hidden">
            {/* Platform Filter */}
            <div className="p-3 border-b border-border">
              <div className="flex gap-2">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id as any)}
                    className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      selectedPlatform === platform.id
                        ? 'bg-violet-500 text-white'
                        : 'bg-background text-muted-foreground hover:bg-violet-500/20'
                    }`}
                  >
                    <span className="mr-1">{platform.icon}</span>
                    {platform.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Device List */}
            <div className="max-h-[400px] overflow-y-auto">
              {filteredDevices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => {
                    onDeviceChange(device);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-violet-500/10 transition-colors border-b border-border/50 last:border-0 ${
                    selectedDevice.id === device.id ? 'bg-violet-500/20' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-foreground">{device.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {device.width}×{device.height}px • {device.pixelRatio}x
                      </div>
                    </div>
                    <div className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
                      {device.platform.toUpperCase()}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
