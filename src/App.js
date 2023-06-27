import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header name="D.Fatima" title="First Card"/>
      <hr/>
      <Header name="A.Fathima" title="Second Card"/>
      <hr/>
       <h1>This is my React App</h1> 
      <p>This is my program.Iam currently learning React JS</p> 
      <p>Because I want to develop applications that calls Rest API's</p>
      <Header name="R.Fathima" title="Last Card"/>
      <hr/>
      <Header name="S.Fathima" title="Footer"/>
    </div>
  );
}

export default App;
