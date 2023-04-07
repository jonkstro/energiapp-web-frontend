import styled from "styled-components";

export const Container = styled.header`
    background: none; 
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    /* H4 ENERGIAPP */
    .logo-text-bolder {
        font-weight: 600 !important;
    }

    .logo-text {
        color: #0444ab;
        font-size: calc(1.3rem + .6vw) !important;
    }
    /* H4 ENERGIAPP */

    /* BOTOES DE LOGIN / CADASTRO */
    .navbar-auth {
        display: block;
        box-sizing: border-box;
        letter-spacing: -.02em;
        cursor: pointer;
    }
    @media (max-width: 824px) {
        .navbar-auth {
            display: block;
            margin-top: 1rem;
        } 
    }
    .navbar-auth a {
        transition: .2s linear;
        text-decoration: none;
        font-family: "Inter",sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        border-radius: 50px;
        padding: 18px 48px;
        color: #f8f9fa;
    }
    .navbar-auth a:hover {
        filter: brightness(90%);
    }
    .btn-login {
        background-color: #020202;
        width: 100%;
        margin: 0 0 16px !important;
        text-align: center;
        box-sizing: border-box;
        margin-left: 18px;   
    }
    .btn-cadastro {
        background-color: #0444ab;
        width: 100%;
        margin: 0 0 16px !important;
        text-align: center;
        box-sizing: border-box;
        margin-left: 18px;   
    }
    /* BOTOES DE LOGIN / CADASTRO */
    `;

export const Navbar = styled.nav`
    /* NAVBAR ICONE SANDUICHE */
    
    background-color: var(--background);
    z-index:999;
    .btnMenu {
        position: absolute;
        top: 20px;
        right: 5px;
        z-index: 9999;
        cursor: pointer;
        float: right;
        border: none;
    }

    .bar1 {
        margin-top: 0 !important;
    }

    .bar3 {
        margin-bottom: 0 !important;
    }

    .bar1,
    .bar2,
    .bar3 {
        width: 35px;
        height: 5px;
        background-color: #0444ab;
        margin: 5px 0;
        transition: 0.4s;
    }

    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-8px, 7px);
        transform: rotate(-45deg) translate(-8px, 7px);
    }

    .change .bar2 {
        opacity: 0;
    }

    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-7px, -7px);
        transform: rotate(45deg) translate(-7px, -7px);
    }

    /* NAVBAR ICONE SANDUICHE */

    .nav-link {
        /* margin-left: 5rem; */
        margin: 0 34px;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: -.02em;
        text-decoration: none;
        color: #020202;
        transition: .2s linear;
    }

    .navbar-collapse {
        justify-content: space-evenly;
    }

    .navbar-logo img {
        max-width: 5rem;
    }
`;