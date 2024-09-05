//----------------------------------------------------------------
// String.prototype.Includes()
String.prototype.myIncludes = function myIncludes(searchVal , fromIndex = 0){
    let letters = [...this];
    let subletters = [...searchVal];
    let subIndex = 0;

    for(let j = fromIndex; j < letters.length; j++){    
        if(letters[j] == subletters[subIndex]){
            ++subIndex; 
        }else{
            subIndex = 0;
        }
        if(subIndex == subletters.length){
            return true; 
        }
    }
    return false
    
}
//------------------------------------------------------------------
//split without Methods
String.prototype.mySplit = function mySplit(sub){
    if(sub == undefined || typeof sub !== "string"){
        return [`${this}`] 
     }
    let text = [...this];
    sub = [...sub];     
    let subIndex = 0;
    let temp = "";
    let returned = [];
    let returnedIndex = 0;
    if(sub == ""){
       return text; 
    }
    
    for(let i = 0; i < text.length; i++){
        if(text[i] == sub[subIndex]){  
            if(sub.length == 1){
               returned[returnedIndex] = temp;
               returnedIndex++;
               temp = "";
               continue; 
            }
            for(let j = i; j < text.length; j++){
               if(text[j] == sub[subIndex] && subIndex < sub.length){
                  subIndex++;
                  continue;
               }else if(text[j] !== sub[subIndex] && subIndex < sub.length){
                   break;
               }
               i += sub.length;
               returned[returnedIndex] = temp;
               returnedIndex++;
               temp = "";
               break;
            } 
            subIndex = 0;  
        }
        temp += text[i];      
    }
    returned[returnedIndex] = temp;
    return returned;
}
let text = "Hello Woreeld this is";
console.log(text.mySplit("e"));
console.log(text.split("-"));


// let text = "JavaScript iss Programming";
// console.log(text.mySplit());

//------------------------------------------------------------------
//String.prototype.indexOf

String.prototype.myIndexOf = function myIndexOf(sub , fromIndex = 0){
    if(sub == undefined || !text.myIncludes(sub) || fromIndex > this.length){
        return -1; 
    }else if(sub == ""){
        return 0; 
    }
    
    let string = [...this];
    sub = [...sub];
    let subIndex = 0;

    for(let i = fromIndex; i <= string.length; i++){
        if(string[i] == sub[subIndex]){
            for(let j = i; j <= text.length; j++){
                if(subIndex >= sub.length){
                   return i; 
                }
                if(string[j] == sub[subIndex]){
                   subIndex++;
                }else{
                    return -1;
                }
            } 
        } 
            
    }
    return -1;
}

// let text = "Hello World";
// console.log(text.myIndexOf());

//------------------------------------------------------------------

//Array.prototype.at
Array.prototype.myAt = function myAt(index = 0){
    let arr = this;
    index = Math.floor(+index)
    if(!Number.isInteger(index)){
       return arr[0]; 
    }else if(index < 0){
        return arr[arr.length + index];
    }
    return arr[index];
}
// let arr = [5,4,6,8];
// console.log(arr.myAt(-1));

//------------------------------------------------------------------

// Array.prototype.filter
Array.prototype.myFilter = function myFillter(callback){
    if(!typeof callback == "function"){
       throw new Error(`${callback} is not a function`); 
    }
    let arr = [...this];
    let newArr = [];
    let newArrIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(callback(this[i],i,arr)){
           newArr[newArrIndex] = arr[i];
           newArrIndex++; 
        }
    }
    return newArr; 
}
// let arr = [5,4,6,8,10,12];

//------------------------------------------------------------------

//Array.prototype.map
Array.prototype.myMap = function myMap(callback){
    if(typeof callback !== "function"){
        throw new Error(`${callback} is not a function`); 
    }
    let arr = [...this];
    let newArr = [];
    let newArrIndex = 0;
    for(let i = 0; i < arr.length; i++){
        newArr[newArrIndex] = callback(arr[i],i,arr);
        newArrIndex++;
    }
    return newArr;
}
// let arr = [5,4,6,8,10,12];

//------------------------------------------------------------------
//Array.prototype.find

Array.prototype.myFind = function(callback){
    if(typeof callback !== "function"){
        throw new Error(`${callback} is not a function`); 
    }
    let arr = [...this];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr)){
           return arr[i]; 
        }
    }
    return undefined;
}
// let arr = [5,4,6,8,10,12];
//------------------------------------------------------------------
//Array.prototype.findIndex
Array.prototype.myFindIndex = function(callback){
    if(typeof callback !== "function"){
        throw new Error(`${callback} is not a function`); 
    }
    let arr = [...this];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr)){
           return i; 
        }
    }
    return -1;
}
//------------------------------------------------------------------
// Array.prototype.some
Array.prototype.mySome = function(callback){
    if(typeof callback !== "function"){
        throw new Error(`${callback} is not a function`); 
    }
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr)){
           return true; 
        }
    }
    return false;
}
//------------------------------------------------------------------
//Array.prototype.forEach
Array.prototype.myForEach = function(callback){
    if(typeof callback !== "function"){
        throw new Error(`${callback} is not a function`); 
    }
    for(let i = 0;i < this.length; i++){
        callback(this[i] , i , this);
    }
}
//------------------------------------------------------------------
//Array.prototype.join
Array.prototype.myJoin = function(separator){
    if(separator == undefined){
        return String(this);
    }
    separator = String(separator);
    let result = "";

    for(let i = 0; i < this.length; i++){
        i < this.length - 1 ? result += this[i] + separator : result += this[i];
    }
    return result
}
let arr = [4,5,6,4];
//------------------------------------------------------------------
//longestWord
String.prototype.longestWord = function(){
    let words = this.mySplit(" ");
    let max = words[0] ;
    for(let i = 1; i < words.length; i++){
        if(words[i].length > max.length){
           max = words[i]; 
        }
    }   
    return max;
}
// let text = "JavaScript is Programming language";

//------------------------------------------------------------------
//isPrime
Number.prototype.isPrime = function(){
    if(num < 0)throw new Error("A negative number can not be prime");
    if(num == 1)return false;
    for(let i = 2; i < 10; i++){
        if(num == i)break;
        if(num % i == 0){
           return false; 
        }
    }
    return true;
}

//------------------------------------------------------------------
//getNums
String.prototype.getNums = function(){
    let syms = [...this];
    let temp = [];
    let tempIndex = 0;
    let nums = "";

    for(let i = 0; i < syms.length; i++){
        if(typeof +syms[i] == "number"  && +syms[i] == +syms[i] && syms[i] !== " "){
               nums += syms[i]; 
        }else{
            if(nums == ""){
               continue; 
            }
            temp[tempIndex] = +nums;
            tempIndex++;
            nums = "";
        }
    }
    temp[tempIndex] = +nums;
    return temp;
}