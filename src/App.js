import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Layout } from './pages/index';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
