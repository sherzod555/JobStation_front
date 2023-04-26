import Loader from "components/Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "services/register";

const Register = () => {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const {register, handleSubmit} = useForm()

    const registerFunc = async (data) => {
        try {
            setloading(true)
            const res = await registerUser({body: {...data, user_role: 'employee'}})
            localStorage.setItem('token', JSON.stringify(res?.jwt))
            localStorage.setItem('user', JSON.stringify(res?.user))
            router.push('/')
        } catch (error) {
            alert('Somethink went wrong')
        } finally {
            setloading(false)
        }
    }
    
    return (
        <section className="site-section  section-hero overlay bg-image pt-5 overflow-hidden" style={{ backgroundImage: 'url("/images/hero_1.jpg")' }}>
            <div className="container d-flex flex-column justify-content-start">
                {loading && <Loader />}
                <div className="d-flex mx-auto mb-4">
                    <button className="btn btn-primary mx-1">As Employee</button>
                    <button className="btn btn-primary mx-1 disabled" onClick={() => router.push('/auth/employer-register')}>As Employer</button>
                </div>
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form className="p-4 p-md-5 border rounded bg-white" onSubmit={handleSubmit(registerFunc)}>
                            <h3 className="text-black mb-5 border-bottom pb-2">Sing-up as employee</h3>
                            <div className="form-group">
                                <label htmlFor="email">Login *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    {...register('username')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-title">Password *   </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    minLength={8}
                                    {...register('password')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-title">FullName *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    {...register('full_name')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-title">Phone number *</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    required
                                    {...register('phone_number')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-title">E-mail *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    {...register('email')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-title">Your birth date *</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    required
                                    {...register('date_of_birth')}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 w-100">Register</button>
                            <p>
                                <Link href='/auth/login'><a>or login</a></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
