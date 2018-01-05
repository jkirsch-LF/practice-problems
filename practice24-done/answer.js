var array1 = [ [1,2,3], [3,4,5], [6,7,8] ];
var array2 = [ [1,2,3], [1,2,3], [1,2,3] ];

function matrix_add(array1, array2) {
    var newArray = new Array(array1.length);
    for (var i = 0; i < array1.length; i++) {
        newArray[i] = new Array(array1[i].length);
        for (var j = 0; j < array1[i].length; j++) {
            newArray[i][j] = array1[i][j] + array2[i][j];
        }
    }
    return newArray;
}

output = matrix_add(array1,array2);
console.log(output);