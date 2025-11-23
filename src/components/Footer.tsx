const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Converleon</h3>
            <p className="text-muted-foreground">
              The elegant multi-tool for your files.
            </p>
          </div>
          
          <div className="md:text-right">
            <p className="text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">Support:</span>{" "}
              converleonapp@gmail.com
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Licenses
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Converleon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
