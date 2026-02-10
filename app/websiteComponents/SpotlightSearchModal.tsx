"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { componentCategories } from "../constants/componentCategories";

interface SearchResult {
  name: string;
  path: string;
  category: string;
  isNew?: boolean;
}

interface SpotlightSearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SpotlightSearchModal({ open, onClose }: SpotlightSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Get all components from categories
  const allComponents: SearchResult[] = componentCategories.flatMap((category) =>
    category.items.map((item) => ({
      name: item.name,
      path: item.path,
      category: category.category,
      isNew: item.isNew,
    }))
  );

  // Filter results based on search query and category
  useEffect(() => {
    let results = allComponents;

    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    setFilteredResults(results);
    setSelectedIndex(0);
  }, [searchQuery, selectedCategory]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
        e.preventDefault();
        handleSelectComponent(filteredResults[selectedIndex].path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, selectedIndex, filteredResults, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearchQuery("");
      setSelectedCategory("All");
    }
  }, [open]);

  const handleSelectComponent = (path: string) => {
    router.push(path);
    onClose();
  };

  const categories = ["All", ...componentCategories.map((cat) => cat.category)];

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2 }}
        className="bg-card border border-violet-500/30 rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
          <MagnifyingGlassIcon className="w-5 h-5 text-violet-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-violet-500/20 rounded-md transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 px-4 py-3 border-b border-border overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-violet-500 text-white"
                  : "bg-background text-muted-foreground hover:bg-violet-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="py-2">
              {filteredResults.map((result, index) => (
                <button
                  key={result.path}
                  onClick={() => handleSelectComponent(result.path)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                    index === selectedIndex
                      ? "bg-violet-500/20"
                      : "hover:bg-violet-500/10"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium">{result.name}</span>
                    <span className="text-xs text-muted-foreground">{result.category}</span>
                  </div>
                  {result.isNew && (
                    <span className="px-2 py-1 bg-violet-500 text-white text-xs font-semibold rounded">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground">
              <p>No components found</p>
              <p className="text-sm mt-2">Try a different search query</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-border bg-background/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-background border border-border rounded">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-background border border-border rounded">↵</kbd>
                Select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-background border border-border rounded">ESC</kbd>
              Close
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
