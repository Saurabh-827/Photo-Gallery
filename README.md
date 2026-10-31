# Photo Gallery

A responsive photo gallery built with React, Vite and Tailwind CSS. It loads 30 photos
from the Picsum Photos API, lets the user search them by author name, and lets the user
mark photos as favourites. Favourites are saved in the browser, so they are still there
after a page refresh.

## Features

- Fetches 30 photos on load, with a loading spinner and an error message if the request fails
- Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop
- Real-time search by author name (filters the already fetched data, no extra API call)
- Favourite toggle on every card, managed with `useReducer` and persisted in `localStorage`

## Tech stack

- React (functional components and hooks only)
- Vite
- Tailwind CSS (no other UI libraries)

## Getting started

```bash
git clone https://github.com/Saurabh-827/Photo-Gallery.git
cd Photo-Gallery
npm install
npm run dev
```

Other scripts: `npm run build` (production build) and `npm run lint`.

## Project structure

```
src/
  components/
    Gallery.jsx      Main container: search state, favourites state, filtered list
    PhotoCard.jsx    One photo with author name and favourite button
    SearchBar.jsx    Search input
    Spinner.jsx      Loading indicator
  hooks/
    useFetchPhotos.js        Fetches photos, returns { photos, loading, error }
  reducers/
    favouritesReducer.js     Reducer for the favourites list
  utils/
    storage.js               Read and write favourites in localStorage
  App.jsx
  main.jsx
```

## Design decisions

- **Custom hook (`useFetchPhotos`)** keeps the data fetching out of the UI. `Gallery` only
  uses the returned values. The hook checks `res.ok`, handles errors, and uses an
  `AbortController` to cancel the request on cleanup.
- **`useReducer` for favourites.** Adding or removing a favourite depends on the previous
  state, so the logic lives in one pure reducer (`TOGGLE_FAVOURITE`). The initial state is
  read from `localStorage` with a lazy initializer, and saved again in a `useEffect`
  whenever favourites change.
- **`useMemo`** computes the filtered list only when `photos` or the search text change,
  not on every render.
- **`useCallback` + `React.memo`.** The handlers keep the same reference between renders,
  so `SearchBar` and `PhotoCard` do not re-render unnecessarily when only the favourites
  change.
- **Image size.** Cards use `picsum.photos/id/{id}/600/400` instead of the original
  `download_url`, so the page does not load full-size images. Images are lazy loaded.
- **Accessibility.** The search input has a label, the favourite button uses
  `aria-pressed`, and the spinner and error message have proper roles.
