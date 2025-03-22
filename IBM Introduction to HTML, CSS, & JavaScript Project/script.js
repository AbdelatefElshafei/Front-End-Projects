document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recommendation-form');
    const inputField = document.getElementById('new-recommendation');
    const recommendationsContainer = document.getElementById('recommendations');
    if (!form || !inputField || !recommendationsContainer) {
        console.error("Missing required elements. Check your HTML.");
        return;
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const newRecommendation = inputField.value.trim();
        if (newRecommendation === "") {
            alert("Please write a recommendation before submitting.");
            return;
        }
        const recommendationElement = document.createElement('div');
        recommendationElement.classList.add('recommendation');
        recommendationElement.textContent = `"${newRecommendation}"`;

        recommendationsContainer.appendChild(recommendationElement);
        inputField.value = ''; 
        alert('Thank you for your recommendation!');
    });
});
