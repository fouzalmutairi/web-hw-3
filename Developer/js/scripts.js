const languages=["html","css","javascript" ,"php","swift","java"];
const needed_language=3;
console.log("مرحبا بك  في برنامج المبرمجين");


let name = prompt("ما اسمك؟");
let age = parse(prompt(" كم عمرك؟"));
let experience=parseInt(prompt("كم عدد سنوات الخبره؟"));

console.log(":لغات البرمجه");
console.log("1."+languages[0]);
console.log("2."+languages[1]);
console.log("3."+languages[2]);
console.log("4."+languages[3]);
console.log("5."+languages[4]);
console.log("6."+languages[5]);
for(let i=1;i<=languages.length;i++){
    console.log(i+"."+languages[i-1]);
}

let skilll=prompt("اختر اللغه");
let skilll2=prompt("اختر لغه اخرى");

if(
    age>25&&
    age<40&&
    experience>3&&
    (skilll==needed_language||skill2==needed_language)
){
        console.log("مقبول");

    } else{
        console.log("مرفوض");
    }
    
function logger(temperatures){
    for(let i=0;i< temperatures.length;i++){
        console.log(temperatures[i]);
    }
}
function tocel (temperatures){
    for(let i = 0;i<temperatures.length;i++){
        result_array.push(parseint((temperatures[i]-32)*(5/9)));
    }
    return result_array;
    }

function hottesdays(temperatures,min_value){
    for (let i=0;i<temperatures.length;i++){
        if(temperatures[i]>min_value){
            hottesdays.push(temperatures[i]);
            }
        }
        return hot;
    }


    let feh_temp_array=[32,70,99,106];
    let thresshold=70;
    let hot =[];
    let result_array=[];
    function loghottesdays(input_array,min_value){
        logger (tocel (hottesdays(input_array,min_value)));
    }
    loghottesdays (feh_temp_array,thresshold);
