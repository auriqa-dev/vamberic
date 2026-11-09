export function Footer() {
  return (
      <footer className="py-12 border-t border-white/10 bg-background text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-white">
                <img src="/lion_head.png" alt="Vamberic Group lion emblem" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-white tracking-wide">VAMBERIC GROUP</span>
            </div>

            <p className="text-muted-foreground text-center max-w-md">
              A product studio building and operating focused products for real commercial problems.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
            <p className="text-muted-foreground">
              &copy; 2026 Vamberic Studio Ltd. All rights reserved.
            </p>
            <a
              href="mailto:info@vamberic.com"
              className="text-primary hover:underline"
            >
              info@vamberic.com
            </a>
          </div>
        </div>
      </footer>
  );
}
