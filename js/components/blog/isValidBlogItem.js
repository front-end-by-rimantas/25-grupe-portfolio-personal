import { isValidFileFormat} from '../../utils/isValidFileFormat.js';

function isValidBlogItem(blogItem) {
    if (typeof blogItem !== 'object' ||
        Array.isArray(blogItem)) {
        console.warn('ERROR: blogItem yra netinkamo tipo');
        return false;
    }
 
    if (blogItem.img === undefined) {
        console.warn('ERROR: neduota img reiksme');
        return false;
    } else if (typeof blogItem.img !== 'string' ||
        blogItem.img === '') {
        console.log('ERROR: img turi buti ne tuscias tekstas');
        return false;
    } else if (!isValidFileFormat(blogItem.img, ['jpg', 'png'])) {
        console.log('ERROR: Failo pavadinimas neatitinka formato');
        return false;  
    }

    if (blogItem.title === undefined) {
        console.warn('ERROR: neduota title reiksme');
        return false;
    } else if (typeof blogItem.title !== 'string' ||
        blogItem.title === '') {
        console.log('ERROR: title turi buti ne tuscias tekstas');
        return false;
    }

    if (blogItem.description === undefined) {
        console.warn('ERROR: neduota description reiksme');
        return false;
    } else if (typeof blogItem.description !== 'string' ||
        blogItem.description === '') {
        console.log('ERROR: description turi buti ne tuscias tekstas');
        return false;
    }

    if (blogItem.active === undefined) {
        console.warn('ERROR: neduota active reiksme');
        return false;
    } else if (typeof blogItem.active !== 'boolean') {
        console.warn('ERROR: active netinkamo tipo (turi buti boolean)');
        return false;
    }

    return true;
}

export { isValidBlogItem }