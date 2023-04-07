import React, { useEffect } from "react";
import { HeaderLogin } from "../../../components/HeaderLogin";
import { GlobalStyle } from "../../../styles/global";
import { Auth } from "../../../components/Auth";
import { useNavigate } from "react-router-dom";

export default function Logar() {
  // REDIRECIONA PARA PLATAFORMA CASO O USUÁRIO ESTEJA LOGADO
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/plataforma");
    }
  }, []);
  return (
    <>
      <HeaderLogin />
      <Auth />
      <GlobalStyle />
    </>
  );
}



