import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
import { api } from "../services/api";

  // criar interface do objeto que irá ser recebido da api
  interface Device {
    id: number;
    mac: string;
    email: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    latitude: number;
    longitude: number;
    status: string;
  }
  
  // criar interface do objeto que irá ser recebido da api
  interface DeviceInput {
    mac: string;
    email: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    latitude: number;
    longitude: number;
    status: boolean;
  }
  
  // criar interface de componentes que o Provider irá receber no index
  interface DevicesProviderProps {
    children: ReactNode;
  }
  
  // criar os contextos:
  interface DevicesContextData {
    devices: Device[];
    createDevice: (device: DeviceInput) => Promise<void>; //função assíncrona
    deleteDevice: (deviceId: number) => Promise<void>; //função assíncrona
  }
  
  const DevicesContext = createContext<DevicesContextData>(
    // Bug do typescript, pra corrigir
    {} as DevicesContextData
  );
  
  export function DevicesProvider({ children }: DevicesProviderProps) {
    // criar variável de array que armazenará os objetos da api:
    const [devices, setDevices] = useState<Device[]>([]);
  
    // criar função que irá realizar o GET da API
    // realizar a busca na API ao carregar a página:
    useEffect(() => {
      api.get("/dispositivos/", {
          headers: {
            Authorization: "Token " + localStorage.getItem("token")
          }
        })
        .then((response) => setDevices(response.data));
    }, []);
  
    // criar função assincrona que realizará o POST da API
    async function createDevice(deviceInput: DeviceInput) {
      // salvar os objetos na api
      const response = await api.post(
        "/dispositivos/", {
          ...deviceInput,
          // createdAt: new Date();
        },
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        },

      );
      const { device } = response.data;
  
      // Adicionar o device ao vetor de devices existente:
      setDevices([...devices, device]);

      // recarregar a página pra refazer o get
      window.location.reload();
    }

    // Função que deleta um item:
    async function deleteDevice(deviceId: number) {
      await api.delete('/dispositivos/'+deviceId, {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      })
      // recarregar a página pra refazer o get
      window.location.reload();
    }
  
    return (
      <DevicesContext.Provider value={{ devices, createDevice, deleteDevice }}>
        {children}
      </DevicesContext.Provider>
    );
  }
  
  // criar função de hook que será utilizada
  export function useDevices() {
    const context = useContext(DevicesContext);
    return context;
  }
  