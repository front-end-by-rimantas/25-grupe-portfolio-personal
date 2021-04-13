// IMPORT
/* HEADER */
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
import { Achievements } from './components/achievements/Achievements.js'
import { achievementsData } from './data/achievementsData.js'
/* PORTFOLIO */
/* TESTIMONIALS */
/* PRICE AREA */
import { plansData } from './data/plansData.js';
import { plans } from './components/chooseYourPlan/plans.js'
/* RECENT BLOG */
import { blogData } from './data/blogData.js';
import { blog } from './components/blog/blog.js';
/* BRANDS AREA */
/* FOOTER */


// FUNKCIJU PANAUDOJIMAS

/* HEADER */
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
const achievement = new Achievements('#achievements_block',achievementsData);
/* PORTFOLIO */
/* TESTIMONIALS */
/* PRICE AREA */
plans('#plans_block', plansData);
/* RECENT BLOG */
blog('#blog-block', blogData);
/* BRANDS AREA */
/* FOOTER */