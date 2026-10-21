const student = {
    name: 'Alex',
    marks: []
}

if (student.marks.length === 0) {
    console.log(`Average number of marks for ${student.name} is 0`);
}

function calculateAverage(marks) {
    let total = 0;
    for (let m of marks) {
        total += m;
    }
    return total / marks.length;
}

console.log(`Average marks of ${student.name}: ${calculateAverage(student.marks)}`);