 /*let myName='malik';
 myName="tt"

console.log(myName);
*/


/*const myName='rajesh';
const value= 32;
const job='student';
const kk = "i'm " +myName+ ', my age is ' +value+ ', now i have a ' +job+ '!';
console.log(kk);

const rr = `i'm ${myName}, a ${value}, now i am doing ${job}!`;
console.log(rr);*/

/*const mark1 = 67;
const    mark2 = 56;
 const    mark3 = 45;
const avg = (mark1 + mark2)/2;
console.log(avg);
if (avg>=mark1){
      console.log("he is pass");
}  
else{
    console.log("he is fall");
}*/

/*
const number= 545;
console.log(Number(number)+5);
console.log('32'-'10'+8);*/

/*let money = 10;
if(money){
    console.log("money \n\ is no  here");

}else{
    console.log("no job");
}

const malik= prompt("nice day");
console.log(malik);
  

const mk=true;
const mr=false;
console.log(mk && mr);

const day='suterday';
switch(day){
    case 'monday':
    console.log("nice day");
    console.log("hi malik");
    break;
    case 'tuesday':
    case 'wednessday':
    case 'theresday':
    console.log("abe sala");
    console.log("are bla");
    break;
    case 'friday':
    case 'suterday':
    console.log("namaste");
    console.log("have a nice day");
    break;
    default:
        console.log("mba kar");
}


const age = 34;
const drink = age >= 32 ? "bear": "water";
console.log(drink);

let drink2;
if(age>33){
    drink2='drinking water';

}else{
    drink2="drinking mada";
}console.log(drink2);
console.log(`i like to drink ${age >= 32 ? "bear": "water"}`);


const bill = 376;
if (tip>=50 && tip<=300){
    console.log("the tips value is 15%");
}else{
    console.log("the tips value is 20%");
}
const tip = bill<=300 && bill >=50? bill*0.15: bill*0.2;
console.log(`the bill war ${bill} and the tip was ${tip} and the total value is ${bill+tip}`);




function add(n){
    var x = 5+ add.arguments[0];
    return x;
}



'use strict';
let driveTest = true;
let passTest = false;
if(driveTest) console.log(`we can drive`);
if(passTest) console.log(`we can not drive`);



function malik()
{
    console.log("my self rajesh malik");
}
malik();
malik();
malik();
malik();


function fruit(apple, kamala){
    console.log(apple, kamala);
    const fruit = `i have ${apple} apples ${kamala} kamalas:`;
  return fruit;
}

const juce=fruit(10, 9);
console.log(juce);
const sarbat=fruit(8, 9);
console.log(sarbat);


function age(birth){
    return 2023-birth;

}
const age1= age(1998);
console.log(age1);
const age2 = age1+5;
console.log(age1, age2);

const age3 = birth=>2023-birth;
const age4=age3(2000);
console.log(age4);


const yearRet = (birth, name)=> {
    const age= 2023-birth;
    const retires= 70-age;
    return `${name} retires in ${retires} year`;


}
console.log(yearRet(2000, 'malik'));


function fruitCut (fruit){
    return fruit*4;
}
function fruitPices(apple, banana){
    const appleCut = fruitCut(apple);
    const bananaCut = fruitCut(banana);
    const juce= `apple cuting ${appleCut} and banana cuting ${bananaCut}`;
    return juce;
}
console.log(fruitPices(3, 4));


function woodPices(wood){
    return 5*wood;
}
function woodCut (saguan, piasala){
    const cuting = woodPices(saguan);
    const cut = woodPices(piasala);
    const tree= `the saguan cutting ${cuting} and piasala cutting ${cut}`
    return tree;
        
    }
    console.log(woodCut(3, 4));
    

    function malik(mark){
        return mark*100;
    }
    function subjectNum(ph, math, sci, it){
        const mark1 = malik(ph); 
        const mark2 = malik(math); 
        const mark3 = malik(sci); 
        const mark4 = malik(it); 

                     
        const res= `${mark1} ${mark2} ${mark3} ${mark4}`
        return res;
    }
    console.log(subjectNum(55, 85, 65, 80));


    const mark= (m1, m2, m3)=>(m1+m2+m3)/3;
    const res= mark(20, 25, 30);
    const num= mark(10, 10, 10);
    console.log(res, num);

    if(res>=3*num){
        console.log("res will be win");
    }
    else if(res<=3*num){
        console.log("num will be win");
    }else{
        console.log("no one can be win");
    }
    


    const name=['malik', 'raju', 'panchu', 'mohan', 100, 'hal'];
    console.log(name[name.length-3]);
    name[4]='budha';
    console.log(name);
    const file=[100, 200, 'aka', name];
    console.log(file);
    

console.log(file.length);

const kk= function(years){
    return 2023-years;
}
const year= [1990, 1980, 1998, 1987];
const name1= kk(year[0]);
const name2= kk(year[1]);
const name3= kk(year[2]);
const name4= kk(year[year.length-1]);
console.log(name1, name2, name3, name4);



const name= ['malik', 'ram', 'kali'];
const newLength = name.push('raju');
console.log(newLength);
console.log(name);
name.pop();
name.pop();
console.log(name);
name.push('54');

console.log(name.includes('54'));
if(name.includes('ram')){
    console.log('he is my fri');
}else{
    console.log('another gye');
}




const bills= function(rate){
    return rate>=50 && rate<= 300 ? rate*0.5 : rate*0.2;
}
const value=[200, 125, 50];


const tip= [bills(value[0]), bills(value[1]), bills(value[2])];
console.log(value, tip);


const malik={
    firstname: 'raju',
    lastname: 'kumar',
    job:'student',
    date:  1998,
    friend: ['kumu', 'sumu', 'gumu']
};

console.log(malik);
console.log(malik.date);
const lili='name';
console.log(malik['first' + lili]);
console.log(malik['last' + lili]);
const key= prompt('malik all details availabe here just u choose and find');
console.log(malik[key]);
if (malik[key]){
    console.log(malik[key]);
}else{
    console.log('no ans');
}


console.log(`${malik.firstname} has a ${malik.friend.length} friends, and his best ${malik.friend[0]}`);
    


const malik= {
    name: 'raju',
    age: 23,
    height: 1.65,
    mass: 70,
    kalu: function(){
        return this.mesure=this.mass/this.height**2;
        return this.mesure;
    }
};

const kumar= {
    name: 'raju',
    age: 16,
    height: 1.50,
    mass: 65,
    kalu: function(){
        return this.mesure=this.mass/this.height*2;
        return this.mesure;
    }
};
malik.kalu();
kumar.kalu();
console.log(malik.mesure, kumar.mesure);


for(let rep=1; rep<=10; rep++){
    console.log(`malik is gadha ${rep}`);
}



const malik=[
     'raju',
    'kumar',
    'student',
    1998,
    ['kumu', 'sumu', 'gumu']
];
const type=[];
for(let i=0; i< malik.length; i++){
    console.log(malik[i], typeof malik[i]);
    type[i]= typeof malik[i];
}

console.log(type);




const years=[2000, 1998, 1995, 2005, 2001];
const age=[];
for(let i=0; i<years.length; i++){
    age.push(2023 - years[i]);
}
console.log(age);


console.log('----continue----');
for(let i=0; i< malik.length; i++){
    if(typeof malik[i] != 'string')continue
    console.log(malik[i]);
}

for (let i= malik.length-1; i>=0; i--){
    console.log(i, malik[i]);
}

for(let exercise=1; exercise<=5; exercise++){
    console.log(`----exercise can be created  ${exercise}`);

for(let rep=1; rep<=5; rep++){
    console.log(`exercise ${exercise}: phy, sci, math ${rep}`);
}    
}



const avgs= function(value){
    return value>50 && value<300? value*0.5: value*0.2;
}
const value=[200, 300, 300, 250, 500];
const tip=[];
const total=[];

for(let i=0; i< value.length; i++){
    const top=avgs(value[i]);
    tip.push(top);
    total.push(top+value[i]);
}
console.log(value, tip, total);


const average=function(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(average([2, 3, 4]));
console.log(average(value));
console.log(average(tip));
console.log(average(total));


const avgs=function(value){
    return value>50 && value<300? value*0.5: value*0.2;
}
const value=[214, 451, 320, 126, 245];
const tip=[];
const total=[];


for(let i=0; i<value.length; i++){
    const top=avgs(value[i]);
    tip.push(top);
    total.push(top+value[i]);
    


}
console.log(tip, total);

const average=function(malik){
    let sum = 0;
    for(let i=0; i<malik.length; i++){
        sum += malik[i];
    }
    return sum/malik.length;
}
console.log(average(tip));



const temprature= function(temp){
    let min=temp[0];
    let max=temp[0];
    for(i=0; i<temp.length; i++){
        if(temp[i]<min) min=temp[i];
    
        if(temp[i]>max) max=temp[i];
        
    }
    console.log(min, max);
    return max-min;

};
tempra=([4,24,32,51,43,-23, -26]);
const amplitude=temprature(tempra);
console.log(amplitude);




const  animal=['got', 'cat', 'rabit'];
const kk=animal.push('thekua', 'rnk');
console.log(animal);



const temprature= function(temp){
    let min=temp[0];
    let max=temp[0];
    for(i=0; i<temp.length; i++){
        if(temp[i]<min) min=temp[i];
    
        if(temp[i]>max) max=temp[i];
        
    }
    console.log(min, max);
    return max-min;

};
tempra=([4,24,32,51,43,-23, -26]);
tempra1=([-20, -27, 32, 42, -50, 39]);
tempra3=tempra.concat(tempra1);
const amplitude=temprature(tempra3);
console.log(amplitude);



const num1=[20, 30, 40];

const num2=[54, 61, 33, 21];
console.log(`...${num1[0]}°C days 1... ${num1[1]}°C days 2...and ${num1[2]} days 3...`);
const  temp=function(tmp){
    let str='';
    for(let i=0; i<tmp.length; i++){
        str=str+`${tmp[i]}°C in ${i+1} days ...`;
    }

    console.log('...'+ str);
};
temp(num1);





function malik()
{
    console.log("my self rajesh malik");
}
malik();
malik();
malik();
malik();
*/


