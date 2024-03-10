function grade (percentage){
    if (percentage>=90)
{
    alert("your grade is A++")
}
else if (percentage>=80)
{
    alert("your grade is A+")
}
else if (percentage>=70)
{
    alert("your grade is A")
}
else if (percentage>=60)
{
    alert("your grade is B")
}
else if (percentage>=50)
{
    alert("your grade is C")
}
else if (percentage>=40)
{
    alert("your grade is D")
}
else{
    alert("your grade is F")
}
}
let English=parseInt(prompt("enter your marks in English: ") )                   
let Math=parseInt(prompt("enter your marks in Math: "))
let Urdu=parseInt(prompt("enter your marks in Urdu: "))
let Computer=parseInt(prompt("enter your marks in Computer: "))
let physics=parseInt(prompt("enter your marks in Physics: "))
let obtain_marks=English+Computer+Urdu+physics+Math
alert("you total obtain marks is: " + obtain_marks)
let percentage=(obtain_marks/500)*100
alert(grade(percentage))