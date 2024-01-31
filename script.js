function startAdventure() {
    // Hide the cover and show the story section
    document.getElementById('cover').style.display = 'none';
    document.getElementById('story').style.display = 'block';
}

function nextPage() {
    // You can implement logic for more pages or interactions here
    alert("Stay tuned for the next chapter of Bobby the Bear's adventure!");
}

// ... (previous functions remain unchanged)

function showAuthorInfo() {
    // Hide the story section and show the author section
    document.getElementById('story').style.display = 'none';
    document.getElementById('author').style.display = 'block';
}
