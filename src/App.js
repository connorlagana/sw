import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Women from "./components/Women/Women.js";
import WomenIndy from "./components/Women/WomenIndy.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login/Login.js";
import Profile from "./components/Login/Profile.js";
import SignUp from "./components/Login/SignUp.js";
import OurStory from "./components/Extra/OurStory.js";
import PrivacyPolicy from "./components/Extra/PrivacyPolicy.js";
import Shipping from "./components/Extra/Shipping.js";

import { allPosts } from "./services/api_helper.js";

import { loginUser, registerUser, verifyUser } from "./services/api_helper";

import womenHeroPic from "./images/womenHero.jpg";
import menHeroPic from "./images/menHero.jpg";
import ContactUs from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: false,
      errorText: "",
      women: {
        name: "women",
        pic: womenHeroPic,
        firstTitle: "Wom",
        secondTitle: "en",
        items: [
          {
            gender: "women",
            id: 1,
            title: "WORK HARD LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-116_WHT.WORK.HARD.AND.BE.NICE.LOOSE.TEE-4_1.jpg?v=1585249787",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/cXQ4cQjQ_1.jpg?v=1585249787",
            colors: ["white"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 2,
            title: "HOMEBODY WILLOW SWEATSHIRT",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4049-79_BLK_1.BIG.jpg?v=1571440150",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013-17_BLK.BIG.CATS.CAMBRIDGE.SWEATS-4_1.jpg?v=1571440714",
            colors: ["black"],
            sizes: ["xs"],
            type: "sweatshirt",
            price: 64,
            sale: null,
          },
          {
            gender: "women",
            id: 3,
            title: "BE A NICE HUMAN LOOSE TEE - WHITE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-XX.BE.A.NICE.HUMAN.LOOSE.TEE.WHT-1-2.jpg?v=1574198127",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-333_WHT.NICE.HUMAN-11.jpg?v=1574379759",
            colors: ["white", "red"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 4,
            title: "THE TRINITY LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/THE.TRINITY.gif?v=1521591301",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018.TRINITY.jpg?v=1521591301",
            colors: ["black", "white", "gray"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 114,
            sale: 72,
          },
          {
            gender: "women",
            id: 5,
            title: "BE BRAVE AND KIND LOOSE TEE - BLACK",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/NEW3.jpg?v=1575660715",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-429_BLK.BE.BRAVE.BE.KIND-1_1.jpg?v=1575660715",
            colors: ["black"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 6,
            title: "FAVORITE DAUGHTER FITTED VANESSA TEE - WHITE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-4_WHT.jpg?v=1550689257",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-4.FAVORITE.DAUGHTER.VANESSA_WHT-3.jpg?v=1550689257",
            colors: ["white"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 45,
            sale: null,
          },
          {
            gender: "women",
            id: 7,
            title: "THE TRINITY POPPY TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/ezgif.com-optimize_2.gif?v=1532121925",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/TRINITY-POPPY.jpg?v=1532121925",
            colors: ["black", "white", "gray"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 114,
            sale: 72,
          },
          {
            gender: "women",
            id: 8,
            title: "FAVORITE DAUGHTER FITTED VANESSA TEE - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-5.FAVORITE.DAUGHTER_HGR-17.jpg?v=1536608853",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-5.FAVORITE.DAUGHTER_HGR-11.jpg?v=1536608853",
            colors: ["gray"],
            sizes: ["xs", "s", "m", "xl"],
            type: "tee",
            price: 45,
            sale: null,
          },
          {
            gender: "women",
            id: 9,
            title: "CAMO STRIPE CAMBRIDGE SWEATS",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013-18_CAMO.CAMO.STRIPE.CAMBRIDGE-1.jpg?v=1570140724",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-613_WHT.HOTTER.THAN.I.SHOULD.BE.W7013-18_CAMO.CAMO.STRIPE.CAMBRIDGE-1.jpg?v=1570140724",
            colors: ["black", "green"],
            sizes: ["xs", "s", "l"],
            type: "pants",
            price: 78,
            sale: null,
          },
          {
            gender: "women",
            id: 10,
            title: "FAVORITE DAUGHTER LOOSE TEE - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-549_HGR.FAVORITE.DAUGHTER.LOOSE.TEE-1.jpg?v=1574277470",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-549_HGR_1.jpg?v=1574277470",
            colors: ["gray"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 45,
            sale: null,
          },
          {
            gender: "women",
            id: 11,
            title: "HEART EMB TEDDY ZIP UP JACKET",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4071-1_BLK.HEART.EMB.TEDDY.JACKET-12.jpg?v=1562951505",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4071-1_BLK.HEART.EMB.TEDDY.ZIP.UP-10_1.jpg?v=1563315255",
            colors: ["black"],
            sizes: ["m"],
            type: "sweatshirt",
            price: 98,
            sale: null,
          },
          {
            gender: "women",
            id: 12,
            title: "INDOORSY LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/Uqh2Xl7g_1.jpg?v=1574202339",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-481_HGR.INDOORSY-12.jpg?v=1581719290",
            colors: ["gray"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 13,
            title: "GOOD VIBES LOOSE TEE - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-9_GOOD.VIBES_HGR-2.jpg?v=1574198090",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/0WknE7wg_1.jpg?v=1574203930",
            colors: ["gray"],
            sizes: ["xs", "s", "l"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 14,
            title: "POPPY TEE - BLACK",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019_BLK.POPPY.TEE-5.jpg?v=1580238734",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019_BLK.POPPY.TEE-1_1.jpg?v=1580238857",
            colors: ["black"],
            sizes: ["s", "m"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 15,
            title: "POPPY TEE - WHITE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019_WHT.jpg?v=1583174640",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019-1.POPPY.TEE_WHT-2.jpg?v=1583174640",
            colors: ["white"],
            sizes: ["xs", "s", "m", "l"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 16,
            title: "ICONIC LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-341.ICONIC.10.jpg?v=1519426785",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-341.ICONIC-BLK-3.jpg?v=1519426785",
            colors: ["black"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 17,
            title: "KALE UNISEX SWEATSHIRT - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/w6009A_KALE_Swetshirt_Hthr.jpg?v=1518832702",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U2010-4.KALE.Crew.Hthr-1.jpg?v=1518832702",
            colors: ["gray"],
            sizes: ["xs", "s", "m"],
            type: "tee",
            price: 64,
            sale: null,
          },
          {
            gender: "women",
            id: 18,
            title: "HEART EMB CAMP TEE - BLACK",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-14.HEART.EMB.CAMP.TEE_BLK-2.jpg?v=1537825401",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-14.HEART.EMB.CAMP.TEE_BLK-12.jpg?v=1537825401",
            colors: ["black"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 52,
            sale: null,
          },
          {
            gender: "women",
            id: 19,
            title: "HEART EMB LOOSE TEE - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-417.HEART.EMB_HGR-24.jpg?v=1532045140",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-417.HEART.EMB_HGR-7.jpg?v=1532045140",
            colors: ["gray"],
            sizes: ["xs", "s", "m", "l"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 20,
            title: "HEART EMB CAMP TEE - NAVY",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-15.HEART.EMB.CAMP_NVY-2_1.jpg?v=1537825318",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-15.HEART.EMB.CAMP_NVY-2.jpg?v=1537825318",
            colors: ["blue"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 52,
            sale: null,
          },
          {
            gender: "women",
            id: 21,
            title: "CAMBRIDGE SWEATS - CHERRY",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013_CHERR.jpg?v=1559865487",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013_CHERR.2.jpg?v=1559865487",
            colors: ["red"],
            sizes: ["s", "m", "l", "xl"],
            type: "pants",
            price: 72,
            sale: null,
          },
          {
            gender: "women",
            id: 22,
            title: "KALE WILLOW SWEATSHIRT - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4049-10.KALE.HGR-2.jpg?v=1514242297",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4049-10.KALE.HGR-1.jpg?v=1514242297",
            colors: ["gray", "green"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 38,
            sale: null,
          },
          {
            gender: "women",
            id: 23,
            title: "HEART EMB CAMP TEE - WHITE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-22_WHT.HEART.EMB.CAMP.TEE-3_1.jpg?v=1580161933",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-22_WHT.HEART.EMB.CAMP.TEE-2_1.jpg?v=1580161933",
            colors: ["white"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 52,
            sale: null,
          },
          {
            gender: "women",
            id: 24,
            title: "VINCENT STRIPE CAMP TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-31.VINCENT.STRIPE.CAMP-39.jpg?v=1532042413",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-31.VINCENT.STRIPE.CAMP-13.jpg?v=1532042413",
            colors: ["hite", "red", "blue"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "tee",
            price: 52,
            sale: null,
          },
        ],
      },
      men: {
        name: "men",
        pic: menHeroPic,
        firstTitle: "M",
        secondTitle: "en",
        items: [
          {
            gender: "men",
            id: 25,
            title: "WINE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M100-293_HGR_1.jpg?v=1564527565",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M100-293_HGR_1_6a13285c-6b91-40fd-b267-9455bc5db47f.jpg?v=1564527570",
            colors: ["gray"],
            sizes: ["m"],
            type: "tee",
            price: 38,
            sale: 24,
          },
          {
            gender: "men",
            id: 26,
            title: "HEART EMB MENS TEE - BLACK",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M100-305_FBLK_1.jpg?v=1564767943",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M100-305_FBLK_1_de58d456-cbd9-44d0-9d62-ec8a658672bb.jpg?v=1564768172",
            colors: ["black"],
            sizes: ["s"],
            type: "tee",
            price: 38,
            sale: 24,
          },
          {
            gender: "men",
            id: 27,
            title: "KALE UNISEX SWEATSHIRT - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/w6009A_KALE_Swetshirt_Hthr.jpg?v=1518832702",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U2010-4.KALE.UNISEX.SWEATSHIRT.HGR-6.jpg?v=1518832702",
            colors: ["gray"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 64,
            sale: 39,
          },
          {
            gender: "men",
            id: 28,
            title: "KALE UNISEX SWEATSHIRT - NAVY",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U2010-4_NAVYB_1.jpg?v=1540494226",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/Beyonce_Kale_Square_4ce14720-92e2-4634-ae19-8efcbdc972ff.jpg?v=1540494226",
            colors: ["gray"],
            sizes: ["xs", "s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 64,
            sale: 39,
          },
          {
            gender: "men",
            id: 29,
            title: "HEAVYWEIGHT CREW",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2025_BLUSH_1.jpg?v=1582135230",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2025_BLUSH_1.jpg?v=1582135230",
            colors: ["white"],
            sizes: ["s", "m"],
            type: "sweatshirt",
            price: 88,
            sale: null,
          },
          {
            gender: "men",
            id: 30,
            title: "HEAVYWEIGHT CREW",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2025_HGR_1.jpg?v=1582135238",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2025_HGR_1.jpg?v=1582135238",
            colors: ["gray"],
            sizes: ["xs", "s", "m", "xl"],
            type: "sweatshirt",
            price: 88,
            sale: null,
          },
          {
            gender: "men",
            id: 31,
            title: "HEAVYWEIGHT CREW",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2025_BLK_1.jpg?v=1582135247",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2025_BLK_1.jpg?v=1582135247",
            colors: ["black"],
            sizes: ["s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 88,
            sale: null,
          },
          {
            gender: "men",
            id: 32,
            title: "HEAVYWEIGHT HOODIE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2024_BLK.HEAVYWEIGHT.HOODIE-2.jpg?v=1582135214",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2024_BLK.HEAVYWEIGHT.HOODIE-2.jpg?v=1582135214",
            colors: ["black"],
            sizes: ["s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 88,
            sale: null,
          },
          {
            gender: "men",
            id: 33,
            title: "HEAVYWEIGHT HOODIE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2024_HGR_1.jpg?v=1582135222",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2024_HGR_1.jpg?v=1582135222",
            colors: ["gray"],
            sizes: ["s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 88,
            sale: null,
          },
          {
            gender: "men",
            id: 34,
            title: "FIELD JOGGERS",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M7010_BLK.jpg?v=1568244567",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M7010_BLK.jpg?v=1568244567",
            colors: ["black"],
            sizes: ["s", "m", "l", "xl"],
            type: "pants",
            price: 68,
            sale: null,
          },
          {
            gender: "men",
            id: 35,
            title: "FIELD JOGGERS - CAMO",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M7010_BCAMO.jpg?v=1568244574",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M7010_BCAMO.jpg?v=1568244574",
            colors: ["black"],
            sizes: ["m"],
            type: "pants",
            price: 68,
            sale: null,
          },
          {
            gender: "men",
            id: 36,
            title: "PIGMENT DYE SWEATSHIRT",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2020_PIGSS_1.jpg?v=1582135207",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2020_PIGSS_1.jpg?v=1582135207",
            colors: ["gray"],
            sizes: ["s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 64,
            sale: null,
          },
          {
            gender: "men",
            id: 37,
            title: "PIGMENT DYED HOODY",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U4048_PISLB_1_1.jpg?v=1582238429",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U4048_PISLB_1_1.jpg?v=1582238429",
            colors: ["blue"],
            sizes: ["m", "l", "xl"],
            type: "sweatshirt",
            price: 64,
            sale: null,
          },
          {
            gender: "men",
            id: 38,
            title: "PIGMENT DYED HOODY",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U4048_PIGSS_1_1.jpg?v=1582238397",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U4048_PIGSS_1_1.jpg?v=1582238397",
            colors: ["green"],
            sizes: ["s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 64,
            sale: null,
          },
          {
            gender: "men",
            id: 39,
            title: "PIGMENT DYED HOODY",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U4048_PIGBL_1_1.jpg?v=1582238355",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/U4048_PIGBL_1_1.jpg?v=1582238355",
            colors: ["gray"],
            sizes: ["s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 64,
            sale: null,
          },
          {
            gender: "men",
            id: 40,
            title: "IT'S COOL TO BE KIND VARSITY LONG SLEEVE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2019-18_PIGBL_1.jpg?v=1564528298",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/M2019-18_PIGBL_1.jpg?v=1564528298",
            colors: ["black"],
            sizes: ["m", "l"],
            type: "sweatshirt",
            price: 52,
            sale: 29,
          },
        ],
      },
      youth: {
        name: "youth",
        pic:
          "https://cdn.shopify.com/s/files/1/0863/0656/files/TWEEN.BANNER.DESKTOP.jpg?v=1566939870",
        firstTitle: "You",
        secondTitle: "th",
        items: [
          {
            gender: "youth",
            id: 41,
            title: "BE A NICE HUMAN YOUTH SIZE LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-21_HGR_1.jpg?v=1579629832",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-21_HGR_1.jpg?v=1579629832",
            colors: ["gray"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 42,
            title: "LOVE HEART YOUTH SIZE LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-37_CHERR_1.jpg?v=1584633995",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-37_CHERR_1.jpg?v=1584633995",
            colors: ["red"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 43,
            title: "LOVE LIST YOUTH SIZE CROP TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1004-15_NVY_1.jpg?v=1585089533",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1004-15_NVY_1.jpg?v=1585089533",
            colors: ["blue"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 44,
            title: "FAVORITE DAUGHTER YOUTH SIZE LOOSE TEE - HTHR",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/Screen_Shot_2019-10-10_at_12.51.08_PM_1.png?v=1572020598",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/Screen_Shot_2019-10-10_at_12.51.08_PM_1.png?v=1572020598",
            colors: ["black"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 45,
            title: "SPLATTER PAINT YOUTH SIZE LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/TGD1003-1-_ATQWHT_1.jpg?v=1585090040",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/TGD1003-1-_ATQWHT_1.jpg?v=1585090040",
            colors: ["white"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 46,
            title: "FAVORITE DAUGHTER YOUTH SIZE SELENA SWEATSHIRT",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T4000-33_HGR.jpg?v=1567534496",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T4000-33_HGR.jpg?v=1567534496",
            colors: ["gray"],
            sizes: ["m", "l"],
            type: "sweatshirt",
            price: 48,
            sale: null,
          },
          {
            gender: "youth",
            id: 47,
            title: "FAVORITE DAUGHTER TYLER YOUTH SIZE HOODIE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T4006-2_PACIF_1.jpg?v=1574792033",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T4006-2_PACIF_1.jpg?v=1574792033",
            colors: ["blue"],
            sizes: ["s", "m", "l", "xl"],
            type: "sweatshirt",
            price: 48,
            sale: null,
          },
          {
            gender: "youth",
            id: 48,
            title: "BE A NICE HUMAN ATHENA L/S YOUTH TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T4001-19_NVY_1.jpg?v=1562876858",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T4001-19_NVY_1.jpg?v=1562876858",
            colors: ["blue"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 38,
            sale: null,
          },
          {
            gender: "youth",
            id: 49,
            title: "GIRLS WANNA HAVE SUN YOUTH SIZE LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-25_BLUSH_1.jpg?v=1585855025",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-25_BLUSH_1.jpg?v=1585855025",
            colors: ["pink"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 50,
            title: "INDOORSY YOUTH SIZE LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-26_HGR_1.jpg?v=1585855231",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-26_HGR_1.jpg?v=1585855231",
            colors: ["gray"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 51,
            title: "FAVORITE DAUGHTER YOUTH SIZE LOOSE TEE - WHITE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-3_WHT_1.jpg?v=1576170076",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-3_WHT_1.jpg?v=1576170076",
            colors: ["white"],
            sizes: ["m", "l"],
            type: "tee",
            price: 28,
            sale: null,
          },
          {
            gender: "youth",
            id: 52,
            title: "MOM'S FAVORITE YOUTH SIZE LOOSE TEE",
            firstPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-78_NVY_1.jpg?v=1584634315",
            secondPic:
              "https://cdn.shopify.com/s/files/1/0863/0656/products/T1003-78_NVY_1.jpg?v=1584634315",
            colors: ["blue"],
            sizes: ["s", "m", "l", "xl"],
            type: "tee",
            price: 28,
            sale: null,
          },
        ],
      },
      new: {
        name: "new",
        pic:
          "https://cdn.shopify.com/s/files/1/0863/0656/files/NEW.DESKTOP.BANNER.JPG?v=1585245119",
        firstTitle: "Ne",
        secondTitle: "w",
        items: [],
      },
    };
  }

  fetchData = async () => {
    console.log(allPosts());
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: "You must supply a username AND password",
      });
    } else {
      const currentUser = await loginUser(loginData);
      this.setState({
        currentUser,
      });
    }
  };

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    console.log("from the appjs");
    if (
      !registerData.email ||
      !registerData.password ||
      !registerData.firstName ||
      !registerData.lastName
    ) {
      console.log("error: You must supply a username AND password");
      this.setState({
        errorText: "You must supply a username AND password",
      });
    } else {
      const currentUser = await registerUser(registerData);

      await this.setState({
        currentUser,
      });
      console.log(this.state.currentUser);
    }
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser,
      });
    }
  };

  handleLogout = () => {
    this.setState({
      currentUser: false,
    });
    localStorage.removeItem("authToken");
  };

  componentDidMount() {
    console.log("wavy");
    console.log(allPosts());
  }

  render() {
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} />
        <Route path="/new">
          <Women gender={this.state.new} />
        </Route>
        <Route exact path="/" component={Hero} />
        <Route path="/women">
          <Women gender={this.state.women} />
        </Route>
        <Route path="/men">
          <Women gender={this.state.men} />
        </Route>
        <Route path="/youth">
          <Women gender={this.state.youth} />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        {!this.state.currentUser ? (
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
              />
            )}
          />
        ) : (
          <Route
            exact
            path="/login"
            render={() => (
              <Profile
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
              />
            )}
          />
        )}
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/ourstory">
          <OurStory />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/shipping">
          <Shipping />
        </Route>
        {/* <Route
          exact
          path="/:id"
          render={props => {
            return <WomenIndy title={props.match.params.id} />;
          }}
        /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
