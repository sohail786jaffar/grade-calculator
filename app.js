function gradecal(percentage) {
    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}

function calculateGrade() {
    let english = parseInt(document.getElementById("english").value) || 0;                   
    let math = parseInt(document.getElementById("maths").value) || 0;
    let urdu = parseInt(document.getElementById("urdu").value) || 0;
    let computer = parseInt(document.getElementById("computer").value) || 0;
    let physics = parseInt(document.getElementById("physics").value) || 0;
    if (math>100 ||english>100 ||urdu>100 ||computer>100 ||physics>100){
        alert("please enter marks between 0 to 100")
    }
    else{
    let obtainMarks = english + math + urdu + computer + physics;
    let percentage = (obtainMarks / 500) * 100;
    document.getElementById("totalMarks").innerText = obtainMarks;
    document.getElementById("percentage").innerText = percentage;
    document.getElementById("Grade").innerText = gradecal(percentage);
    }
}