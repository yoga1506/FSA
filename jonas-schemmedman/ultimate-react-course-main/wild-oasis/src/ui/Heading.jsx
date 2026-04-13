import styled from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    `
      color: red;
    `}

  ${(props) => props.type === "h2" && `color:yellow`}
`;

export default Heading;
