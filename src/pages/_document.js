import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css" />
            </Head>
            <body>
                <Main />
                <NextScript>
                    <Script src="js/jquery.min.js"></Script>
                    <Script src="js/bootstrap.bundle.min.js"></Script>
                    <Script src="js/isotope.pkgd.min.js"></Script>
                    <Script src="js/stickyfill.min.js"></Script>
                    <Script src="js/jquery.fancybox.min.js"></Script>
                    <Script src="js/jquery.easing.1.3.js"></Script>
                    <Script src="js/jquery.waypoints.min.js"></Script>
                    <Script src="js/jquery.animateNumber.min.js"></Script>
                    <Script src="js/owl.carousel.min.js"></Script>
                    <Script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></Script>
                    <Script src="js/custom.js"></Script>
                </NextScript>
            </body>
        </Html>
    )
}