'use strict'

// This function checks the correct arrangement of 3 types of parentheses. It works like this ․
//      first check that the input value is not null,
//      If the input value is an object, convert it to a string type using the JSON.stringify method,
//      otherwise via the String function,
//      It then separates all types of opening and closing parentheses from the text and checks their order.
//      returns a 'false' value if any parentheses are opened այլ another type of parentheses is closed before it is closed;
//      in other cases returns a 'true' value․


let obj = {
    name: "Programmer",
    pLanguage: "JavaScript",
    sayHi(){
        console.log('Hi everyone!');
    },
    allAddresses: [
        "Baker street 221B", "7723 Howard Dr. Brooklyn, NY 11209",
    ]
}

function validateBrackets(value){
    if (typeof value == 'object' && !value)  return "Null value";
    if (typeof value == 'object') value = JSON.stringify(value);
    else value = String(value);
    
    let splitted = [];
    for (let i=0; i<value.length; i++){
        if (value[i] == "(" || value[i] == ")" || value[i] == "[" || value[i] == "]" || value[i] == "{" || value[i] == "}") splitted.push(value[i]);
    }
    
    let round_b = 0;
    let square_b = 0;
    let curly_b = 0;
    
    for (let i=0; i<splitted.length; i++){
        if (splitted[i] == '('){
            round_b++;
            if (splitted[i+1] == ']' || splitted[i] == '}') return false;
        }
        else if (splitted[i] == ')'){
            round_b--;
        }
        else if (splitted[i] == '['){
            square_b++;
            if (splitted[i+1] == ')' || splitted[i] == '}') return false;
        }
        else if (splitted[i] == ']'){
            square_b--;
        }
        else if (splitted[i] == '{'){
            curly_b++;
            if (splitted[i+1] == ')' || splitted[i+1] == ']') return false;
        }
        else if (splitted[i] == '}'){
            curly_b--;
        }
    }
    if (round_b !== 0 || square_b !== 0 || curly_b !== 0) return false;
    return true;
}

console.log(validateBrackets("({[[]}}}}")); // there is an open parenthesis here
console.log(validateBrackets("[{{()()()}{()()()}{()()()}][{()()()}{()()()}{()()()}}(])"));
console.log(validateBrackets(null))                          // will be wrong here  ^
console.log(validateBrackets(obj));