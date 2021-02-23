import logo from './logo.svg';
import './App.css';

function App() {
  const courseName = 'React JS';
  const maleSinger = {
    name: 'Dr. Mahafuz',
    job: 'Singer'
  }
  const femaleSinger = {
    name: 'Eva Rahman',
    job: 'Kokil Konthi',
  }
  const style = {
    color: 'red',
    backgroundColor: 'yellow',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My first React Paragraph</p>
        <h1>Heading no {2+4}</h1>
        <p>Complex Math result: {(5+8)*3}</p>
        <p>Course Name: {courseName}</p>
        <p className="" style={style}>Name: {maleSinger.name}, Job: {maleSinger.job}</p>
        <p style={{backgroundColor: "cyan", color: "darkblue"}}>Name: {femaleSinger.name}, Job: {femaleSinger.job}</p>
      </header>
    </div>
  );
}

export default App;
