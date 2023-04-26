import JobItem from "components/JobItem"
import { useRouter } from "next/router"
import { useRef } from "react"
import { searchVacancy } from "services/search"

export default function Home({ data }) {
  const router = useRouter()
  const inputRef = useRef()
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
          className="home-section section-hero overlay bg-image"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
          id="home-section"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="mb-5 text-center">
                  <h1 className="text-white font-weight-bold">
                    The Easiest Way To Get Your Dream Job
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate est, consequuntur perferendis.
                  </p>
                </div>
                <div className="search-jobs-form">
                  <div className="row mb-5">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0">
                      <input
                        ref={inputRef}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Job title, Company..."
                      />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0">
                      <button
                        onClick={() => router.push(`/search/vacancies?search=${inputRef.current.value}`)}
                        className="btn btn-primary btn-lg btn-block text-white btn-search"
                      >
                        <span className="icon-search icon mr-2" />
                        Search Job
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#next" className="scroll-button smoothscroll">
            <span className=" icon-keyboard_arrow_down" />
          </a>
        </section>
        <section className="site-section">
          <div className="container">
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
      </div>
    </>

  )
}

export async function getServerSideProps() {
  try {
    const res = await searchVacancy()

    return {
      props: {
        data: res
      }
    }
  } catch (error) {
    console.log(error.message);
    return {
      props: {}
    }
  }
}