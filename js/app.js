

var
    Tareq = 32
    donKhalifa = document.getElementById("conditions");

if(Tareq <= 35){
    donKhalifa.innerText = "wrong"
}else{
    donKhalifa.innerText = "right"
}


//Create a function called calculate_age that calculates the age of a person form his date of birth

function calculate_age(birth){
    let birthDate = new Date(birth);
    let dateDiffMs= Date.now()-birthDate.getTime();
    let ageYear = new Date(dateDiffMs);
    return Math.abs(ageYear.getFullYear()-1970);
}

const birthDate="1991,7,14";
console.log(calculate_age(birthDate));
