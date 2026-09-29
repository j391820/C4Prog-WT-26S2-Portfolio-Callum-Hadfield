// target check boxes
const checkbox1 = document.getElementById('quote');
const checkbox2 = document.getElementById('hobby');

// target drop down
const dropdown = document.getElementById("category-dropdown")

// categories
const quoteCategories = ["wisdom", "philosophy", "life", "truth", "inspirational", "relationships", "love", "faith", "humor", "success", "courage", "happiness", "art", "writing", "fear", "nature", "time", "freedom", "death", "leadership"]
const hobbyCategories = ["general", "sports_and_outdoors", "education", "collection", "competition", "observation"]

// selected category
let selectedValue;


// populate categories per api selected
checkbox1.addEventListener('change', () => {
    if (checkbox1.checked) {
    quoteCategories.forEach(category => {
        let categoryOption = document.createElement("option");
        categoryOption.text = category;
        categoryOption.value = category;
        dropdown.add(categoryOption);
    selectedValue = undefined;    
    });
    }
    else {
        dropdown.innerHTML = '<option value="">Select a category</option>';
        selectedValue = "no api";
    }
});

checkbox2.addEventListener('click', () => {
    if (checkbox2.checked) {
    hobbyCategories.forEach(category => {
        let categoryOption = document.createElement("option");
        categoryOption.text = category;
        categoryOption.value = category;
        dropdown.add(categoryOption);
    selectedValue = undefined;
    });
    }
    else {
        dropdown.innerHTML = '<option value="">Select a category</option>';
        selectedValue = "no api";

    }
});


// Get category
dropdown.addEventListener('change', (event) => {
    selectedValue = event.target.value;
});



// API call
// Hobbies
async function getHobby(category) {
    let result = document.getElementById("api-result");
    result.textContent = 'Loading...'
    const response = await fetch(`https://api.api-ninjas.com/v1/hobbies?category=${category}`, {
    headers: { 'X-Api-Key': 'vFZfGUnl0SxsGgUctUUbif7hJHZUHJ7Udo9y29z3' }
    })
    const jsonHobbyData = await response.json();
    try {

        if (selectedValue === undefined){
            result.textContent = 'Please select a category.'
        }
        else if (selectedValue === 'no api'){
            result.textContent = 'Please select an API.';
        }
        else if (jsonHobbyData.hobby){
            result.textContent = jsonHobbyData.hobby;
        }
        }catch(error) {
            console.error('Error fetching hobby:', error);
            result.textContent = 'Failed to fetch hobby.';
            };
}

// Quotes
async function getQuote(category) {
    let result = document.getElementById("api-result");
    result.textContent = 'Loading...'
    const response = await fetch(`https://api.api-ninjas.com/v2/quotes?categories=${category}`, {
    headers: { 'X-Api-Key': 'vFZfGUnl0SxsGgUctUUbif7hJHZUHJ7Udo9y29z3' }
    })
    const jsonQuoteData = await response.json();
    try {
        if (selectedValue === undefined){
            result.textContent = 'Please select a category'
            }
        else if (selectedValue === 'no api'){
                result.textContent = 'Please select an API.';
        }    
        else if (jsonQuoteData.length > 0){
                result.textContent = jsonQuoteData[0].quote;
        }
        }catch(error) {
            console.error('Error fetching hobby:', error);
            result.textContent = 'Failed to fetch hobby.';
            };
}


// button
const button = document.getElementById("getResponse")

button.addEventListener('click', () => {
    if (quoteCategories.includes(selectedValue)){
        getQuote(selectedValue); 
    }
    else {
        getHobby(selectedValue);
    }
    
})





