const findTheOldest = function(people) {
    let year = new Date()
    let currentYear = year.getFullYear();
 const oldest = people.sort(function(a,b) {
    if(a.yearOfDeath === undefined ){
        
        a.yearOfDeath = currentYear;
        const lastperson = a.yearOfDeath - a.yearOfBirth;
    const nextperson = b.yearOfDeath - b.yearOfBirth;
   return lastperson > nextperson ? -1 :1;
    }
    else if (b.yearOfDeath === undefined){
        b.yearOfDeath = currentYear;
        const lastperson = a.yearOfDeath - a.yearOfBirth;
    const nextperson = b.yearOfDeath - b.yearOfBirth;
   return lastperson > nextperson ? -1 :1;
    }
    else {
        const lastperson = a.yearOfDeath - a.yearOfBirth;
    const nextperson = b.yearOfDeath - b.yearOfBirth;
   return lastperson > nextperson ? -1 :1;
    }
 }

 )
 return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
