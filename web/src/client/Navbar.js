import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';
import './reset.css';
import logo from './assets/logo.png';

function CustomNav(props) {
    return (
        <Navbar style={{
            height: "72px",
            fontSize: "24px"
        }}>
            <Navbar.Brand
            style={{
                height: "60px"
            }}>
                <Navbar.Item 
                    style={{
                        color: "#307FEA",
                        height: "60"
                    }}
                    renderAs="a" 
                    onClick={props.homeOpen}
                >
                    <img
                        src={logo}
                        alt="Tellr"
                        style= {{
                            marginTop: "12px",
                            maxHeight: "58px"
                        }}
                        width="58"
                        height="60px !important"
                    />
                </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container position="end">
                    <Navbar.Item 
                        style={{
                            color: "#307FEA"
                        }}
                    onClick={props.appOpen}>
                        App
                    </Navbar.Item>
                    <Navbar.Item
                        onClick={props.aboutOpen} 
                        style={{
                            color: "#307FEA"
                        }}
                    >
                        About Us
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

export default CustomNav;