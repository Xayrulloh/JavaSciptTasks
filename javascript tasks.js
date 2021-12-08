// Recoursion
// 1 - exercise
/*function factorial(num) {
    if (num === 0) return 1
    else return num * factorial(num - 1)
}
let num = 5
if (num >= 0) {
    console.log(`The factorial of ${num} is ${factorial(num)}`);
}
else console.log('A xato bosh');*/

// 2 - exercise
/*function Diapazon(startNum, endNum) {
    if (endNum - startNum === 2) return [startNum + 1]
    else {
      var numbers = Diapazon(startNum , endNum - 1);
      numbers.push(endNum - 1);
      return numbers;
    }
  }
console.log(Diapazon(2, 9));*/

// 3 - exercise
/*function sum_array(array) {
    if (array.length === 1) return array[0]
    else return array.pop() + sum_array(array)
}
console.log(sum_array([1, 2, 3]));*/

// 4 - misol
/*function exponent(a, b) {
    if (b === 0) return 1
    else return a * exponent(a, b - 1)
}
console.log(exponent(8, 2));*/

// 5 - misol
/*function fibonaci(num) {
    if (num === 1) return [0, 1]
    else {
        let a = fibonaci(num - 1)
        a.push(a[a.length - 1] + a[a.length - 2])
        return a
    }
}
console.log(fibonaci(5));*/

// 6 - misol
/*function isEven(number) {
    if (number < 0) number = Math.abs(number)
    if (number === 0) return true
    if (number === 1) return false
    else {
        number = number - 2
        return isEven(number)
    }
}
console.log(isEven(9));*/

// Functions
// 1 - exercise
/*function allComb(string) {
    let result = [];
    for (let i = 0; i < string.length; i++){
        for (let j = i + 1; j <= string.length; j++){
            result.push(string.slice(i, j));
        }
    }
    return result;
}
console.log(allComb('dog'));*/

// 2 - exercise
/*function sorted(str) {
    return str.split('').sort().join('')
}
console.log(sorted('webmaster'))*/

// 3 - exercise
/*function toUpper(sentence){
    let arr = sentence.split(' ');
    return arr.map(item => {
        item[0].toUpperCase()
        return item;
    }).join(' ');
}*/

// 4 - exercise
/*function longest(str) {
    str = str.split(' ')
    let long = str[0]
    for (a of str) {
        if (a.length >= long.length) long = a
    }
    console.log(long)
}
longest('Veb ishlab chiqish bo\'yicha qo\'llanma')*/

// 5 - exercise
/*function isTub(num) {
    let tubEmas = 0
    for (let a = 2; a < num; a++) {
        if (num % a == 0) tubEmas++
    }
    if (tubEmas) {
        console.log(`${num} tub son emas`);
    }
    else console.log(`${num} tub son `);
}
isTub(17)*/

// 6 - exerice 
/*function type(any) {
    console.log(typeof any)
}
type(null)*/

// 7 - exerice 
/*function secondMaxMin(arr){
    let sorted = new Set(arr.sort());
    arr = Array.from(sorted)
    return [arr[1], arr[arr.length - 2]]
}*/

// 8 - exercise
/*function perfect(num) {
    let sum = 0
    for (a = 1; a < num; a++) {
        if (num % a == 0) sum += a
    }
    if (sum === num) console.log(`${num} is perfect number`)
    else console.log(`${num} isn't perfect number`)
}
perfect(28)*/

// 9 - exercise
/*function dividers(num) {
    let arr = []
    for (a = 1; a <= num; a++) {
        if (num % a === 0) {
            arr.push(a)
        }
    }
    console.log(arr);
}
dividers(15)*/

// 10 - exercise
/*let i = 0;
let arr1 = [];
function coin(num, arr){
    if(i === arr.length) return arr1
    if(num-arr[i] >= 0){
        arr1.push(arr[i]);
        num = num - arr[i]
        return coin(num, arr)
    } if(num - arr[i] < 0) {
        i++;
        return coin(num, arr);
    }
}

console.log(coin(46, [25, 10, 5, 2, 1]));*/

// 11 - exercise
/*function kvadrat(son, kvadrat) {
    console.log(son**kvadrat)
}
kvadrat(2, 5)*/

