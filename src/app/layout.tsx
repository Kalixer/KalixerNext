// import { useState} from "react";
// import Footer from "@components/Footer.jsx";
// import Header from "@components/Header.jsx";

import 'app/sass/globals.sass'
import { Header } from 'app/shared/Header/Header';

// const FooterPositionContext = createContext();

const Layout = ({children}: {children: React.ReactNode}) => {
    // const [hideFooter, setHideFooter] = useState(false)
    
    return (
        <html>
            <body>
                <div className="Layout">
                    <Header/>
                    {children}
                </div>
            </body>
        </html>
    );
}

// export const useFooterContext = () => useContext(FooterPositionContext)
export default Layout;