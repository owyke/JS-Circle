/**
 * Created with IntelliJ IDEA.
 * User: wykeosk
 * Date: 2013-03-23
 * Time: 10:34
 * To change this template use File | Settings | File Templates.
 */


load("readFix.js")
load("model/model.js")



tele = (function(oldTele){
    var addressBook = new tele.AddressBook();

    oldTele.run = function() {
        var choice;
        var subChoice;
        var numberOfEntries;

        while(choice !== "0") {
            numberOfEntries = addressBook.getEntries().length;
            choice = -1;
            subChoice = -1;

            renderMenu();
            var choice = read("Make your selection: ").toUpperCase();

            switch(choice) {
                case "1":
                    var post = getNewEntry();
                    addressBook.addEntry(post);
                    break;
                case "2":
                    if(numberOfEntries < 1){
                        println("No entries to display.");
                        pressEnter();
                        break;
                    }
                    printRecords(addressBook.getEntries());
                    pressEnter();
                    break;
                case "3":
                    if(numberOfEntries < 1){
                        println("No entries to update.");
                        pressEnter();
                        break;
                    }
                    printRecords(addressBook.getEntries());
                    while(subChoice == "" || !(subChoice >= 0 && subChoice <= numberOfEntries)) {
                        subChoice = read("Choose entry to update (0 to cancel): ");
                    }
                    if(subChoice !== "0") {
                        var updatedEntry = getUpdatedEntry(addressBook.getEntry(subChoice));
                        addressBook.updateEntry(subChoice, updatedEntry);
                    }

                    break;
                case "4":
                    if(numberOfEntries < 1){
                        println("No entries to delete.");
                        pressEnter();
                        break;
                    }
                    printRecords(addressBook.getEntries());
                    while(!(subChoice >= 0 && subChoice <= numberOfEntries)) {
                        subChoice = read("Choose entry to delete (0 to cancel): ");
                    }
                    if(subChoice != 0) {
                        addressBook.removeEntry(subChoice);
                    }
                    break;
                case "T":
                    tele.addTestEntries(addressBook);
                    break;
                default:
                    //for (item in this) {println("   "+item+": "+this[item]);}
            }
        }
    }
    return oldTele;
}(tele));

tele.run();




function renderMenu() {
    clearScreen();
    println("1. Add post");
    println("2. List all entries");
    println("3. Update entry");
    println("4. Delete entry")
    println("");
    println("0. Exit program");
}

function getNewEntry() {

    clearScreen();
    var types =  ["E","P","M"];
    var name = read("Enter name name: ");
    var contactInfo = read("Enter contact info: ");
    var contactType = getContactType();

    return new tele.Entry(name, contactType, contactInfo);
}



function getContactType() {
    var types =  ["E","H","M"];
    var contactType;

    println("Allowed contact types: ");

    for(var i = 0; i < types.length; i++)
    {
        println(types[i] + " -> " + tele.allowedContactTypes[types[i]]);
    }

    while(!isValidContactType(contactType)) {
        var contactType = read("Enter contact type: ");
    }
    return contactType;
}


function isValidContactType(type) {
    for(key in tele.allowedContactTypes) {
        if(key == type) {
            return true;
        }
    }
    return false;
}

function pressEnter() {
    read("Enter to continue...")
}

function printRecords(entries) {
    clearScreen();
    for(var i = 0; i < entries.length; i++) {
        println("Entry " +  (i+1));
        println(entries[i]);
        println("");
    }
}

function getUpdatedEntry(oldEntry) {
    println("Enter the new values, or just press enter to keep the old value (shown in brackets): ")
    var newContactType;
    var newName = read("Name [" + oldEntry.name +"]") || oldEntry.name;
    var newInfo = read("Contact info [" + oldEntry.info +"]") || oldEntry.info;
    if(newInfo != oldEntry.info) {
        newContactType = getContactType();
    }
    else {
        newContactType = oldEntry.type;
    }
    return new tele.Entry(newName, newContactType, newInfo);
}

function clearScreen() {
        println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")

}