const num = 50;

if(num < 49){
    console.log("Error");
} else if (num > 100){
    console.log("Много!");
}else{
    console.log("OK!");
}

(num === 50) ? console.log("OK!") : console.log("Error!");

switch (num){
    case 50:
        console.log("Гуд!");
        break;
    case 100:
        console.log("Неверно!");
        break;
    default:
        console.log("Дефоолт!");
        break;
}

for (let i = 1; i<10; i++)
{
    if (i===6){
        break;
    }        

    console.log(i);
}