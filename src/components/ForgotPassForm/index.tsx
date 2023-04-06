import React from "react";
import {
  AuthForm,
  AuthFormContainer,
  AuthFormContent,
  SubmitButton,
} from "./styles";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../hooks/useAuth";


export function ForgotPassForm() {
  const {   
    email,
    setEmail,
    forgotPassword
  } = useAuth();


  // FUNÇÃO QUE IRÁ ENVIAR OS DADOS PARA FUNÇÃO DE FORGOT_PASS NO USEAUTH
  async function handleForgot() {
    await forgotPassword({
      email,
    });
  }

    return (
      <AuthFormContainer>
        <AuthForm
          onSubmit={(e) => {
            e.preventDefault();
            handleForgot();
          }}
        >
          <AuthFormContent>
            <h3 className="Auth-form-title">Resetar Senha</h3>
            <br />
            <div className="text-center">
              Esqueceu sua senha?<br/> Não se preocupe, lhe enviaremos um e-mail para resetar ela.
            </div>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="email"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="standard"
                  placeholder="Email do Usuário: "
                  // passando valores para o input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <SubmitButton>Enviar E-mail</SubmitButton>
              </Grid>
            </Grid>
          </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    );
  }