// 12 - exercise
/*function chopSame(str) {
    let strin = ''
    str = new Set(str)
    for (a of str) strin += a
    console.log(strin)
}
chopSame("thequickbrownfoxjumpsoverthelazydog")*/

// 13 - exercise
/*function count(str) {
    let arr = []
    let num = 0
    for (a = 0; a < str.length; a++) {
        for (b = 0; b < str.length; b++) {
            if (str[a] === str[b]) {
                num++
            }
        }
        arr.push(`${str[a]} ${num} martda aylandi`)
        num = 0
    }
    arr = new Set(arr)
    arr = Array.from(arr)
    console.log(arr);
}
count('Najot ta\'lim')*/

// 14 - exercise
/*function larger(array, num) {
    let arr = []
    for (const item of array) {
        if (item >= num) arr.push(item)
    }
    console.log(arr);
}
larger([10, 45, 20, 4, 5, 6], 10)*/

// 15 - exercise
/*function random(num) {
    let soz = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomSoz = ''
    for (index = 0; index < num; index++) randomSoz += soz[Math.round(Math.random() * soz.length - 1)]
    console.log(randomSoz);
}
random(8)*/

// 17 - exercise
/*function count(str, word) {
    let son = 0
    for (const words of str) {
        if (word === words) son++
    }
    console.log(son);
}
count('Najot Ta\'lim', 'o')*/

// 18 - exercise
/*function unique(str) {
    let len = str.length
    let num = 0
    for (a = 0; a < str.length; a++) {
        for (b = 0; b < str.length; b++) {
            if (str[a] === str[b]) {
                num ++
            }
        }
        if (num === 1) {
            return str[a]
        }
        else num = 0
    }
}
console.log(unique('abacddbec'));*/

// 19 - exercise
/*function sortByBig(arr) {
    arr.sort(function (a, b) {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })
    arr = arr.reverse()
    console.log(arr);
}
sortByBig([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])*/

// 20 - exercise
/*function bigname(arr) {
    arr.sort(function (a, b) {
        if (a.length > b.length) return 1
        if (a.length < b.length) return -1
        return 0
    })
    console.log(arr[arr.length - 1]);
}
bigname(["O'zbek", "Avstraliya", "Germaniya", "Amerika Qo'shma Shtatlari"])*/

// 21 - exercise
/*function longest_substring_without_repeating_characters(input) {
    let chars = input.split('');
    let curr_char;
    let str = "";
    let longest_string = "";
    let hash = {};
    for (let i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) { 
            str += curr_char; 
            hash[chars[i]] = {index:i};
        }
        else {
            if(longest_string.length <= str.length) {
                longest_string = str;
            }
            let prev_dupeIndex = hash[curr_char].index;
            let str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (let j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = {index:j};
            }
        }   
    }
    return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com")); 
console.log(longest_substring_without_repeating_characters("example.com")); */

// 22 - exercise
/*function is_Palindrome(str1) {
    let rev = str1.split("").reverse().join("");
    return str1 == rev;
}
function longest_palindrome(str1){
    let max_length = 0,
    maxp = '';
    for(let i=0; i < str1.length; i++) {
        let subs = str1.substr(i, str1.length);
        for(let j=subs.length; j>=0; j--) {
            let sub_subs_str = subs.substr(0, j);
            console.log(sub_subs_str);
            if (sub_subs_str.length <= 1) continue;
            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }           
        }
    }
    return maxp;
}
    console.log(longest_palindrome("12321"));*/

// 23 - exercise
/*function logFuncName() {
    console.log( arguments.callee.name );
}
logFuncName();*/

// JavaScript conditional statements and loops
// 1 - exercise
/*let num = 5
let num2 = 6
if (num > num2) console.log(num);
if (num < num2) console.log(num2);
if (num === num2) console.log("teng");*/

// 2 - exercise
/*let num1 = 2
let num2 = 3
let num3 = -5
if (num1 * num2 * num3 >= 0) console.log('+');
else console.log('-');*/

