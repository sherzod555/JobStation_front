import JobItem from 'components/JobItem';
import { getCvById } from 'services/search';

const CvSingle = ({data = {}}) => {
    return (
            <>
                <section
                    className="section-hero overlay inner-page bg-image"
                    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
                    id="home-section"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="text-white font-weight-bold">{data?.data?.attributes?.working_sphere}</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <a href="#">Cv</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>{data?.data?.attributes?.working_sphere}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    {/* <figure className="mb-5">
                                        <img
                                            src="images/job_single_img_1.jpg"
                                            alt="Image"
                                            className="img-fluid rounded"
                                        />
                                    </figure> */}
                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Cv Description
                                    </h3>
                                    <p>
                                        {data?.data?.attributes?.info}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-light p-3 border rounded mb-4">
                                    <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Cv Summary</h3>
                                    <ul className="list-unstyled pl-3 mb-0">
                                        <li className="mb-2">
                                            <strong className="text-black">Published on:</strong> {data?.data?.attributes?.publishedAt}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Cv id:</strong> {data?.data?.id}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Full Name:</strong> {data?.data?.attributes?.full_name}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Experience:</strong> {data?.data?.attributes?.experience}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Working sphere:</strong>  {data?.data?.attributes?.working_sphere}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Contact:</strong>  {data?.data?.attributes?.contact}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Date of birth:</strong> {data?.data?.attributes?.date_of_birth}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        </>
    );
}

export default CvSingle;

export async function getServerSideProps(ctx) {
   try {
    const res = await getCvById(ctx.params.id)
    return {
        props: {
            data: res
        }
    }
   } catch (error) {
    return {
        props: {}
      }
   }
}
