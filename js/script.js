function toggleExplanation(id) {
    var explanation = document.getElementById(id);
    if (explanation.style.display === "none" || explanation.style.display === "") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}