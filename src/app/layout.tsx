// import { useState} from "react";
// import Footer from "@components/Footer.jsx";
// import Header from "@components/Header.jsx";

import 'app/sass/globals.sass'

// const FooterPositionContext = createContext();

const Layout = ({children}: {children: React.ReactNode}) => {
    // const [hideFooter, setHideFooter] = useState(false)
    
    return (
        <html>
            <body>
                
        {/* <FooterPositionContext.Provider value={{setHideFooter}}> */}
                <div className="Layout">
                    {/* <Header /> */}
                    {children}
                    {/* {hideFooter ? null : <Footer/>} */}
                </div>
        {/* </FooterPositionContext.Provider> */}
            </body>
        </html>
    );
}

// export const useFooterContext = () => useContext(FooterPositionContext)
export default Layout;