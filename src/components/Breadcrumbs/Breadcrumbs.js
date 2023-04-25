import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ path }) => {
    return (
        <div className={`breadcrumbs ${styles.breadcrumbs}`}>
            <Container>
                <ul className={`list-unstyled ${styles.breadcrumbsUL}`}>
                    {path.map((item, index) => (
                        <li key={index} className={`${index === path.length - 1 ? `${styles.active}` : ''}`}>
                            {index === path.length - 1 ? item.name : <NavLink to={item.url}>{item.name}</NavLink>}
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    )
}

export default Breadcrumbs