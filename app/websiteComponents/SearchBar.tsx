"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onOpen?: () => void;
}

const SearchBar = ({ onOpen }: SearchBarProps) => {
  return (
    <button
      onClick={onOpen}
      className="hidden md:flex items-center gap-3 max-w-md w-full px-4 py-2.5 text-sm rounded-lg border border-border text-muted-foreground bg-transparent backdrop-blur-md hover:border-primary/50 transition-colors"
    >
      <MagnifyingGlassIcon className="w-4 h-4" />
      <span>Search components</span>
      <div className="ml-auto flex items-center gap-1">
        <kbd className="px-2 py-1 text-xs bg-background border border-border rounded">⌘</kbd>
        <kbd className="px-2 py-1 text-xs bg-background border border-border rounded">K</kbd>
      </div>
    </button>
  );
};

export default SearchBar;