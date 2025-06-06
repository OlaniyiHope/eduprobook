import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import park from "./edu.PNG";
import Test from "../Test";
// s

const Home = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await axios.get(
          `https://eduproapi.vercel.app/api/book`
        );
        setDownloads(response.data.data); // Update downloads state with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching downloads:", error);
        setLoading(false);
      }
    };

    fetchDownloads();
  }, []); // Fetch downloads on component mount
  // Function to handle adding items to the cart

  useEffect(() => {
    console.log("Book state:", downloads); // Log book state
    console.log("Cart items:", cartItems); // Log cart items state
    console.log("Cart count:", cartCount); // Log cart count state
  }, [downloads, cartItems, cartCount]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Test cartCount={cartCount} />
      <body class="tg-home tg-homeone">
        <div class="tg-home tg-homeone">
          <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
            <div id="tg-homeslider" class="tg-homeslider tg-haslayout ">
              <div
                class="item"
                data-vide-bg="poster: images/slider/img-01.jpg"
                data-vide-options="position: 0% 50%"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                      <div class="tg-slidercontent">
                        <figure class="tg-authorimg">
                          <a href="/book-details">
                            <img
                              src="images/author/imag-01.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <h1>Jude Morphew</h1>
                        <h2>Latest 2017 Release</h2>
                        <div class="tg-description">
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt ut labore tolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamcoiars
                            nisi ut aliquip commodo.
                          </p>
                        </div>
                        <div class="tg-btns">
                          <a class="tg-btn" href="/book-details">
                            buy now
                          </a>
                          <a class="tg-btn" href="/book-details">
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <main id="tg-main" class="tg-main tg-haslayout">
              <section class="tg-haslayout">
                <div class="container">
                  <div class="row">
                    <div class="tg-allstatus">
                      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div
                          class="tg-parallax tg-bgbookwehave"
                          data-z-index="2"
                          data-appear-top-offset="600"
                          data-parallax="scroll"
                          data-image-src="images/parallax/bgparallax-01.jpg"
                        >
                          <div class="tg-status">
                            <div class="tg-statuscontent">
                              <span class="tg-statusicon">
                                <i class="icon-book"></i>
                              </span>
                              <h2>
                                Books we have<span>24,179,213</span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div
                          class="tg-parallax tg-bgtotalmembers"
                          data-z-index="2"
                          data-appear-bottom-offset="600"
                          data-parallax="scroll"
                          data-image-src="images/parallax/bgparallax-02.jpg"
                        >
                          <div class="tg-status">
                            <div class="tg-statuscontent">
                              <span class="tg-statusicon">
                                <i class="icon-user"></i>
                              </span>
                              <h2>
                                Total Users<span>150</span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div
                          class="tg-parallax tg-bghappyusers"
                          data-z-index="2"
                          data-appear-top-offset="600"
                          data-parallax="scroll"
                          data-image-src="images/parallax/bgparallax-03.jpg"
                        >
                          <div class="tg-status">
                            <div class="tg-statuscontent">
                              <span class="tg-statusicon">
                                <i class="icon-heart"></i>
                              </span>
                              <h2>
                                Happy users<span>1,267,539</span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <main id="tg-main" class="tg-main tg-haslayout">
                <div class="tg-sectionspace tg-haslayout">
                  <div class="container">
                    <div class="row">
                      <div id="tg-twocolumns" class="tg-twocolumns">
                        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-12 pull-right">
                          <div id="tg-content" class="tg-content">
                            <div class="tg-products">
                              <div class="tg-sectionhead">
                                <h2>
                                  <span>People’s Choice</span>Bestselling Books
                                </h2>
                              </div>

                              <div class="tg-productgrid">
                                {downloads.map((item, index) => (
                                  <div
                                    key={item._id}
                                    class="col-xs-6 col-sm-6 col-md-4 col-lg-2"
                                  >
                                    <div class="">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img
                                              src={`https://edupros.s3.amazonaws.com/${item.imageUrl}`}
                                              alt="image description"
                                            />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src={`https://edupros.s3.amazonaws.com/${item.imageUrl}`}
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              {item.category}
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox">
                                          <span class="tg-themetag">
                                            {" "}
                                            {item.status}
                                          </span>
                                        </div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <Link to={`/booking/${item._id}`}>
                                              {item.title}
                                            </Link>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            {item.authorName}
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$ {item.ourprice}</ins>
                                          <del>$ {item.genprice}</del>
                                        </span>
                                        <span
                                          className="tg-btn tg-btnstyletwo"
                                          onClick={() => addToCart(item)}

                                          // Pass 'item' instead of 'book'
                                        >
                                          <i className="fa fa-shopping-basket"></i>
                                          <em>Add To Cart</em>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <section class="tg-bglight tg-haslayout">
                <div class="container">
                  <div class="row">
                    <div class="tg-featureditm">
                      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                        <figure>
                          <img
                            src="images/img-02.png"
                            alt="image description"
                          />
                        </figure>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div class="tg-featureditmcontent">
                          <div class="tg-themetagbox">
                            <span class="tg-themetag">featured</span>
                          </div>
                          <div class="tg-booktitle">
                            <h3>
                              <a href="/book-details">
                                Things To Know About Green Flat Design
                              </a>
                            </h3>
                          </div>
                          <span class="tg-bookwriter">
                            By: <a href="/book-details">Farrah Whisenhunt</a>
                          </span>
                          <span class="tg-stars">
                            <span></span>
                          </span>
                          <div class="tg-priceandbtn">
                            <span class="tg-bookprice">
                              <ins>$23.18</ins>
                              <del>$30.20</del>
                            </span>
                            <a
                              class="tg-btn tg-btnstyletwo tg-active"
                              href="/book-details"
                            >
                              <i class="fa fa-shopping-basket"></i>
                              <em>Add To Basket</em>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="tg-sectionspace tg-haslayout">
                <div class="container">
                  <div class="row">
                    <div class="tg-newrelease">
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="tg-sectionhead">
                          <h2>
                            <span>Taste The New Spice</span>New Release Books
                          </h2>
                        </div>
                        <div class="tg-description">
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt labore toloregna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamcoiars
                            nisiuip commodo consequat aute irure dolor in
                            aprehenderit aveli esseati cillum dolor fugiat nulla
                            pariatur cepteur sint occaecat cupidatat.
                          </p>
                        </div>
                        <div class="tg-btns">
                          <a class="tg-btn tg-active" href="/book-details">
                            View All
                          </a>
                          <a class="tg-btn" href="/book-details">
                            Read More
                          </a>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="row">
                          <div class="tg-newreleasebooks">
                            <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img src="" alt="image description" />
                                    </div>
                                    <div class="tg-backcover">
                                      <img src="" alt="image description" />
                                    </div>
                                  </div>
                                  <a
                                    class="tg-btnaddtowishlist"
                                    href="/book-details"
                                  >
                                    <i class="icon-heart"></i>
                                    <span>add to wishlist</span>
                                  </a>
                                </figure>
                                <div class="tg-postbookcontent">
                                  <ul class="tg-bookscategories">
                                    <li>
                                      <a href="/book-details">Adventure</a>
                                    </li>
                                    <li>
                                      <a href="/book-details">Fun</a>
                                    </li>
                                  </ul>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="/book-details">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="/book-details">
                                      Kathrine Culbertson
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img src="" alt="image description" />
                                    </div>
                                    <div class="tg-backcover">
                                      <img src="i" alt="image description" />
                                    </div>
                                  </div>
                                  <a
                                    class="tg-btnaddtowishlist"
                                    href="/book-details"
                                  >
                                    <i class="icon-heart"></i>
                                    <span>add to wishlist</span>
                                  </a>
                                </figure>
                                <div class="tg-postbookcontent">
                                  <ul class="tg-bookscategories">
                                    <li>
                                      <a href="/book-details">Adventure</a>
                                    </li>
                                    <li>
                                      <a href="/book-details">Fun</a>
                                    </li>
                                  </ul>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="/book-details">
                                        Drive Safely, No Bumping
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="/book-details">Sunshine Orlando</a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-3 col-lg-4 hidden-md">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img src="" alt="image description" />
                                    </div>
                                    <div class="tg-backcover">
                                      <img src="" alt="image description" />
                                    </div>
                                  </div>
                                  <a
                                    class="tg-btnaddtowishlist"
                                    href="/book-details"
                                  >
                                    <i class="icon-heart"></i>
                                    <span>add to wishlist</span>
                                  </a>
                                </figure>
                                <div class="tg-postbookcontent">
                                  <ul class="tg-bookscategories">
                                    <li>
                                      <a href="/book-details">Adventure</a>
                                    </li>
                                    <li>
                                      <a href="/book-details">Fun</a>
                                    </li>
                                  </ul>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="/book-details">
                                        Let The Good Times Roll Up
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="/book-details">
                                      Elisabeth Ronning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                class="tg-parallax tg-bgcollectioncount tg-haslayout"
                data-z-index="-100"
                data-appear-top-offset="600"
                data-parallax="scroll"
                data-image-src="images/parallax/bgparallax-04.jpg"
              >
                <div class="tg-sectionspace tg-collectioncount tg-haslayout">
                  <div class="container">
                    <div class="row">
                      <div
                        id="tg-collectioncounters"
                        class="tg-collectioncounters"
                      >
                        <div class="tg-collectioncounter tg-drama">
                          <div class="tg-collectioncountericon">
                            <i class="icon-bubble"></i>
                          </div>
                          <div class="tg-titlepluscounter">
                            <h2>Drama</h2>
                            <h3
                              data-from="0"
                              data-to="6179213"
                              data-speed="8000"
                              data-refresh-interval="50"
                            >
                              6,179,213
                            </h3>
                          </div>
                        </div>
                        <div class="tg-collectioncounter tg-horror">
                          <div class="tg-collectioncountericon">
                            <i class="icon-heart-pulse"></i>
                          </div>
                          <div class="tg-titlepluscounter">
                            <h2>Horror</h2>
                            <h3
                              data-from="0"
                              data-to="3121242"
                              data-speed="8000"
                              data-refresh-interval="50"
                            >
                              3,121,242
                            </h3>
                          </div>
                        </div>
                        <div class="tg-collectioncounter tg-romance">
                          <div class="tg-collectioncountericon">
                            <i class="icon-heart"></i>
                          </div>
                          <div class="tg-titlepluscounter">
                            <h2>Romance</h2>
                            <h3
                              data-from="0"
                              data-to="2101012"
                              data-speed="8000"
                              data-refresh-interval="50"
                            >
                              2,101,012
                            </h3>
                          </div>
                        </div>
                        <div class="tg-collectioncounter tg-fashion">
                          <div class="tg-collectioncountericon">
                            <i class="icon-star"></i>
                          </div>
                          <div class="tg-titlepluscounter">
                            <h2>Fashion</h2>
                            <h3
                              data-from="0"
                              data-to="1158245"
                              data-speed="8000"
                              data-refresh-interval="50"
                            >
                              1,158,245
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="tg-sectionspace tg-haslayout">
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div class="tg-sectionhead">
                        <h2>
                          <span>Some Great Books</span>Picked By Authors
                        </h2>
                        <a class="tg-btn" href="/book-details">
                          View All
                        </a>
                      </div>
                    </div>
                    <div
                      id="tg-pickedbyauthorslider"
                      class="tg-pickedbyauthor tg-pickedbyauthorslider owl-carousel"
                    >
                      <div class="item">
                        <div class="tg-postbook">
                          <figure class="tg-featureimg">
                            <div class="tg-bookimg">
                              <div class="tg-frontcover">
                                <img
                                  src="images/books/img-10.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <div class="tg-hovercontent">
                              <div class="tg-description">
                                <p>
                                  Consectetur adipisicing elit sed do eiusmod
                                  tempor incididunt labore toloregna aliqua enim
                                  adia minim veniam, quis nostrud.
                                </p>
                              </div>
                              <strong class="tg-bookpage">
                                Book Pages: 206
                              </strong>
                              <strong class="tg-bookcategory">
                                Category: Adventure, Fun
                              </strong>
                              <strong class="tg-bookprice">
                                Price: $23.18
                              </strong>
                              <div class="tg-ratingbox">
                                <span class="tg-stars">
                                  <span></span>
                                </span>
                              </div>
                            </div>
                          </figure>
                          <div class="tg-postbookcontent">
                            <div class="tg-booktitle">
                              <h3>
                                <a href="/book-details">
                                  Seven Minutes In Heaven
                                </a>
                              </h3>
                            </div>
                            <span class="tg-bookwriter">
                              By: <a href="/book-details">Sunshine Orlando</a>
                            </span>
                            <a
                              class="tg-btn tg-btnstyletwo"
                              href="/book-details"
                            >
                              <i class="fa fa-shopping-basket"></i>
                              <em>Add To Basket</em>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="tg-postbook">
                          <figure class="tg-featureimg">
                            <div class="tg-bookimg">
                              <div class="tg-frontcover">
                                <img
                                  src="images/books/img-11.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <div class="tg-hovercontent">
                              <div class="tg-description">
                                <p>
                                  Consectetur adipisicing elit sed do eiusmod
                                  tempor incididunt labore toloregna aliqua enim
                                  adia minim veniam, quis nostrud.
                                </p>
                              </div>
                              <strong class="tg-bookpage">
                                Book Pages: 206
                              </strong>
                              <strong class="tg-bookcategory">
                                Category: Adventure, Fun
                              </strong>
                              <strong class="tg-bookprice">
                                Price: $23.18
                              </strong>
                              <div class="tg-ratingbox">
                                <span class="tg-stars">
                                  <span></span>
                                </span>
                              </div>
                            </div>
                          </figure>
                          <div class="tg-postbookcontent">
                            <div class="tg-booktitle">
                              <h3>
                                <a href="/book-details">
                                  Slow And Steady Wins The Race
                                </a>
                              </h3>
                            </div>
                            <span class="tg-bookwriter">
                              By: <a href="/book-details">Drusilla Glandon</a>
                            </span>
                            <a
                              class="tg-btn tg-btnstyletwo"
                              href="/book-details"
                            >
                              <i class="fa fa-shopping-basket"></i>
                              <em>Add To Basket</em>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="tg-postbook">
                          <figure class="tg-featureimg">
                            <div class="tg-bookimg">
                              <div class="tg-frontcover">
                                <img
                                  src="images/books/img-12.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <div class="tg-hovercontent">
                              <div class="tg-description">
                                <p>
                                  Consectetur adipisicing elit sed do eiusmod
                                  tempor incididunt labore toloregna aliqua enim
                                  adia minim veniam, quis nostrud.
                                </p>
                              </div>
                              <strong class="tg-bookpage">
                                Book Pages: 206
                              </strong>
                              <strong class="tg-bookcategory">
                                Category: Adventure, Fun
                              </strong>
                              <strong class="tg-bookprice">
                                Price: $23.18
                              </strong>
                              <div class="tg-ratingbox">
                                <span class="tg-stars">
                                  <span></span>
                                </span>
                              </div>
                            </div>
                          </figure>
                          <div class="tg-postbookcontent">
                            <div class="tg-booktitle">
                              <h3>
                                <a href="/book-details">
                                  There’s No Time Like The Present
                                </a>
                              </h3>
                            </div>
                            <span class="tg-bookwriter">
                              By: <a href="/book-details">Patrick Seller</a>
                            </span>
                            <a
                              class="tg-btn tg-btnstyletwo"
                              href="/book-details"
                            >
                              <i class="fa fa-shopping-basket"></i>
                              <em>Add To Basket</em>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="tg-postbook">
                          <figure class="tg-featureimg">
                            <div class="tg-bookimg">
                              <div class="tg-frontcover">
                                <img
                                  src="images/books/img-10.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <div class="tg-hovercontent">
                              <div class="tg-description">
                                <p>
                                  Consectetur adipisicing elit sed do eiusmod
                                  tempor incididunt labore toloregna aliqua enim
                                  adia minim veniam, quis nostrud.
                                </p>
                              </div>
                              <strong class="tg-bookpage">
                                Book Pages: 206
                              </strong>
                              <strong class="tg-bookcategory">
                                Category: Adventure, Fun
                              </strong>
                              <strong class="tg-bookprice">
                                Price: $23.18
                              </strong>
                              <div class="tg-ratingbox">
                                <span class="tg-stars">
                                  <span></span>
                                </span>
                              </div>
                            </div>
                          </figure>
                          <div class="tg-postbookcontent">
                            <div class="tg-booktitle">
                              <h3>
                                <a href="/book-details">
                                  Seven Minutes In Heaven
                                </a>
                              </h3>
                            </div>
                            <span class="tg-bookwriter">
                              By: <a href="/book-details">Sunshine Orlando</a>
                            </span>
                            <a
                              class="tg-btn tg-btnstyletwo"
                              href="/book-details"
                            >
                              <i class="fa fa-shopping-basket"></i>
                              <em>Add To Basket</em>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="tg-postbook">
                          <figure class="tg-featureimg">
                            <div class="tg-bookimg">
                              <div class="tg-frontcover">
                                <img
                                  src="images/books/img-11.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <div class="tg-hovercontent">
                              <div class="tg-description">
                                <p>
                                  Consectetur adipisicing elit sed do eiusmod
                                  tempor incididunt labore toloregna aliqua enim
                                  adia minim veniam, quis nostrud.
                                </p>
                              </div>
                              <strong class="tg-bookpage">
                                Book Pages: 206
                              </strong>
                              <strong class="tg-bookcategory">
                                Category: Adventure, Fun
                              </strong>
                              <strong class="tg-bookprice">
                                Price: $23.18
                              </strong>
                              <div class="tg-ratingbox">
                                <span class="tg-stars">
                                  <span></span>
                                </span>
                              </div>
                            </div>
                          </figure>
                          <div class="tg-postbookcontent">
                            <div class="tg-booktitle">
                              <h3>
                                <a href="/book-details">
                                  Slow And Steady Wins The Race
                                </a>
                              </h3>
                            </div>
                            <span class="tg-bookwriter">
                              By: <a href="/book-details">Drusilla Glandon</a>
                            </span>
                            <a
                              class="tg-btn tg-btnstyletwo"
                              href="/book-details"
                            >
                              <i class="fa fa-shopping-basket"></i>
                              <em>Add To Basket</em>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                class="tg-parallax tg-bgtestimonials tg-haslayout"
                data-z-index="-100"
                data-appear-top-offset="600"
                data-parallax="scroll"
                data-image-src="images/parallax/bgparallax-05.jpg"
              >
                <div class="tg-sectionspace tg-haslayout">
                  <div class="container">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-push-2">
                        <div
                          id="tg-testimonialsslider"
                          class="tg-testimonialsslider tg-testimonials owl-carousel"
                        >
                          <div class="item tg-testimonial">
                            <figure>
                              <img
                                src="images/author/imag-02.jpg"
                                alt="image description"
                              />
                            </figure>
                            <blockquote>
                              <q>
                                Consectetur adipisicing elit sed do eiusmod
                                tempor incididunt ut labore tolore magna aliqua
                                enim ad minim veniam, quis nostrud exercitation
                                ullamcoiars nisi ut aliquip commodo.
                              </q>
                            </blockquote>
                            <div class="tg-testimonialauthor">
                              <h3>Holli Fenstermacher</h3>
                              <span>Manager @ CIFP</span>
                            </div>
                          </div>
                          <div class="item tg-testimonial">
                            <figure>
                              <img
                                src="images/author/imag-02.jpg"
                                alt="image description"
                              />
                            </figure>
                            <blockquote>
                              <q>
                                Consectetur adipisicing elit sed do eiusmod
                                tempor incididunt ut labore tolore magna aliqua
                                enim ad minim veniam, quis nostrud exercitation
                                ullamcoiars nisi ut aliquip commodo.
                              </q>
                            </blockquote>
                            <div class="tg-testimonialauthor">
                              <h3>Holli Fenstermacher</h3>
                              <span>Manager @ CIFP</span>
                            </div>
                          </div>
                          <div class="item tg-testimonial">
                            <figure>
                              <img
                                src="images/author/imag-02.jpg"
                                alt="image description"
                              />
                            </figure>
                            <blockquote>
                              <q>
                                Consectetur adipisicing elit sed do eiusmod
                                tempor incididunt ut labore tolore magna aliqua
                                enim ad minim veniam, quis nostrud exercitation
                                ullamcoiars nisi ut aliquip commodo.
                              </q>
                            </blockquote>
                            <div class="tg-testimonialauthor">
                              <h3>Holli Fenstermacher</h3>
                              <span>Manager @ CIFP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="tg-sectionspace tg-haslayout">
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div class="tg-sectionhead">
                        <h2>
                          <span>Strong Minds Behind Us</span>Most Popular
                          Authors
                        </h2>
                        <a class="tg-btn" href="/book-details">
                          View All
                        </a>
                      </div>
                    </div>
                    <div
                      id="tg-authorsslider"
                      class="tg-authors tg-authorsslider owl-carousel"
                    >
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-03.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Jude Morphew</a>
                          </h2>
                          <span>21,658 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-04.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Book Burger</a>
                          </h2>
                          <span>20,257 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-05.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Book Ship &amp; Co.</a>
                          </h2>
                          <span>15,686 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-06.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Enoch Gallion</a>
                          </h2>
                          <span>12,435 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-07.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Book House</a>
                          </h2>
                          <span>15,953 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-08.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Linnie Klimek</a>
                          </h2>
                          <span>65,720 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-05.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Book Ship &amp; Co.</a>
                          </h2>
                          <span>15,686 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="item tg-author">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/author/imag-06.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-authorcontent">
                          <h2>
                            <a href="/book-details">Enoch Gallion</a>
                          </h2>
                          <span>12,435 Published Books</span>
                          <ul class="tg-socialicons">
                            <li class="tg-facebook">
                              <a href="/book-details">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="tg-twitter">
                              <a href="/book-details">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="tg-linkedin">
                              <a href="/book-details">
                                <i class="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                class="tg-parallax tg-bgcalltoaction tg-haslayout"
                data-z-index="-100"
                data-appear-top-offset="600"
                data-parallax="scroll"
                data-image-src="images/parallax/bgparallax-06.jpg"
              >
                <div class="tg-sectionspace tg-haslayout">
                  <div class="container">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-calltoaction">
                          <h2>Open Discount For All</h2>
                          <h3>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt ut labore et dolore.
                          </h3>
                          <a class="tg-btn tg-active" href="/book-details">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="tg-sectionspace tg-haslayout">
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div class="tg-sectionhead">
                        <h2>
                          <span>Latest News &amp; Articles</span>What's Hot in
                          The News
                        </h2>
                        <a class="tg-btn" href="/book-details">
                          View All
                        </a>
                      </div>
                    </div>
                    <div
                      id="tg-postslider"
                      class="tg-postslider tg-blogpost owl-carousel"
                    >
                      <article class="item tg-post">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/blog/img-01.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-postcontent">
                          <ul class="tg-bookscategories">
                            <li>
                              <a href="/book-details">Adventure</a>
                            </li>
                            <li>
                              <a href="/book-details">Fun</a>
                            </li>
                          </ul>
                          <div class="tg-themetagbox">
                            <span class="tg-themetag">featured</span>
                          </div>
                          <div class="tg-posttitle">
                            <h3>
                              <a href="/book-details">
                                Where The Wild Things Are
                              </a>
                            </h3>
                          </div>
                          <span class="tg-bookwriter">
                            By: <a href="/book-details">Kathrine Culbertson</a>
                          </span>
                          <ul class="tg-postmetadata">
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-comment-o"></i>
                                <i>21,415 Comments</i>
                              </a>
                            </li>
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-eye"></i>
                                <i>24,565 Views</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="item tg-post">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/blog/img-02.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-postcontent">
                          <ul class="tg-bookscategories">
                            <li>
                              <a href="/book-details">Adventure</a>
                            </li>
                            <li>
                              <a href="/book-details">Fun</a>
                            </li>
                          </ul>
                          <div class="tg-themetagbox">
                            <span class="tg-themetag">featured</span>
                          </div>
                          <div class="tg-posttitle">
                            <h3>
                              <a href="/book-details">
                                All She Wants To Do Is Dance
                              </a>
                            </h3>
                          </div>
                          <span class="tg-bookwriter">
                            By: <a href="/book-details">Kathrine Culbertson</a>
                          </span>
                          <ul class="tg-postmetadata">
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-comment-o"></i>
                                <i>21,415 Comments</i>
                              </a>
                            </li>
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-eye"></i>
                                <i>24,565 Views</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="item tg-post">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/blog/img-03.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-postcontent">
                          <ul class="tg-bookscategories">
                            <li>
                              <a href="/book-details">Adventure</a>
                            </li>
                            <li>
                              <a href="/book-details">Fun</a>
                            </li>
                          </ul>
                          <div class="tg-themetagbox">
                            <span class="tg-themetag">featured</span>
                          </div>
                          <div class="tg-posttitle">
                            <h3>
                              <a href="/book-details">
                                Why Walk When You Can Climb?
                              </a>
                            </h3>
                          </div>
                          <span class="tg-bookwriter">
                            By: <a href="/book-details">Kathrine Culbertson</a>
                          </span>
                          <ul class="tg-postmetadata">
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-comment-o"></i>
                                <i>21,415 Comments</i>
                              </a>
                            </li>
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-eye"></i>
                                <i>24,565 Views</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="item tg-post">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/blog/img-04.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-postcontent">
                          <ul class="tg-bookscategories">
                            <li>
                              <a href="/book-details">Adventure</a>
                            </li>
                            <li>
                              <a href="/book-details">Fun</a>
                            </li>
                          </ul>
                          <div class="tg-themetagbox">
                            <span class="tg-themetag">featured</span>
                          </div>
                          <div class="tg-posttitle">
                            <h3>
                              <a href="/book-details">
                                Dance Like Nobody’s Watching
                              </a>
                            </h3>
                          </div>
                          <span class="tg-bookwriter">
                            By: <a href="/book-details">Kathrine Culbertson</a>
                          </span>
                          <ul class="tg-postmetadata">
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-comment-o"></i>
                                <i>21,415 Comments</i>
                              </a>
                            </li>
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-eye"></i>
                                <i>24,565 Views</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="item tg-post">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/blog/img-02.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-postcontent">
                          <ul class="tg-bookscategories">
                            <li>
                              <a href="/book-details">Adventure</a>
                            </li>
                            <li>
                              <a href="/book-details">Fun</a>
                            </li>
                          </ul>
                          <div class="tg-themetagbox">
                            <span class="tg-themetag">featured</span>
                          </div>
                          <div class="tg-posttitle">
                            <h3>
                              <a href="/book-details">
                                All She Wants To Do Is Dance
                              </a>
                            </h3>
                          </div>
                          <span class="tg-bookwriter">
                            By: <a href="/book-details">Kathrine Culbertson</a>
                          </span>
                          <ul class="tg-postmetadata">
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-comment-o"></i>
                                <i>21,415 Comments</i>
                              </a>
                            </li>
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-eye"></i>
                                <i>24,565 Views</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="item tg-post">
                        <figure>
                          <a href="/book-details">
                            <img
                              src="images/blog/img-03.jpg"
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div class="tg-postcontent">
                          <ul class="tg-bookscategories">
                            <li>
                              <a href="/book-details">Adventure</a>
                            </li>
                            <li>
                              <a href="/book-details">Fun</a>
                            </li>
                          </ul>
                          <div class="tg-themetagbox">
                            <span class="tg-themetag">featured</span>
                          </div>
                          <div class="tg-posttitle">
                            <h3>
                              <a href="/book-details">
                                Why Walk When You Can Climb?
                              </a>
                            </h3>
                          </div>
                          <span class="tg-bookwriter">
                            By: <a href="/book-details">Kathrine Culbertson</a>
                          </span>
                          <ul class="tg-postmetadata">
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-comment-o"></i>
                                <i>21,415 Comments</i>
                              </a>
                            </li>
                            <li>
                              <a href="/book-details">
                                <i class="fa fa-eye"></i>
                                <i>24,565 Views</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>

              <footer id="tg-footer" class="tg-footer tg-haslayout">
                <div class="tg-footerarea">
                  <div class="container">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="tg-clientservices">
                          <li class="tg-devlivery">
                            <span class="tg-clientserviceicon">
                              <i class="icon-rocket"></i>
                            </span>
                            <div class="tg-titlesubtitle">
                              <h3>Fast Delivery</h3>
                              <p>Shipping Worldwide</p>
                            </div>
                          </li>
                          <li class="tg-discount">
                            <span class="tg-clientserviceicon">
                              <i class="icon-tag"></i>
                            </span>
                            <div class="tg-titlesubtitle">
                              <h3>Open Discount</h3>
                              <p>Offering Open Discount</p>
                            </div>
                          </li>
                          <li class="tg-quality">
                            <span class="tg-clientserviceicon">
                              <i class="icon-leaf"></i>
                            </span>
                            <div class="tg-titlesubtitle">
                              <h3>Eyes On Quality</h3>
                              <p>Publishing Quality Work</p>
                            </div>
                          </li>
                          <li class="tg-support">
                            <span class="tg-clientserviceicon">
                              <i class="icon-heart"></i>
                            </span>
                            <div class="tg-titlesubtitle">
                              <h3>24/7 Support</h3>
                              <p>Serving Every Moments</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="tg-threecolumns">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                          <div class="tg-footercol">
                            <strong class="tg-logo">
                              <a href="/book-details">
                                <img
                                  src="images/flogo.png"
                                  alt="image description"
                                />
                              </a>
                            </strong>
                            <ul class="tg-contactinfo">
                              <li>
                                <i class="icon-apartment"></i>
                                <address>
                                  Suit # 07, Rose world Building, Street # 02,
                                  AT246T Manchester
                                </address>
                              </li>
                              <li>
                                <i class="icon-phone-handset"></i>
                                <span>
                                  <em>0800 12345 - 678 - 89</em>
                                  <em>+4 1234 - 4567 - 67</em>
                                </span>
                              </li>
                              <li>
                                <i class="icon-clock"></i>
                                <span>
                                  Serving 7 Days A Week From 9am - 5pm
                                </span>
                              </li>
                              <li>
                                <i class="icon-envelope"></i>
                                <span>
                                  <em>
                                    <a href="mailto:support@domain.com">
                                      support@domain.com
                                    </a>
                                  </em>
                                  <em>
                                    <a href="mailto:info@domain.com">
                                      info@domain.com
                                    </a>
                                  </em>
                                </span>
                              </li>
                            </ul>
                            <ul class="tg-socialicons">
                              <li class="tg-facebook">
                                <a href="/book-details">
                                  <i class="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li class="tg-twitter">
                                <a href="/book-details">
                                  <i class="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li class="tg-linkedin">
                                <a href="/book-details">
                                  <i class="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li class="tg-googleplus">
                                <a href="/book-details">
                                  <i class="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li class="tg-rss">
                                <a href="/book-details">
                                  <i class="fa fa-rss"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                          <div class="tg-footercol tg-widget tg-widgetnavigation">
                            <div class="tg-widgettitle">
                              <h3>Shipping And Help Information</h3>
                            </div>
                            <div class="tg-widgetcontent">
                              <ul>
                                <li>
                                  <a href="/book-details">Terms of Use</a>
                                </li>
                                <li>
                                  <a href="/book-details">Terms of Sale</a>
                                </li>
                                <li>
                                  <a href="/book-details">Returns</a>
                                </li>
                                <li>
                                  <a href="/book-details">Privacy</a>
                                </li>
                                <li>
                                  <a href="/book-details">Cookies</a>
                                </li>
                                <li>
                                  <a href="/book-details">Contact Us</a>
                                </li>
                                <li>
                                  <a href="/book-details">Our Affiliates</a>
                                </li>
                                <li>
                                  <a href="/book-details">Vision &amp; Aim</a>
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <a href="/book-details">Our Story</a>
                                </li>
                                <li>
                                  <a href="/book-details">Meet Our Team</a>
                                </li>
                                <li>
                                  <a href="/book-details">FAQ</a>
                                </li>
                                <li>
                                  <a href="/book-details">Testimonials</a>
                                </li>
                                <li>
                                  <a href="/book-details">Join Our Team</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div class="tg-footercol tg-widget tg-widgettopsellingauthors">
                            <div class="tg-widgettitle">
                              <h3>Top Selling Authors</h3>
                            </div>
                            <div class="tg-widgetcontent">
                              <ul>
                                <li>
                                  <figure>
                                    <a href="/book-details">
                                      <img
                                        src="images/author/imag-09.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authornamebooks">
                                    <h4>
                                      <a href="/book-details">Jude Morphew</a>
                                    </h4>
                                    <p>21,658 Published Books</p>
                                  </div>
                                </li>
                                <li>
                                  <figure>
                                    <a href="/book-details">
                                      <img
                                        src="images/author/imag-10.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authornamebooks">
                                    <h4>
                                      <a href="/book-details">Shaun Humes</a>
                                    </h4>
                                    <p>20,257 Published Books</p>
                                  </div>
                                </li>
                                <li>
                                  <figure>
                                    <a href="/book-details">
                                      <img
                                        src="images/author/imag-11.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authornamebooks">
                                    <h4>
                                      <a href="/book-details">
                                        Kathrine Culbertson
                                      </a>
                                    </h4>
                                    <p>15,686 Published Books</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tg-newsletter">
                  <div class="container">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h4>Signup Newsletter!</h4>
                        <h5>
                          Consectetur adipisicing elit sed do eiusmod tempor
                          incididunt.
                        </h5>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <form class="tg-formtheme tg-formnewsletter">
                          <fieldset>
                            <input
                              type="email"
                              name="email"
                              class="form-control"
                              placeholder="Enter Your Email ID"
                            />
                            <button type="button">
                              <i class="icon-envelope"></i>
                            </button>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tg-footerbar">
                  <a
                    id="tg-btnbacktotop"
                    class="tg-btnbacktotop"
                    href="/book-details"
                  >
                    <i class="icon-chevron-up"></i>
                  </a>
                  <div class="container">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <span class="tg-paymenttype">
                          <img
                            src="images/paymenticon.png"
                            alt="image description"
                          />
                        </span>
                        <span class="tg-copyright">
                          2017 All Rights Reserved By &copy; Book Library
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
