function handleClick() {
    var amountCorrect = 0;
    for (var i = 1; i <= 45; i++) {
        var radios = document.getElementsByName('group' + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "correct" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    alert("Correct Responses: " + amountCorrect);
}
// function "submitted" that opens a new window in google with 
// the input of the user, opens a new tab and focuses on the new window
function submitted(event) {
    // prevents the form from being submitted if it is able be prevented, avoids default
    event.preventDefault();
    window.open("https://www.google.com/search?q=%3A+" + document.getElementById('search').value, '_blank').focus();
}
// The event listener is so that we know when someone presses the search button and run the function "submitted"
document.getElementById('form').addEventListener('submit', submitted);