// 3 - exercise
/*let num1 = 2
let num2 = 3
let num3 = 15
if (num1 >= num2 && num1 >= num3 && num2 >= num3) console.log(num1, num2, num3);
if (num1 >= num2 && num1 >= num3 && num3 >= num2) console.log(num1, num3, num2);
if (num2 >= num1 && num2 >= num3 && num1 >= num3) console.log(num2, num1, num3);
if (num2 >= num2 && num2 >= num3 && num3 >= num1) console.log(num2, num3, num1);
if (num3 >= num2 && num3 >= num1 && num2 >= num1) console.log(num3, num2, num1);
if (num3 >= num2 && num3 >= num1 && num1 >= num2) console.log(num3, num1, num2);*/

// 4 - exercise
/*let [num1, num2, num3, num4, num5] = [2, 3, 15, 18, 1]
if(num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) console.log(num1);
if(num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) console.log(num2);
if(num3 >= num2 && num3 >= num1 && num3 >= num4 && num3 >= num5) console.log(num3);
if(num4 >= num2 && num4 >= num3 && num4 >= num1 && num4 >= num5) console.log(num4);
if(num5 >= num2 && num5 >= num3 && num5 >= num4 && num5 >= num1) console.log(num5);*/

// 5 - exercise
/*for (a = 0; a <= 15; a++) {
    console.log(a, a % 2 == 0 ? 'juft' : 'toq');
}*/

// 6 - exercise
/*let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let sum = 0
for (a = 0; a < students.length; a++) {
    sum += students[a][1]
}
sum = sum / students.length
console.log(sum);
switch (sum) {
    case sum <= 60:
        console.log('F');
        break;
    case sum <= 70:
        console.log('D');
        break;
    case sum <= 80:
        console.log('C');
        break;
    case sum <= 90:
        console.log('B');
        break;
    case sum <= 100:
        console.log('A');
        break;
    // default:
    //     console.log('gap yo');
}*/

// 8 - exercise
/*let num = 7
let son = 0
while(num !== 1) {
    while (num >= 10) {
        son += (num % 10) * (num % 10)
        num = num / 10
        num = Math.floor(num)
    }
    console.log(son + num**2);
    son += num**2
    num = son
    son = 0
}*/

// 9 - exercise
/*let num = 371
let num3 = num
let num2 = 0
while (num !== 0) {
    num2 += (num % 10) * (num % 10) * (num % 10)
    num = num / 10
    num = Math.floor(num)
}
if (num3 === num2) console.log(`${num2} is Armstrong number`);
else console.log(`${num2} isn't Armstrong number`);*/

// 10 - exersice
/*let star = ''
for (a = 0; a <= 5; a++) {
    for (b = 0; b < a; b++) {
        star += '*'
    }
    console.log(star);
    star = ''
}*/

// 11 - exercise
/*let num = 155
let num2 = 785
while (num != num2) {
    if (num > num2) num = num - num2
    else num2 = num2 - num
}
console.log(num);*/

// 12 - exercise
/*let sum = 0
for (a = 1; a <= 1000; a++) {
    if (a % 3 == 0 || a % 5 == 0) sum += a
}
console.log(sum);*/

// Math
// 1 - exercise
/*function convert(number, base, change) {
    if ((base && change) < 2 || (base && change) > 36)
    return 'base between 2 and 36'
    return parseInt(number + '', base).toString(change)
}*/

// 2 - exercise
/*function binaryChange(nums) {
    return parseInt((nums + '').replace(/[^01]/gi, ''), 2)
}
console.log(binaryChange('110011'));
console.log(binaryChange('100'));*/

// 3 - exercise
/*function binaryChange(a, base) {
    if (a < 0) {
        a = 0xFFFFFFFF + a + 1
    }
    switch (base) {
        case 'B':
            return parseInt(a, 10).toString(2);
        case 'H':
            return parseInt(a, 10).toString(16);
        case 'O':
            return parseInt(a, 10).toString(8);
            default:  
            return("Wrong input.........");  
            
    }
}
console.log(binaryChange(120,'B'));
console.log(binaryChange(120,'H'));
console.log(binaryChange(120,'O'));*/

