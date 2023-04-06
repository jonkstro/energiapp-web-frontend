import logoImg from "../../assets/logo-branco.png";
import { Container, Content } from "./styles";

export function HeaderLogin() {
  return (
    <>
      <Container>
        <Content>
          <div>
            <img src={logoImg} alt="dt money" />
            <h3>EnergiApp</h3>
            <p>O controle do seu consumo na palma da sua mão</p>
          </div>
        </Content>
      </Container>
    </>
  );
}
