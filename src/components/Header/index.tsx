import logoImg from "../../assets/logo-branco.png";
import LogoutButton from "../LogoutButton";
import { Container, Content } from "./styles";


// criar interface que irá receber as propriedades do MODAL:
interface HeaderProps {
  onOpenNewDeviceModal: () => void;
}

// Header irá agora receber as propriedades enviadas no APP.tsx
export function Header({ onOpenNewDeviceModal }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <div>
            <img src={logoImg} alt="dt money" />
            <h3>EnergiApp</h3>
            <LogoutButton/>
          </div>
          <button className="button" type="button" onClick={onOpenNewDeviceModal}>
            Novo Dispositivo
          </button>
        </Content>
      </Container>
    </>
  );
}
