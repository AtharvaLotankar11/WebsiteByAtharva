// script2.js

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    // Optionally, save the user's choice in localStorage
    localStorage.setItem('theme', newTheme);
}

// Add event listener to the toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Apply the saved theme from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
});
