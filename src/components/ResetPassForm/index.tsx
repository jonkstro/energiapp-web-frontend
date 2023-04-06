import React, { useState } from "react";
import {
  AuthForm,
  AuthFormContainer,
  AuthFormContent,
  SubmitButton,
} from "./styles";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../hooks/useAuth";

// IMPORTAR ÍCONES DO MATERIAL UI
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// REALIZAR AS IMPORTAÇÕES DO REDIRECT E DE PEGAR OS DADOS DA URL:
import { useParams, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export interface Props {
  uid: string | undefined,
  token: string | undefined,
}

export function ResetPassForm(props: Props) {
  
  // RECEBENDO VARIÁVEIS DO USEAUTH
  const {
    password,
    setPassword,
    confPassword,
    setConfPassword,
    validarSenha,
    specialValidated,
    lengthValidated,
    lowerValidated,
    upperValidated,
    numberValidated,
    resetPassword,
    notifyErrors,
    notifySuccess,
  } = useAuth();

  const navigate = useNavigate(); //definir o redirect
  // função sleep pra esperar sumir o notify e só então excluir
  const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );


  async function redirect(){
    await sleep(5000);
    navigate('/logar');
  }

  // criando as variáveis de estado
  const [typePas, setTypePas] = useState("password");
  const [typeConf, setTypeConf] = useState("password");

  function handleChangeType() {
    setTypePas(typePas === "password" ? "text" : "password");
  }

  function handleChangeTypeConf() {
    setTypeConf(typeConf === "password" ? "text" : "password");
  }

  
  const uid = props.uid;
  const token = props.token;
  const new_password = password;

  // FUNÇÃO QUE ENVIARÁ OS DADOS PARA CADASTRO DE USUÁRIO NO USEAUTH
  async function handleResetPass() {
    if (
      lowerValidated === true &&
      upperValidated === true &&
      numberValidated === true &&
      specialValidated === true &&
      lengthValidated === true &&
      password === confPassword
      ) {
        await resetPassword({
          uid,
          token,
          new_password
        });
        notifySuccess("Senha atualizada com sucesso!");
        redirect();
      } else {
        notifyErrors("Preencha seus dados corretamente");
      }
  }

  return (
    <AuthFormContainer>
      <AuthForm
        onSubmit={(e) => {
          e.preventDefault();
          handleResetPass();
        }}
      >
        <AuthFormContent>
          <h3 className="Auth-form-title">Resetar senha</h3>
          <div className="text-center">
            <p>Insira sua nova senha</p>
          </div>
          <Grid container spacing={0}>
            <div>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="password"
                  id="password"
                  label="Senha"
                  type={typePas}
                  fullWidth
                  variant="standard"
                  placeholder="Senha do Usuário: "
                  // passando valores para o input
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    validarSenha(event.target.value);
                  }}
                />
              </Grid>
              {typePas === "password" ? (
                <VisibilityIcon
                  onClick={() => {
                    handleChangeType();
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => {
                    handleChangeType();
                  }}
                />
              )}
            </div>
            <p
              className={
                lengthValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos 8 caracteres
            </p>
            <p
              className={
                upperValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos uma letra maiúscula
            </p>
            <p
              className={
                lowerValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos uma letra minúscula
            </p>
            <p
              className={
                numberValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos um número
            </p>
            <p
              className={
                specialValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos um caractere especial
            </p>
            <div>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="confirm_password"
                  id="confirm_password"
                  label="Confirmar Senha"
                  type={typeConf}
                  fullWidth
                  variant="standard"
                  placeholder="Repita a senha do Usuário: "
                  // passando valores para o input
                  value={confPassword}
                  onChange={(event) => {
                    setConfPassword(event.target.value);
                  }}
                />
              </Grid>
              {typeConf === "password" ? (
                <VisibilityIcon
                  onClick={() => {
                    handleChangeTypeConf();
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => {
                    handleChangeTypeConf();
                  }}
                />
              )}
            </div>
            <Grid item xs={12}>
              <SubmitButton>CADASTRAR</SubmitButton>
            </Grid>
          </Grid>
          <br />
          <br />
          <p className="text-center mt-2">
            <a href="auth/forgot">Esqueceu sua senha?</a>
          </p>
        </AuthFormContent>
      </AuthForm>
    </AuthFormContainer>
  );
}
