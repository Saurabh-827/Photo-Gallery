import useFetchPhotos from "./hooks/useFetchPhotos";
import { Spinner } from "./components/Spinner";
import { PhotoCard } from "./components/PhotoCard";

function App() {
  const { photos, loading, error } = useFetchPhotos();
  console.log({ photos, loading, error });
  return (
    <>
      <h1 className="p-6 text-2xl font-semibold text-indigo-600">
        Photo Gallery
      </h1>
      <Spinner></Spinner>
      <PhotoCard photo={photos}></PhotoCard>
    </>
  );
}

export default App;
