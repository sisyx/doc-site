import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import toFarsiNumber from '../../../utils/toFarsiNumber';

function Pagination({ data, countData, activePage }) {
    const totalPages = Math.ceil(data.length / countData);
    const visiblePages = 3; // تعداد دکمه‌هایی که می‌خواهید نمایش داده شوند

    // محاسبه محدوده نمایش صفحات
    const startPage = Math.max(1, activePage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    // اگر به ابتدای لیست برسیم، دوباره محاسبات را تنظیم کنیم
    const adjustedStartPage = Math.max(1, endPage - visiblePages + 1);

    return (
        <div className="row mt_60">
            <div className="col-12">
                <div id="pagination">
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            {/* دکمه "قبلی" */}
                            <li className={`page-item ${activePage === 1 && "disabled"}`}>
                                <Link
                                    className="page-link"
                                    to={`?page=${Math.max(1, activePage - 1)}`}
                                >
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </Link>
                            </li>

                            {/* دکمه‌های صفحات */}
                            {Array.from({ length: endPage - adjustedStartPage + 1 }, (_, index) => {
                                const page = adjustedStartPage + index;
                                return (
                                    <li key={page} className="page-item">
                                        <Link
                                            className={`page-link ${activePage === page && "active"}`}
                                            to={`?page=${page}`}
                                        >
                                            {toFarsiNumber(page)}
                                        </Link>
                                    </li>
                                );
                            })}

                            {/* دکمه "بعدی" */}
                            <li className={`page-item ${activePage === totalPages && "disabled"}`}>
                                <Link
                                    className="page-link"
                                    to={`?page=${Math.min(totalPages, activePage + 1)}`}
                                >
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
