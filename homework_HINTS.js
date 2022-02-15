async function students() {
    try{
        let result = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
        let students = await result.json();
        console.log(students);

        /////1/////

        let averadgeHigherThan3 = students.filter( (student) => student.averageGrade > 3 )
        //  console.log(averadgeHigherThan3);

        /////2////

        let female = students.filter((student) => student.gender == "Female" && student.averageGrade == 5);
            
        // console.log(female);
        
        /////3///

        let male = students.filter((student) => (student.city == "Skopje" && student.age > 18)              
            
        ).map((student) =>`First Name: ${student.firstName} Last Name: ${student.lastName} Age: ${student.age} `);
        
        // console.log(male);

        /////////////////4/////////////////////


        let averadgeFemale = students.filter((student) => student.gender == "Female" && student.age > 24)
            .map(student =>  `${student.firstName} ${student.lastName}, Averadge: ${student.averageGrade}`);

            // console.log(averadgeFemale);

       /////////////////////////5//////////////////////


        let maleB =students.filter( (student) => student.averageGrade > 2 && student.firstName.charAt(0) == "B");
        console.log(maleB);     
        
        
    }  
    catch(error) {
        console.log(`Something went wrong ${error}`);
    }
}

students()
