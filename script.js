let currentPage = 0;

function turnPage() {
    const pages = document.querySelectorAll('.page');
    
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'block';
    } else {
        alert("Congratulations! You've reached the end of Bobby's adventure.");
    }
}
