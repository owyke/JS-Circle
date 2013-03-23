/**
 * Created with IntelliJ IDEA.
 * User: wykeosk
 * Date: 2013-03-23
 * Time: 10:51
 * To change this template use File | Settings | File Templates.
 */

function Post(person, number) {
    var num = number;
    this.person = person;
    this.number = number;

    this.getNum = function() {
        return num;
    }
}




function AddressBook() {

    var records = [];

    this.addPost = function(postToAdd) {
        records.push(postToAdd);
    }


    this.getRecords = function() {
        return records;
    }

}