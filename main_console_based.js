function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        } // runs the function with the cb information
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);













/* TIMEOUT VERSION 
var xhr = new XMLHttpRequest();
// var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

/* function when not using timeout / callbacks
function setData(jsonData) {
    data = jsonData;
}
*/ 
/* TIMEOUT VERSION CONT. 
xhr.onreadystatechange = function() {
    // console.log(this.readyState); // see what happens each time the function is called
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // setData(JSON.parse(this.responseText));
        // console.log(JSON.parse(this.responseText));
        //data = this.responseText;
        //console.log(typeof(JSON.parse(this.responseText)));
        // console.log(typeof(this.responseText));
        // document.getElementById("data").innerHTML = this.responseText;
    } // change inner html text to the response text from the website
};
// xhr object retains an internal state. 4 means it's been completed
// html status 200 means it is ok and request has succeeded


// timeout function learning
setTimeout(function() {
    console.log(data);
}, 1500); // timeout of 500ms


*/





/* previous version which was more messy but does same thing:
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }// waits for the state of xhr to change then to run a check and change the innerhtml to be equal 
    // to the response text that comes back from our xhr object
};

// open a connection
xhr.open("GET", "https://swapi.co/api/");

xhr.send();
*/