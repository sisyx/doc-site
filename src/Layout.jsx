import React, { useEffect, useState } from 'react'
import TopBar from './components/parts/TopBar/TopBar'
import MainMenu from './components/parts/MainMenu/MainMenu'
import Footer from './components/parts/Footer/Footer'
import ScrollBtn from './components/parts/ScrollBtn/ScrollBtn'
import TwoFixedButtons from './components/parts/TwoFixedButtons/TwoFixedButtons'


function Layout({ children }) {

    const [isVisibleTopBar, setIsVisibleTopBar] = useState(true);
    const [isVisibleScrollBtn, setIsVisibleScrollBtn] = useState(false);
    const [isMenuSticky, setIsMenuSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll >= 800) {
                setIsVisibleScrollBtn(true)
            }else{
                setIsVisibleScrollBtn(false)
            }

            if (currentScroll >= 0 && currentScroll <= 800) {
                // اسکرول به پایین
                setIsVisibleTopBar(true);
                setIsMenuSticky(false);
            } else {
                setIsVisibleTopBar(false);
                setIsMenuSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <TopBar isVisibleTopBar={isVisibleTopBar} />
            <MainMenu isMenuSticky={isMenuSticky} />
            {children}
            <Footer />
            {isVisibleScrollBtn && (
                <ScrollBtn />
            )}
            <TwoFixedButtons />
        </>
    )
}

export default Layout