import { Container, Content } from "./styles";

import YouTubeIcon from '@mui/icons-material/YouTube';

import logoImg from "../../assets/logo-branco.png";
import about from "../../assets/raio.png";
import getDemo from "../../assets/get-demo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

import img1 from "../../assets/img_inicial1.jpg";
import img2 from "../../assets/img_inicial2.png";
import img3 from "../../assets/img_inicial3.png";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function BodyLandingPage() {
    return (
        <Container>
            <Content id="section1">
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
            <Content id="section2">
                <div className="div-sobre-section">
                    <img src={about} alt="raio verde" />
                    <h3 className="title-sobre-section">Sobre</h3>
                </div>
                <h2>Serviços de Consultoria Energética da EnergiApp</h2>
                <p className="parag-sobre">
                    A EnergiApp é uma plataforma de consultoria energética que oferece diversos serviços para ajudar os nossos clientes a gerenciar seu consumo de
                    energia elétrica.
                    <br />
                    <br />
                    Alguns dos serviços oferecidos pela EnergiApp incluem:
                </p>
                <div style={{ background: "rgba(224, 224, 224, 0.5)", borderRadius: "3rem", padding: "2rem", margin: "1rem", boxShadow: "rgba(149, 157, 165, 0.5) 0px 2px 8px" }}>
                    <p className="parag-sobre" style={{ padding: 0, textAlign: "center" }}>Análise de faturas de energia elétrica</p>
                    <p className="parag-sobre-sub" style={{ padding: 0 }}>A EnergiApp realiza uma análise detalhada das faturas de energia elétrica dos nossos clientes, identificando
                        oportunidades de economia e sugerindo medidas para reduzir os custos com energia.</p>
                </div>
                <div style={{ background: "rgba(224, 224, 224, 0.5)", borderRadius: "3rem", padding: "2rem", margin: "1rem", boxShadow: "rgba(149, 157, 165, 0.5) 0px 2px 8px" }}>
                    <p className="parag-sobre" style={{ padding: 0, textAlign: "center" }}>Monitoramento do consumo de energia elétrica</p>
                    <p className="parag-sobre-sub" style={{ padding: 0 }}>A plataforma da EnergiApp permite que as empresas monitorem em tempo real o consumo de energia elétrica em suas instalações,
                        identificando possíveis desperdícios e anomalias no consumo.</p>

                </div>
                <div style={{ background: "rgba(224, 224, 224, 0.5)", borderRadius: "3rem", padding: "2rem", margin: "1rem", boxShadow: "rgba(149, 157, 165, 0.5) 0px 2px 8px" }}>
                    <p className="parag-sobre" style={{ padding: 0, textAlign: "center" }}>Auditorias energéticas</p>
                    <p className="parag-sobre-sub" style={{ padding: 0 }}>A EnergiApp realiza auditorias energéticas em instalações industriais, comerciais e residenciais, identificando oportunidades de melhoria
                        no uso da energia elétrica e sugerindo medidas para reduzir os custos com energia.</p>
                </div>
                <div style={{ background: "rgba(224,224,224,0.5)", borderRadius: "3rem", padding: "2rem", margin: "1rem", boxShadow: "rgba(149, 157, 165, 0.5) 0px 2px 8px" }}>
                    <p className="parag-sobre" style={{ padding: 0, textAlign: "center" }}>Implantação de sistemas de gestão de energia</p>
                    <p className="parag-sobre-sub" style={{ padding: 0 }}>A EnergiApp auxilia as empresas na implantação de sistemas de gestão de energia, como o ISO 50001, que permitem a gestão eficiente do consumo de
                        energia elétrica e a redução dos custos com energia.</p>
                </div>
                <div className="btn-row btn-sobre">
                    <a href="/logar" className="btn dark">Já quer começar a reduzir sua conta de energia?</a>
                </div>

            </Content>
            <Content id="section3" style={{ padding: 0, maxWidth: "100%" }}>
                <div className="div-demo-section">
                    <div className="div-sobre-section">
                        <img src={getDemo} alt="bandeira branca em volta de circulo laranja" />
                        <h3 className="title-sobre-section">Tenha Acesso Antecipado</h3>
                    </div>
                    <div className="demo-content">
                        <h2>Entre na lista de espera para começar a usar nosso produto</h2>
                        <p className="parag-sobre">
                            A EnergiApp já está aberta para pedidos de adesão! Se você estiver interessado em nossos serviços de consultoria de energia,
                            entre em nossa lista de espera e entraremos em contato quando houver uma vaga disponível.
                        </p>
                    </div>
                    <div className="btn-row btn-demo">
                        <a href="#" className="btn dark">Entre na lista de espera</a>
                    </div>
                </div>
            </Content >
            <Content id="section4">
                <h1>Nosso Produto:</h1>
                <div style={{margin:'0 auto', maxWidth:'1200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircleIcon style={{ color: 'green', padding: 0, margin: '0 1rem 0 0', height: '3rem', width: '3rem' }} />
                    <h2 style={{ padding: 0, margin: 0, textAlign:'justify', lineHeight:'3rem' }}>Seu consumo mensal na palma da sua mão</h2>
                </div>
                <img style={{ maxWidth: '100%' }} src={img1} alt="Imagem de gráfico de consumo mensal" />
                <hr />
                <div style={{margin:'0 auto',maxWidth:'1200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircleIcon style={{ color: 'green', padding: 0, margin: '0 1rem 0 0', height: '3rem', width: '3rem' }} />
                    <h2 style={{ padding: 0, margin: 0, textAlign:'justify', lineHeight:'3rem' }}>Receba notificações pelo app Telegram através do nosso Bot</h2>
                </div>
                <img style={{ maxWidth: '300px', padding:'1rem' }} src={img2} alt="Imagem de gráfico de consumo mensal" />
                <hr />
                <div style={{margin:'0 auto',maxWidth:'1200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircleIcon style={{ color: 'green', padding: 0, margin: '0 1rem 0 0', height: '3rem', width: '3rem' }} />
                    <h2 style={{ padding: 0, margin: 0, textAlign:'justify', lineHeight:'3rem' }}>Acompanhe nossas dicas de redução de consumo a qualquer hora e de qualquer lugar</h2>
                </div>
                <img style={{ maxWidth: '100%' }} src={img3} alt="Imagem de gráfico de consumo mensal" />
            </Content>

            <Content id="section5" style={{ padding: 0, maxWidth: "100%", display: "block" }}>
                <div className="div-contato">
                    <div className="col">
                        <div className="div-contato-section">
                            <img src={logoImg} alt="logo da energiapp" />
                            <h3>EnergiApp</h3>

                        </div>
                        <span>Todos direitos reservados</span>
                        <div className="div-contato-section" style={{ justifyContent: "center", alignContent: "center" }}>
                            <a href="#">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="twitter" />
                            </a>
                            {/* <a href="#">
                                <img src={linkedin} alt="linkedin" />
                            </a> */}
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ margin: "1rem" }}>
                            <a className="link-contato" href="#" style={{ fontWeight: 600 }}>
                                Conheça nossos planos
                            </a>
                        </div>
                        <div style={{ margin: "1rem" }}>
                            <CheckCircleIcon style={{ marginRight: "1rem" }}></CheckCircleIcon>
                            <span className="link-contato" >Planos Customizáveis</span>
                        </div>
                        <div style={{ margin: "1rem" }}>
                            <CheckCircleIcon style={{ marginRight: "1rem" }}></CheckCircleIcon>
                            <span className="link-contato" >Seus dados seguros</span>
                        </div>
                        <div style={{ margin: "1rem" }}>
                            <CheckCircleIcon style={{ marginRight: "1rem" }}></CheckCircleIcon>
                            <span className="link-contato" >Sem propragandas</span>
                        </div>

                    </div>
                </div>
            </Content>
        </Container>
    );
}