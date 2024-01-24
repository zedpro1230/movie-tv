import HomePage from "./components/screens/HomePage";
import Movie from "./components/screens/MoviePage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Suport from "./components/screens/Suport";
import Subscriptions from "./components/screens/Subscriptions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/suport" element={<Suport />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
