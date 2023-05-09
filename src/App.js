import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './utils/Theme';
import { Routes, Route } from 'react-router-dom';
import { protectedRoutes, routes } from './routes';
import Layout from './components/layout';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <Routes exact>
          {protectedRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Layout>{route.component}</Layout>}
            />
          ))}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
