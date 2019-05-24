import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';
import './reset.css';

function CustomNav(props) {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item 
                    renderAs="a" 
                    onClick={props.homeOpen}
                >
                    <img
                        alt="Tellr"
                        width="30"
                        height="30"
                    />
                </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container position="end">
                    <Navbar.Item onClick={props.appOpen}>
                        App
                    </Navbar.Item>
                    <Navbar.Item onClick={props.aboutOpen} >
                        About Us
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

export default CustomNav;