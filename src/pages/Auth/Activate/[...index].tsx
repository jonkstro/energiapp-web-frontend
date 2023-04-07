import React, { useEffect } from "react";
import { HeaderLogin } from "../../../components/HeaderLogin";
import { GlobalStyle } from "../../../styles/global";

// REALIZAR AS IMPORTAÇÕES DO REDIRECT E DE PEGAR OS DADOS DA URL:
import { useParams, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import successImg from "../../../assets/gif-success-activation.gif";
import { useAuth } from "../../../hooks/useAuth";

export default function Activate() {
  // aqui recebemos os parametros do djoser uid e token, para poder realizar a 
  // chamada da API de ativação do usuário
  const { uid, token } = useParams();

  useEffect(() => {
    activate();
  }, []);

  const notify = () => toast.success('Cadastrado !', {
    position: toast.POSITION.TOP_CENTER,
    toastId: 'success1',
  });

  const navigate = useNavigate(); //definir o redirect
  const { activateUser } = useAuth();

  // função sleep pra esperar sumir o notify e só então excluir
  const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async function redirect() {
    await sleep(5000);
    navigate('/logar');
  }

  async function activate() {
    await activateUser({
      uid,
      token
    });
    notify();
    redirect();
  }

  return (
    <>
      {/* <h1>uid {uid}</h1>
      <h3>token {token}</h3> */}
      <HeaderLogin />
      {/* body da página com redirecionamento e toast message de ok, ativado */}
      <div style={{ textAlign: 'center', backgroundColor: 'white', marginTop: '-10rem' }}>
        <h1>Parabéns, você acaba de ativar sua conta!!!</h1>
        <h3>Estamos lhe redirecionando para que faça seu login</h3>
        <img style={{ maxWidth: '100%', padding: 0 }} src={successImg} alt="" />
      </div>
      <GlobalStyle />
    </>
  );
}
