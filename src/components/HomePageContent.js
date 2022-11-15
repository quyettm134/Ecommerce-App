import React from 'react';
import { Link } from "react-router-dom";
import JBLE55BT1 from '../assets/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png';
import JBLE55BT2 from '../assets/images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp';
import JBLE55BT3 from '../assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp';
import JBLJR310BT1 from '../assets/images/JBL_JR 310BT_Product Image_Hero_Skyblue.png';
import JBLJR310BT2 from '../assets/images/JBL_JR 310BT_Product Image_Detail_Skyblue.png';
import JBLHorizon001 from '../assets/images/JBLHorizon_001_dvHAMaster.png';
import JBLHorizon002 from '../assets/images/JBLHorizon_BLK_002_dvHAMaster.webp';
import KissPNG from '../assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png';
import JBLTune220TWS1 from '../assets/images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png';
import JBLTune220TWS2 from '../assets/images/JBL_TUNE220TWS_ProductImage_Pink_Back.png';
import UAPR1 from '../assets/images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png';
import UAPR2 from '../assets/images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png';
import LifeStyle1 from '../assets/images/JBL_Quantum400_Lifestyle1.png';
import LifeStyle2 from '../assets/images/JBL_TUNE220TWS_Lifestyle_black.png'
import { BsChevronRight, BsChevronLeft, BsCartPlus, BsHeart } from 'react-icons/bs';

const products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: JBLE55BT1,
        image2: JBLE55BT2,
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: JBLJR310BT1,
        image2: JBLJR310BT2,
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: KissPNG,
        image2: JBLE55BT3,
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: JBLHorizon001,
        image2: JBLHorizon002,
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: JBLTune220TWS1,
        image2: JBLTune220TWS2,
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: UAPR1,
        image2: UAPR2,
        old_price: '400',
        curr_price: '300'
    }
];

