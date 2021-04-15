// IMPORT
/* HEADER */
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
import { Achievements } from "./components/achievements/Achievements.js";
import { achievementsData } from "./data/achievementsData.js";
/* PORTFOLIO */
import { gallery } from "./components/gallery/gallery.js";
import { galleryData } from "./data/galleryData.js";
/* TESTIMONIALS */
/* PRICE AREA */
import { plansData } from './data/plansData.js';
import { plans } from './components/chooseYourPlan/plans.js'
/* RECENT BLOG */
import { blogData } from "./data/blogData.js";
import { blog } from "./components/blog/blog.js";
/* BRANDS AREA */
import { brands } from "./components/brands/brands.js";
import { brandsData } from "./data/brandsData.js";
/* FOOTER */

// FUNKCIJU PANAUDOJIMAS

/* HEADER */
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
const achievement = new Achievements("#achievements_block", achievementsData);
/* PORTFOLIO */
gallery("#wrapper1", galleryData);
/* TESTIMONIALS */
/* PRICE AREA */
plans('#plans_block', plansData);
/* RECENT BLOG */
blog("#blog-block", blogData);
/* BRANDS AREA */
brands("#brands_row", brandsData);
/* FOOTER */
