export default function AbstractIllustration() {
  return (
    <div className="relative h-80 w-full overflow-hidden md:h-96">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(29,78,216,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(29,78,216,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />

      <div className="absolute top-8 left-6 h-16 w-16 rounded-2xl border border-blue-100 bg-white shadow-sm" />
      <div className="absolute top-12 left-10 h-3 w-3 rounded-full bg-blue-200" />

      <div className="absolute right-8 top-12 h-24 w-40 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
        <div className="mb-2 h-2 w-16 rounded-full bg-blue-100" />
        <div className="mb-1 h-1.5 w-full rounded-full bg-gray-100" />
        <div className="mb-1 h-1.5 w-3/4 rounded-full bg-gray-100" />
        <div className="h-1.5 w-1/2 rounded-full bg-gray-100" />
      </div>

      <div className="absolute right-16 bottom-24 h-20 w-20 rounded-full border-2 border-blue-100" />
      <div className="absolute right-20 bottom-28 h-3 w-3 rounded-full bg-blue-300" />

      <div className="absolute bottom-12 left-8 h-28 w-28 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
        <div className="mb-2 flex gap-1">
          <div className="h-8 w-2 rounded-full bg-blue-200" />
          <div className="h-6 w-2 rounded-full bg-blue-300" />
          <div className="h-10 w-2 rounded-full bg-blue-400" />
          <div className="h-5 w-2 rounded-full bg-blue-200" />
          <div className="h-9 w-2 rounded-full bg-blue-300" />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/3 h-px w-24 -translate-x-1/2 rotate-45 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-px w-32 -translate-x-1/2 -rotate-12 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="absolute left-1/3 top-8 h-2 w-2 rounded-full bg-blue-200 opacity-60" />
      <div className="absolute right-1/4 top-1/4 h-1.5 w-1.5 rounded-full bg-blue-300 opacity-40" />
      <div className="absolute left-1/2 bottom-1/3 h-2 w-2 rounded-full bg-blue-200 opacity-50" />
      <div className="absolute right-1/3 bottom-1/4 h-1.5 w-1.5 rounded-full bg-blue-300 opacity-40" />

      <div className="absolute bottom-16 right-1/3 h-12 w-12 rounded-xl border border-blue-50 bg-blue-50/50" />

      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-blue-200/50 bg-white shadow-sm" />
    </div>
  );
}
