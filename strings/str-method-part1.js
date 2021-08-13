const message = "Hello world, my name is Code";
console.log(message);

/* method - indexOf()
    - returns the position of the first ocurrence of a specified value in a string.
    - OJO: returns -1.
    - OJO: is case sensitive.
*/
function getPositionMessage(pst, start = 0) {
    const get_indexOf = message.indexOf(pst, start);

    if (get_indexOf === -1) {
        console.error('-1 : value not found');
    } else {
        console.log(`letter '${pst}', position ${get_indexOf}"`);
    }
}
// -getPositionMessage("i");
// -getPositionMessage("name");

/* method - lastIndexOf()
    - return the index within the calling String object of the las occurrence of the specified value (searching )
*/
function getLastPostionMessage(searchValue) {
    const _getSearchValue = message.lastIndexOf(searchValue);
    if (_getSearchValue === -1) {
        console.error(' -1 : value not found');
    } else {
        console.log(`word or letter '${searchValue}', last Position ${_getSearchValue}`)
    }
}
getPositionMessage('d');
getLastPostionMessage('d');

/*
*/