// src/vite-env.d.ts

/// <reference types="vite/client" />

// This explicitly handles the '?url' suffix
declare module '*.css?url' {
  const url: string;
  export default url;
}