export default function HomePageContent() {

    React.useEffect(() => {
        var slide_index = 0;
        var slides = document.querySelectorAll('.slide');

        const hideAllSlide = () => {
            slides.forEach(e => {
                e.classList.remove('active');
            })
        }

        const showSlide = () => {
            hideAllSlide();
            slides[slide_index].classList.add('active');
        }

        const nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

        const prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1
        document.querySelector('.slide-next').addEventListener('click', () => {
            nextSlide();
            showSlide();
        })

        document.querySelector('.slide-prev').addEventListener('click', () => {
            prevSlide();
            showSlide();
        })

        showSlide();
    });

    return (
        <>
            <div className="hero">
                <div className="slider">
                    <div className="container">

                        <div className="slide active">
                            <div className="info">
                                <div className="info-content">
                                    <h3 className="top-down">
                                        JBL TUNE 750TNC
                                    </h3>
                                    <h2 className="top-down trans-delay-0-2">
                                        Next-gen design
                                    </h2>
                                    <p className="top-down trans-delay-0-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor commodi dignissimos culpa, eaque eos necessitatibus possimus veniam, cupiditate rerum deleniti? Libero, ducimus error? Beatae velit dolore sint explicabo! Fugit.
                                    </p>
                                    <div className="top-down trans-delay-0-6">
                                        <Link to="/ProductDetails">
                                            <button className="btn-flat btn-hover">
                                                <span>shop now</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="img top-down">
                                <img src={JBLE55BT3} alt=""/>
                            </div>
                        </div>

                        <div className="slide">
                            <div className="info">
                                <div className="info-content">
                                    <h3 className="top-down">
                                        JBL Quantum ONE
                                    </h3>
                                    <h2 className="top-down trans-delay-0-2">
                                        Ipsum dolor
                                    </h2>
                                    <p className="top-down trans-delay-0-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, voluptatum aperiam nobis quis maxime corporis porro alias soluta sunt quae consectetur aliquid blanditiis perspiciatis labore cumque, ullam, quam eligendi!
                                    </p>
                                    <div className="top-down trans-delay-0-6">
                                        <button className="btn-flat btn-hover">
                                            <span>shop now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="img right-left">
                                <img src={JBLE55BT1} alt=""/>
                            </div>
                        </div>

                        <div className="slide">
                            <div className="info">
                                <div className="info-content">
                                    <h3 className="top-down">
                                        JBL JR 310BT
                                    </h3>
                                    <h2 className="top-down trans-delay-0-2">
                                        Consectetur Elit
                                    </h2>
                                    <p className="top-down trans-delay-0-4">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aut fugiat, libero magnam nemo inventore in tempora beatae officiis temporibus odit deserunt molestiae amet quam, asperiores, iure recusandae nulla labore!
                                    </p>
                                    <div className="top-down trans-delay-0-6">
                                        <button className="btn-flat btn-hover">
                                            <span>shop now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="img left-right">
                                <img src={JBLJR310BT1} alt=""/>
                            </div>
                        </div>

                    </div>

                    <button className="slide-controll slide-next">
                        <i><BsChevronRight /></i>
                    </button>

                    <button className="slide-controll slide-prev">
                        <i><BsChevronLeft /></i>
                    </button>

                </div>
            </div>

            <div className="promotion">
                <div className="row">
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>Headphone & Earbuds</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={JBLHorizon001} alt=""/>
                        </div>
                    </div>
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>JBL Quantum Series</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={KissPNG} alt=""/>
                        </div>
                    </div>
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>True Wireless Earbuds</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={JBLTune220TWS1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Latest product</h2>
                    </div>
                    <div className="row" id="latest-products">
                        {
                            products.map((product, index) => (
                                <div className="col-4 col-md-6 col-sm-12" key={index}>
                                    <div className="product-card">
                                        <div className="product-card-img">
                                            <img src={product.image1} alt=""/>
                                            <img src={product.image2} alt=""/>
                                        </div>
                                        <div className="product-card-info">
                                            <div className="product-btn">
                                                <a href="/#" className="btn-flat btn-hover btn-shop-now">shop now</a>
                                                <button className="btn-flat btn-hover btn-cart-add">
                                                    <i><BsCartPlus/></i>
                                                </button>
                                                <button className="btn-flat btn-hover btn-cart-add">
                                                    <i><BsHeart/></i>
                                                </button>
                                            </div>
                                            <div className="product-card-name">
                                                {product.name}
                                            </div>
                                            <div className="product-card-price">
                                                <span><del>${product.old_price}</del></span>
                                                <span className="curr-price">${product.curr_price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="section-footer">
                        <a href="/#" className="btn-flat btn-hover">view all</a>
                    </div>
                </div>
            </div>

            <div class="bg-second">
                <div class="section container">
                    <div class="row">
                        <div class="col-4 col-md-4">
                            <div class="sp-item-img">
                                <img src={KissPNG} alt=""/>
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="sp-item-info">
                                <div class="sp-item-name">JBL TUNE 750TNC</div>
                                <p class="sp-item-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos itaque et eaque quod harum vero autem? Reprehenderit enim non voluptate! Qui provident modi est non eius ratione, debitis iure.
                                </p>
                                <Link to="/ProductDetails">
                                    <button class="btn-flat btn-hover">shop now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="container">
                    <div class="section-header">
                        <h2>best selling</h2>
                    </div>
                    <div class="row" id="best-products">
                        {
                            products.map((product, index) => (
                                <div className="col-4 col-md-6 col-sm-12" key={index}>
                                    <div className="product-card">
                                        <div className="product-card-img">
                                            <img src={product.image1} alt=""/>
                                            <img src={product.image2} alt=""/>
                                        </div>
                                        <div className="product-card-info">
                                            <div className="product-btn">
                                                <a href="/#" className="btn-flat btn-hover btn-shop-now">shop now</a>
                                                <button className="btn-flat btn-hover btn-cart-add">
                                                    <i><BsCartPlus/></i>
                                                </button>
                                                <button className="btn-flat btn-hover btn-cart-add">
                                                    <i><BsHeart/></i>
                                                </button>
                                            </div>
                                            <div className="product-card-name">
                                                {product.name}
                                            </div>
                                            <div className="product-card-price">
                                                <span><del>${product.old_price}</del></span>
                                                <span className="curr-price">${product.curr_price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="section-footer">
                        <a href="/#" class="btn-flat btn-hover">view all</a>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>latest blog</h2>
                    </div>
                    <div className="blog">
                        <div className="blog-img">
                            <img src={LifeStyle1} alt=""/>
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Lorem ipsum dolor sit amet
                            </div>
                            <div className="blog-preview">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, eligendi dolore. Sapiente omnis numquam mollitia asperiores animi, veritatis sint illo magnam, voluptatum labore, quam ducimus! Nisi doloremque praesentium laudantium repellat.
                            </div>
                            <button class="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="blog row-revere">
                        <div className="blog-img">
                            <img src={LifeStyle2} alt=""/>
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Lorem ipsum dolor sit amet
                            </div>
                            <div className="blog-preview">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, eligendi dolore. Sapiente omnis numquam mollitia asperiores animi, veritatis sint illo magnam, voluptatum labore, quam ducimus! Nisi doloremque praesentium laudantium repellat.
                            </div>
                            <button className="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="section-footer">
                        <a href="/#" class="btn-flat btn-hover">view all</a>
                    </div>
                </div>
            </div>
        </>
    );
}