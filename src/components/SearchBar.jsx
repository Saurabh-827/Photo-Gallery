import { memo } from "react";

function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <label htmlFor="search" className="sr-only">
        Search photos by author
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by author name..."
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
}

export default memo(SearchBar);
