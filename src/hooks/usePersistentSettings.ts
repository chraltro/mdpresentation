import { useState, useEffect } from "react";
import { slideTemplates } from "../utils/slide-templates";
import { SlideLayoutOptions } from "../utils/layoutOptions";
import {
  LOCAL_STORAGE_MARKDOWN_TEXT_KEY,
  LOCAL_STORAGE_THEME_KEY,
  LOCAL_STORAGE_FONT_MULTIPLIER_KEY,
  LOCAL_STORAGE_LAYOUT_OPTIONS_KEY,
  LOCAL_STORAGE_FONT_KEY, // Import new key
} from "../utils/local-storage";

export function usePersistentSettings() {
  const [markdownText, setMarkdownText] = useState<string>("");
  const [activeTheme, setActiveTheme] = useState<string>("nordDark");
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1);
  const [activeFont, setActiveFont] = useState<string>("Inter"); // New state for active font, defaults to Inter
  const [slideLayoutOptions, setSlideLayoutOptions] = useState<SlideLayoutOptions>({
    layoutOnFirstPage: false,
    headerFooters: [],
  });

  useEffect(() => {
    const savedMarkdown = localStorage.getItem(LOCAL_STORAGE_MARKDOWN_TEXT_KEY);
    setMarkdownText(savedMarkdown || slideTemplates.initialMarkdown);
    setActiveTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || "nordDark");
    const storedMultiplier = localStorage.getItem(LOCAL_STORAGE_FONT_MULTIPLIER_KEY);
    setFontSizeMultiplier(storedMultiplier ? parseFloat(storedMultiplier) : 1);
    setActiveFont(localStorage.getItem(LOCAL_STORAGE_FONT_KEY) || "Inter"); // Load active font
    const storedLayoutOptions = localStorage.getItem(LOCAL_STORAGE_LAYOUT_OPTIONS_KEY);
    setSlideLayoutOptions(
      storedLayoutOptions
        ? JSON.parse(storedLayoutOptions)
        : {
            layoutOnFirstPage: false,
            headerFooters: [],
          },
    );
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_MARKDOWN_TEXT_KEY, markdownText);
    }, 500);
    return () => clearTimeout(handler);
  }, [markdownText]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_FONT_MULTIPLIER_KEY, fontSizeMultiplier.toString());
  }, [fontSizeMultiplier]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_LAYOUT_OPTIONS_KEY, JSON.stringify(slideLayoutOptions));
  }, [slideLayoutOptions.headerFooters]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_FONT_KEY, activeFont); // Save active font
  }, [activeFont]);

  return {
    markdownText,
    setMarkdownText,
    activeTheme,
    setActiveTheme,
    fontSizeMultiplier,
    setFontSizeMultiplier,
    activeFont, // Return activeFont
    setActiveFont, // Return setActiveFont
    slideLayoutOptions,
    setSlideLayoutOptions,
  };
}
