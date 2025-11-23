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
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Support:</span>{" "}
              converleonapp@gmail.com
            </p>
            <a 
              href="/privacy-policy.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
