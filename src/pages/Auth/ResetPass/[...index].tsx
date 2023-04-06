import React, { useEffect } from "react";
import { HeaderLogin } from "../../../components/HeaderLogin";
import { GlobalStyle } from "../../../styles/global";

// REALIZAR AS IMPORTAÇÕES DO REDIRECT E DE PEGAR OS DADOS DA URL:
import { useParams } from "react-router-dom";


import { ResetPassForm } from "../../../components/ResetPassForm";

export default function ResetPass() {
  // aqui recebemos os parametros do djoser uid e token, para poder realizar a 
  // chamada da API de ativação do usuário
  const { uid, token } = useParams();


  return (
    <>
      <HeaderLogin />
      <ResetPassForm uid={uid} token={token} />
      <GlobalStyle />
    </>
  );
}
