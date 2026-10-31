import useFetchPhotos from "./hooks/useFetchPhotos";
import Spinner from "./components/Spinner";
import PhotoCard from "./components/PhotoCard";

export default function App() {
  const { photos, loading, error } = useFetchPhotos();

  if (loading) return <Spinner />;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <ul className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={false}
          onToggle={() => {}}
        />
      ))}
    </ul>
  );
}