//DATA STRUCTURE.......................................................STARTR....................



/*
const resturant={
    name: 'malik khan',
    menu: ['starter', 'maincource', 'drink'],
    starter: ['pokada', 'chili', 'kobi', 'chaomini', 'tanduri'],
    maincource: ['rice','dal', 'chiken','morten', 'rasgola'],
    drink: ['soda', 'apple', 'laci', 'bear', 'coldrink'],
openhour: {
    tues:{
        open: 10,
        close: 22,

    } ,
    wed: {
        open: 10,
        close: 22,
    },

    friday:{
        open:10,
        close:20,

    }, 
    sunday: {
        open: 9,
        close: 22,
    },

},
order: function (starterIndex, maincourceIndex){
    return [this.starter[starterIndex], this.maincource[maincourceIndex]];

},
oderDelivery: function({starterIndex, maincourceIndex, time, address}){
console.log(`oder recived ${this.starter[starterIndex]} and ${this.maincource[maincourceIndex]} in the ${address} at ${time} thank you!`);


},
};
resturant.oderDelivery({
    time: '10.30',
    address: 'jagannathpur bachhada',
    maincourceIndex: 2,
    starterIndex: 2,
});


console.log(resturant.name, resturant.starter);
console.log(resturant.openhour);
const {menu= [], starterMenu: starter=[]}=resturant;
console.log(menu, starter);
const {wed, sunday}=resturant.openhour;
console.log(wed, sunday);





let a=20;
let b=51;
 num={a: 10, b: 36, c: 25};

  if({a, b} = num){  
       ({a, b} = num);
console.log(a, b);
  }
  else{
    console.log('mlk');
  }
    



myself= {
    name: 'Rajesh Malik',
    job: 'stdent',
    hubby: ['cricket', 'dance', 'cook', 'travel'],
    language: ['odia', 'hindi', 'engligh'],
    computer: ['c', 'c++', 'JavaScript', 'python'],
    studyhour:{
        mon:{
            morning: '9-12',
            afternoon: '14-17',
            night: '19-1',
        },
        tues:{
            morning: '11-13',
            afternoon: '14-17',
            night: '20-2',
        },
        wed:{
            morning: '8-12',
            afternoon: '13-17',
            night: '18-1',
        },
        thers:{
            morning: '9-12',
            afternoon: '14-17',
            night: '19-1',
        },
        fri:{
            morning: '10-12',
            afternoon: '14-18',
            night: '20-3',
        },
        suter:{
            morning: '9-12',
            afternoon: '14-17',
            night: '19-1',
        },
        sun:{
            morning: '12-15',
            afternoon: '18-20',
            night: '22-2',
        },
        
        
    },
    interview: function(hubbyIndex, computerIndex){
        return [this.hubby[hubbyIndex], this.computer[computerIndex]];

    },
    summury: function({hubbyIndex, computerIndex, name, food, address, contact}){
        console.log(`My self ${this.name} from ${address} and i have ${this.hubby[hubbyIndex]} and knowlge of ${this.computer[computerIndex]} and i have foody of ${food} and u can contact me through ${contact}`);
   
        console.log(myself.studyhour);
        const {mon, sun}=myself.studyhour;
        console.log({mon, sun});
    },

    langu: function(lang1, lang2, lang3){
        console.log(`here is extra language ${lang1}, ${lang2}, ${lang3}`);
    }
};
myself.summury({
    food: ['chiken', 'egg', 'rice', 'veg'],
    address: 'at/po-jagannathpur bachada, ps-basudevpur, dist-bhadrak, pin-756125',
    contact: '8458097735',
    hubbyIndex: 2,
    computerIndex: 2,
});



const arr=[12, 20, 35, 24];
const manu=[11, 45, arr[0], arr[2]];
console.log(manu);
const kk=[11, 45,...arr];
console.log(kk);


const newcomputer=[...myself.computer, 'java', 'node'];
console.log(newcomputer);


const str='malik';
const letters= [...str];
console.log(letters);

const ingreant=[prompt("let\' make langu ingreant1?"),
prompt('ingreant2?'),
prompt('ingreant3?'),
];
console.log(ingreant);
//myself.langu(ingreant[0], ingreant[1], ingreant[2]);
myself.langu(...ingreant);


var light='orang';
switch(light){
  case 'green':
   console.log("you can drive");
  break;

  case 'orange':
   console.log("drive slow");
   break;

    case 'red':
   console.log("not driving");
    break;
default:
    console.log("this is not a trafic area");
}




var light="green";
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}
for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}



var name='malik';
for(i=0; i<5; i++){
    var style="font-size=60px; background: pink; color:red; border-radious:20px; border: 1px solid blue;" ;
    console.log("%c"+name[i], style );
}



var i=0;
var j=0;

for (i = 0; i < 2; i++) {
    for(j=0; j<3; j++){
    console.log("Hello");
    
}
}



function malik(ar){
    for(var i=0; i<ar.length; i++){
        if(ar[i]=='egg'){
            console.log(i*100, 'kobi');
        }else{
            console.log(i*100, ar[i]);
        }
}
}
var kukur=["egg", "chiken", "panner", "rice"];
malik(kukur);






var clothes = [];
  clothes.push('gray t-shirt');
  clothes.push('green scarf');
  clothes.pop();
  clothes.push('slippers');
  clothes.pop();
  clothes.push('boots');
  clothes.push('old jeans');


//error detectin

  var food;
  console.log(food);


  function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")



function letterFinder(word, match){
    var condition1= typeof(word) == 'string' && word.length >= 2;
    var condition2= typeof(word) == 'string' && match.length >= 1;
    if(condition1 && condition2){
        for(i=0; i<word.length; i++){
            if(word[i]==match){
                console.log('Found the', match, 'at', i);
            }else{
                console.log('---No match found at', i);
            }

            }
        }else{
            console.log('Please pass correct arguments to the function.');
        }
    }

letterFinder([], [])
letterFinder("cat", "c")


var result='null';
console.log(result);



try{
    throw new error()
    console.log("hello");
}

catch(err){
    console.log("by");
}

var x;
if(x===null){
    console.log("null");


}else if(x===undefined){
    console.log("undefined")
}else{
    console.log("ok");
}

var malik={
    well:2,
    start: function(){

    },
stop: function(){

}
};


function add(a,b){
    console.log(a+b);
}
add(3, "5");



 var result;
 console.log(result);


var amount=100;
var rate=1.2;
function Interest(malik){
    return 100*1.2;
}
raju=Interest(amount, rate);
console.log(raju);

function malik(val){
    console.log(val);
    return val*2;
}
kk=malik(5);
console.log(kk)




function rr(d){
    return{
        prop:d
    }
}

s=rr(20);
console.log(s);




let jk=5;
function ss(){
    console.log(jk);
    jk=jk-1;
    if(jk===0)return;
    ss();
}
ss();


function litu(mph, h){
    return mph*h;
}
var mph=50;
var h=5;
gg=litu(mph, h);
console.log(gg);


var malik={
    kk: true,
    nap: function(){
        this.kk= false
    }
}
console.log(malik.kk)
malik.nap()
console.log(malik.kk)



var localVar=77;
function scope(){
    var focalVar=88;
}
console.log(focalVar);



function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);

function two(){
    return 2;
}
function one(){
    return 1;
}
function cal(ini, cal){
    return ini()+cal()+cal();
}
console.log(cal(two, one));



const fact=(n)=>{
    if(n==0){
        return 1;
    }else{
        return n*fact(n-1);
    }
}
console.log(fact(10));


*/


