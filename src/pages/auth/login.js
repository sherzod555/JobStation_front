import Loader from "components/Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "services/register";

const Login = () => {
    const [loading, setloading] = useState(false)
    const {register, handleSubmit} = useForm()
    const router = useRouter()

    const loginFunc = async (data) => {
        try {
            setloading(true)
            const res = await login(data)
            localStorage.setItem('token', JSON.stringify(res?.jwt))
            localStorage.setItem('user', JSON.stringify(res?.user))
            router.push('/')
        } catch (error) {
            console.log(error);
            alert('Somethink went wrong')
        } finally {
            setloading(false)
        }
    }
    return (
        <section className="site-section home-section section-hero overlay bg-image" style={{ backgroundImage: 'url("/images/hero_1.jpg")' }}>
            {loading && <Loader />}
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6 mx-auto">
                        <form className="p-4 p-md-5 border rounded bg-white" onSubmit={handleSubmit(loginFunc)}>
                            <h3 className="text-black mb-5 border-bottom pb-2">Sing-in</h3>
                            <div className="form-group">
                                <label htmlFor="email">Login</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    {...register('identifier')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-title">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    {...register('password')}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 w-100">Login</button>
                            <p className="mx-auto w-100">
                                <Link href='/auth/register'><a>or register</a></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
