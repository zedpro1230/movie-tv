import HomePage from "./components/screens/HomePage";
import Movie from "./components/screens/MoviePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Suport from "./components/screens/Suport";
import Subscriptions from "./components/screens/Subscriptions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/suport" element={<Suport />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
