import heicToPngMac from "@/content/articles/heic-to-png-mac.md?raw";
import mergePdfMac from "@/content/articles/merge-pdf-mac.md?raw";
import extractAudioFromVideoMac from "@/content/articles/extract-audio-from-video-mac.md?raw";
import stopUsingOnlineConverters from "@/content/articles/stop-using-online-converters.md?raw";
import openRar7zMac from "@/content/articles/open-rar-7z-mac.md?raw";
import flacToM4aWavMac from "@/content/articles/flac-to-m4a-wav-mac.md?raw";
import pdfToJpgPngMac from "@/content/articles/pdf-to-jpg-png-mac.md?raw";
import voiceMemosToWavMac from "@/content/articles/voice-memos-to-wav-mac.md?raw";
import removeBackgroundMac from "@/content/articles/remove-background-mac.md?raw";
import compressFilesMac from "@/content/articles/compress-files-mac.md?raw";
import enhancePhotosMac from "@/content/articles/enhance-photos-mac.md?raw";
import webpHeifConverterMac from "@/content/articles/webp-heif-converter-mac.md?raw";

import heicImage from "@/assets/articles/article1.webp";
import mergePdfImage from "@/assets/articles/article2.webp";
import extractAudioImage from "@/assets/articles/article3.webp";
import privacyImage from "@/assets/articles/article4.webp";
import archiveImage from "@/assets/articles/article_rar_7z.webp";
import flacImage from "@/assets/articles/article_flac.webp";
import pdfExportImage from "@/assets/articles/article_pdf_export.webp";
import voiceMemosImage from "@/assets/articles/article_voice_memos.webp";
import removeBgEnhanceImage from "@/assets/removebg-enhance.webp";
import compressMediaImage from "@/assets/compress-media.webp";
import batchConvertImage from "@/assets/batch-convert.webp";

export type ArticleSource = {
  markdown: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const articleSources = [
  { markdown: heicToPngMac, image: heicImage, imageWidth: 2752, imageHeight: 1536 },
  { markdown: mergePdfMac, image: mergePdfImage, imageWidth: 1376, imageHeight: 768 },
  { markdown: extractAudioFromVideoMac, image: extractAudioImage, imageWidth: 1056, imageHeight: 1008 },
  { markdown: stopUsingOnlineConverters, image: privacyImage, imageWidth: 779, imageHeight: 360 },
  { markdown: openRar7zMac, image: archiveImage, imageWidth: 2272, imageHeight: 1292 },
  { markdown: flacToM4aWavMac, image: flacImage, imageWidth: 763, imageHeight: 636 },
  { markdown: pdfToJpgPngMac, image: pdfExportImage, imageWidth: 1504, imageHeight: 704 },
  { markdown: voiceMemosToWavMac, image: voiceMemosImage, imageWidth: 1128, imageHeight: 696 },
  { markdown: removeBackgroundMac, image: removeBgEnhanceImage, imageWidth: 2880, imageHeight: 1800 },
  { markdown: compressFilesMac, image: compressMediaImage, imageWidth: 2880, imageHeight: 1800 },
  { markdown: enhancePhotosMac, image: removeBgEnhanceImage, imageWidth: 2880, imageHeight: 1800 },
  { markdown: webpHeifConverterMac, image: batchConvertImage, imageWidth: 1920, imageHeight: 1200 },
] satisfies ArticleSource[];

export const legacyArticleSlugAliases: Record<string, string> = {
  "heic-to-png-mac-batch-convert": "heic-to-png-mac",
  "merge-pdf-mac-combine-word-images": "merge-pdf-mac",
  "extract-audio-from-video-mac-mov-to-wav": "extract-audio-from-video-mac",
  "stop-using-online-file-converters": "stop-using-online-converters",
  "open-rar-7z-mac-converter": "open-rar-7z-mac",
  "flac-to-m4a-wav-mac-converter": "flac-to-m4a-wav-mac",
  "pdf-to-jpg-split-pages-mac": "pdf-to-jpg-png-mac",
  "convert-voice-memos-wav-mac": "voice-memos-to-wav-mac",
};
