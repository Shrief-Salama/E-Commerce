import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SingleProduct.module.css";
import TopPicksSection from "../components/TopPicksSection/TopPicksSection";
import Footer from "../layout/Footer/Footer";
import NavBar from "../layout/NavBar/NavBar";

import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import MainButton from "../components/MainButton/MainButton";
import { Container, Row, Col } from "react-bootstrap";
import { GiBoxUnpacking, GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { cartActions } from "../redux/slices/cart-slice";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectFade, FreeMode, Navigation, Thumbs } from "swiper";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setquantity] = useState(1);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const currentPath = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "Product Name" },
  ];

  const qtnChangeHandler = (e) => {
    e.preventDefault();
    const Qtn = parseInt(e.target.value);
    setquantity(Qtn);
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        ...product,
        quantity,
      })
    );
  };

  const qtnAdd = (e) => {
    e.preventDefault();
    setquantity((quantity) => quantity + 1);
  };

  const qtnMinus = (e) => {
    e.preventDefault();
    if (quantity !== 1) {
      setquantity((quantity) => quantity - 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      await fetch(`http://localhost:8080/products/` + productId, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then(async (res) => {
          const response = await res.json();
          setProduct(response.product);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProduct();
  }, [productId]);

  return (
    <div className={`productPage ${styles.productPage}`}>
      <NavBar />
      <Breadcrumbs path={currentPath} />
      <div className={styles.productPageWrapper}>
        <Container>
          <div className={styles.productPageInner}>
            <Row>
              <Col md={6}>
                <div className={styles.productImages}>
                  <Swiper
                    spaceBetween={10}
                    effect={"fade"}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[EffectFade, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img className="img-fluid" src={product.img} />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper swiperTumbs"
                  >
                    <SwiperSlide>
                      <img className="img-fluid" src={product.img} />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <div className={styles.productDetails}>
                  <div className={styles.productMainInfo}>
                    <h3>{product.name}</h3>
                    <span>$ {product.price} USD</span>
                    <p>{product.desc}</p>
                  </div>
                  <div className={styles.productInfo}>
                    <h5>Materials</h5>
                    <p>Walnut, Seude, Foam</p>
                  </div>
                  <div
                    className={`${styles.productInfo} ${styles.productInfoDelivery}`}
                  >
                    <h5>Delivery Information</h5>
                    <div className={styles.productInfoDeliveryWrapper}>
                      <div className={styles.productInfoDeliveryInner}>
                        <GiBoxUnpacking />
                        <span>Shipped by Jun 5, 2023</span>
                      </div>
                      <div className={styles.productInfoDeliveryInner}>
                        <GiTakeMyMoney />
                        <span>Installment plan available</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productDimensions}>
                    <div>
                      <h5>Weight</h5>
                      <p>14KG</p>
                    </div>
                    <div>
                      <h5>Dimensions</h5>
                      <p>26cm x 12cm x 60cm</p>
                    </div>
                    <div>
                      <h5>Made in</h5>
                      <p>Australia</p>
                    </div>
                  </div>
                  <p className={styles.stock}>In stock</p>
                  <div className={styles.productActions}>
                    <div className={styles.quatities}>
                      <button
                        className={styles.buttQuantity}
                        onClick={qtnMinus}
                      >
                        -
                      </button>
                      <input
                        id="itemsNumber"
                        type="number"
                        value={quantity}
                        onChange={qtnChangeHandler}
                      />
                      <button className={styles.buttQuantity} onClick={qtnAdd}>
                        +
                      </button>
                    </div>
                    <div className={styles.actions}>
                      {/* <button className={styles.wishlistBtn}>
                        <AiOutlineHeart />
                      </button> */}
                      <MainButton
                        onClick={addToCartHandler}
                        type="button"
                        style="primary"
                        text="Add to cart"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <TopPicksSection title="Related Products" />
      <Footer />
    </div>
  );
};

export default SingleProduct;
