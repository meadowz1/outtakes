function getFries() {
    var fries9oz = parseFloat(document.getElementById("fries9oz").value);
    var fries7oz = parseFloat(document.getElementById("fries7oz").value);
    var friesloose = parseFloat(document.getElementById("friesloose").value);
    var result = 0;

    if (isNaN(friesloose)) {
        var result = (((fries9oz * 9) + (fries7oz * 7))/16);
    }

    else {
        var result = (((fries9oz * 9) + (fries7oz * 7))/16) + friesloose;
    }

    document.getElementById('result').innerText = "Fries total (lb): " + result
}

function getSweetPotato() {
    var sweetpotato = parseFloat(document.getElementById("sweetpotato").value);
    var result = 0; // Properly declare the variable with `var` (or you could use `let`)

    if (isNaN(sweetpotato)) {
        document.getElementById('sweetpotatoresult').innerText = "Sweet Potato Fries total (kg): " + result;
    } else {
        result = (sweetpotato * 7) / 35.274;
        // Limit the result to two decimal places for better readability
        document.getElementById('sweetpotatoresult').innerText = "Sweet Potato Fries total (kg): " + result.toFixed(2);
    }
}


function getCheese() {
    var thawedCheese = parseFloat(document.getElementById("cheesecurdsthaw").value);
    var usingCheese = parseFloat(document.getElementById("cheesecurds").value);
    var casesCheese = parseFloat(document.getElementById("cheesecurdscase").value);

    var loose = 0;
    var all = 0;

    if (isNaN(thawedCheese)) {
        thawedCheese = 0;
    } 
    
    if (isNaN(usingCheese)) {
        usingCheese = 0;
    }

    if (isNaN(casesCheese)) {
        casesCheese = 0;
    }

    loose = thawedCheese + usingCheese; 
    all = loose + (casesCheese * 100);

    document.getElementById('loosecurds').innerText = "Loose Cheese Curds: " + loose;
    document.getElementById('allcurds').innerText = "Total Cheese Curds: " + all;
}   

function getBacon() {
    var baconCups = parseFloat(document.getElementById("baconcups").value);
    var baconSheets = parseFloat(document.getElementById("baconsheets").value);

    var total = 0;

    if (isNaN(baconCups)) {
        baconCups = 0;
    } 
    
    if (isNaN(baconSheets)) {
        baconSheets = 0;
    }

    total = (baconCups * 2) + (baconSheets * 10);

    document.getElementById('bacon').innerText = "Bacon Loose (strips): " + total;
}