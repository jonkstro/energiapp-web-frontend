import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
    /* Criar variáveis de estilização do css para facilitar o trabalho */
    /* Normalmente esses dados vem do layout da aplicação no Figma */
    :root {
        --red: #e52e4d;
        --blue-light: #749cd4;
        --green: #33cc95;
        --blue: #0444ab;
        --black: #020202;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    /* AJustar a fonte conforme tela utilizada (padrão vem 16px) */
    html {
        scroll-behavior: smooth;
        
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background); // Usar variáveis do css
        -webkit-font-smoothing: antialiased;
    }

    /* Padronizando as fontes, as mesmas foram carregadas no index.html */
    /* Caso não carregue a fonte do google, irá a sans-serif */
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400; 
    }


    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    /* ITENS QUE ESTARÃO BLOQUEADOS */
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`;
