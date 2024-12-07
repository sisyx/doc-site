import React, { useEffect } from 'react'
import ServiceBox from '../../../modules/ServiceBox/ServiceBox'
import Pagination from '../../../modules/Pagination/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useGetData from '../../../../hooks/useGetData';
import { useSearchParams } from 'react-router-dom';
import ErrorFetch from '../../../Errors/ErrorFetch/ErrorFetch';
import Loading from '../../../modules/Loading/Loading';
import Error404 from '../../../Errors/Error404/Error404';


function ServicesPart() {

    const { data: categoryServiceData, isPending, isError } = useGetData(["Get_CategoryService"], "CategoryService.aspx");
    const [searchParams] = useSearchParams();
    const countData = 9;
    const lastData = (searchParams.get("page") || 1) * countData
    const firstData = lastData - countData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [searchParams]);


    if (isPending) {
        return <Loading />
    }

    if (isError) {
        return <ErrorFetch />
    }



    return (
        <section className="service service_page pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <div className="container">
                <div className="row">
                    {categoryServiceData?.slice(firstData, lastData)?.length ? (
                        <>
                            <div className="row">
                                {categoryServiceData?.slice(firstData, lastData)?.map(data => (
                                    <ServiceBox colFull={false} key={data.id} {...data} />
                                ))}
                            </div>
                            <Pagination activePage={+searchParams.get("page") || 1} data={categoryServiceData} countData={countData} />
                        </>
                    ) : (
                        <Error404 />
                    )}
                </div>
            </div>
        </section>
    )
}

export default ServicesPart