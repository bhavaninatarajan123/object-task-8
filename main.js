const students=[{ name: 'Quincy', grade: 96 },
                { name: 'Jason', grade: 84 },
                { name: 'Alexis', grade: 100 },
                { name: 'Sam', grade: 65 },
                { name: 'Katie', grade: 90 }];

var a=students.filter(function(e,d){
    if(d%2==0){
        var c= `${e.name}+${e.grade}`
    }
    return c;
    
})  
document.write(JSON.stringify(a));
              