// 4 - exercise
/*function ran(...num) {
    if (num[0] > num[1]) console.log(Math.round(Math.random()*num[0]));
    if (num[0] < num[1]) console.log(Math.round(Math.random()*num[1]));
    else console.log(Math.round(Math.random()*num));
}
ran(20)*/

// 5 - exercise
/*function onlik(num, noli) {
    console.log(num.toFixed(noli));
}
onlik(2.100212, 5)*/

// 6 - exercise
/*function max(arr) {
    arr = arr.sort((a, b) => a > b ? 1 : -1)
    console.log(arr[arr.length - 1]);
}
max([12,34,56,1])*/

// 7 - exercise
/*function min(arr) {
    arr = arr.sort((a, b) => a > b ? 1 : -1)
    console.log(arr[0]);
}
min([12,34,56,1])*/

// 8 - exercise
/*function EKUB(num1, num2) {
    while (num1 !== num2) {
        if (num1 > num2) num1 -= num2
        else num2 -= num1
    }
    console.log(num1);
}
EKUB(9, 3)*/

// 9 - exercise
/*function EKUBforArray(array) {
    let  b;
    a = array[0];
    for (var i = 1; i < array.length; i++) {
        b = array[ i ];
        array[0] = two(array[0], b);
    }
    return a;
}
  
function two(num1, num2) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2) {
        let t = num2;
        num2 = num1 % num2;
        num1 = t;
    }
    return num1;
  }
  console.log(EKUBforArray([3,15,27]));
  console.log(EKUBforArray([5,10,15,25]));*/

// 10 - exercise
/*function lcm(num1, num2) {
    return Math.abs((num1 * num2) / two(num1, num2));
}
 
function two(num1, num2) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2) {
        let t = num2;
        num2 = num1 % num2;
        num1 = t;
    }
    return num1;
}
console.log(lcm(3,15));
console.log(lcm(10,15));*/

// 11 - exercise
/*function EKUK(arr) {
    let num1 = 0, num2 = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        num1 = arr[i] % arr[i + 1];
        if(num1 === 0) arr[i + 1] = (arr[i] * arr[i+1]) / arr[i + 1];
        else {
            num2 = arr[i + 1] % num1;
            if(num2 === 0) arr[i + 1] = (arr[i] * arr[i + 1]) / num1;
            else arr[i+1] = (arr[i] * arr[i + 1]) / num2;
        }
    }
    return arr[len - 1];
}
console.log(EKUK([5,10,15,25]));*/

// 12 - exercise
/*function natural(num) {
    console.log(Infinity);
    return (num > 0.0) && (Math.floor(num) = num) && num !== Infinity
}
console.log(natural(-15));*/

// 13 - exercise
/*function daraja(num) {
    while (num > 2) {
        num = num / 2
    }
    return num === 2 ? true : false
}
console.log(daraja(256));*/

// 14 - exercise
/*function aniq(num, num2) {
    let num3 = Math.floor(Math.abs(num)).toString
    return num.toPrecision(num3.length + num2 + 1)
}
console.log(aniq(-10.3079499, 3));*/

// 15 - exercise
/*function isInt(num) {
    return !isNaN(num) !== parseInt(Number(num)) == num !== !isNaN(parseInt(num, 10))
}
console.log(isInt(4e2));
console.log(isInt(NaN));*/

// 16 - exercise
/*function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
console.log(isNum(12));*/

// 17 - exercise
/*function sum(arr) {
    let all = 0
    for (const a of arr) {
        if (a == parseInt(Number(a))) {
            all += a
        }
    }
    return all
}
console.log(sum([1,2,'a',3]));*/

// 18 - exercise
/*function multiplication(arr) {
    let multi = 1
    for (const a of arr) {
        if (a === Number(a)) {
            multi *= a
        }
    }
    return multi
}
console.log(multiplication([100,-200,3]));
console.log(multiplication([1,2,'a',3]));*/

// 19 - exercise
/*function pifagor(a, b) {
    return Math.sqrt((a * a) + (b * b))
}
console.log(pifagor(2, 4));
console.log(pifagor(3, 4));*/

// 20 - exercise
/*function binom(a, b) {
    let res = 1
    for(let c = a - b + 1; c <= a; c++) res *= c
    for(let c = 1; c <= b; c++) res /= c
    return res
}
console.log(binom(8,3));
console.log(binom(10,2));*/

