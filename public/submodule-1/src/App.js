import { routes } from 'submodule-1/src/Routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from 'submodule-1/src/AuthProvider';

import 'submodule-1/src/App.css';

function App() {
  console.log('submodule project');
  const routing = useRoutes(routes());

  return <AuthProvider>{routing}</AuthProvider>;
}

export default App;
