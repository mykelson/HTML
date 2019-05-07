function changeColorEvent(event) {
    var trigger = event.srcElement;
    document.getElementById('colorDiv').style.backgroundColor = trigger.innerHTML.toLowerCase();
}