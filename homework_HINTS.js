



async function students() {
    try{
        let result = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
        console.log(result);
        let students = await result.json();
        console.log(students);

        /////1/////

        let averadgeHigherThan3 = students.filter( (student) => {
         return  student.averageGrade > 3} )
         console.log(averadgeHigherThan3);

        /////2////

        let female = students.filter((student) => { 
            if(student.gender == "Female" && student.averageGrade ==5)
            return student });
        console.log(female);
        
        /////3///

        let male = students.filter((student) => {
            if (student.city == "Skopje" && student.age > 18) {
                return student;
            }
        }).map((student) =>{ return `${student.firstName} ${student.lastName} `} )
        
        console.log(male);

        /////////////////4/////////////////////


        let averadgeFemale = students.filter((student) => { 
            if(student.gender == "Female" && student.age > 24)
            return student }).map(student =>
            `${student.firstName} ${student.lastName}, Averadge: ${student.averageGrade}`);

            console.log(averadgeFemale);

       /////////////////////////5//////////////////////


        let maleB =students.filter( (student) => {
             if(student.averageGrade > 2 && student.firstName.charAt(0) == "B") {
                 return student
             }  } );
            console.log(maleB)     
        
        
    }  
    catch(error) {
        console.log(`Something went wrong ${error}`);
    }
}

students()