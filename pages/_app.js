import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sass/style.scss'
import '../styles/font-awesome.min.css'
import '../styles/themify-icons.css'
import '../styles/flaticon.css'
import '../styles/global.css'

import { Fragment } from "react";

function MyApp ({ Component, pageProps }) {
  return <Component { ...pageProps } />
}

export default MyApp
