<template>
   <main id="main">
    <div class="container">
      <!-- Products Details -->
      <section class="section product-details__section">
        <div class="product-detail__container">
          <div class="product-detail__left">
            <div class="details__container--left">
              <div class="product__pictures">
                <div class="pictures__container">
                  <img class="picture" src="./images/products/iPhone/iphone1.jpeg" id="pic1" />
                </div>
                <div class="pictures__container">
                  <img class="picture" src="./images/products/iPhone/iphone2.jpeg" id="pic2" />
                </div>
                <div class="pictures__container">
                  <img class="picture" src="./images/products/iPhone/iphone3.jpeg" id="pic3" />
                </div>
                <div class="pictures__container">
                  <img class="picture" src="./images/products/iPhone/iphone4.jpeg" id="pic4" />
                </div>
                <div class="pictures__container">
                  <img class="picture" src="./images/products/iPhone/iphone5.jpeg" id="pic5" />
                </div>
              </div>
              <div class="product__picture" id="product__picture">
                <!-- <div class="rect" id="rect"></div> -->
                <div class="picture__container">
                  <img src="./images/products/iPhone/iphone1.jpeg" id="pic" />
                </div>
              </div>
              <div class="zoom" id="zoom"></div>
            </div>

            <div class="product-details__btn">
              <a class="add" href="#">
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-cart-plus"></use>
                  </svg>
                </span>
                ADD TO CART</a>
              <a class="buy" href="#">
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-credit-card"></use>
                  </svg>
                </span>
                BUY NOW
              </a>
            </div>
          </div>

          <div class="product-detail__right">
            <div class="product-detail__content">
              <h3>Apple iPhone XR</h3>
              <div class="price">
                <span class="new__price">$250.99</span>
              </div>
              <div class="product__review">
                <div class="rating">
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                  </svg>
                </div>
                <a href="#" class="rating__quatity">3 reviews</a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                a doloribus iste natus et facere?
                dolor sit amet consectetur adipisicing elit. Sunt
                a doloribus iste natus et facere?
              </p>
              <div class="product__info-container">
                <ul class="product__info">
                  <li class="select">
                    <div class="select__option">
                      <label for="colors">Color</label>
                      <select name="colors" id="colors" class="select-box">
                        <option value="blue">blue</option>
                        <option value="red">red</option>
                      </select>
                    </div>
                    <div class="select__option">
                      <label for="size">Inches</label>
                      <select name="size" id="size" class="select-box">
                        <option value="6.65">6.65</option>
                        <option value="7.50">7.50</option>
                      </select>
                    </div>
                  </li>
                  <li>

                    <div class="input-counter">
                      <span>Quantity:</span>
                      <div>
                        <span class="minus-btn">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-minus"></use>
                          </svg>
                        </span>
                        <input type="text" min="1" value="1" max="10" class="counter-btn">
                        <span class="plus-btn">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-plus"></use>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span>Subtotal:</span>
                    <a href="#" class="new__price">$250.99</a>
                  </li>
                  <li>
                    <span>Brand:</span>
                    <a href="#">Apple</a>
                  </li>
                  <li>
                    <span>Product Type:</span>
                    <a href="#">Phone</a>
                  </li>
                  <li>
                    <span>Availability:</span>
                    <a href="#" class="in-stock">In Stock (7 Items)</a>
                  </li>
                </ul>
                <div class="product-info__btn">
                  <a href="#">
                    <span>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-crop"></use>
                      </svg>
                    </span>&nbsp;
                    SIZE GUIDE
                  </a>
                  <a href="#">
                    <span>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-truck"></use>
                      </svg>
                    </span>&nbsp;
                    SHIPPING
                  </a>
                  <a href="#">
                    <span>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-envelope-o"></use>
                      </svg>&nbsp;
                    </span>
                    ASK ABOUT THIS PRODUCT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-detail__bottom">
          <div class="title__container tabs">

            <div class="section__titles category__titles ">
              <div class="section__title detail-btn active" data-id="description">
                <span class="dot"></span>
                <h1 class="primary__title">Description</h1>
              </div>
            </div>

            <div class="section__titles">
              <div class="section__title detail-btn" data-id="reviews">
                <span class="dot"></span>
                <h1 class="primary__title">Reviews</h1>
              </div>
            </div>

            <div class="section__titles">
              <div class="section__title detail-btn" data-id="shipping">
                <span class="dot"></span>
                <h1 class="primary__title">Shipping Details</h1>
              </div>
            </div>
          </div>

          <div class="detail__content">
            <div class="content active" id="description">
              <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
                commodo pharetras loremos.Donec pretium egestas sapien et mollis.
              </p>
              <h2>Sample Unordered List</h2>
              <ul>
                <li>Comodous in tempor ullamcorper miaculis</li>
                <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                <li>Divamus sit amet purus justo.</li>
                <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
              </ul>
              <h2>Sample Ordered Lista</h2>
              <ol>
                <li>Comodous in tempor ullamcorper miaculis</li>
                <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                <li>Divamus sit amet purus justo.</li>
                <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
              </ol>
              <h2>Sample Paragraph Text</h2>
              <p>Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras
                felis
                nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra convallis nec
                danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus id ullamcorper
                neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros accumsan quis justo at
                tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus volutpat, ut dapibus purus
                pulvinar. Vestibulum sit amet auctor ipsum.</p>
            </div>
            <div class="content" id="reviews">
              <h1>Customer Reviews</h1>
              <div class="rating">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                </svg>
              </div>
            </div>
            <div class="content" id="shipping">
              <h3>Returns Policy</h3>
              <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay
                the return shipping costs if the return is a result of our error (you received an incorrect or defective
                item, etc.).</p>
              <p>You should expect to receive your refund within four weeks of giving your package to the return
                shipper, however, in many cases you will receive a refund more quickly. This time period includes the
                transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes
                us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to
                process our refund request (5 to 10 business days).
              </p>
              <p>If you need to return an item, simply login to your account, view the order using the 'Complete
                Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via
                e-mail of your refund once we've received and processed the returned item.
              </p>
              <h3>Shipping</h3>
              <p>We can ship to virtually any address in the world. Note that there are restrictions on some products,
                and some products cannot be shipped to international destinations.</p>
              <p>When you place an order, we will estimate shipping and delivery dates for you based on the
                availability of your items and the shipping options you choose. Depending on the shipping provider you
                choose, shipping date estimates may appear on the shipping quotes page.
              </p>
              <p>Please also note that the shipping rates for many items we sell are weight-based. The weight of any
                such item can be found on its detail page. To reflect the policies of the shipping companies we use, all
                weights will be rounded up to the next full pound.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Products -->
      <section class="section related__products">
        <div class="title__container">
          <div class="section__title filter-btn active">
            <span class=" dot"></span>
            <h1 class="primary__title">Related Products</h1>
          </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-duration="1200">
          <div class="glide" id="glide_3">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides latest-center">
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/sumsung/samsung5.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Samsung Galaxy</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$900</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/iPhone/iphone6.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Apple iPhone 11</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$750</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/sumsung/samsung3.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Samsung Galaxy</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$850</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="./images/products/iPhone/iphone2.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Apple iPhone 11</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$450</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/headphone/headphone4.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Sony WH-CH510</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$600</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/sumsung/samsung1.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Samsung Galaxy</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$300</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/headphone/headphone2.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Sony WH-CH510</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$300</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/headphone/headphone1.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Sony WH-CH510</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$250</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/iPhone/iphone1.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Apple iPhone XR</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$550</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

              </ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-arrow-left2"></use>
                </svg>
              </button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-arrow-right2"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- Latest Products -->
      <section class="section latest__products">
        <div class="title__container">
          <div class="section__title filter-btn active" data-id="Latest Products">
            <span class="dot"></span>
            <h1 class="primary__title">Latest Products</h1>
          </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-duration="1200">
          <div class="glide" id="glide_2">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides latest-center">
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/iPhone/iphone6.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Apple iPhone 11</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$750</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/sumsung/samsung5.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Samsung Galaxy</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$900</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/headphone/headphone4.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Sony WH-CH510</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$600</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="/images/products/sumsung/samsung3.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Samsung Galaxy</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$850</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="./images/products/iPhone/iphone2.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Apple iPhone 11</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$450</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/headphone/headphone2.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Sony WH-CH510</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$300</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/sumsung/samsung1.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Samsung Galaxy</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$300</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/headphone/headphone1.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Sony WH-CH510</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$250</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__header">
                      <a href="#"><img src="images/products/iPhone/iphone1.jpeg" alt="product"></a>
                    </div>
                    <div class="product__footer">
                      <h3>Apple iPhone XR</h3>
                      <div class="rating">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div class="product__price">
                        <h4>$550</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

              </ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-arrow-left2"></use>
                </svg>
              </button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-arrow-right2"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Facility Section -->
    <section class="facility__section section" id="facility">
      <div class="container">
        <div class="facility__contianer">
          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <use xlink:href="./images/sprite.svg#icon-airplane"></use>
              </svg>
            </div>
            <p>FREE SHIPPING WORLD WIDE</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <use xlink:href="./images/sprite.svg#icon-credit-card-alt"></use>
              </svg>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <use xlink:href="./images/sprite.svg#icon-credit-card"></use>
              </svg>
            </div>
            <p>MANY PAYMENT GATWAYS</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <use xlink:href="./images/sprite.svg#icon-headphones"></use>
              </svg>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      productId: null,
    };
  },
  created() {
    this.productId = this.$route.params.id;
    console.log("ID: ", this.productId);
    this.$store.dispatch("fetchProduct", this.productId);
  },
  computed: mapState(["product"]),
};
</script>

