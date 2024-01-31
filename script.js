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

// for back button 
let currentPage = 0;

function startAdventure() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('story').style.display = 'block';
    document.getElementById('author').style.display = 'none';
}

function nextPage() {
    const pages = document.querySelectorAll('.page');

    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'block';
    } else {
        showAuthorInfo();
    }
}

function prevPage() {
    const pages = document.querySelectorAll('.page');

    if (currentPage > 0) {
        pages[currentPage].style.display = 'none';
        currentPage--;
        pages[currentPage].style.display = 'block';
    } else {
        // If on the first page, go back to cover
        document.getElementById('story').style.display = 'none';
        document.getElementById('cover').style.display = 'block';
    }
}

function showAuthorInfo() {
    document.getElementById('story').style.display = 'none';
    document.getElementById('author').style.display = 'block';
}

// for home button click
function goHome() {
    const pages = document.querySelectorAll('.page');

    // Hide all pages except for the cover page
    pages.forEach((page) => {
        page.style.display = 'none';
    });

    document.getElementById('cover').style.display = 'block';
    currentPage = 0;
}