/*
var sho=500;
var tax=1.5;
function malik(sho, tax){
   return  sho*tax;

}
kk=malik(sho, tax);
console.log(kk);



var dd1={
    shi:200,
    tex:2.2,
    total: function(){
       var sale=this.shi*this.tex;
        console.log('total', sale);

    }
}
dd1.total();

var dd2={
    shi:500,
    tex:2.2,
    total: function(){
       var sale=this.shi*this.tex;
        console.log('total', sale);

    }
}
dd2.total();








class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"







var bird={
    flying: true,
    wings: true,
    eat:true
}
var parrote= Object.create(bird);
console.log("parrote:", parrote);
console.log("parrote has wings:", parrote.flying);
console.log("parrote can fly: ", parrote.wings);
console.log("parrote can eat:", parrote.eat);
var eggle=Object.create(bird);
console.log("eggle can flying:", eggle.flying);
 var penguin=Object.create(bird);
 penguin.flying=false;
 console.log("penguin can be flying:", penguin.flying);
 console.log("penguin can be eat:", penguin.eat);
 console.log("penguin can be wings:", penguin.wings);
*/
/*
 // Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontsize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontsize};`
    console.log(message, style);
  


    
}
consoleStyler('#1d5c63', '#ede6db', '40px',  'Congrats!')
// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontstyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
         console.log("%cHappy birthday", fontstyle);     
    } else if (reason == "champions") {
        console.log("%cCongrats on the title!", fontstyle);
        
    } else {
        console.log(message, style);
        
    }
    
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler( '#1d5c63', '#ede6db', '40px',  'Congrats!');
celebrateStyler('birthday');


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontsize, txt,reason) {
    consoleStyler( color, background, fontsize, txt);
celebrateStyler(reason);
    
}

// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
*/

