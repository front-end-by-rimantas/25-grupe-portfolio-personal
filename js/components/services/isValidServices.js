function isValidServices(selector, data) {
    if (typeof selector !== 'string' || 
        selector === '') {
            console.log('ERROR: blogas selektorius');
        return false;

    } 

    if(typeof data !== 'object' || 
    Array.isArray(data) ||
    !Array.isArray(data.list) || 
    data.list.length === 0) {
    return false;

}

if (data.maxCount){
    if (typeof data.maxCount !== 'number' ||
    !isFinite(data.maxCount) ||
    data.maxCount < 1 ||
    data.maxCount % 1 !== 0 ) {
    return false;
    }
}

    return true;
}


export { isValidServices }