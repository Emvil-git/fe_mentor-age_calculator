
const getAge = event => {
    event.preventDefault();

    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value - 1;
    const year = document.querySelector("#year").value;

    let dob = new Date(year, month, day);
    let today = new Date();

    console.log(dob)

    let diffDays = Math.round((today.getTime() - dob.getTime()) / (1000 * 3600 * 24));

    let actualYears = diffDays / 365.26;

    let monthDays = diffDays - (Math.floor(actualYears) * 365.26); // days remaining after subtracting years in days

    let sMonths = monthDays / 30.437;

    let remDays = (monthDays - (Math.floor(sMonths) * 30.437));

    console.log(Math.floor(diffDays))
    console.log(Math.round(Math.floor(actualYears) * 365.26));
    console.log(Math.round(monthDays))
    console.log(sMonths)
    console.log(remDays);

    document.getElementById("years-val").innerHTML = Math.floor(actualYears);
    document.getElementById("months-val").innerHTML = Math.floor(sMonths);
    document.getElementById("days-val").innerHTML = Math.round(remDays);
}

document.getElementById("convert").addEventListener("click", getAge);

// console.log(day);
// console.log(month);
// console.log(year);