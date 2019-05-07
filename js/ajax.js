function myfamily(name) {
    //deal with the situation when nothing is chosen
    if (name = "") {
        return;
    } else {
        //create an AJAX object
        let ajax = new XMLHttpRequest();

        //when the page is loaded, have a call back function pre-fill our div
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // find how to use the the responseText to update the content of the div
                document.getElementById('infodiv').innerHTML = ajax.responseText;
            }
        };

        //open the requested file and transmit its data
        ajax.open('GET', name + '.htm', true);
        ajax.send();
    }
}