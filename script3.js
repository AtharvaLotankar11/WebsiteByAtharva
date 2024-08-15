document.getElementById("toggleInfoBtn").addEventListener("click", function() {
    const memberInfo = document.querySelectorAll('.member-info');
    memberInfo.forEach(info => {
        info.style.display = info.style.display === 'none' ? 'block' : 'none';
    });
});
