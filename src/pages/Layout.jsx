import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { Cart } from '../components/Cart/Cart';
import Modal from '../components/Modal/Modal';
import RegForm from '../components/RegForm/RegForm'
import styles from './Layout.module.css';

export const Layout = () => {
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginButtonText, setLoginButtonText] = useState("Login");


    const onLoginButtonClick = () => {

        if (loggedIn) {
            setLoggedIn(false);
        } else {
            toggleModal();
        }
    };
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const onLogIn = () => {
        setLoggedIn(true)
    }

    useEffect(() => {
        if (loggedIn) {
            setLoginButtonText('Log out');
        } else {
            setLoginButtonText('Login');
        }
    }, [loggedIn])

    return (
        <>
            <header className={ styles.header }>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <Cart />
                <button onClick={ onLoginButtonClick }>{ loginButtonText }</button>
            </header>
            <div className="container">
                <Outlet />
            </div>
            { showModal && (
                <Modal onClose={ toggleModal }>
                    <RegForm onClose={ toggleModal } onLogIn={ onLogIn } />
                </Modal>
            ) }
        </>
    );
}