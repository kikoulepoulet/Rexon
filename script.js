// script.js
document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('downloadBtn');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopup');

    // Function to show popup
    downloadBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor action
        popup.style.display = 'block'; // Show the popup
    });

    // Close the popup
    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none'; // Hide the popup
    });
});
