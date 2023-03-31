import { BrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom"
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter  >
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
