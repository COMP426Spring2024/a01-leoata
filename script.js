function showDefinition() {
    var selector = document.getElementById("vocabSelector");
    var value = selector.value;
    var definitions = document.getElementsByClassName("definition");
    for (var i = 0; i < definitions.length; i++) {
        definitions[i].style.display = 'none'; // Hide all definitions
    }
    document.getElementById(value).style.display = 'block'; // Show the selected one
}
