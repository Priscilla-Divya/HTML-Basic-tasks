const dateInput = document.querySelector("input");

dateInput.addEventListener('change', () => {
    const birthDate = new Date(dateInput.value);
    const currentDate = new Date();
    const newDate = new Date(currentDate - birthDate);

    const seconds = 1000;
    const oneMinutes = 60;
    const oneHours = 24;
    const week = 7;

    let oneDay = seconds * oneMinutes * oneMinutes * oneHours;
    let oneHour = seconds * oneMinutes * oneMinutes;
    let oneMinute = seconds * oneMinutes;

    const years = newDate.getFullYear() - 1970;
    const months = newDate.getMonth();
    const days =  Math.abs(currentDate.getDate() - birthDate.getDay());
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const milli = newDate.getMilliseconds();

    const pYear = document.querySelector('#years');
    pYear.innerText = years;

    const pMonths = document.querySelector('#months');
    pMonths.innerText = months;

    const pDays = document.querySelector('#days');
    pDays.innerText = days;
    
    const pHours = document.querySelector('#hours');
    pHours.innerText = hours;

    const pMinutes = document.querySelector('#minutes');
    pMinutes.innerText = minutes;
    
    const pMilli = document.querySelector('#millisec');
    pMilli.innerText = milli;


    let totalMonths = currentDate.getMonth() - birthDate.getMonth() + (currentDate.getFullYear() - birthDate.getFullYear()) * 12;
    const totMon = document.querySelector("#totalMonths");
    totMon.innerText = totalMonths; 

    let totalWeeks = Math.round(Math.abs(currentDate.getTime() - birthDate.getTime()) / (oneDay * week));
    const totWeeks = document.querySelector("#totalWeeks");
    totWeeks.innerText = totalWeeks; 

    let totalDays = Math.round(Math.abs(currentDate.getTime() - birthDate.getTime()) / oneDay);
    const totDays = document.querySelector("#totalDays");
    totDays.innerText = totalDays; 

    let totalHours = Math.round( Math.abs(currentDate.getTime() - birthDate.getTime()) / oneHour);
    const totHours = document.querySelector("#totalHours");
    totHours.innerText = totalHours; 

    let totalMintes = Math.round(Math.abs(currentDate.getTime() - birthDate.getTime()) / oneMinute);
    const totMin = document.querySelector("#totalMintues");
    totMin.innerText = totalMintes; 

    let totalSecond = Math.round(Math.abs(currentDate.getTime() - birthDate.getTime()) / seconds);
    const totSec = document.querySelector("#totalSec");
    totSec.innerText = totalSecond; 

    let birthDayThisYear = new Date(`${currentDate.getFullYear()}-${birthDate.getMonth() + 1}-${currentDate.getDate()}`);
        if (currentDate > birthDayThisYear) {
            birthDayThisYear.setFullYear(currentDate.getFullYear() + 1);
        }
  
      let totalDaysLeft = Math.round(
        Math.abs(birthDayThisYear.getTime() - currentDate.getTime()) / oneDay
      );

    const daysLeft = document.querySelector('#daysLeft');
    daysLeft.innerText = `${totalDaysLeft} Days Left for Your Next BirthDay `;

} );