import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  // const Layout = Component.layout || (children => <>{children}</>)

  const getLayout = Component.getLayout || (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
