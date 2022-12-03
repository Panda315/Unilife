const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateAddHostelInput = data => {
    let errors = {};
    //Convert empty fields to an empty string so we can use validator functions
    data.title = !isEmpty(data.title) ? data.title : "";
    data.ownedby = !isEmpty(data.ownedby) ? data.ownedby : "";
    data.price = !isEmpty(data.price) ? data.price : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    const imagepath = data.imagepath;
    data.contact = !isEmpty(data.contact) ? data.contact : "";
    data.category = !isEmpty(data.category) ? data.category : "";
    data.description = !isEmpty(data.description) ? data.description : "";

    //Title Checks
    if (validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }

    //Ownedby Checks
    if (validator.isEmpty(data.ownedby)) {
        errors.ownedby = "Ownedby field is required";
    }

    //city checks
    if (validator.isEmpty(data.city)) {
        errors.city = "City field is required";
    }

    //contact checks
    if (validator.isEmpty(data.contact)) {
        errors.contact = "Contact field is required";
    }

    //Address checks
    if(validator.isEmpty(data.address)) {
        errors.address = "Address field is required";
    }

    //Price Checks
    if (validator.isEmpty(data.price)) {
        errors.price = "Price field is required";
    }

    //Category Checks
    if (validator.isEmpty(data.category)) {
        errors.category = "Category field is required";
    }

    //Description Checks
    if (validator.isEmpty(data.description)) {
        errors.description = "Description field is required";
    }

    //Imagepath Checks
    if (imagepath[0]===""&&imagepath[1]===""&&imagepath[2]===""&&imagepath[3]===""&&imagepath[4]==="") {
        errors.imagepath = "Imagepath field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};