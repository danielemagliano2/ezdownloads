// src/lib/processDownloads.ts
import type { DownloadEntryRaw } from "./types";
import { THUMB_BASE, ZIP_BASE } from "./urls";

/**
 * Given a raw entry from downloads.json, returns a copy with:
 *   • downloadUrl = `${ZIP_BASE}/${filename}`
 *   • thumbUrl    = `${THUMB_BASE}/${thumbnail}`
 *
 * Strips any leading "/" from filename or thumbnail, just in case.
 */
export function decorateEntry(entry: DownloadEntryRaw) {
  const safeFilename  = entry.filename.replace(/^\/+/, "");
  const safeThumbnail = entry.thumbnail.replace(/^\/+/, "");

  // ← use back‐ticks around the interpolation
  const downloadUrl = `${ZIP_BASE}/${safeFilename}`;
  const thumbUrl    = `${THUMB_BASE}/${safeThumbnail}`;

  return {
    ...entry,
    downloadUrl,
    thumbUrl,
  };
}