<style scoped>

/*
======================
Product Details
======================
*/

.details__container--left,
.product-detail__container {
  display: flex;
  align-items: flex-start;
}

.product-detail__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.5rem 0;
  margin: 0 auto;
}

.product-detail__left {
  flex: 0 0 50%;
  margin-right: 2rem;
}

.product-detail__right {
  flex: 0 0 50%;
}

.product-detail__container--left img {
  width: 100%;
  object-fit: cover;
}

.product__pictures {
  display: flex;
  flex-direction: column;
}

.pictures__container {
  padding: 1rem;
  border: 1px solid var(--primaryColor);
  border-right-color: transparent;
  cursor: pointer;
  width: 6.2rem;
  transition: 0.3s;
}

.pictures__container:not(:last-child) {
  border-bottom-color: transparent;
}

.pictures__container:hover {
  border: 1px solid var(--orange);
}

.pictures__container img {
  transition: 0.3s;
}

.pictures__container:hover img {
  scale: 1.1;
}

.product__picture {
  width: 100%;
  border: 1px solid var(--primaryColor);
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.product-details__btn {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.product-details__btn a {
  flex: 0 0 47%;
  display: inline-block;
  padding: 1.6rem 3rem;
  text-align: center;
  color: var(--black);
  border: 1px solid var(--black);
}

.product-details__btn svg {
  width: 1.9rem;
  height: 1.9rem;
  transition: 0.3s;
}

.product-details__btn .add,
.product-details__btn .buy {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.product-details__btn .add span,
.product-details__btn .buy span {
  margin-right: 1rem;
}

.product-details__btn .add:hover,
.product-details__btn .buy:hover {
  background-color: var(--black);
  color: var(--primaryColor);
}

.product-details__btn .add:hover svg,
.product-details__btn .buy:hover svg {
  fill: var(--primaryColor);
}

.product-detail__content {
  width: 90%;
  margin: 0 auto;
}

.product-detail__content h3 {
  font-size: 2.5rem;
  margin-bottom: 1.3rem;
}

.price {
  margin-bottom: 1rem;
}

.new__price {
  font-size: 2rem;
  color: var(--orange);
}

.product-detail__content .product__review {
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  padding-bottom: 1.6rem;
  border-bottom: 0.5px solid var(--primaryColor);
}

.rating {
  margin-right: 1rem;
}

.product__review a:link,
.product__review a:visited {
  color: var(--black);
}

.product-detail__content p {
  font-size: 1.4rem;
  color: var(--black2);
  line-height: 2.4rem;
  margin-bottom: 1.6rem;
}

.product__info .select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}

.select .select-box {
  background: none;
  width: 18rem;
  border: none;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--primaryColor);
}

.select .select-box:focus {
  outline: none;
}

.select__option label {
  font-size: 1.4rem;
  color: var(--black3);
  display: inline-block;
  padding-bottom: 1rem;
}

.input-counter {
  display: flex;
  align-items: center;
}

.input-counter div {
  display: flex;
}

.input-counter li span {
  font-size: 1.4rem;
  color: var(--black3);
  margin-right: 1rem;
}

.minus-btn,
.plus-btn {
  display: inline-block;
  border: 1px solid var(--primaryColor);
  padding: 0.8rem 1rem;
  margin-right: 0;
  cursor: pointer;
}

.plus-btn {
  border-left-color: transparent;
}

.minus-btn {
  border-right-color: transparent;
}

.counter-btn {
  width: 7rem;
  padding: 1rem 0;
  text-align: center;
  border: 1px solid var(--primaryColor);
}

.input-counter svg {
  width: 1.8rem;
  height: 1.8rem;
  fill: var(--grey3);
}

.product__info li {
  margin-bottom: 1.6rem;
}

.product__info .in-stock {
  color: var(--green);
}

.product__info li a {
  font-size: 1.4rem;
  color: var(--black2);
}

.product-info__btn span svg {
  width: 1.8rem;
  height: 1.8rem;
}

.product-info__btn {
  display: flex;
  align-items: center;
}

.product-info__btn a {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--black2);
}

