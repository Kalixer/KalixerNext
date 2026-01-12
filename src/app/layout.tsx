import 'app/sass/globals.sass'
import { Header } from 'app/shared/Header/Header';
import { Footer } from 'app/shared/Footer/Footer';
import { ThemeProvider } from 'app/context/ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <div className="Layout">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default Layout;