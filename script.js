function handleSuggestionSubmit() {
    var suggestion = document.getElementById("suggestion").value;
    if (suggestion.trim() === "") {
        alert("Please fill out the suggestion box.");
    } else {
        alert("Thank you for your suggestion!");
    }
}