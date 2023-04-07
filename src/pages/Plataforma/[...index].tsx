import { HeaderLogin } from "../../components/HeaderLogin";
import { GlobalStyle } from "../../styles/global";
import { MeasuresTable } from "../../components/MeasuresTable";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Plataforma() {
  const { id } = useParams();

  // REDIRECIONA PARA PLATAFORMA CASO O USUÁRIO ESTEJA LOGADO
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/logar");
      alert('faça login pra continuar');
    }
  }, []);

  return (
    <>
      <h1>id {id}</h1>
      <HeaderLogin />
      <MeasuresTable />
      <GlobalStyle />
    </>
  );
}
