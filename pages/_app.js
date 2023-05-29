import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from "../layout/main-layout";
import "../styles/globals.scss";
import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
// import "../styles/format.css";
// import "../styles/format.module.css";

export default function App({ Component, pageProps}) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
      
    return (
        <>
            <NextUIProvider>
                <MainLayout>
                    <Component {...pageProps}/>
                </MainLayout>
            </NextUIProvider>
        </>
    )
}