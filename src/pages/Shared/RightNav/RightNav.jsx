import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';


const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-2' variant="outline-primary"><FaGoogle className='text-danger me-2' />Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub className='me-2' />Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook />facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;