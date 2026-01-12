import 'app/sass/globals.sass'
import { Header } from 'app/shared/Header/Header';
import { Footer } from 'app/shared/Footer/Footer';
import { ThemeProvider } from 'app/context/ThemeContext';

import { LanguageProvider } from 'app/context/LanguageContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <LanguageProvider>
                    <ThemeProvider>
                        <div className="Layout">
                            <Header />
                            {children}
                            <Footer />
                        </div>
                    </ThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}

export default Layout;