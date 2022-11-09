import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetailsContent from '../components/ProductDetailsContent';
import '../assets/css/index.css'
import '../assets/css/grid.css';
import '../assets/css/fonts.css';

export default function ProductDetails() {
    return (
        <>
            <Header />

            <ProductDetailsContent />

            <Footer />
        </>
    );
}