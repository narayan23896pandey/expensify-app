import React from 'react';
import { Link } from 'react-router-dom';
const Portfolio = () => (
    <div>
        <p>This my portfolio</p>
        <p>check out my stuff i have done</p>
        <Link to="/portfolio/1">itemone</Link>
        <Link to="/portfolio/2">itemtwo</Link>
    </div>
);
export default Portfolio;