/*
class malik{
    constructor(num1, num2, num3, string1, bol1){
        this.num1=num1;
        this.num2=num2;
        this.num3=num3;
        this.string1=string1;
        this.bol1=bol1;

    }
    hari(){
        if(this.bol1){
            console.log(this.string1, this.num1+this.num2+this.num3);
            return;
        }
        return "the value1 of bol1 incorect";
    }

}
var kk=new malik(1,2,3,false);
kk.hari();
*/
/*
class NoDefaultParams {
    constructor(num1=5, num2=2, num3=13, string1='rr', bool1=true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams();
fail.calculate(); // 'The value of bool1 is incorrect'
*/
/*
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
*/
/*
class animal{
    constructor(color='red', energy=100){
        this.color=color;
        this.energy=energy;
    }
    isActive(){
        if(this.energy>0){
            this.energy -= 20;
            console.log('energy is decreasing, currently at:', this.energy)
        }else if(this.energy==0){
            this.sleep();

        }
    }
    sleep(){
        this.energy += 20;
        console.log('energy is increasing, curently at:', this.energy)
        }
        getcolor(){
            console.log(this.color)
        }
}


class cat extends animal{
    constructor(sound='purr', jump=true, climb=true, color, energy){
        super(color, energy);
        this.sound=sound;
        this.climb=climb;
        this.jump=jump;
    }
       makesound(){
        console.log(this.sound);
       } 
}

class bird extends animal{
    constructor (sound='chirp', fly=true, color, energy){
        super(color, energy);
        this.sound=sound;
        this.fly=fly;
    }
    makesound(){
        console.log(this.sound);

    }
}
class housecat extends cat{
    constructor(houswcatsound='miao', sound, jump, climb, color, energy){
        super(sound, jump, climb, color, energy);
        this.housecatsound=housecatsound;
    }
    makesound(option){
        if(option){
            super.makesound();
        }
        console.log(this.housecatsound);
    }
}

class tiger extends cat{
    constructor(tigersound='roar!', sound, jump, energy){
        super(sound, jump, climb, color, energy);
        this.tigersound=tigersound;
    }
    makesound(option){
        if(option){
            super.makesound();
            
        }
         
            
        console.log(this.tigersound);
    }
}

class parrot extends bird{
    constructor(talk='false', sound='chir', fly, color='red', energy=40){
        super(sound, fly, color, energy);
        this.talk=talk;

    }
    makesound(option){
        if(option){
            super.makesound();
        }
        if(this.talk){
            console.log("i'am a talking parrot");
        }
    }
}

var malik=new parrot(true);
var kumar=new parrot(false);
kumar.sound;
malik.makesound();
kumar.makesound();
malik.color;
malik.energy;
kumar.color;
kumar.energy;

malik.isActive();


var penguin = new bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

*/

