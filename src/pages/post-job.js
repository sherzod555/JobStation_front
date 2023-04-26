import Loader from "components/Loader";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postVacancy } from "services/vacancy";

const PostJob = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()

    const saveJob = async (data) => {
        try {
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await postVacancy({data: { ...data, user_id: user?.id }})
            alert('Vacancy successful created')
        } catch (error) {
            console.log(error);
            alert('Somethink went wrong')
        } finally {
            setLoading(false)
        } 
    }

    return (
        <>
        {loading && <Loader />}
            <div className="site-wrap">
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
                                <h1 className="text-white font-weight-bold">Post A Job</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <a href="#">Job</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Post a Job</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section">
                    <form className="container" onSubmit={handleSubmit(saveJob)}>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h2>Post A Job</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <div className="p-4 p-md-5 border rounded" >
                                    <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>
                                    <div className="form-group">
                                        <label htmlFor="email">Job name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            {...register('job_name')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-title">Employer or Organization name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            {...register('organization_name')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Contact number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            required
                                            {...register('contact')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Working days</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            {...register('working_days')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Working hours</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            {...register('working_hours')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Salary</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            {...register('salary')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-description">Job Description</label>
                                        <div className="editor" id="editor-1">
                                            <p>Write Job Description!</p>
                                            <textarea className="form-control" id="exampleFormControlTextarea3" rows="7" {...register('text')}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="ml-auto col-6">
                                        <button type="submit" className="btn btn-block btn-primary btn-md">
                                            Save Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default PostJob;