// 21 - exercise
/*function c(num) {
    let arr = ["I","II","III","IV","V","VI","VII","VIII","IX", "X"]
    let str = ''
    while(num > 0) {
        if (num >= 10) {
            str += arr[9]
            num -= 10
        }
        if (num < 10) {
            str += arr[num - 1]
            num = 0
        }
    }
    return str
}
console.log(convertToRim(27));*/

// 22 - exercise
/*function convertToNumber(str) {
    let son = 0
    let arr = ["I","II","III","IV","V","VI","VII","VIII","IX", "X"]
    for (let a = 0; a < str.length; a++) {
        for (let b =0; b < arr.length; b++) {
            if (str[a] === arr[b]a) son += b + 1
        }
    }
    return son
}
console.log(convertToNumber('XXVII'));*/

// 23 - exercise
// galatikan cummadm keyn qaytaman

// 24 - exercise
/*let a = 1.1234000;
console.log(parseFloat(a.toFixed(4)));*/

// qoganini qganman faqat ochb ketdi

// Array
// 1 - exercise
/*unction isArray(thing) {
    if (toString.call(thing) === "[object Array]") return true
    return false
}
console.log(isArray([1, 2, 3]));*/

// 2 - exercise
/*function clone(array) {
    return array.slice(0)
}
console.log(clone([1, 2, 4, 0]));
console.log(clone([1, 2, [4, 0]]));*/

// 3 - exercise
/*function birinchi(array) {
    return array[0]
}
console.log(birinchi([1, 2, 3, 45, 8]));*/

// 4 - exercise
/*function last(array, number) {
    if (number == null) return array[array.length - 1]
    return array.slice(Math.max(array.length - number, 0))
}
console.log(last([1, 2, 3, 4], 2));*/

// 5 - exercise
/*let array  = ['red', 'green', 'white']
console.log(array.toString());
console.log(array.join(','));*/

// 6 - exercise
/*const num = 2468951234875
const str = num.toString();
const res = [str[0]];
  
for(let a=1; a < str.length; a++) {
    if((str[a - 1] % 2 === 0) && (str[a] % 2 === 0)) res.push('-', str[a]);
    else res.push(str[a]);
}
console.log(res.join(''));*/

// 7 - exercise
/*let arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr.sort((a, b) => a > b ? 1 : -1));*/
 
// 8 - exercise
/*let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let nima = ''
let nechta = 0
let max = 0
let maxstr = ''
for (a = 0; a < arr.length; a++) {
    for (b = 0; b < arr.length; b++) {
        if (arr[a] === arr[b]) {
            nima = arr[a]
            nechta++
        }
    }
    if (max < nechta) {
        max = nechta
        maxstr = arr[a]
    }
    nechta = 0
}
console.log(max);
console.log(maxstr);*/

// 9 - exercise
/*let str = "Tez jigarrang tulki"
let rev = ''
for (const a of str) {
    if (a == a.toUpperCase()) rev += a.toLowerCase()
    else rev += a.toUpperCase()
}
console.log(rev);*/

// 10 - exercise
/*let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (const a in array) {
    for (const b of array[a]) {
        console.log(`${b} ni qatori ${a}`);
    }
}*/

// 11 - exercise
/*function kv(array) {
    let len = array.length
    let sum = 0
    while (len--) {
        sum += Math.pow(array[len], 2)
    }
    console.log(sum);
}
kv([0, 1, 2, 3, 4])*/

// 12 - exercise
/*let array = [1, 2, 3, 4, 5, 6]
let sum = 0
let sum2 = 1
array.forEach(element => {
    sum += element, sum2 *= element
});
console.log(sum, sum2);*/

// 13 - exercise
/*let array = []
console.log(array.push(1));*/

// 14 - exercise
/*function removeDublicate(array) {
    let arr = []
    for (const element of array) {
        if (!arr.includes(element)) arr.push(element)
    }
    console.log(arr);
}
removeDublicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6])*/

// 15 - exercise Galatikan

