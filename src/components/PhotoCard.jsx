import { memo } from "react";

function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <li className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
      <img
        src={`https://picsum.photos/id/${photo.id}/600/400`}
        alt={`Photo by ${photo.author}`}
        width="600"
        height="400"
        loading="lazy"
        className="aspect-[3/2] w-full object-cover"
      />
      <div className="flex items-center justify-between gap-2 p-3">
        <p className="truncate text-sm font-medium text-slate-700">
          {photo.author}
        </p>
        <button
          type="button"
          onClick={() => onToggle(photo.id)}
          aria-pressed={isFavourite}
          aria-label={`Favourite photo by ${photo.author}`}
          className="rounded-full p-2 transition hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <svg
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
            className={`h-6 w-6 ${isFavourite ? "fill-rose-500 stroke-rose-500" : "fill-none stroke-slate-400"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default memo(PhotoCard);
