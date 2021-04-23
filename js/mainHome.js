// IMPORT
/* HEADER */
import { Header } from './components/header/Header.js';
import { headerData } from './data/headerData.js';
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
import { Achievements } from "./components/achievements/Achievements.js";
import { achievementsData } from "./data/achievementsData.js";
/* PORTFOLIO */
import { Gallery } from "./components/Gallery/Gallery.js";
import { galleryData } from "./data/galleryData.js";
/* TESTIMONIALS */
import { testimonialsData } from './data/testimonialsData.js';
import { testimonials } from './components/services/testimonials.js';
import { changeTestimonials } from './components/services/testimonials.js';
import { autoChange } from './components/services/testimonials.js';
/* PRICE AREA */
import { plansData } from "./data/plansData.js";
import { plans } from "./components/chooseYourPlan/plans.js";
/* RECENT BLOG */
import { blogData } from "./data/blogData.js";
import { blog } from "./components/blog/blog.js";
/* BRANDS AREA */
import { brands } from "./components/brands/brands.js";
import { brandsData } from "./data/brandsData.js";
/* FOOTER */

// FUNKCIJU PANAUDOJIMAS

/* HEADER */
new Header('#header_block', headerData);
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
const achievement = new Achievements("#achievements_block", achievementsData);
/* PORTFOLIO */
new Gallery("#projects_block", galleryData);
/* TESTIMONIALS */
testimonials('#testimonials_block', testimonialsData);
changeTestimonials();
autoChange();
/* PRICE AREA */
plans("#plans_block", plansData);
/* RECENT BLOG */
blog("#blog_block", blogData);
/* BRANDS AREA */
brands("#brands_row", brandsData);
/* FOOTER */
