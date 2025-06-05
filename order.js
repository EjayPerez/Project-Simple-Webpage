function Disp(){
    var total = 0;

    if (document.getElementById("txtLA").checked) {
        total = total + 30000000;
    }
    if (document.getElementById("txtMB").checked) {
        total = total + 2600000;
    }
    if (document.getElementById("txtFL").checked) {
        total = total + 270000000;
    }
    if (document.getElementById("txtPC").checked) {
        total = total + 88000000;
    }
    if (document.getElementById("txtAR").checked) {
        total = total + 7200000;
    }
    if (document.getElementById("txtDC").checked) {
        total = total + 4200000;
    }

    var services = document.getElementsByName("chkboxSER");
    for (var i = 0; i < services.length; i++) {
        if (services[i].checked) {
            total = total + 30000;  
        }
    }

    document.getElementById("txTotal").value = total.toLocaleString();
}