import React, {component} from 'react';
import { Header } from '../src/components/header/header';
import { Footer } from '../src/components/footer/footer';

const MainLayout = ({ children}) => {
    return (
        <>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default MainLayout;