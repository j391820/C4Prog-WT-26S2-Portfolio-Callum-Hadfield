// target check boxes
const checkbox1 = document.getElementById('quote');
const checkbox2 = document.getElementById('hobby');
const quoteCategories = ["wisdom", "philosophy", "life", "truth", "inspirational", "relationships", "love", "faith", "humor", "success", "courage", "happiness", "art", "writing", "fear", "nature", "time", "freedom", "death", "leadership"]
const hobbyCategories = ["general", "sports_and_outdoors", "education", "collection", "competition", "observation"]

const dropdown = document.getElementById("category-dropdown")

// Add event listeners for check boxes
checkbox1.addEventListener('change', () => {
    if (checkbox1.checked) {
    quoteCategories.forEach(category => {
        let categoryOption = document.createElement("option");
        categoryOption.text = category;
        categoryOption.value = category;
        dropdown.add(categoryOption);
    });
    }
    else {
        dropdown.innerHTML = '<option value="">Select a category</option>';
    }
});

checkbox2.addEventListener('click', () => {
    if (checkbox2.checked) {
    hobbyCategories.forEach(category => {
        let categoryOption = document.createElement("option");
        categoryOption.text = category;
        categoryOption.value = category;
        dropdown.add(categoryOption);
    });
    }
    else {
        dropdown.innerHTML = '<option value="">Select a category</option>';
    }
});




