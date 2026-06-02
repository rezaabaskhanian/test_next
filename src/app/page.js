export default function Home() {
  return (
    <main className="min-h-screen bg-red-500 flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold text-white">
        TAILWIND WORKING
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <p className="text-black text-2xl">
          Next.js + Tailwind OK ✅
        </p>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
        Test Button
      </button>
    </main>
  );
}