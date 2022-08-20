import { Outlet, NavLink } from "react-router";
import { Cart } from '../components/Cart/Cart';

export const Layout = () => {
    return (
        <>
            <header className="App-header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <Cart />
            </header>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}