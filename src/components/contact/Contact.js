import React from 'react';
import MapContainer from '../maps/Maps';
import './Contact.css';

const contact = () => (
    <div className="contact">
        <h2>Contact:</h2>
        <p>mobile: +358 44 9879984</p>
        <p>email: anssif7@gmail.com</p>
        <p><a href="https://github.com/ansssi89">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/anssi-forsman-111496179/">LinkedIn</a></p>
        <MapContainer />
    </div>
);

export default contact;