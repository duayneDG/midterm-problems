function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0){
    return true
  }else{
    return false
  }
}

function halfSquare(num) {
  let square = num**2;
  let halfSq = square/2;
  return halfSq

}

function isLong(str) {
  let length = str.length
  if (length > 15){
    return true
  }else{
    return false
  }
}

function exclaim(str) {
let lastChar = "!" 
let newStr = "";

if(lastChar !== str[str.length -1]){
  return str + "!"
}

  for (let i = 0; i <str.length-1; i++){
    if (str[i] === lastChar){
      return str[i] = lastChar;
    }
    else if(str[str.length -1] === "!"){
      return str
    }else if(str[i] !== str[i+1]){
      newStr.push(str[i])
    }

    
    else{
      return str.concat("!") 
    }
  }
};


function countWords(str) {
  wordCount = 1;

  for(i=0; i<str.length -1; i++){
    if(str[i]=== " "){
      wordCount += 1;
    }
  }
  return wordCount
};

function containsDigit(str) {
  let strNum = /[0-9]/
  let numTest = str.match(strNum);
  // console.log(numTest)
  if(numTest === null) {
    return false;
  }else{
    return true
  }
};



function containsLowerCase(str) {
  let strSearch = /[a-z]/
  let searchResults = str.match(strSearch)

  if(searchResults === null){
    return false
  }else{
    return true
  }

  console.log(searchResults)
}

// containsLowerCase('3249AsdlfABjks!230')

function containsUpperCase(str) {
  let strSearch = /[A-Z]/
  let searchResults = str.match(strSearch)

  if(searchResults=== null){
    return false
  }else{
    return true
  }


}

function containsNonAlphanumeric(str) {
  let strSearch = /\W/;
  let searchResults = str.match(strSearch)
 
  if(searchResults=== null){
    return false
  }else{
    return true
  }

}

// containsNonAlphanumeric('3249sdlfjks!230')
// containsNonAlphanumeric('HELLOYOU')

function containsSpace(str) {
  let strSearch = /[ \t]/
  let searchResults = str.match(strSearch)
  console.log(searchResults)

  if(searchResults=== null){
    return false
  }else{
    return true
  }
}
// containsSpace('hello there')
// containsSpace('        ')


function digits(num) {
  let iterableNum = String(num); 
  let numArray = [];
  let searchFilter = /["0-9"]/g
  let searchResults = iterableNum.match(searchFilter);

 for(i=0; i<searchResults.length; i++){
   numArray.push(Number(searchResults[i]))
 }
 return numArray

}
// console.log(digits(-1727.36))

function truncate(str) {
  let stringlength = str.length
  let truncateStr = ""

  if(stringlength < 15){
    return str
  }

  for(i=0; i<8; i++){
    truncateStr += str[i]
    
  }
  let truncatedStr = truncateStr+"..."
  return truncatedStr
}


function isValidPassword(password) {
  let containsNonAlphanumeric = /\W/;
  let containsUpperCase = /[A-Z]+/
  let containsDigit = /[0-9]+/
  let containsSpace = /[ \t]/
  let containsLowerCase = /[a-z]+/
  let  alphanumeric = password.match(containsNonAlphanumeric)
  let  upperCase = password.match(containsUpperCase)
  let  digits = password.match(containsDigit)
  let  spaces = password.match(containsSpace)
  let  lowerCase = password.match(containsLowerCase)


  // console.log(upperCase, "upperCase")
  console.log(alphanumeric)
  // console.log(spaces)

  if(alphanumeric !== null && upperCase !== null && digits !== null && spaces === null && lowerCase !== null){
    return true
  }else{
    return false
  }
}


function onlyPunchy(str) {
  if (str.length < 15){
    return str
  }
  else if(str[str.length -1] !== "!"){
    return str + "!"
  }
  let newStr = ""; 
  for(let i=0; i <= str.length -1; i++){
    newStr += str[i]; 
    if(str[i] === "!"){
      return newStr
    }
  }

}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}