// 16 - exercise
/*function kabisa(year, year2) {
    let arr = []
    while (year <= year2) {
        if (year % 400 == 0) arr.push(year) 
        else if(year % 100 != 0 && year % 4 == 0) arr.push(year)
        year++
    }
    return arr
}
console.log(kabisa(2000,2012));*/

// 17 - exercise
/*function alkashChulkash(array) {
    let len = array.length
    let prosta = 0
    while (len > 0) {
        let index = Math.floor(Math.random() * len)
        len --
        prosta = array[len]
        array[len] = array[index]
        array[index] = prosta
    }
    console.log(array);
}
alkashChulkash([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])*/

// 18 -  exercise chunmadm

// 19 - exercise
/*let massiv1 = [1,0,2,3,4];
let massiv2 = [3,5,6,7,8,13];
let massiv3 = []
if (massiv1.length > massiv2.length) {
    for (let a = 0; a < massiv1.length; a ++) {
        if (massiv2[a]) massiv3.push(massiv2[a] + massiv1[a])
        else massiv3.push(massiv1[a])
    }
}
else {
    for (let a = 0; a < massiv2.length; a ++) {
        if (massiv1[a]) massiv3.push(massiv2[a] + massiv1[a])
        else massiv3.push(massiv2[a])
    }
}
console.log(massiv3);*/

// 20 - exercise
/*function duplicate(array) {
    let same = 0
    let arr = []
    for (let element of array) {
        for (let elemen of array) {
            if (element === elemen) {
                same++
            }
        }
        if (same >= 2) {
            arr.push(element)
        }
        same = 0
    }
    console.log(new Set(arr));
}
duplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])*/

// 21 - exercise chunarsz

// 22 - exercise
/*function merge(arr, arr2) {
    let array = Array.from(new Set(arr.concat(arr2)))
    return array
}
console.log(merge([1, 2, 3], [100, 2, 1, 10]));*/

// 23 - exercise miyya qizib ketdi

// 24 - exercise
/*let arr = [NaN, '0', 15, false, -22, '', undefined, 47, null]
let array = []
for (const a of arr) {
    if (a === Number(a)) array.push(a)
}
console.log(array);*/

// 25 - exercise
/*let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
function sortTitle(a, b) {
    return a.title > b.title ? 1 : -1
}
console.log(library.sort(sortTitle));*/

// 26 - exercise
/*function find(arr, num) {
    let newarr = []
    let f = false
    for (let a = 0; a <= arr.length; a++) {
        for (let b = 0; b <= arr.length; b++) {
            if (a === b) continue
            if (arr[a] + arr[b] === num) {
                newarr.push(a); newarr.push(b)
                f = true
            }
        }
        if (f) break
    }
    console.log(newarr);
}
find([10,20,10,40,50,60,70],50)*/

// 27 - exercise
/*let tOrf = (arr) => {
    let newarr = []
    arr.forEach(a => {
        if (a) newarr.push(a)
    })
    return newarr
}
console.log(tOrf([NaN, 0, 15, false, -22, '',undefined, 47, null]));*/

// 28 - exercise
/*function longest_common_starting_substring(arr1){
    let arr= arr1.concat().sort()
    a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
}
console.log(longest_common_starting_substring(['go', 'google'])); */

// 29 - exercise galati

// 30 - exercise
/*function birlashtirish(arr1, arr2) {
    let newarr = arr1.concat(arr2)
    newarr = new Set(newarr)
    console.log(newarr);
}
birlashtirish([1, 2], [3, 5, 6, 1, 2])*/

// 31 - exercise
/*let remove = (arr, num) => {arr.splice(arr.indexOf(num), 1); return arr}
console.log(remove([2, 5, 9, 6], 5));*/

// 32 - exercise
/*let tori = (arr, num) => {if (arr.includes(num)) return true; else false}
console.log(tori([2, 5, 9, 6], 5));*/

// 33 - exercise
/*let arr = [1, 2, 3, 4, 5, 7]
arr = []
console.log(arr);*/

// 34 - exercise
/*let findLargest = (arr, num) => {arr.sort((a, b) => a > b ? 1 : -1); return arr[num]}
console.log(findLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));*/