.product-info__btn a:not(:last-child) {
  margin-right: 1rem;
}

/* Product Details Bottom */

.detail__content {
  position: relative;
  height: 55rem;
}

.detail__content .content {
  position: absolute;
  transform: translate(0, 25vh);
  transition: all 0.6s ease-in-out;
  opacity: 0;
  visibility: hidden;
  z-index: 555;
}

.detail__content .content.active {
  transform: translate(0, 0vh);
  opacity: 1;
  visibility: visible;
}

#shipping h3,
#shipping p {
  color: var(--grey2);
}

#shipping p,
#description p {
  padding: 1.6rem 0;
  line-height: 2.8rem;
}

#reviews {
  font-size: 3rem;
  font-weight: 500;
  color: var(--grey2);
  border-bottom: 1px solid var(--primaryColor);
}

#description p,
#description li,
#description h2 {
  color: var(--grey2);
}

#description h2 {
  font-weight: 500;
  padding: 1rem 0;
}

#description li {
  line-height: 3rem;
  color: vaf;
}

#description ol {
  padding-left: 1.6rem;
}

/* Product Details Bottom Media Query*/

@media only screen and (max-width: 1200px) {
  .detail__content {
    height: 65rem;
  }
}

@media only screen and (max-width: 998px) {
  .detail__content {
    height: 70rem;
  }
}

