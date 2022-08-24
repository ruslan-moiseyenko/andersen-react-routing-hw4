import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Layout, Product, NotFound } from './pages/index';

const Home = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */)
);

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