/*

class Animal {
    constructor(color = 'yellow', energy = 0) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!



*/



/*
// Task 1: Code a Person class
class Person{
    constructor(name="Tom", age=20, energy=100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
       
            this.energy += 10;
            console.log('Energy is increasing due to sleeping, currently at:', this.energy);
        
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log('Energy is decreasing, currently at:', this.energy);
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(xp, hourlyWage);
        this.name = name;
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log('xp value is increasing, currently at:', this.xp);
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    const inter1 = new Worker('Bob', 21, 110, 0, 10)
    inter1.goToWork()
    return inter1
}
console.log(intern())


// Task 4: Code a manager object, methods
function manager() {
     const manager1 = new Worker('Alice', 30, 120, 100, 30)
    manager1.doSomethingFun()
    return manager1
}
console.log(manager())
    
*/

/*

class kake{
    constructor(lyr){
        this.layer=lyr+1;
    }
    
}
var malik= new kake(1)
console.log(malik.layer);



class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);


class animal{

}
class cat extends animal{
    constructor(){
        super();
        this.noise='meo';
    }
}
var res= new animal();
console.log(res.noise);


class Person{
    sayhello(){
        console.log("hello");
    }
}
class friend extends Person{
    sayhello(){
        console.log("hi");
    }

}
var result= new friend();
result.sayhello();


*/
/*
const Malik={
    name: 'rajesh',
    job:'student',
    date:25,

}
console.log(Object.entries(Malik));


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}



// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(){
    for (i = 0; i< dairy.length; i++){
        console.log(dairy[i]);
    }
}
logDairy();
// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key of Object.keys(bird) ) {
        console.log(key + ":" + " " + bird[key]);
    }
}
birdCan();


// Task 3
const animal1 = {
    canJump: true
};
var bird1 = Object.create(animal1);
bird1.canFly = true;
bird1.hasFeathers = true;

function animalCan() {
    for (const prop in bird1 ) {
        console.log(prop + ":" + " " + bird1[prop]);
    }
}
animalCan();



const kk=['angur', 'pipe', 'apple', 'rasun']
function malik(kk1, rr1){
    console.log(`${rr1}.${kk1}`);

}
kk.forEach(malik);


const gg=[10,20,30,40,50,60,70,80]
gg.filter(function(gg1){
    return (gg1>40);

})
let sum=0;
for(i=0; i<gg.length; i++){
    sum += gg[i];

}
//kishor= sum/gg.length;
console.log(sum/gg.length);



const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
    
console.log(${nums})
});

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

*/

