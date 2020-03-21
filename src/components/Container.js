import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${ ({ background }) => background ? background : "transparent" };
`;

export default Container;
