import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const arr = ['/auth/login', '/auth/register', '/auth/employer-register']
    const router = useRouter()
    return (
        <>
            {!arr.includes(router.pathname) && <Navbar />}
            {children}
            {/* {!arr.includes(router.pathname) && <Footer />} */}
        </>
    );
}

export default Layout;