// 35 - exercise
/*let randomElementOfArray = (arr) => arr[Math.round(Math.random() * arr.length - 1)]
console.log(randomElementOfArray([1, 2, 3, 4, 5, 6]));*/

// 36 - exercise
/*function arrayFilled(num1, num2) {
    let arr = []
    for (let a = 1; a <= num1; a++) arr.push(num2)
    return arr
}
console.log(arrayFilled(6, 0));*/

// 37 - exercise
/*let arrayFilled = (num1, str) => {
    let arr = []
    for (let a = 1; a <= num1; a++) arr.push(str)
    return arr
}
console.log(arrayFilled(6, 'what hell'));*/

// 38 - exercise
/*function move(arr, num1, num2) {
    let newarr = []
    let shortarr = arr.splice(num1, num2 + 1)
    shortarr.reverse()
    arr.splice(num1, 0, shortarr)
    newarr = arr[0]
    arr.shift()
    newarr = newarr.concat(arr)
    console.log(newarr);
}
move([10, 20, 30, 40, 50], 0, 2)*/

// 39 - exercise
/*let filterArrayFunction = (arr) => {
    let newarr = []
    arr.forEach(a => {if (a) newarr.push(a)});
    console.log(newarr);
}
filterArrayFunction([58, '', 'abcd', true, null, false, 0])*/

// 40 - exercise
/*let arrayRange = (num1, num2) => {let arr = []; while (arr.length < num2) arr.push(num1++); console.log(arr);}
arrayRange(-6, 4)*/

// 41 - exercise
/*function rangeBetween(num1, num2) {
    let newarr = []
    for (; num1 <= num2; num1++) {
        newarr.push(num1)
    }
    console.log(newarr);
}
rangeBetween(4, 7)*/

// 42 - exercise
/*let difference = (arr1, arr2) => {arr1 = arr1.concat(arr2); arr1 = new Set(arr1); console.log(arr1)}
difference([1, 2, 3], [100, 2, 1, 10])*/

// 43 - exercise
/*function unzip(arr) {
    let newarr = []
    if (arr[0].length >= arr[1].length) {
        for (let a = 0; a < arr[0].length; a++) {
            if (!arr[1][a]) {
                newarr.push(arr[0][a])
                break
            }
            newarr.push([arr[0][a], arr[1][a]])
        }
    }
    else {
        for (let a = 0; a < arr[1].length; a++) {
            if (!arr[0][a]) {
                newarr.push(arr[1][a])
                break
            }
            newarr.push([arr[1][a], arr[0][a]])
        }
    }
    console.log(newarr);
}
unzip([['a', 1], ['b', 2, true]])*/

// 44 - exercise chunmadm

// Date
// 1 - exercise
/*function is_date(str) {
    return Object.prototype.toString.call(str) === '[object Date]' ? true : false
}
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));*/

// 2 - exercise
/*let today = new Date()
console.log(`${today.getMonth()}.${today.getDate()}.${today.getFullYear()}`);*/

// 3 - exercise
/*console.log(new Date(11, 2020, 0).getDate());  */

// 4 - exercise
/*let month_name = function(dt){
    let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    return mlist[dt.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));*/

// 5 - exercise cunarsz

// 6 - exercise
/*function addMinutes(dt, minute) {
    return new Date(dt.getTime() + minute*6000)
}
console.log(addMinutes(new Date(2021,11,26), 30).toString());*/

// 7 - exercise
/*function isWeekend(date) {
    let date1 = new Date(date)
    return date1.getDay() == 6 || date1.getDay() == 0 ? true : false  // false chunki bugun juma
}
console.log(isWeekend('Nov 11, 2020'));*/

// 8 - exercise
/*function ayirish(date1, date2) {
    let d1 = new Date(date1)
    let d2 = new Date(date2)
    return Math.floor((Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate())) - Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()))
}
console.log(ayirish('04/02/2020', '11/04/2021'));*/

// 9 - exercise
/*function lastday(y, m) {
    return new Date(y, m, 0).getDate()
}
console.log(lastday(2021,11));*/

// 10 - exercise
/*function yesterday(date) {
    let dat = new Date(date)
    return new Date((dat.setDate(dat.getDate() - 1))).toString()
}
console.log(yesterday('Nov 15, 2014'));*/

