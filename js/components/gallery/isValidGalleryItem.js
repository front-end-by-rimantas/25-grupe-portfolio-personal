// import { isValidFileFormat } from "../../utils/isValidFileFormat.js";

// function isValidGalleryItem(galleryItem) {
//   if (typeof galleryItem !== "object" || Array.isArray(blogItem)) {
//     console.warn("ERROR: galleryItem yra netinkamo tipo");
//     return false;
//   }

//   if (galleryItem.img === undefined) {
//     console.warn("ERROR: neduota img reiksme");
//     return false;
//   } else if (typeof galleryItem.img !== "string" || galleryItem.img === "") {
//     console.log("ERROR: img turi buti ne tuscias tekstas");
//     return false;
//   } else if (!isValidFileFormat(galleryItem.img, ["jpg", "png"])) {
//     console.log("ERROR: Failo pavadinimas neatitinka formato");
//     return false;
//   }

//   if (galleryItem.title === undefined) {
//     console.warn("ERROR: neduota title reiksme");
//     return false;
//   } else if (
//     typeof galleryItem.title !== "string" ||
//     galleryItem.title === ""
//   ) {
//     console.log("ERROR: title turi buti ne tuscias tekstas");
//     return false;
//   }

//   if (galleryItem.description === undefined) {
//     console.warn("ERROR: neduota description reiksme");
//     return false;
//   } else if (
//     typeof galleryItem.description !== "string" ||
//     galleryItem.description === ""
//   ) {
//     console.log("ERROR: description turi buti ne tuscias tekstas");
//     return false;
//   }

//   if (galleryItem.active === undefined) {
//     console.warn("ERROR: neduota active reiksme");
//     return false;
//   } else if (typeof galleryItem.active !== "boolean") {
//     console.warn("ERROR: active netinkamo tipo (turi buti boolean)");
//     return false;
//   }

//   return true;
// }

// export { isValidGalleryItem };
