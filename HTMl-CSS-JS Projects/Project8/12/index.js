let totalDays, carType, totalRent, showTotalRent
function showRent(){
    totalDays = document.getElementById('days').value
    carType = document.getElementById('carTypeList').value
    showTotalRent = document.getElementById('details')
    if(carType=='economy'){
        totalRent = parseInt(totalDays)*4000
    }
    else if(carType=='midsize'){
        totalRent = parseInt(totalDays)*10000
    }
    else if(carType=='luxury'){
        totalRent = parseInt(totalDays)*20000
    }
    showTotalRent.innerText = 'Total Rent would be '+totalRent
}