import { SubmodulePage } from 'submodule-1/src/SubmodulePage';
import { MainPage } from 'submodule-1/src/MainPage';

const routes = () => {
  return [
    { path: '/submodulePage', element: <SubmodulePage /> },
    { path: '/mainPage', element: <MainPage /> },
  ];
};

export { routes };
