// IMPORT
/* HEADER */
/* HERO */
/* ABOUT ME */
/* My Offered Services */
/* ANIMATED NUMBER COUNTER */
import { Achievements } from './components/achievements/Achievements.js';
import { achievementsData } from './data/achievementsData.js';
/* PORTFOLIO */
/* TESTIMONIALS */
import { testimonialsData } from './data/testimonialsData.js';
import { testimonials } from './components/services/testimonials.js';
/* PRICE AREA */
/* RECENT BLOG */
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
testimonials('#testimonials_block', testimonialsData);
/* PRICE AREA */
/* RECENT BLOG */
/* BRANDS AREA */
/* FOOTER */