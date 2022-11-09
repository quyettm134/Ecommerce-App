import React from 'react';
import { BsFillStarFill, BsCartPlus, BsHeart } from 'react-icons/bs';
import { BiChevronsRight, BiPlus, BiMinus, BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import KissPNG from '../assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png';
import JBLTune220TWS1 from '../assets/images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png';
import JBLHorizon001 from '../assets/images/JBLHorizon_001_dvHAMaster.png';
import JBLTune220TWS2 from '../assets/images/JBL_TUNE220TWS_ProductImage_Pink_Back.png';
import JBLHorizon002 from '../assets/images/JBLHorizon_BLK_002_dvHAMaster.webp';
import JBLE55BT1 from '../assets/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png';
import JBLE55BT2 from '../assets/images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp';
import JBLE55BT3 from '../assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp';
import JBLJR310BT1 from '../assets/images/JBL_JR 310BT_Product Image_Hero_Skyblue.png';
import JBLJR310BT2 from '../assets/images/JBL_JR 310BT_Product Image_Detail_Skyblue.png';
import E1FW191 from '../assets/images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png';
import E1FW192 from '../assets/images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png';
import JBLEndurance from '../assets/images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp';
import JBLQuantum400 from '../assets/images/JBL_Quantum_400_Product Image_Hero 02.png';
import UserImg from '../assets/images/user.png';

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
        image1: E1FW191,
        image2: E1FW192,
        old_price: '400',
        curr_price: '300'
    },
];

