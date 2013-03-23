/**
 * Created with IntelliJ IDEA.
 * User: wykeosk
 * Date: 2013-03-23
 * Time: 10:34
 * To change this template use File | Settings | File Templates.
 */


load("readFix.js")
load("model/model.js")

var addressBook = new AddressBook();


var choice;

while(choice != 0) {
    renderMenu();

    var choice = read("Make your selection: ");

    switch(choice) {
        case "1":
            var post = getNewPostDialog();
            addressBook.addPost(post);
            break;
        case "2":
            printRecords(addressBook.getRecords());
            break;
        default:
            println ("Def")
    }
}





function renderMenu() {
    clearScreen();
    println("1. Add post");
    println("2. List all posts");
    println("");
    println("0. Exit program");
}

function getNewPostDialog() {

    clearScreen();
    return new Post(read("Name: "),read("Number: "));
}

function pressEnter() {
    read("Enter to continue...")
}
function printRecords(entries) {
    clearScreen();
    for(var i = 0; i < entries.length; i++) {
        println("Entry " +  i+1);
        println("Name " + entries[i].person);
        println("");
    }
    pressEnter();
}


function clearScreen() {
    for(var i = 0; i < 30; i++)
    {
        println("")
    }
}