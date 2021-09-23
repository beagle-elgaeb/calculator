import React from "react";
import styled from "styled-components";

import "../index.css";

function App() {
  const [result, setResult] = React.useState("Результат");
  const [valueD, setValueD] = React.useState();
  const [valueL, setValueL] = React.useState();

  function calculate(e) {
    e.preventDefault();

    setResult((valueL * 360) / (valueD * 3.1415926535));
  }

  function handleValueD(e) {
    setValueD(e.target.value);
  }

  function handleValueL(e) {
    setValueL(e.target.value);
  }

  return (
    <Page>
      <Form>
        <Label>
          <Input type="number" onChange={handleValueD} />
          Диаметр
        </Label>
        <Label>
          <Input type="number" onChange={handleValueL} />
          Длина дуги
        </Label>
        <Calculate>
          <Button type="submit" onClick={calculate}>
            Вычислить
          </Button>
          <Result>{` ${result}`}</Result>
        </Calculate>
      </Form>
    </Page>
  );
}

export default App;

const Page = styled.div`
  width: 500px;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
  margin: 50px 0 0 50px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  height: 24px;
  box-sizing: border-box;
  border: 1px solid #aaaaaa;
  border-radius: 99em;
  outline: none;
  margin: 0 5px 5px 0;
  padding: 0 10px 0 10px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Label = styled.label``;

const Calculate = styled.div`
  height: 29px;
  display: flex;
  align-items: top;
`;

const Button = styled.button`
  width: 120px;
  height: 24px;
  background: transparent;
  border: 1px solid #999999;
  border-radius: 99em;
  outline: none;
  margin: 0 5px 5px 80px;

  :hover {
    color: #cd9575;
    box-shadow: 1px 1px 3px 1px #cd9575;
  }
`;

const Result = styled.p`
  display: block;
  line-height: 24px;
  color: red;
  margin: 0;
`;