@media only screen and (max-width: 768px) {
  .detail__content {
    height: 85rem;
  }
}

@media only screen and (max-width: 568px) {
  .detail__content {
    height: 110rem;
  }
}

@media only screen and (max-width: 450px) {
  .detail__content {
    height: 130rem;
  }
}

@media only screen and (max-width: 340px) {
  .detail__content {
    height: 160rem;
  }
}

/*
======================
Product Details Media Query
======================
*/
@media only screen and (max-width: 998px) {
  .select .select-box {
    width: 15rem;
  }

  .select__option label {
    display: block;
  }

  .product-info__btn {
    flex-wrap: wrap;
  }

  .product-details__btn a {
    padding: 1rem 2.5rem;
    font-size: 1.4rem;
  }

  .picture__container {
    width: 90%;
  }
}

@media only screen and (max-width: 768px) {
  .details__container--left {
    flex-direction: column-reverse;
    text-align: center;
  }

  .product__pictures {
    margin-top: 2rem;
    flex-direction: row;
    justify-content: center;
  }

  .pictures__container {
    width: 50%;
    border-right-color: var(--primaryColor);
  }

  .pictures__container:not(:last-child) {
    border-bottom-color: var(--primaryColor);
  }

  .product-detail__container {
    grid-template-columns: 1fr;
    row-gap: 5rem;
  }

  .product__info .select {
    align-items: flex-start;
    flex-direction: column;
  }

  .select .select-box {
    display: block;
    width: 20rem;
  }
}

@media only screen and (max-width: 568px) {
  .select .select-box {
    width: 15rem;
  }

  .input-counter {
    align-items: flex-start;
    flex-direction: column;
  }

  .input-counter div {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 400px) {
  .product-details__btn a {
    padding: 0.7rem 2rem;
    font-size: 1.2rem;
  }

  .product-details__btn .add span,
  .product-details__btn .buy span {
    margin-right: 0rem;
  }

  .product__review .rating svg {
    width: 1.4rem;
    height: 1.4rem;
  }
}

</style>