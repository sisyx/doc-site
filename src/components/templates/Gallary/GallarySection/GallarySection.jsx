import React, { useEffect, useState } from 'react'
import Pagination from '../../../modules/Pagination/Pagination'
import GallaryBox from '../../../modules/GallaryBox/GallaryBox'
import useGetData from '../../../../hooks/useGetData';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../../../modules/Loading/Loading'
import Error404 from '../../../Errors/Error404/Error404';
import ErrorFetch from '../../../Errors/ErrorFetch/ErrorFetch';

function GallarySection() {
    const { data: galleryData , isPending , isError} = useGetData(["Get_Gallery"], "Gallery.aspx");
    const [searchParams] = useSearchParams();
    const countData = 9;
    const lastData = (searchParams.get("page") || 1) * countData
    const firstData = lastData - countData


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [searchParams]);


    if(isPending){
        return <Loading />
    }

    if(isError){
        return <ErrorFetch />
    }


    return (
        <section className="gallary pt_75 xs_pt_45 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <div className="container">
                {galleryData?.slice(firstData, lastData)?.length ? (
                    <>
                        <div className="row">
                            {galleryData?.slice(firstData, lastData)?.map(data => (
                                <GallaryBox key={data.id} {...data} />
                            ))}
                        </div>
                            <Pagination activePage={+searchParams.get("page") || 1} data={galleryData} countData={countData} />
                    </>
                ) : (
                    <Error404 />
                )}
            </div>
        </section>
    )
}

export default GallarySection