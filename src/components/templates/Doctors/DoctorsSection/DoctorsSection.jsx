import React, { useEffect } from 'react'
import TeamBox from '../../../modules/TeamBox/TeamBox'
import Pagination from '../../../modules/Pagination/Pagination'
import useGetData from '../../../../hooks/useGetData';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../../modules/Loading/Loading';
import ErrorFetch from '../../../Errors/ErrorFetch/ErrorFetch';

function DoctorsSection() {
    const { data: teamData, isPending , isError } = useGetData(["Get_Team"], "Team.aspx");
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
        <section className="team_page pt_75 xs_pt_45 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <div className="container">
                <div className="row">
                {teamData?.slice(firstData,lastData)?.map(doctor => (
                        <TeamBox key={doctor.id} {...doctor} />
                    ))}
                </div>
                <Pagination activePage={+searchParams.get("page") || 1} data={teamData} countData={countData} />
            </div>
        </section>
    )
}

export default DoctorsSection