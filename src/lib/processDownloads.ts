// src/lib/processDownloads.ts
import type { DownloadEntryRaw } from "./types";
import { THUMB_BASE, ZIP_BASE } from "./urls";

/**
 * Convert a raw entry into one with absolute URLs.
 * If both "filename" and "externalUrl" are missing, returns null.
 */
export function decorateEntry(
  entry: DownloadEntryRaw
): (DownloadEntryRaw & { downloadUrl: string; thumbUrl: string }) | null {
  // If the entry has neither a local file nor an external link, skip it
  if (!entry.filename && !entry.externalUrl) return null;

  const safeFilename  = (entry.filename  ?? "").replace(/^\/+/, "");
  const safeThumbnail = (entry.thumbnail ?? "").replace(/^\/+/, "");

  const downloadUrl =
    entry.externalUrl ||                 // prefer external
    (safeFilename ? `${ZIP_BASE}/${safeFilename}` : "");

  const thumbUrl =
    safeThumbnail ? `${THUMB_BASE}/${safeThumbnail}` : "";

  return {
    ...entry,
    downloadUrl,
    thumbUrl,
  };
}
