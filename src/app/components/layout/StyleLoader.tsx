"use client";
import { useState, useEffect } from "react";

interface StyleLoaderProps {
  stylesheets: string[];
  children: React.ReactNode;
}

export function StyleLoader({ stylesheets, children }: StyleLoaderProps) {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    let loadedStyles = 0;
    const links: HTMLLinkElement[] = [];

    const onStyleLoad = () => {
      loadedStyles++;
      if (loadedStyles === stylesheets.length) {
        setStylesLoaded(true);
      }
    };

    stylesheets.forEach((stylesheet) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = stylesheet;
      link.onload = onStyleLoad;
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach((link) => link.remove());
    };
  }, [stylesheets]);
  return stylesLoaded ? <>{children}</> : null;
}
