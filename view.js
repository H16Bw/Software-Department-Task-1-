var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var lastValue = response.value;
        console.log("Last value: " + lastValue);
    }
};
xhttp.open("GET", "get_last_value.php", true);
xhttp.send();