// 11 - exercise
/*function max_date(arr) {
    let maxarr = arr[0]
    let max_dtObj = new Date(arr[0]);
    arr.forEach(function(dt) {if (new Date( dt ) > max_dtObj) { maxarr = dt; max_dtObj = new Date(dt)}});
    return maxarr;
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));*/

// 12 - exercise
/*function minDate(arr) {
    let minarr = arr[0]
    let minDt = new Date(arr[0])
    arr.forEach(function(item) {if (new Date(item) < minDt) {minarr = item; minDt = new Date(item)}})
    return minarr
}
console.log(minDate(['2015/02/01', '2015/02/02', '2015/01/03']));*/

// 13 - exercise






















// String
// 1 - exercise
/*function is_string(input) {
    return typeof input === 'string' ? true : false
}
console.log(is_string([1, 2, 4, 0]));*/

// 2 - exercise
/*function isBlank(input) {
    return input ? true : false
}
console.log(isBlank('')
);*/

// 3 - exercise
/*function stringToArray(str) {
    return str.split(' ')
}
console.log(stringToArray('tomas kimdir'));*/

// 4 - exercise
/*function truncate_string(str, num) {
    return str.slice(0, num)
}
console.log(truncate_string('robinson', 4));*/

// 5 - exercise
/*function abbrev_name(str) {
    str = str.split(' ')
    return str[0] + ' ' + str[1][0] + '.'
}
console.log(abbrev_name("Robin Singx"));*/

// 6 - exercise
/*function protectEmail(str) {
    str = str.split('@')
    let half1 = str[0].substring(0, str[0].length / 2)
    return half1 + '...' + str[1]
}
console.log(protectEmail('kimdir@gmail.com'));*/

// 7 - exercise
/*function string_parameterize(str) {
    str = str.split(' ')
    return str.join('-')
}
console.log(string_parameterize("AQShdan Robin Singx."));*/

// 8 - exercise
/*function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize('js string exercises'));*/

// 9 - exercise
/*function capitalize_Words(str) {
    str = str.split(' ')
    let str2 = ''
    for (const a of str) {
        str2 += a[0].toUpperCase() + a.slice(1) + ' '
    }
    return str2
}
console.log(capitalize_Words('js string mashqlari'));*/

// 10 - exercise
/*function swapcase(str) {
    let rev = ''
for (const a of str) {
    if (a == a.toUpperCase()) rev += a.toLowerCase()
    else rev += a.toUpperCase()
}
return rev
}
console.log(swapcase('AaBbc'));*/

// 11 - exercise cunmadm

// 12 - exercise
/*function uncemalize(str, s) {
    let middle = str.length/2
    middle = Math.floor(middle)
    console.log(str.slice(0, middle) + s + str.slice(middle, str.length));
}
uncemalize('helloworld', '-')*/

// 13 - exercise
/*function takrorlash(str, num) {
    let s = ''
    for (let a = 0; a < num; a++) {
        s += str
    }
    console.log(s);
}
takrorlash('ha', 2)*/

// 14 - exercise
/*function insert(str, add = '', pos = 0) {
    console.log(str.slice(0, pos) + add + str.slice(pos));
}
insert('We are doing some exercises.','JavaScript ',18)*/

// 15 - exercise chunarsiz

// 16 - exercise
/*function text_truncate(str, index = str.length, value = '') {
    return str.slice(0, index) + value
}
console.log(text_truncate('Biz JS string mashqlarini bajaryapmiz.'))
console.log(text_truncate('Biz JS string mashqlarini bajaryapmiz.',19))
console.log(text_truncate('Biz JS string mashqlarini bajaryapmiz.',15,'!!'))*/

// 17 - exercise yogakan munaqasi

// 18 - exercise
/*function count(str, counted) {
    str = str.split(' ')
    let sum = 0
    for (const a of str) {
        if (a === counted) sum++
    }
    console.log(sum);
}
count("The quick brown fox jumps over the lazy dog", 'the')*/

// 19 - exercise oqigimam kemadi

// 20 - exercise galatikan

// 21 - exercise















