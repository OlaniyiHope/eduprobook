import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Details = () => {
  return (
    <div>
      <body class="tg-home tg-homeone">
        <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
          <Header />

          <div
            class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner"
            data-z-index="-100"
            data-appear-top-offset="600"
            data-parallax="scroll"
            data-image-src="images/parallax/bgparallax-07.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="tg-innerbannercontent">
                    <h1>All Products</h1>
                    <ol class="tg-breadcrumb">
                      <li>
                        <a href="javascript:void(0);">home</a>
                      </li>
                      <li class="tg-active">Products</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main id="tg-main" class="tg-main tg-haslayout">
            <div class="tg-sectionspace tg-haslayout">
              <div class="container">
                <div class="row">
                  <div id="tg-twocolumns" class="tg-twocolumns">
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
                      <div id="tg-content" class="tg-content">
                        <div class="tg-products">
                          <div class="tg-sectionhead">
                            <h2>
                              <span>People’s Choice</span>Bestselling Books
                            </h2>
                          </div>
                          <div class="tg-featurebook alert" role="alert">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="tg-featureditm">
                              <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                                  <figure>
                                    <img
                                      src="images/img-04.png"
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
                                        <a href="javascript:void(0);">
                                          Things To Know About Green Flat Design
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Farrah Whisenhunt
                                      </a>
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
                                        href="javascript:void(0);"
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
                          <div class="tg-productgrid">
                            <div class="tg-refinesearch">
                              <span>showing 1 to 8 of 20 total</span>
                              <form class="tg-formtheme tg-formsortshoitems">
                                <fieldset>
                                  <div class="form-group">
                                    <label>sort by:</label>
                                    <span class="tg-select">
                                      <select>
                                        <option>name</option>
                                        <option>name</option>
                                        <option>name</option>
                                      </select>
                                    </span>
                                  </div>
                                  <div class="form-group">
                                    <label>show:</label>
                                    <span class="tg-select">
                                      <select>
                                        <option>8</option>
                                        <option>16</option>
                                        <option>20</option>
                                      </select>
                                    </span>
                                  </div>
                                </fieldset>
                              </form>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-01.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-01.jpg"
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
                                        Art &amp; Photography
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                    <del>$27.20</del>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-02.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-02.jpg"
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
                                        Children’s Book
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                    <del>$27.20</del>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-03.jpg"
                                        alt="image description"
                                      />{" "}
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-03.jpg"
                                        alt="image description"
                                      />{" "}
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
                                      <a href="javascript:void(0);">Comic</a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">
                                        Adventure
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-04.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-04.jpg"
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
                                        Fantacy &amp; Horor
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-05.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-05.jpg"
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
                                        Children’s Book
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                    <del>$27.20</del>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-06.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-06.jpg"
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
                                      <a href="javascript:void(0);">Comic</a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">
                                        Adventure
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-07.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-07.jpg"
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
                                        Adventure
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">Fiction</a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                    <del>$27.20</del>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-08.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-08.jpg"
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
                                        Fantacy &amp; Horor
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-09.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-09.jpg"
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
                                        Children’s Book
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                    <del>$27.20</del>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-10.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-10.jpg"
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
                                      <a href="javascript:void(0);">Comic</a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">
                                        Adventure
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-11.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-11.jpg"
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
                                        Adventure
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">Fiction</a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                    <del>$27.20</del>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
                                  >
                                    <i class="fa fa-shopping-basket"></i>
                                    <em>Add To Basket</em>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  <div class="tg-bookimg">
                                    <div class="tg-frontcover">
                                      <img
                                        src="images/books/img-12.jpg"
                                        alt="image description"
                                      />
                                    </div>
                                    <div class="tg-backcover">
                                      <img
                                        src="images/books/img-12.jpg"
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
                                        Adventure
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">Fun</a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">sale</span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>
                                      <a href="javascript:void(0);">
                                        Help Me Find My Stomach
                                      </a>
                                    </h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      Angela Gunning
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-bookprice">
                                    <ins>$25.18</ins>
                                  </span>
                                  <a
                                    class="tg-btn tg-btnstyletwo"
                                    href="javascript:void(0);"
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
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
                      <aside id="tg-sidebar" class="tg-sidebar">
                        <div class="tg-widget tg-widgetsearch">
                          <form class="tg-formtheme tg-formsearch">
                            <div class="form-group">
                              <button type="submit">
                                <i class="icon-magnifier"></i>
                              </button>
                              <input
                                type="search"
                                name="search"
                                class="form-group"
                                placeholder="Search by title, author, key..."
                              />
                            </div>
                          </form>
                        </div>
                        <div class="tg-widget tg-catagories">
                          <div class="tg-widgettitle">
                            <h3>Categories</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Art &amp; Photography</span>
                                  <em>28245</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Biography</span>
                                  <em>4856</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Children’s Book</span>
                                  <em>8654</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Craft &amp; Hobbies</span>
                                  <em>6247</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Crime &amp; Thriller</span>
                                  <em>888654</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Fantasy &amp; Horror</span>
                                  <em>873144</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Fiction</span>
                                  <em>18465</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Fod &amp; Drink</span>
                                  <em>3148</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Graphic, Anime &amp; Manga</span>
                                  <em>77531</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Science Fiction</span>
                                  <em>9247</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>View All</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="tg-widget tg-widgettrending">
                          <div class="tg-widgettitle">
                            <h3>Trending Products</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/products/img-04.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/products/img-05.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/products/img-06.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/products/img-07.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="tg-widget tg-widgetinstagram">
                          <div class="tg-widgettitle">
                            <h3>Instagram</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-01.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-02.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-03.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-04.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-05.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-06.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-07.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-08.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-09.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="tg-widget tg-widgetblogers">
                          <div class="tg-widgettitle">
                            <h3>Top Bloogers</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-03.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-04.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-05.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-06.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </div>
  );
};

export default Books;
