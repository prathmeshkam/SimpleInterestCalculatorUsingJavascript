function rateval() {
    var v = document.getElementById("rate").value;
    document.getElementById("rval").innerText = v;
}


function compute() {
    var p = document.getElementById("p").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("year").value;
    var year = new Date().getFullYear() + parseInt(y);
    var si = p * r * y / 100;
    var amt = parseInt(p) + parseFloat(si);
    var re = document.getElementById("res");
    if (p <= 0) {
        alert("Please enter valid......");
        document.getElementById("p").focus();
    } else {
        re.innerHTML = "If you deposite ₹" + p + " amount at interest rate " + r + " then you need to pay ₹" + amt + " in " + year + "<br>";
    }
}