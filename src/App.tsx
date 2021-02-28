import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(1, 155, 60);
`;

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledDiv />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
