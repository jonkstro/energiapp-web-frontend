import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logar from "./pages/Auth/Logar";
import Plataforma from "./pages/Plataforma/[...index]";
import Activate from "./pages/Auth/Activate/[...index]";
import Forgot from "./pages/Auth/Forgot";
import ResetPass from "./pages/Auth/ResetPass/[...index]";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Essa rota deverá ser trocada pela landing page do site posteriormente 
            será utilizada a rota plataforma para renderizar a home
        */}
        <Route index element={<Home />} />
        <Route path="logar" element={<Logar />} />
        <Route path="auth/forgot" element={<Forgot />} />
        {/* Route que irá ativar o User pegando os dados pela Url */}
        <Route path="activate/:uid/:token" element={<Activate />} /> 
        {/* Route que irá realizar o reset da senha do usuário */}
        <Route path="password/reset/confirm/:uid/:token" element={<ResetPass />} />
        {/* Route que irá apresentar os gráficos pelo MAC do dispositivo */}
        <Route path="plataforma/:id" element={<Plataforma />} />
      </Routes>
    </BrowserRouter>
  );
}
