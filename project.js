
//6.2
function countDuplicate(text) {
    let result = 0,
        duplicate = {};
    text.toLowerCase().split('').map(str => {
        if (!duplicate.hasOwnProperty(str)) {
            duplicate[str] = 0;
        } else {
            if (duplicate[str] === 0) {
                result += 1;
            }
            duplicate[str] = duplicate[str] + 1;
        }
    });
    return result;
}
console.log(countDuplicate('hhjhjcc'))
//6.4
function isIsogram(str) {
    let i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i) {
        for (j =i+1; j < str.length; ++j) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isIsogram(''))
//6.1
function accum(word) {
    let result = '';
    for (char in word) {
        for (let i = 0; i <= char; i++) {
            if (i === 0) {
                result = result + word[char].toUpperCase()

            } else {
                result = result + word[char].toLowerCase()
            }
        }
        result = result + '-';
    }
    return result;
}
console.log(accum('abcde'))



//6.3
const a = "";
const b = "";
const longest = (a , b ) => {
    const merged = a.concat(b).toLowerCase();
    const split = merged.split('');
    const sorted = split.sort();
    const result = [];
    for (let char of sorted) {
        if (!result.includes(char)) {
            result.push(char)
        }
    }
    return (result.join(''));
};
console.log(longest('abcd', 'cdef'));

 //7
 //sort
const music= ['mesiba', 'mehila', 'neshima', 'aboutUs', 'tutim']
const asc= music.sort((a,b)=>{
    if( b>a){
        return -1
    } else if( b<a){
        return 1;
    }
     return 0;
})
console.log(asc)
//map
const arr=  ['beautiful', 'day', 'from']
const upper= arr.map(function(cap){
    return cap.toUpperCase();
})
console.log(upper)
//forEach
const number= [1,5,6,8,9,10];
const oddNumbers= number.forEach(nums => {
    if(!nums % 2===0){
    }    
    return number;
});
console.log(oddNumbers)

const arr=[ 12,7,3,9,8];
function oddValues(arr) {

    let newArr = [];
     
        arr.forEach(num => {
             if(num % 2 !== 0) {
                newArr =  [...newArr,num];
             } 
        })

        return newArr;
    
}
console.log(oddValues(arr))

 //8
 function Rectangle (a,b){
     return (a+b)*2;
 }
 console.log(Rectangle(2,9))
 console.log(Rectangle(20,10))
