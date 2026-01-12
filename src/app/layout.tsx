import 'app/sass/globals.sass'
import { Header } from 'app/shared/Header/Header';
import { Footer } from 'app/shared/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>
                <div className="Layout">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

export default Layout;