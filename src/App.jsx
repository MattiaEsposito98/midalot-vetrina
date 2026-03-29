import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProviders from "./providers/AppProviders";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Servizi from "./pages/Servizi/Servizi";


function App() {


  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}

export default App
