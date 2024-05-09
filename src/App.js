import logo from './logo.svg';
import './App.css';
// import testfunc from '../public/submodule-1/src/testmodule';
// import * as example from '../example-submodule/app';
// import { sayHello } from './testOutput';
import TrimVideoModal from 'gogipper_trim_video_modal';

function App() {
  // testfunc();
  // example();
  // sayHello();
  const readVideoFile = (input) => {
    const fr = new FileReader();
    fr.readAsDataURL(input);
    fr.addEventListener('load', () => {
      return fr.result;
    });
  };
  const videoBlobURL = () => {
    const videoUrl =
      'https://d2tyu887lcxnka.cloudfront.net/7EE413E4E7B29F573B758AA568F7B1E9.mp4';
    fetch(videoUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const newBlob = new Blob([blob], { type: 'video/mp4' });
        readVideoFile(newBlob);
        let blobUrl = URL.createObjectURL(newBlob);
        console.log('blobUrl', blobUrl);
        return blobUrl;
      });
  };
  console.log('videoBlobURL', videoBlobURL());
  const closeVideoTrim = () => {};
  const applyTrimmingHandler = () => {};
  const isVideoHasAudio = false;
  return (
    <div className="App">
      <TrimVideoModal
        isOpenTrimModal={true}
        closeVideoTrim={closeVideoTrim}
        videoBlobURL={videoBlobURL()}
        applyTrimmingHandler={applyTrimmingHandler}
        isVideoHasAudio={isVideoHasAudio}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
