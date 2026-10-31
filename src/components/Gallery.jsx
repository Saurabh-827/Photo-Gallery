import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import {
  favouritesReducer,
  TOGGLE_FAVOURITE,
} from "../reducers/favouritesReducer";
import { loadFavourites, saveFavourites } from "../utils/storage";
import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState("");
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    loadFavourites,
  );

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const handleSearch = useCallback((e) => setQuery(e.target.value), []);

  const handleToggle = useCallback(
    (id) => dispatch({ type: TOGGLE_FAVOURITE, payload: id }),
    [],
  );

  const filteredPhotos = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return photos;
    return photos.filter((photo) => photo.author.toLowerCase().includes(term));
  }, [photos, query]);

  return (
    <section>
      <SearchBar value={query} onChange={handleSearch} />

      {loading && <Spinner />}

      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-4 text-center text-sm text-red-700"
        >
          {error}
        </p>
      )}

      {!loading && !error && filteredPhotos.length === 0 && (
        <p className="py-16 text-center text-slate-500">
          No photos match your search.
        </p>
      )}

      {!loading && !error && filteredPhotos.length > 0 && (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggle={handleToggle}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
