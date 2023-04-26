import JobItemEdit from "components/JobItemEdit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deleteResume, deleteVacancy, getResumeByUserId, getVacancyByUserId } from "services/vacancy";

const Profile = () => {
    const [data, setData] = useState({})
    const [refresh, setRefresh] = useState(false)
    const router = useRouter()
    const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || JSON.stringify(null))

    useEffect(() => {
        (async () => {
            const res = user?.user_role === 'employee' ? await getResumeByUserId(user?.id) : await getVacancyByUserId(user?.id)
            setData(res)
        })()
    }, [refresh])

    const onDelete = async (id) => {
        user?.user_role === 'employer' ? await deleteVacancy(id) : await deleteResume(id)
        setRefresh(state => !state)
    }

    const onEdit = (id) => {
        user?.user_role === 'employer' ? router.push(`/edit/vacancy/${id}`) : router.push(`/edit/cv/${id}`) 
    }
console.log(data);
    return (
        <div>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <section
                className="section-hero overlay inner-page bg-image"
                style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
                id="home-section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="text-white font-weight-bold">Profile</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                    </div>
                    <ul className="job-listings mb-5">
                        {
                            data?.data?.length > 0 && data.data.map(job => (
                                <JobItemEdit
                                    id={job.id}
                                    key={job.id}
                                    title={job.attributes?.job_name || job.attributes?.working_sphere}
                                    name={job.attributes?.organization_name || job.attributes?.full_name}
                                    location={job.attributes?.working_days}
                                    experians={job.attributes?.working_hours}
                                    salary={job.attributes?.salary}
                                    vacancy={user?.user_role === 'employer'}
                                    onDelete={onDelete}
                                    onEdit={onEdit}
                                />
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Profile;


