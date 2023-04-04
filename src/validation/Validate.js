export default {
    emailIsNotValid(email, users) {
        let errors = [];
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === null || email.length === 0) {
            errors.push("Email is required.");
        } else if (regexEmail.test(email) === false) {
            errors.push("Please enter a valid email.");
        } else if (users.some(user => user.email === email)) {
            errors.push("The email is already exists.");
        }
        return errors;
    },
    userNameIsNotValid(userName) {
  const errors = [];
  const regexUserName = new RegExp("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){2,9}[a-zA-Z0-9](\\s[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){2,9}[a-zA-Z0-9])?$", "g");
  if (userName === null || userName.length === 0) {
    errors.push("Username is required.");
  } else if (regexUserName.test(userName) === false) {
    errors.push("Username must contain only alphanumeric characters (a-zA-Z0-9)."
      , "Username may include dot (.), underscore (_), and hyphen (-)."
      , "The dot (.), underscore (_), or hyphen (-) must not be the first or last character."
      , "Username must contain between 3 to 20 characters (including spaces).");
  }
  return errors;
},
    passwordIsNotValide(password) {
        let errors = [];
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (password === null || password.length === 0) {
            errors.push("password is required.");
        } else if (regexPassword.test(password) === false) {
            errors.push("Minimum eight characters."
                , "At least one letter and one number."
            );
        }
        return errors;
    },
    fieldIsEmpty(field, name) {
        let errors = [];
        if (field === null || field.length === 0) {
            errors.push(name + ' is required.')
        }
        return errors;
    },
    // ---------checkout-----
    nameOnCardIsNotValid(userName) {
        let errors = [];
        let regexUserName = new RegExp("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$", "g");
        if (userName === null || userName.length === 0) {
            errors.push("UserName is required.");
        } else if (regexUserName.test(userName) === false) {
            errors.push("Username consists of alphanumeric characters (a-zA-Z0-9), lowercase, or uppercase."
                , "Username allowed of the dot (.), underscore (_), and hyphen (-)."
                , "The dot (.), underscore (_), or hyphen (-) must not be the first or last character."
                , "The number of characters must be between 5 to 20.");
        }
        return errors;
    }
    ,
    isMoroccanCreditCardNumberValid(creditCardNumber) {
        let errors = [];
        let regexCreditCardNumber = /^((?:4\d{3})|(?:5[1-5]\d{2})|(?:6011)|(?:3[68]\d{2}))\d{10}$/;
        if (creditCardNumber === null || creditCardNumber.length === 0) {
            errors.push("Credit card number is required.");
        } else if (regexCreditCardNumber.test(creditCardNumber) === false) {
            errors.push("Credit card number is not valid.");
        }
    
        return errors;
    }
    // Cartes Visa commençant par 4
    // Cartes Mastercard commençant par 51, 52, 53, 54 ou 55
    // Cartes Discover commençant par 6011
    // Cartes Diners Club commençant par 36 ou 38
    // Le numéro de la carte de crédit doit avoir un total de 16 chiffres.
    // 5890056236541234
    // 4111111111111111
    // 4317626046759867
    // 5317752360983210
    // 6011651928392273
    ,
     validateExpMonth(expMonth) {
        const errors = [];
        const regexExpMonth = /^(0?[1-9]|1[0-2])$/;
      
        if (!expMonth) {
          errors.push('Expiration month is required');
        } else if (!regexExpMonth.test(expMonth)) {
          errors.push('Expiration month is not valid');
        }
      
        return errors;
    },
    validateCVV(cvv) {
        const errors = [];
        const regexCVV = /^[0-9]{3,4}$/;
      
        if (!cvv) {
          errors.push('CVV is required');
        } else if (!regexCVV.test(cvv)) {
          errors.push('CVV is not valid');
        }
      
        return errors;
    },
    validateExpYear(expYear) {
        const errors = [];
        const currentYear = new Date().getFullYear();
        
        if (!expYear) {
          errors.push('Expiration year is required');
        } else if (isNaN(expYear) || expYear < currentYear) {
          errors.push('Expiration year is not valid');
        }
      
        return errors;
      },
    validateAddress(address) {
        const errors = [];
        const regexAddress = /^[a-zA-Z0-9\s,'-]*$/;
      
        if (!address) {
          errors.push('Address is required');
        } else if (address.length > 200) {
          errors.push('Address must be less than 200 characters');
        } else if (!regexAddress.test(address)) {
          errors.push('Address contains invalid characters');
        }
      
        return errors;
      },
    validateCity(city) {
        const errors = [];
        const regexCity = /^[a-zA-Z\s]*$/;
      
        if (!city) {
          errors.push('City is required');
        } else if (city.length > 50) {
          errors.push('City must be less than 50 characters');
        } else if (!regexCity.test(city)) {
          errors.push('City contains invalid characters');
        }
      
        return errors;
    },
    validateZipCode(zipCode) {
        const errors = [];
        const regexZipCode = /^[a-zA-Z0-9\s]*$/;
      
        if (!zipCode) {
          errors.push('Zip code is required');
        } else if (zipCode.length > 10) {
          errors.push('Zip code must be less than 10 characters');
        } else if (!regexZipCode.test(zipCode)) {
          errors.push('Zip code contains invalid characters');
        }
      
        return errors;
    },
     validateState(state) {
        const errors = [];
        const states = [
          'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID',
          'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
          'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
          'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
        ];
      
        if (!state) {
          errors.push('State is required');
        } else if (state.length !== 2 || !states.includes(state.toUpperCase())) {
          errors.push('State is not valid');
        }
      
        return errors;
      }
}