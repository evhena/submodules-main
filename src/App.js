import logo from './logo.svg';
import './App.css';
// import testfunc from '../public/submodule-1/src/testmodule';
// import * as example from '../example-submodule/app';
// import { sayHello } from './testOutput';
// import TrimVideoModal from 'gogipper_trim_video_modal';

function App() {
  async function load() {
    // let hi = await import('../public/sub-module/dist/hi.bundle.js');
    let hi = await import(
      'https://raw.githubusercontent.com/evhena/sub-module/main/dist/print.bundle.js'
    );
    hi(); // Hello!
  }

  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'I have changed!';

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <button onClick={() => load()}>Click me</button>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
