console.log("task 6");
console.log('********************');
if (false) {
    let studentNames = ['Renat', 'Rubin', 'Barry', 'Shone', 'Shlomi'];

    let studentF = false;

    while (studentF === false) {
        let findStudentName = prompt('Enter student name for search:');
        for (let i = 0; i < studentNames.length; i++) {
            var studentName = studentNames[i];
            if (studentName === findStudentName) {
                studentF = true;
                break;
            }
        }
    }
    console.log("Student " + studentName + " is in list");
}
console.log('********************');