document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Adding dark theme styles through JavaScript
const style = document.createElement('style');
style.innerHTML = `
    .dark-theme {
        background: linear-gradient(to right, #1c1c1c, #2c2c2c);
        color: #ffffff;
    }
    .dark-theme button {
        background-color: #3b3b3b;
        color: white;
    }
    .dark-theme nav ul li a {
        color: #ffffff;
    }
`;
document.head.appendChild(style);
