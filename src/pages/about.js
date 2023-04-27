import Image from "next/image";

const About = () => {
    return (
        <>
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
                                <h1 className="text-white font-weight-bold">About Us</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>About Us</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center" data-aos="fade">
                                <h2 className="section-title mb-3">Our Team</h2>
                            </div>
                        </div>
                        <div className="row align-items-center block__69944">
                                <p>
                                    JobStation is an online job hosting and seeking platform that connects employers and job seekers in a seamless and efficient manner. Our platform is designed to simplify the job search process and make it easier for job seekers to find employment opportunities that match their skills and experience, while also helping employers to reach a wider pool of qualified candidates.

At JobStation, we understand the importance of finding the right job or candidate, which is why we have built a robust platform that offers a range of features and tools to streamline the job search process. Job seekers can create a profile, upload their resume, and browse through job postings that match their qualifications, while employers can post job openings, search for candidates, and review resumes and applications.

Our platform is user-friendly and intuitive, making it easy for job seekers and employers to navigate and find what they are looking for. We also provide resources and tips for job seekers, such as resume writing and interview preparation advice, to help them succeed in their job search.

Whether you are an employer looking to fill a position or a job seeker searching for your next career opportunity, JobStation is the go-to platform for all your job hosting and seeking needs. Join us today and take the first step towards finding the perfect job or candidate!
                                </p>
                                
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default About;
