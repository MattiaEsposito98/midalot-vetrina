import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import AppProviders from "./providers/AppProviders";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Servizi from "./pages/Servizi/Servizi";
import DiconoDiNoi from "./pages/DiconoDiNoi/DiconoDiNoi";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/dicono-di-noi" element={<DiconoDiNoi />} />
          </Route>
        </Routes>

        <Analytics />     {/* Aggiunto per vercel */}

      </BrowserRouter>
    </AppProviders>
  );
}

export default App;