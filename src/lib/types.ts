// src/lib/types.ts
// ───────────────────────────────────────────────────────────────────────────
// This matches exactly the shape of each object inside downloads.json.
// You can import `DownloadEntryRaw` elsewhere if you want types.

export interface DownloadEntryRaw {
  slug: string;
  title: string;
  description: string;
  filename: string;   // e.g. "short-title-better-bedroc.zip"
  thumbnail: string;  // e.g. "short-title-better-bedroc.jpg"
  date: string;       // e.g. "2025-06-01"
  ytVideoId?: string; // optional YouTube embed ID, if present
  externalUrl?: string;
}