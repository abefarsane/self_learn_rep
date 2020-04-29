var list = [];
var res = prompt("What do you want to do?");

while(res != 'quit'){
    if(res === 'new'){
        list.push(prompt("Add some todo:"));
    }else if(res === "delete"){
        console.
        list.splice(Number(prompt("Insert the index of the todo to delete:")));
    }else (res === 'list'){
        console.log(list);
    }

    res = prompt('What do you want to do now?');
}

