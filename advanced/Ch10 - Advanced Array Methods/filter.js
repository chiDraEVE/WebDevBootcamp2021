function filter(array, callback) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}