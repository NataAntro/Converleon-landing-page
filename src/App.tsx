import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HeicToPngMacBatchConvert from "./pages/HeicToPngMacBatchConvert";
import MergePdfMacCombineWordImages from "./pages/MergePdfMacCombineWordImages";
import ExtractAudioFromVideoMacMovToWav from "./pages/ExtractAudioFromVideoMacMovToWav";
import StopUsingOnlineFileConverters from "./pages/StopUsingOnlineFileConverters";
import OpenRar7zMacConverter from "./pages/OpenRar7zMacConverter";
import FlacToM4aWavMacConverter from "./pages/FlacToM4aWavMacConverter";
import PdfToJpgSplitPagesMac from "./pages/PdfToJpgSplitPagesMac";
import ConvertVoiceMemosWavMac from "./pages/ConvertVoiceMemosWavMac";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/heic-to-png-mac-batch-convert" element={<HeicToPngMacBatchConvert />} />
          <Route path="/heic-to-png-mac-batch-convert/" element={<HeicToPngMacBatchConvert />} />
          <Route path="/merge-pdf-mac-combine-word-images" element={<MergePdfMacCombineWordImages />} />
          <Route path="/merge-pdf-mac-combine-word-images/" element={<MergePdfMacCombineWordImages />} />
          <Route path="/extract-audio-from-video-mac-mov-to-wav" element={<ExtractAudioFromVideoMacMovToWav />} />
          <Route path="/extract-audio-from-video-mac-mov-to-wav/" element={<ExtractAudioFromVideoMacMovToWav />} />
          <Route path="/stop-using-online-file-converters" element={<StopUsingOnlineFileConverters />} />
          <Route path="/stop-using-online-file-converters/" element={<StopUsingOnlineFileConverters />} />
          <Route path="/open-rar-7z-mac-converter" element={<OpenRar7zMacConverter />} />
          <Route path="/open-rar-7z-mac-converter/" element={<OpenRar7zMacConverter />} />
          <Route path="/flac-to-m4a-wav-mac-converter" element={<FlacToM4aWavMacConverter />} />
          <Route path="/flac-to-m4a-wav-mac-converter/" element={<FlacToM4aWavMacConverter />} />
          <Route path="/pdf-to-jpg-split-pages-mac" element={<PdfToJpgSplitPagesMac />} />
          <Route path="/pdf-to-jpg-split-pages-mac/" element={<PdfToJpgSplitPagesMac />} />
          <Route path="/convert-voice-memos-wav-mac" element={<ConvertVoiceMemosWavMac />} />
          <Route path="/convert-voice-memos-wav-mac/" element={<ConvertVoiceMemosWavMac />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