export default function ProductDetailsContent() {

    const [isActive, setActive] = React.useState(false);

    const imgRef = React.createRef();

    return (
        <div className="bg-main">
            <div className="container">
                <div className="box">
                    <div className="breadcumb">
                        <a href="/#">home</a>
                        <span><BiChevronsRight /></span>
                        <a href="/#">all products</a>
                        <span><BiChevronsRight /></span>
                        <a href="/#">JBL Tune 750TNC</a>
                    </div>
                </div>
                <div className="row product-row">
                    <div className="col-5 col-md-12">
                        <div className="product-img" id="product-img">
                            <img src={KissPNG} alt="" ref={imgRef}/>
                        </div>
                        <div className="box">
                            <div className="product-img-list">
                                <div className="product-img-item">
                                    <img src={KissPNG} alt="" onClick={
                                    (e) => {
                                        let img = e.target.getAttribute('src');
                                        imgRef.current.setAttribute('src', img);
                                    }}/>
                                </div>
                                <div className="product-img-item">
                                    <img src={JBLEndurance} alt="" onClick={
                                    (e) => {
                                        let img = e.target.getAttribute('src');
                                        imgRef.current.setAttribute('src', img);
                                    }}/>
                                </div>
                                <div className="product-img-item">
                                    <img src={JBLQuantum400} alt="" onClick={
                                    (e) => {
                                        let img = e.target.getAttribute('src');
                                        imgRef.current.setAttribute('src', img);
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 col-md-12">
                        <div className="product-info">
                            <h1>
                                JBL TUNE 750TNC
                            </h1>
                            <div className="product-info-detail">
                                <span className="product-info-detail-title">Brand: </span>
                                <a href="/#">JBL</a>
                            </div>
                            <div className="product-info-detail">
                                <span className="product-info-detail-title">Rated: </span>
                                <span className="rating">
                                    <i><BsFillStarFill/></i>
                                    <i><BsFillStarFill/></i>
                                    <i><BsFillStarFill/></i>
                                    <i><BsFillStarFill/></i>
                                    <i><BsFillStarFill/></i>
                                </span>
                            </div>
                            <p className="product-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo libero alias officiis dolore doloremque eveniet culpa dignissimos, itaque, cum animi excepturi sed veritatis asperiores soluta, nisi atque quae illum. Ipsum.
                            </p>
                            <div className="product-info-price">$2345</div>
                            <div className="product-quantity-wrapper">
                                <span className="product-quantity-btn">
                                    <BiMinus/>
                                </span>
                                <span className="product-quantity">1</span>
                                <span className="product-quantity-btn">
                                    <BiPlus/>
                                </span>
                            </div>
                            <div>
                                <button className="btn-flat btn-hover">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-header">
                        description
                    </div>
                    <div className="product-detail-description">
                        <button className="btn-flat btn-hover btn-view-description" id="view-all-description" onClick={(e) => {
                            setActive(!isActive);
                            if (isActive === false) e.target.innerHTML = "view less";
                            else e.target.innerHTML = "view all";
                        }}>
                            view all
                        </button>
                        <div className={isActive ? "product-detail-description-content active" : "product-detail-description-content"}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium obcaecati odit dolorem, doloremque accusamus esse neque ipsa dignissimos saepe quisquam tempore perferendis deserunt sapiente! Recusandae illum totam earum ratione.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt maxime rerum reprehenderit voluptas asperiores ipsam quas consequuntur maiores, at odit obcaecati vero sunt! Reiciendis aperiam perferendis consequuntur odio quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat eum veniam doloremque nihil repudiandae odio ratione culpa libero tempora. Expedita, quo molestias. Minus illo quis dignissimos aliquid sapiente error!
                            </p>
                            <img src={JBLQuantum400} alt=""/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium officia, quae fuga in exercitationem aliquam labore ex doloribus repellendus beatae facilis ipsam. Veritatis vero obcaecati iste atque aspernatur ducimus.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quam praesentium id sit amet magnam ad, dolorum, cumque iste optio itaque expedita eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in corrupti ipsam sint error possimus commodi incidunt suscipit sit voluptatum quibusdam enim eligendi animi deserunt recusandae earum natus voluptas blanditiis?
                            </p>
                            <img src={KissPNG} alt=""/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam quam fugit veniam ipsum recusandae incidunt, ex ratione, magnam labore ad tenetur officia! In, totam. Molestias sapiente deserunt animi porro?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-header">
                        review
                    </div>
                    <div>
                        <div className="user-rate">
                            <div className="user-info">
                                <div className="user-avt">
                                    <img src={UserImg} alt=""/>
                                </div>
                                <div className="user-name">
                                    <span className="name">John Doe</span>
                                    <span className="rating">
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                    </span>
                                </div>
                            </div>
                            <div className="user-rate-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                            </div>
                        </div>
                        <div className="user-rate">
                            <div className="user-info">
                                <div className="user-avt">
                                    <img src={UserImg} alt=""/>
                                </div>
                                <div className="user-name">
                                    <span className="name">Volume</span>
                                    <span className="rating">
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                    </span>
                                </div>
                            </div>
                            <div className="user-rate-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                            </div>
                        </div>
                        <div className="user-rate">
                            <div className="user-info">
                                <div className="user-avt">
                                    <img src={UserImg} alt=""/>
                                </div>
                                <div className="user-name">
                                    <span className="name">Scarlet</span>
                                    <span className="rating">
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                    </span>
                                </div>
                            </div>
                            <div className="user-rate-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                            </div>
                        </div>
                        <div className="user-rate">
                            <div className="user-info">
                                <div className="user-avt">
                                    <img src={UserImg} alt=""/>
                                </div>
                                <div className="user-name">
                                    <span className="name">Vesti</span>
                                    <span className="rating">
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                    </span>
                                </div>
                            </div>
                            <div className="user-rate-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                            </div>
                        </div>
                        <div className="user-rate">
                            <div className="user-info">
                                <div className="user-avt">
                                    <img src={UserImg} alt=""/>
                                </div>
                                <div className="user-name">
                                    <span className="name">Elysia</span>
                                    <span className="rating">
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                        <i><BsFillStarFill/></i>
                                    </span>
                                </div>
                            </div>
                            <div className="user-rate-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                            </div>
                        </div>
                        <div className="box">
                            <ul className="pagination">
                                <li><a href="/#"><BiChevronLeft/></a></li>
                                <li><a href="/#" className="active">1</a></li>
                                <li><a href="/#">2</a></li>
                                <li><a href="/#">3</a></li>
                                <li><a href="/#">4</a></li>
                                <li><a href="/#">5</a></li>
                                <li><a href="/#"><BiChevronRight/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-header">
                        related products
                    </div>
                    <div className="row" id="related-products">
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
                </div>
            </div>
        </div>
    );
}