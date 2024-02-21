function getFries() {
    var fries9oz = parseFloat(document.getElementById("fries9oz").value);
    var fries7oz = parseFloat(document.getElementById("fries7oz").value);
    var friesloose = parseFloat(document.getElementById("friesloose").value);
    var result = 0;

    if (isNaN(friesloose)) {
        friesloose = 0;
    }

    if (isNaN(fries7oz)) {
        fries7oz = 0;
    }

    if (isNaN(fries9oz)) {
        fries9oz = 0;
    }

    var result = (((fries9oz * 9) + (fries7oz * 7))/16) + friesloose;

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


function getlbstokgs() {
    var pounds = document.getElementById("lbsTokgs").value;
    var kilograms = pounds * 0.453592;
    document.getElementById("resultLbsToKgs").innerText = "Kilograms (kg): " + kilograms.toFixed(2);
  }
  
function getoztokgs() {
    var ounces = document.getElementById("oztokgs").value;
    var kilograms = ounces * 0.0283495;
    document.getElementById("resultOzToKgs").innerText = "Kilograms (kg): " + kilograms.toFixed(2);
  }
  
function getkgstolbs() {
    var kilograms = document.getElementById("kgsTolbs").value;
    var pounds = kilograms / 0.453592;
    document.getElementById("resultKgsToLbs").innerText = "Pounds (lb): " + pounds.toFixed(2);
  }
  
function getoztolb() {
    var ounces = document.getElementById("oztolb").value;
    var pounds = ounces * 0.0625;
    document.getElementById("resultOzToLb").innerText = "Pounds (lb): " + pounds.toFixed(2);
  }
  
function getlbtooz() {
    var pounds = document.getElementById("lbtooz").value;
    var ounces = pounds * 16;
    document.getElementById("resultLbToOz").innerText = "Ounces (oz): " + ounces.toFixed(2);
  }
  
function getkgtooz() {
    var kilograms = document.getElementById("kgtooz").value;
    var ounces = kilograms / 0.0283495;
    document.getElementById("resultKgToOz").innerText = "Ounces (oz): " + ounces.toFixed(2);
  }
  