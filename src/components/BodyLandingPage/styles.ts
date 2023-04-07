import styled from "styled-components";

export const Container = styled.div`
    margin: 5rem auto;
    text-align: center;
    `;
export const Content = styled.section`
    margin: 5rem auto;
    max-width: 1600px;
    h1 {
        margin-bottom: 32px;
        font-weight: 700;
        font-size: 6rem;
        line-height: 110px;
        letter-spacing: -.03em;
        color: var(--text-title);

        @media (max-width: 824px) {
            margin-bottom: 1rem;
            font-weight: 700;
            font-size: 6rem;
            line-height: 3rem;
            font-size: 3rem;
        }
    
    }
    h2 {
        margin-bottom: 32px;
        font-weight: 700;
        font-size: 3rem;
        line-height: 110px;
        letter-spacing: -.03em;
        color: var(--text-title); 

        @media (max-width: 824px) {
            margin-bottom: 1rem;
            font-weight: 700;
            font-size: 6rem;
            line-height: 3rem;
            font-size: 2rem;
        }
    }

    p {
        padding: 5rem;
        font-weight: 400;
        font-size: 2rem;
        line-height: 32px;
        color: var(--text-body);
        margin-bottom: 42px;
        font-size: 32px;
        line-height: 46px;
        letter-spacing: -.02em;
        
        @media (max-width: 824px) {
            font-size: 1.5rem;
        }
    }

    /* BOTOES DE LOGIN / VER MODELO */
    @media (max-width: 824px) {
        
        .dark {
            width: 90%;
        }
        .demo {
            width: 90%;
        }
    }
    .btn-row {
        display: block;
        box-sizing: border-box;
        letter-spacing: -.02em;
        cursor: pointer;
    }
    
    .btn-row a {
        transition: .2s linear;
        text-decoration: none;
        font-family: "Inter",sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        border-radius: 50px;
        padding: 18px 48px;
        box-shadow: rgba(149, 157, 165, 0.5) 0px 4px 8px;
    }
    .btn-row a:hover {
        filter: brightness(95%);
        box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    }
    .dark {
        background-color: #0444ab;
        margin: 1rem !important;
        text-align: center;
        box-sizing: border-box;
    }
    .demo {
        background-color: #f8f9fa;
        margin: 1rem !important;
        text-align: center;
        box-sizing: border-box;
        margin-left: 18px;   
    }

    .btn-row .dark {
        color: #f8f9fa;
    }
    .btn-row .demo {
        color: #020202;
        border:1px solid;
        border-width: thin;
    }
    .btn-row .dark:hover {
        color: #f8f9fa;
    }
    .btn-row .demo:hover {
        color: #020202;
    }

    .div-sobre-section {
        display: flex;
        flex-direction: row;
        width: 100%;
        
        justify-content: center;
    }
    .div-sobre-section img {
        max-height: 5rem;
        margin: 1rem;
    }
    .title-sobre-section {
        color: var(--blue);
    }
    .parag-sobre {
        text-align: justify;
        padding: 1rem;
    }
    .parag-sobre-sub {
        text-align: justify;
        font-size: 1.5rem;
        padding: 1rem;

        @media (max-width: 824px) {
            font-size: 1rem;
        }
`;
