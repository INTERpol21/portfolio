import '@/styles/main.css'
import type { AppProps } from 'next/app'

import Footer from "@/component/footer/Footer";
import ScrollToTop from "@/component/utils/scrollToTop";
import NavBar from "@/component/navbar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return<>
    <ScrollToTop/>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </>


}
