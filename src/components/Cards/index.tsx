import { Container } from "./styles";
import dispositivoImg from "../../assets/dispositivo1.png";
import { useDevices } from "../../hooks/useDevices";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORTAR ÍCONES DO MATERIAL UI
import DeleteIcon from '@mui/icons-material/Delete';

export function Cards() {

  const {
     devices, 
     deleteDevice 
  } = useDevices();

  const notify = ()=> toast.error('Deletado !', {
      position: toast.POSITION.TOP_CENTER
  });

  // função sleep pra esperar sumir o notify e só então excluir
  const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  // função async pra esperar 1 segundo
  async function handleDeleteDevice(deviceId: number) {
    notify(); //realizar o notify de exclusão
    await sleep(1000); //esperar o notify sumir
    deleteDevice(deviceId); //deletar a transação no useTransactions
  }
  return (
    <Container>
      {devices?.map((device) => (
        <div key={device.id}>
            <header>
              <a href={"plataforma/" + String(device.id)}>
              <p>
                Dispositivo: <span className={device.status? 'online': 'offline'}>{device.mac}</span>
              </p>
              <img src={dispositivoImg} alt="logo de imagem de dispositivo" />
              </a>
              <DeleteIcon
                onClick={() => {
                  handleDeleteDevice(device.id);
                }}
              />
            </header>
            <strong>
              Leitura:{" "}
              {device.status === "offline"
                ? "Offline"
                : Math.floor(Math.random() * 2000) + "kWh"}
            </strong>
            <br />
            <p>
              Rua {device.rua}. Bairro {device.bairro}
            </p>
        </div>
      ))}
      {/* <div>
                <a href="#">
                    <header>
                        <p>Dispositivo: <span className="online">1F:2C:3F:4G:5G:3D</span></p>   
                        <img src={dispositivoImg} alt="entradas logo" />
                    </header>
                    <strong>Leitura: 200kWh</strong>
                    <br />
                    <p>Rua Merval Neres, 3095. Dirceu Arcoverde</p>
                </a>
            </div> */}
    </Container>
  );
}
