/**
 * Created with IntelliJ IDEA.
 * User: wykeosk
 * Date: 2013-03-23
 * Time: 10:51
 * To change this template use File | Settings | File Templates.
 */
var tele = (function (){

    var my = {};

    my.allowedContactTypes = {   "E" : "Email",
                                        "H" : "Home",
                                        "M" : "Mobile"};

    my.Entry = function (name, type, info) {
        this.name = name;
        this.type = type;
        this.info = info;
        this.tags = [];

        this.toString = function() {
            return "Name: " + this.name +" \n" + my.allowedContactTypes[this.type]+": " + this.info;

        }


    }

    my.AddressBook = function() {

        var entries = [];

        this.addEntry = function(entryToAdd) {
            entries.push(entryToAdd);
        }


        this.getEntries = function() {
            return entries.clone();
        }

        this.getEntry = function(entryNumber) {
            return entries[entryNumber-1];
        }

        this.removeEntry = function(entryNumber) {
            entries.splice(entryNumber-1,1);
        }

        this.updateEntry = function(entryNumber, updateEntry) {
            entries[entryNumber-1] = updateEntry;
        }

    }

    my.addTestEntries = function (addressBook) {
        addressBook.addEntry(new tele.Entry("Oskar Wyke", "E", "oskar@wyke.it"))
        addressBook.addEntry(new tele.Entry("Palle Pucksnok", "H", "021-301315"))
        addressBook.addEntry(new tele.Entry("Pansar Patrik", "M", "073-6526176"))
    }

    return my;
}());






Object.prototype.clone = function() {
    var myObj = (this instanceof Array) ? [] : {};
    for (i in this) {
        if (i != 'clone') {
            if (this[i] && typeof this[i] == "object") {
                myObj[i] = this[i].clone();
            } else
                myObj[i] = this[i];
        }
    }
    return myObj;
};