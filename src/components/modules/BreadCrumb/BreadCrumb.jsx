import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function BreadCrumb({ title }) {
    return (
        <section className="breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_text">
                            <h1>{title}</h1>
                            <ul >
                                <li>
                                    <span>{title}</span>
                                    <FontAwesomeIcon icon={faChevronLeft} className="mx-2" />
                                </li>
                                <li>
                                    <Link to="/">خانه</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BreadCrumb;
