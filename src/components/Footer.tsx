const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Converleon</h3>
            <p className="text-muted-foreground">
              The elegant multi-tool for your files.
            </p>
          </div>
          
          <div className="md:text-right flex flex-col items-start md:items-end gap-2">
            <a
              href="/guides/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Mac conversion guides
            </a>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Support:</span>{" "}
              <a href="mailto:converleonapp@gmail.com" className="hover:text-primary transition-colors">
                converleonapp@gmail.com
              </a>
            </p>
            <a 
              href="/privacy-policy.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              App Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
