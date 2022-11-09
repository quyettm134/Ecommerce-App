import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePageContent from '../components/HomePageContent';
import '../assets/css/index.css'
import '../assets/css/grid.css';
import '../assets/css/fonts.css';

export default function HomePage() {
    return (
        <>
            <Header />

            <HomePageContent />

            <Footer />
        </>
    );
}