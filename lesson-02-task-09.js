console.log("task 9")
console.log('********************');


if (false) {
    var triangleSize;

    while (isNaN(triangleSize) || typeof triangleSize !== 'number' || triangleSize <= 0) {
        triangleSize = parseInt(prompt('Enter the middle line of the triangle (a positive number):'));
    }

    for (var i = 1; i <= triangleSize; i++) {
        var line = '';
        for (var j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }

    for (var i = triangleSize - 1; i >= 1; i--) {
        var line = '';
        for (var j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}