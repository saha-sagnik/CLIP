// Type definitions for ClipUI components

export interface PropDefinition {
  prop: string;
  type: string;
  default: string;
  desc: string;
}

export interface DependencyInfo {
  name: string;
  version: string;
}

export interface FrameworkCode {
  id: string;
  label: string;
  code: string;
}

export interface ComponentMetadata {
  name: string;
  description: string;
  category: string;
  tags: string[];
  platforms: ('swiftui' | 'compose' | 'reactnative')[];
  dependencies: DependencyInfo[];
}

export type Platform = 'ios' | 'android' | 'generic';
export type Framework = 'swiftui' | 'compose' | 'reactnative';
export type TabType = 'preview' | 'code' | 'cli';
