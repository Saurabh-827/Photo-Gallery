import { useState, useEffect } from "react";

const API_URL = "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPhotos() {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);

        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("Failed to fetch photos:", err);
        setError("Could not load photos. Please try again.");
      }
      setLoading(false);
    }
    fetchPhotos();
    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}
