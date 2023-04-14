import styled from "styled-components";

export const Container = styled.div`
    .loader_container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader {
        width: 5rem;
    }
    
`;

export const Loader = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    }
    .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 2s linear infinite;
    }
    @keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }


`;