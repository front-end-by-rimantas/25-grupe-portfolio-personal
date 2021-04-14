function isValidPlansItem(planItem) {
    if (typeof planItem !== 'object' ||
        Array.isArray(planItem)) {
        console.warn('ERROR: bwarnItem yra netinkamo tipo');
        return false;
    }
 
    if (planItem.planNo === undefined) {
        console.warn('ERROR: neduota planNo reiksme');
        return false;
    } else if (typeof planItem.planNo !== 'string' ||
        planItem.planNo === '') {
        console.warn('ERROR: planNo turi buti ne tuscias tekstas');
        return false;
    }  

    if (planItem.planTitle === undefined) {
        console.warn('ERROR: neduota planTitle reiksme');
        return false;
    } else if (typeof planItem.planTitle !== 'string' ||
        planItem.planTitle === '') {
        console.warn('ERROR: planTitle turi buti ne tuscias tekstas');
        return false;
    }

    if (planItem.planList1 === undefined) {
        console.warn('ERROR: neduota planList1 reiksme');
        return false;
    } else if (typeof planItem.planList1 !== 'string' ||
        planItem.planList1 === '') {
        console.warn('ERROR: planList1 turi buti ne tuscias tekstas');
        return false;
    }

    if (planItem.planList2 === undefined) {
        console.warn('ERROR: neduota planList2 reiksme');
        return false;
    } else if (typeof planItem.planList2 !== 'string' ||
        planItem.planList2 === '') {
        console.warn('ERROR: planList2 turi buti ne tuscias tekstas');
        return false;
    }

    if (planItem.planList3 === undefined) {
        console.warn('ERROR: neduota planList3 reiksme');
        return false;
    } else if (typeof planItem.planList3 !== 'string' ||
        planItem.planList3 === '') {
        console.warn('ERROR: planList3 turi buti ne tuscias tekstas');
        return false;
    }


    if (planItem.price === undefined) {
        console.warn('ERROR: neduota price reiksme');
        return false;
    } else if (typeof planItem.price !== 'number'||
        !isFinite(planItem.price) ||
        planItem.price < 0) {
        console.warn('ERROR: Bloga price reiksme');
        return false; 
    }

    if (planItem.link === undefined) {
        console.warn('ERROR: neduota link reiksme');
        return false;
    } else if (typeof planItem.link !== 'string' ||
        planItem.link === '') {
        console.warn('ERROR: link turi buti ne tuscias tekstas');
        return false;
    }

    if (planItem.text === undefined) {
        console.warn('ERROR: neduota text reiksme');
        return false;
    } else if (typeof planItem.text !== 'string' ||
        planItem.text === '') {
        console.warn('ERROR: text turi buti ne tuscias tekstas');
        return false;
    }
    
    if (planItem.active === undefined) {
        console.warn('ERROR: neduota active reiksme');
        return false;
    } else if (typeof planItem.active !== 'boolean') {
        console.warn('ERROR: active netinkamo tipo (turi buti boolean)');
        return false;
    }

    return true;
}

export { isValidPlansItem }