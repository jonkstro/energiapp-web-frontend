import { Container, Navbar } from "./styles";
import logoImg from "../../assets/logo-azul.png";
import { useEffect, useState } from "react";

export function HeaderLandingPage() {
    useEffect(() => {
        setNavStave(0);
    }, [])
    // definindo o estado da navbar caso aperte o botão
    const [navState, setNavStave] = useState(0);

    function handleNavBar() {
        setNavStave(navState ? 0 : 1);
    }
    return (
            <Container>
                {/* <!-- Navbar --> */}
                <Navbar className="navbar navbar-expand-md navbar-light">
                    <div className="navbar-logo">
                        <img src={logoImg} alt="logo" />
                        <a className="navbar-brand" href="#">
                            <h4 className="logo-text logo-text-bolder">EnergiApp</h4>
                        </a>
                    </div>
                    <div className="btnMenu">
                        <button
                            className={`navbar-toggler ${navState ? "change" : ""}`}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => handleNavBar()}
                        >
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div style={{ justifyContent: "space-around" }}>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contato</a>
                                </li>
                            </ul>
                        </div>

                        <div className="navbar-auth">
                            {/* <a className="btn-login" href="#">Logar</a> */}
                            <a className="btn-cadastro" href="/logar">Logar / Criar conta</a>
                        </div>
                    </div>
                </Navbar>

                {/* <!-- Link para o arquivo JavaScript do Bootstrap --> */}
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

            </Container>
    );
}