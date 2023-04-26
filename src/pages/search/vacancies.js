import JobItem from "components/JobItem";
import { useRouter } from "next/router";
import { useRef } from "react";
import { searchVacancy } from "services/search";

const Search = ({data}) => {
    const router = useRouter()
    const inputRef = useRef()

    return (
        <section className="site-section">
            <div className="container">
                <div className="d-flex mx-auto mb-4">
                    <button className="btn btn-primary mx-1" onClick={() => router.push('/search/resume')}>Resumes</button>
                    <button className="btn btn-primary mx-1 disabled">Vacancies</button>
                </div>
                <div className="search-jobs-form">
                    <div className="row mb-5">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0">
                            <input
                                ref={inputRef}
                                defaultValue={router.query?.search}
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Job title, Company..."
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0">
                            <button
                                onClick={() => router.push({query: {search: inputRef.current.value}})}
                                className="btn btn-primary btn-lg btn-block text-white btn-search"
                            >
                                <span className="icon-search icon mr-2" />
                                Search Vacancies
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 justify-content-center">
                    <div className="col-md-7 text-center">
                        <h2 className="section-title mb-2">{data?.meta?.pagination?.total} Job Listed</h2>
                    </div>
                </div>
                <ul className="job-listings mb-5">
                    {
                        data?.data?.length > 0 && data.data.map(job => (
                            <JobItem 
                                id={job.id}
                                key={job.id}
                                title={job.attributes?.job_name}
                                name={job.attributes?.organization_name}
                                location={job.attributes?.working_days}
                                experians={job.attributes?.working_hours}
                                salary={job.attributes?.salary}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default Search;

export async function getServerSideProps(ctx) {
  try {
    const res = await searchVacancy(ctx.query.search)

    return {
        props: {
            data: res || []
        }
    }
  } catch (error) {
    return {
        props: {}
      }
  }
}