function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        } // runs the function with the cb information
    };
}

// iterate without specifying a property explicitly
function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    }); // put into a table cell format

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    };
}

function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = ""; // clear the element for each run
    
    getData(url, function(data) {
        var pagination; 

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }


        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        
        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0,15);
                dataRow.push(`<td>${truncatedData}</td>`); // gets the value not just the key, creates an individual row
            });

            tableRows.push(`<tr>${dataRow}</tr>`);
            /* This allows us to check what keys we have for each key-value pairing
            Object.keys(item).forEach(function(key) {
                console.log(key); // go through each of the key for the key-value pairs
            }) */
            // el.innerHTML += "<p>" + item.name + "</p>";
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g, "");
    });
}











