import React, { useEffect } from "react";
import { HeaderLogin } from "../../../components/HeaderLogin";
import { GlobalStyle } from "../../../styles/global";
import { ForgotPassForm } from "../../../components/ForgotPassForm";

// REALIZAR AS IMPORTAÇÕES DO REDIRECT DA URL:
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  // REDIRECIONA PARA PLATAFORMA CASO O USUÁRIO ESTEJA LOGADO
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <HeaderLogin />
      <ForgotPassForm />
      <GlobalStyle />
    </>
  );
}
