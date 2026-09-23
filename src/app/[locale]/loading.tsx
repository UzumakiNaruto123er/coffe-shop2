export default function LocaleLoading() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center" aria-busy="true" aria-label="Loading">
      <div className="flex flex-col items-center gap-6" role="status">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-sm border-2 border-gold-500/20" />
          <div className="absolute inset-0 rounded-sm border-2 border-t-gold-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        <span className="sr-only">Loading…</span>
      </div>
    </main>
  );
}