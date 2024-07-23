import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./PublicLayout/layout";

const HomePage = lazy(() => import("src/pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
