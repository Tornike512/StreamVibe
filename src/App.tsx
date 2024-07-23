import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./PublicLayout/layout";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
