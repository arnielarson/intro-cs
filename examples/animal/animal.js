
/*
    Javascript constroctor syntax  
    The programmer has to use the *new* keyword to make a new Animal object
*/ 
function Animal(name, type){
    this.name = name;    
    this.type = type;
    
    this.getName = function() {
        return "Hi: My name is " + name + " and I'm a " + type;
    };
}


/*
    Literal objects
    This object is global - and can be used and changed by the program.
    This object can also be recreated.
*/
var Plant = {
    name : "", 
    type : "",
    
    getName : function() {
        return "Hi: My name is " + this.name + " and I'm a " + this.type;
    }
}


function createAnimal() {
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    // only create an animal if the name and type are inputed:
    if (name.length==0) {
        alert('Your animal must have a name!');
        updateLabel("Not an animal");
        updateOutput("?");
        return;
    }
    if (type.length==0) {
        alert('Your animal must have a type!');
        updateLabel("Not an animal");
        updateOutput("?");
        return;
    }


    var animal = new Animal(name,type);

    // Write animals's name and type in HTML
    updateOutput(animal.getName());
    updateLabel("You created an animal!")
}

function createPlant() {
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    
    // only create a plant if the name and type are inputed:
    if (name.length==0) {
        alert('Your plant must have a name!');
        updateLabel("Not a plant");
        updateOutput("?");
        return;
    }
    if (type.length==0) {
        alert('Your plant must have a type!');
        updateLabel("Not a plant");
        updateOutput("?");
        return;
    }

    var plant = Object.create(Plant);
    plant.name=name;
    plant.type=type;

    // Write plant's name and type in HTML
    updateOutput(plant.getName());
    updateLabel("You created a plant!");
    
}


function updateOutput(output) {
    var o = document.getElementById("output");
    o.textContent=output;
}

function updateLabel(label) {
    var p = document.getElementById("label");
    p.textContent=label;
}
