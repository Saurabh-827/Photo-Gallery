import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/gallery-icon.png"
              alt="Gallery Icon"
              className="h-8 w-8"
            />
            <h1 className="text-2xl font-semibold text-slate-900">
              Photo Gallery
            </h1>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Gallery />
      </main>
    </div>
  );
}
