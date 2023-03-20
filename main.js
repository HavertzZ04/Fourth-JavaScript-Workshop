
let menus = "";
menus += "1. Data reading\n";
menus += "2. Create object\n";
menus += "3. Show object\n";
menus += "4. Create Array\n";

let option = prompt(menus);

//Functions
function one(){
    do {
        let text = prompt("Say something: ")
        alert(text);
    }
    while(confirm("want to continue?"));
    option
}


function two(){
    do {
        let object = {};
        object.value = prompt("Write a value: ");
        return object
    }
    while(confirm("want to continue?"));
}


function three(){
    if(alertTwo === ""){
        alert("There is not a object created, press OKEY to create a new one");
        if(1 === 1){
            two();
        }
    } else {
        alert(`The object was created, its key is "${key}" and its value is "${value}"`);
    }
}






switch (option) {
    case "0":
        break;
    case "1":
        one();
        break;
    case "2":
        two();
        break;
    case "3":
        three();
        break;
    case "4":
        four();
        break;
    case "5":
        five();
        break;
    case "6":
        six();
        break;
    case "7":
        seven();
        break;
    case "8":
        nine();
        break;
    case "9":
        ten();
        break;
    case "10":
        eleven();
        break;
    case "11":
        twelve();
        break;
    case "12":
        thirteen();
        break;
    case "13":
        three();
        break;
    case "14":
        fourteen();
        break;
    case "15":
        fifteen();
        break;
}   