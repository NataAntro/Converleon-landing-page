import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const faqs = [
    {
      question: "Does Converleon upload my files?",
      answer: "No. Everything is processed on your Mac. Nothing is sent to the cloud or any outside server."
    },
    {
      question: "Can I drop different file types together?",
      answer: "Yes. Smart mixed drops let you combine file types in one go — Converleon converts the compatible ones and skips the rest."
    },
    {
      question: "Can I export MP3?",
      answer: "No, MP3 export isn't available because of licensing restrictions. You can export to M4A, WAV, AIFF, and CAF instead."
    },
    {
      question: "Does Remove BG upload my images?",
      answer: "No. Background removal runs on your Mac and saves a transparent PNG. It needs macOS 14 or later."
    },
    {
      question: "How does compression work?",
      answer: "Pick Smallest, Balanced, or Quality. Images, video, and audio are compressed on-device, each saved in a practical format for sharing or storage."
    },
    {
      question: "Are password-protected archives supported?",
      answer: "Password-protected ZIP and RAR files are. Password-protected 7Z archives aren't supported yet."
    },
    {
      question: "What happens to my folder structure when I pack a ZIP?",
      answer: "It's preserved — the ZIP keeps your files organized exactly as they were."
    },
    {
      question: "Does DOC convert to PDF with images?",
      answer: "DOCX to PDF keeps images and formatting. DOC to PDF may come through as text only, depending on the system parser."
    },
    {
      question: "Is Converleon genuinely offline?",
      answer: "Yes. No internet connection is required at any point — all the work happens on your device."
    },
    {
      question: "How many files can I convert at once?",
      answer: "Hundreds in a single batch. The real ceiling is your Mac's available memory and storage."
    }
  ];

  const MOBILE_INITIAL = 4;
  const hiddenCount = faqs.length - MOBILE_INITIAL;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Common questions
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className={`glass-card rounded-2xl px-6 border-0 ${
                !showAllMobile && index >= MOBILE_INITIAL ? "hidden md:block" : ""
              }`}
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {!showAllMobile && hiddenCount > 0 && (
          <div className="mt-6 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobile(true)}
              className="rounded-full border border-white/15 bg-background/50 px-5 py-2 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-background/70"
            >
              Show {hiddenCount} more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
