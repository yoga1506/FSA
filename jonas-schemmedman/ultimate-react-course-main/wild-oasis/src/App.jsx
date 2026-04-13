import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-600);
  background-color: purple;
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: var(--color-brand-500);
  padding: 10px 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Wild oasis</H1>
        <Button>Submit</Button>
        <Input placeholder="enter text" />
      </StyledApp>
    </>
  );
};

export default App;
