import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import App from './App';
import './index.css';
import { CartContext } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [quantity, setQuantity] = useState(0);
  const [cost, setCost] = useState(0);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ quantity, setQuantity, cost, setCost }}>
        <App />
      </CartContext.Provider>
    </BrowserRouter>
  );
}

root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
