import React from 'react'
import TeamBox from '../../../modules/TeamBox/TeamBox'
import SectionHeader from '../../../modules/SectionHeader/SectionHeader'
import { Link } from 'react-router-dom'
import useGetData from '../../../../hooks/useGetData';

function TeamSection() {

    const { data: teamData, isPending } = useGetData(["Get_Team"], "Team.aspx");

    return (
        <section className="team pt_100 xs_pt_70 pb_100 xs_pb_70">
            <div className="container">
                <SectionHeader 
                title="با پزشک متخصص ما آشنا شوید" 
                subTitle="تیم ما"
                />
                <div className="row">
                    {teamData?.slice(0,4)?.map(doctor => (
                        <TeamBox key={doctor.id} {...doctor} />
                    ))}
                    <div className="col-12 text-center mt_40">
                        <Link className="common_btn" to="/doctors">مشاهده همه</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection