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
};

export const articleSources = [
  { markdown: heicToPngMac, image: heicImage },
  { markdown: mergePdfMac, image: mergePdfImage },
  { markdown: extractAudioFromVideoMac, image: extractAudioImage },
  { markdown: stopUsingOnlineConverters, image: privacyImage },
  { markdown: openRar7zMac, image: archiveImage },
  { markdown: flacToM4aWavMac, image: flacImage },
  { markdown: pdfToJpgPngMac, image: pdfExportImage },
  { markdown: voiceMemosToWavMac, image: voiceMemosImage },
  { markdown: removeBackgroundMac, image: removeBgEnhanceImage },
  { markdown: compressFilesMac, image: compressMediaImage },
  { markdown: enhancePhotosMac, image: removeBgEnhanceImage },
  { markdown: webpHeifConverterMac, image: batchConvertImage },
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
