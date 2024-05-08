import { routes } from './Routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './Hoc/AuthProvider';

import './App.css';

function App() {
  console.log('main project');
  const routing = useRoutes(routes());

  return <AuthProvider>{routing}</AuthProvider>;
}

export default App;
