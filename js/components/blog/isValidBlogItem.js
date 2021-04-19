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

    if (blogItem.author === undefined) {
        console.warn('ERROR: neduota author reiksme');
        return false;
    } else if (typeof blogItem.author !== 'string' ||
        blogItem.author === '') {
        console.warn('ERROR: author turi buti ne tuscias tekstas');
        return false;
    }

    if (blogItem.authorLink === undefined) {
        console.warn('ERROR: neduota authorLink reiksme');
        return false;
    } else if (typeof blogItem.authorLink !== 'string' ||
        blogItem.authorLink === '') {
        console.warn('ERROR: authorLink turi buti ne tuscias tekstas');
        return false;
    }

    if (blogItem.date === undefined) {
        console.warn('ERROR: neduota date reiksme');
        return false;
    } else if (typeof blogItem.date !== 'string' ||
        blogItem.date === '') {
        console.warn('ERROR: date turi buti ne tuscias tekstas');
        return false;
    }
    
    if (blogItem.likes === undefined) {
        console.warn('ERROR: neduota likes reiksme');
        blogItem.likes = 0;
    } else if (typeof blogItem.likes !== 'number'||
        !isFinite(blogItem.likes) ||
        blogItem.likes < 0 ||
        blogItem.likes % 1 !== 0) {
        console.warn('ERROR: Bloga likes reiksme');
        blogItem.likes = 0; 
    }

    if (blogItem.coments === undefined) {
        console.warn('ERROR: neduota coments reiksme');
        blogItem.coments = 0;
    } else if (typeof blogItem.coments !== 'number'||
        !isFinite(blogItem.coments) ||
        blogItem.coments < 0 ||
        blogItem.coments % 1 !== 0) {
        console.warn('ERROR: Bloga coments reiksme');
        blogItem.coments = 0; 
    }
 
    if (blogItem.title === undefined) {
        console.warn('ERROR: neduota title reiksme');
        return false;
    } else if (typeof blogItem.title !== 'string' ||
        blogItem.title === '') {
        console.log('ERROR: title turi buti ne tuscias tekstas');
        return false;
    }

    if (blogItem.link === undefined) {
        console.warn('ERROR: neduota link reiksme');
        return false;
    } else if (typeof blogItem.link !== 'string' ||
        blogItem.link === '') {
        console.warn('ERROR: link turi buti ne tuscias tekstas');
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