/*
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)


const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array



const fruits1= ['apple', 'pear', 'plum']
const berries1= ['blueberry', 'strawberry']
 // concatenate
fruits1.pop()

console.log( fruits1, "Not" , berries1); // outputs a single array



function count(...malik){
   console.log(malik.length)

}
count(10,9,8,7,6,5);


var kk={
    price:10,
    date:22
};
let ss={...kk};
ss.date -= kk.price;
console.log(ss.date)







var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})

*/

/*


'{"color":"red"}'
const vv='{"color":"red"}'
JSON.parse(vv)
const aPlainObj=JSON.parse(vv)
console.log(aPlainObj);
aPlainObj.gretting="hi";
console.log(aPlainObj);

var h1=document.querySelector('h1')

var arr=[
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]
function handleClicks(){
    switch( h1.innerText){
        case arr[0]:
        h1.innerText=arr[1]
        break
          case arr[1]:
        h1.innerText=arr[2]
        break
          case arr[2]:
        h1.innerText=arr[3]
        default:
           h1.innerText=arr[0]  
        
    }
   
}
h1.addEventListener("click", handleClicks);
console.log(document)
*/

/*

function malik(){
    var y=10;
    console.log(x);
}
var x=33;
malik();



class kk{
    constructor (lyr){
        this.layers=lyr;
    }
    getlayers(){
        return this.layers;
    }


}
class mkk extends kk{
    constructor(){
        super(2);
    }
    getlayers(){
        return super.getlayers()*5;
}
}
var result=new mkk();
console.log(result.getlayers());



function ss(val){
    return val+5;
}
module.export=ss;

*/

// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
    let finalPrice = "";
    let name = dishData[i].name;
    let price = dishData[i].price;

    if (taxBoolean === true) {
      finalPrice = price * tax;
    } else if (taxBoolean === false) {
      finalPrice = price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log(`Dish: ${name} Price: $${finalPrice}`);
  }
}
// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  try {
    if (typeof guests === "number" && guests > 0 && guests < 30) {
      let discount = 0;

      if (guests < 5) {
        discount = 5;
      } else if (guests >= 5) {
        discount = 10;
      }
      console.log("Discount is: $" + discount);
    } else {
      console.log("The second argument must be a number between 0 and 30");
    }
  } catch (error) {
      console.log(error);
  }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
    



var x=true;
x=23;
console.log(x);

var result=0;
var i=0;
var limit=3;
while(i<limit){
    result += 2;
    i++;
}
console.log(result);




function add(a,b){
    return a+b

}
add(5, "10");



