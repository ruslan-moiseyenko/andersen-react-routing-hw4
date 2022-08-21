import { Outlet, NavLink } from "react-router-dom";
import { Cart } from '../components/Cart/Cart';
import styles from './Layout.module.css';

export const Layout = () => {
    return (
        <>
            <header className={styles.header}>
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