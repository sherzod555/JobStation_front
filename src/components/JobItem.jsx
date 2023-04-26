import Image from "next/image";
import Link from "next/link";

const JobItem = ({
    id,
    title = '',
    name = '',
    location = '',
    experians = '',
    salary = '',
    vacancy = true
}) => {
    return (
        <Link href={vacancy ? `/vacancy/${id}` : `/cv/${id}`}>
            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                <div className="job-listing-logo position-relative" style={{ width: '150px', height: '150px' }}>
                    <Image
                        src={vacancy ? '/vacancy.webp' : '/resume.jpg'}
                        alt="Free Website Template by Free-Template.co"
                        layout="fill"
                        objectFit="cover"
                        className="img-fluid"
                    />
                </div>
                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                        <h2>{title}</h2>
                        <strong>{name}</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25 d-flex flex-column">
                        {location && (
                            <span>
                                <span className="icon-room" /> {location}
                            </span>
                        )}
                        {experians}
                    </div>
                    <div className="job-listing-meta">
                        <div className="badge badge-success h-3 p-3">{salary}</div>
                    </div>
                </div>
            </li>
        </Link>
    );
}

export default JobItem;
