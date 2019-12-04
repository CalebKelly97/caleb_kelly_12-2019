
var list1 = { 
    names: ["Matt Johnson", "Bart Paden", "Ryan Doss", "Michael Spangler"]
}

var list2 = {
    names: ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"]
}

var clicked = false;

function uniqueNames() {

    var names = [];
    if(clicked) {
        alert("This has already been clicked");
    } else {

    for (var name of list1.names) {
        names.push(name);
    }

    for (var name of list2.names) {
        if(names.indexOf(name) === -1) {
            names.push(name);
        }
    }



    console.log(names);

    createUniqueList(names);

    clicked = true;
    }
}

function createUniqueList(names) {

    var listNode = document.getElementById('name-list')

    for(var name of names) {
        var liNode = document.createElement('li'),            
            txtNode = document.createTextNode(name);
        

        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);        
    }
}