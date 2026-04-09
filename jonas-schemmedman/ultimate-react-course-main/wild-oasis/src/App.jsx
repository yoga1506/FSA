import styled from "styled-components";

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 20px;
  background-color: purple;
  color: white;
`;

const App = () => {
  return (
    <div>
      <H1>Wild oasis</H1>
      <Button>Submit</Button>
    </div>
  );
};

export default App;
