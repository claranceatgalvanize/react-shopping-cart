import React from 'react';

const footer = ({ year }) => (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">&copy; { year }</span>
    </nav>
)

export default footer;