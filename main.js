
let menus = "";
menus += "1. Data reading\n";
menus += "2. Create object\n";
menus += "3. Show object\n";
menus += "4. Create Array\n";
menus += "5. Show the Array\n";
menus += "6. Delete the first element from the Array\n";
menus += "7. Delete the last element from the Array\n";
menus += "8. Delete any element form the Array\n";
menus += "9. Add an element at the beginning of the Array\n";
menus += "10. Add the element at the end of the Array\n";
menus += "11. Create an Array with Objects\n";
menus += "12. Iterate Array with Objects using FOR\n";
menus += "13. Iterate Array with Objects using ForEach\n";
menus += "14. Iterate Array with Objects using Map and create a copy\n"
menus += "15. Personal process\n"
menus += "0. Exit"


let option = prompt(menus);

//Functions
function one(){
    do {
        let text = prompt("Write something: ")
        alert(text);
    }
    while(confirm("want to continue?"));
}



function two(){
    objectValue = prompt("Write the name of the value");

    finalObject = {
        objectKey : objectValue
    };
    console.log(finalObject);
    alert(`The object was created, its value is "${objectValue}"`);

}

//Fix the bug regarting to print the result several times when it was created
function three(){
    if(objectValue === ""){
        alert("There is not a object created, press OKEY to create a new one");
        if(1 === 1){
            two();
        }
    } else {
        alert(`The object was created, its value is "${objectValue}"`);
    }
}

let list = [];
function four(){
    do {
        list.push(prompt("Add a value for your array: "));
    } while (confirm("Wanna add more values to the array? "));

    alert(`The array was created and this one has ${list.length} elements`)
}


//Fix the bug regarting to print the result several times when it was created
function five(){
    if(list.length === 0){
        alert("There is not an Array created, press OKEY to create a new one");
        if(1 === 1){
            four();
        }
    }else {
        alert(`The array created has ${list.length} elements and these ones are: [${list}]`)

    }
}

let arrayFirstDel = "";
function six(){

    if(list.length === 0){
        alert("There is not an Array created, press OKEY to create a new one");
        if(1 === 1){
            four();
        } 
    }else {
    arrayFirstDel = list.shift();
    alert(`The element ${arrayFirstDel} was deleted from the array, now I will show you the current elements: [${list}]`);
    }

}

let arrayLastDel = "";
function seven(){

    if(list.length === 0){
        alert("There is not an Array created, press OKEY to create a new one");
        if(1 === 1){
            four();
        } 
    }else {
        arrayLastDel = list.pop();
        alert(`The element ${arrayLastDel} was deleted from the array, now I will show you the current elements: [${list}]`);
    }
}

function eight() {
    if(list.length === 0){
        alert("There is not an Array created, press OKEY to create a new one");
        if(1 === 1){
            four();
        }
    }else {
        let randomElement = Math.floor(Math.random()* list.length);
        alert(`The random element ${list.splice(randomElement, 1)} was deleted from the array, now I will show you the current elements: [${list}]`)
    } 
}

function nine() {
    if(list.length === 0){
        alert("There is not an Array created, press OKEY to create a new one");
        if(1 === 1){
            four();
        }
    }else {
        addElement = prompt("Give me an element to at the begining of the array: ");
        list.unshift(addElement);
        alert(`The element: ${addElement} was added at the begining of the array, now I will show you the current elements: [${list}]`)
        
    }
}

function ten() {
    if(list.length === 0){
        alert("There is not an Array created, press OKEY to create a new one");
        if(1 === 1){
            four();
        }
    }else {
        addElement = prompt("Give me an element to at the end of the array: ");
        list.push(addElement);
        alert(`The element: ${addElement} was added at the end of the array, now I will show you the current elements: [${list}]`)
    }
}

function eleven() {
    let objType = "";
    let objKeys = [];
    while (objType !== "exit") {
        objType = prompt("Enter object type ('exit' to quit):");
        if (objType === "exit") {
            break;
        }
        objKeys = prompt("Enter object keys separated by commas without space:").split(",");
        const newObject = {};
        objKeys.forEach((key) => {
            const value = prompt(`Enter ${key} value:`);
            newObject[key] = value;
        });
        arrayOfObjects.push({ type: objType, data: newObject });
    }
}

function twelve() {
    console.log("Array of Objects:");
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`Object ${i}: ${arrayOfObjects[i].type}`);
        const keys = Object.keys(arrayOfObjects[i].data);
        for (let j = 0; j < keys.length; j++) {
            console.log(`  ${keys[j]}: ${arrayOfObjects[i].data[keys[j]]}`);
        }
    }
}

function thirteen() {
    console.log("Array of Objects:");
    arrayOfObjects.forEach((obj, index) => {
        console.log(`Object ${index}: ${obj.type}`);
        Object.keys(obj.data).forEach((key) => {
            console.log(`  ${key}: ${obj.data[key]}`);
        });
    });
}

function fourteen() {
    const mArray = arrayOfObjects.map((obj, index) => {
        const newObj = {};
        newObj["Type"] = obj.type;
        Object.keys(obj.data).forEach((key) => {
            newObj[key] = obj.data[key];
        });
        return newObj;
    });
    console.log("Mapped Array of Objects:");
    console.log(mArray);
}

function fifteen() {
    console.log("The secret of the krabby patty is... ");
}




//This is part of the second function
let objectValue = "";
let finalObject = {};

let addElement = "";



switch (option) {
    case "0":
        prompt(menus);
    case "1":
        one();
        prompt(menus);
    case "2":
        two();
        prompt(menus);
    case "3":
        three();
        prompt(menus);
    case "4":
        four();
        prompt(menus);
    case "5":
        five();
        prompt(menus);
    case "6":
        six();
        prompt(menus);
    case "7":
        seven();
        prompt(menus);
    case "8":
        eight();
        prompt(menus);
    case "9":
        nine();
        prompt(menus);
    case "10":
        ten();
        prompt(menus);
    case "11":
        eleven();
        prompt(menus);
    case "12":
        twelve();
        prompt(menus);
    case "13":
        thirteen();
        prompt(menus);
    case "14":
        fourteen();
        prompt(menus);
    case "15":
        fifteen();
        prompt(menus);
}   
