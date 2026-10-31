export default function Spinner() {
  return (
    <div role="status" className="flex justify-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
      <span className="sr-only">Loading photos...</span>
    </div>
  );
}
