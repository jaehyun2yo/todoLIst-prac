import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { TodoDetail } from "./pages/TodoDetail";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
