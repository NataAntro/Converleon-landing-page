import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Does Converleon upload my files?",
      answer: "No, everything is processed locally on your Mac. No files are ever uploaded to the cloud or any external servers."
    },
    {
      question: "Can I drop mixed file types?",
      answer: "Yes! Smart mixed drops allow you to drop different file types together. Converleon will convert compatible files and safely skip unsupported ones."
    },
    {
      question: "Can I export MP3?",
      answer: "MP3 export is not available due to licensing restrictions. However, you can export to M4A, WAV, AIFF, and CAF formats."
    },
    {
      question: "Do you support password-protected archives?",
      answer: "Yes, password-protected ZIP and RAR archives are supported. However, password-protected 7Z archives are not supported at this time."
    },
    {
      question: "What happens to my folder structure when packing ZIP?",
      answer: "Your folder structure is preserved when creating ZIP archives, maintaining the original organization of your files."
    },
    {
      question: "Does DOC convert to PDF with images?",
      answer: "DOCX to PDF conversion preserves images and formatting. DOC to PDF may export text-only depending on the system parser."
    },
    {
      question: "Is Converleon really offline?",
      answer: "Yes, Converleon works completely offline with no internet connection required. All processing happens on your device."
    },
    {
      question: "How many files can I convert at once?",
      answer: "You can batch convert hundreds of files at once. The actual limit depends on your Mac's available memory and storage."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Converleon
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="glass-card rounded-2xl px-6 border-0"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
