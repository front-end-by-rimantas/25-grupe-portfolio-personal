// IMPORT
/* HEADER */
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
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
const achievement = new Achievements("#achievements_block", achievementsData);
/* PORTFOLIO */
new Gallery("#projects_block", galleryData);
/* TESTIMONIALS */
/* PRICE AREA */
plans("#plans_block", plansData);
/* RECENT BLOG */
blog("#blog_block", blogData);
/* BRANDS AREA */
brands("#brands_row", brandsData);
/* FOOTER */
