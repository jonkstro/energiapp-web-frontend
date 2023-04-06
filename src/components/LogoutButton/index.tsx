import { useAuth } from "../../hooks/useAuth";
import { Content } from "./styles";


export default function LogoutButton() {
  
  const { logoutUser } = useAuth();

  async function handleLogout() {
    await logoutUser();
  }

  return (
    <Content>
      <button type="button" onClick={()=> handleLogout()}>
        Sair
      </button>
    </Content>
  );
}
