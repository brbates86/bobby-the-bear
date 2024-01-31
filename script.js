let currentPage = 0;

function startAdventure() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('story').style.display = 'block';
    document.getElementById('author').style.display = 'none';

    // Show the Home button when leaving the cover page
    document.getElementById('homeButton').style.display = 'inline-block';
}

function nextPage() {
    const pages = document.querySelectorAll('.page');

    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'block';
        
        // Show the Home button on subsequent pages
        document.getElementById('homeButton').style.display = 'inline-block';
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

        // Hide the Home button on the cover page
        document.getElementById('homeButton').style.display = 'none';
    }
}

function showAuthorInfo() {
    document.getElementById('story').style.display = 'none';
    document.getElementById('author').style.display = 'block';
}

function goHome() {
    const pages = document.querySelectorAll('.page');

    // Hide all pages except for the cover page
    pages.forEach((page) => {
        page.style.display = 'none';
    });

    document.getElementById('cover').style.display = 'block';
    currentPage = 0;

    // Hide the Home button on the cover page
    document.getElementById('homeButton').style.display = 'none';
}