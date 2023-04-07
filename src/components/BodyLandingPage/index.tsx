import { Container, Content } from "./styles";

import YouTubeIcon from '@mui/icons-material/YouTube';

import logoImg from "../../assets/logo-azul.png";
import about from "../../assets/raio.png";


export function BodyLandingPage() {
    return (
        <Container>
            <Content>
                <h1>Bem vindo ao EnergiApp</h1>
                <h2>A gestão do seu consumo na palma da sua mão</h2>
                <p>Descubra como diminuir em até 30% o preço da sua conta de energia através de gestão do seu consumo de forma sustentável</p>
                <div className="btn-row">
                    <a href="/logar" className="btn dark">Logar ou Criar conta</a>
                    <a href="#" className="btn demo">
                        <YouTubeIcon style={{ marginRight: "1rem", color: "red" }} />
                        Ver demo do produto
                    </a>
                </div>
            </Content>
            <Content>
                <div className="div-sobre-section">
                    <img src={about} alt="raio verde" />
                    <h2 className="title-sobre-section">Sobre</h2>
                </div>
                <h2>Serviços de Consultoria Energética da EnergiApp</h2>
                <p className="parag-sobre">
                    A EnergiApp é uma plataforma de consultoria energética que oferece diversos serviços para ajudar as empresas a gerenciar seu consumo de
                    energia elétrica. <br /> Alguns dos serviços oferecidos pela EnergiApp incluem:
                </p>
                <div style={{background:"rgba(224, 224, 224, 0.5)", borderRadius:"3rem", padding:"2rem", margin:"1rem", boxShadow:"rgba(149, 157, 165, 0.5) 0px 2px 8px"}}>
                    <p className="parag-sobre" style={{padding:0, textAlign:"center"}}>Análise de faturas de energia elétrica</p>
                    <p className="parag-sobre-sub" style={{padding:0}}>A EnergiApp realiza uma análise detalhada das faturas de energia elétrica das empresas, identificando
                         oportunidades de economia e sugerindo medidas para reduzir os custos com energia.</p>
                </div>
                <div style={{background:"rgba(224, 224, 224, 0.5)", borderRadius:"3rem", padding:"2rem", margin:"1rem", boxShadow:"rgba(149, 157, 165, 0.5) 0px 2px 8px"}}>
                    <p className="parag-sobre" style={{padding:0, textAlign:"center"}}>Monitoramento do consumo de energia elétrica</p>
                    <p className="parag-sobre-sub" style={{padding:0}}>A plataforma da EnergiApp permite que as empresas monitorem em tempo real o consumo de energia elétrica em suas instalações,
                     identificando possíveis desperdícios e anomalias no consumo.</p>
        
                </div>
                <div style={{background:"rgba(224, 224, 224, 0.5)", borderRadius:"3rem", padding:"2rem", margin:"1rem", boxShadow:"rgba(149, 157, 165, 0.5) 0px 2px 8px"}}>
                    <p className="parag-sobre" style={{padding:0, textAlign:"center"}}>Auditorias energéticas</p>
                    <p className="parag-sobre-sub" style={{padding:0}}>A EnergiApp realiza auditorias energéticas em instalações industriais, comerciais e residenciais, identificando oportunidades de melhoria
                     no uso da energia elétrica e sugerindo medidas para reduzir os custos com energia.</p>
                </div>
                <div style={{background:"rgba(224,224,224,0.5)", borderRadius:"3rem", padding:"2rem", margin:"1rem", boxShadow:"rgba(149, 157, 165, 0.5) 0px 2px 8px"}}>
                    <p className="parag-sobre" style={{padding:0, textAlign:"center"}}>Implantação de sistemas de gestão de energia</p>
                    <p className="parag-sobre-sub" style={{padding:0}}>A EnergiApp auxilia as empresas na implantação de sistemas de gestão de energia, como o ISO 50001, que permitem a gestão eficiente do consumo de
                     energia elétrica e a redução dos custos com energia.</p>
                </div>

            </Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
        </Container>
    );
}