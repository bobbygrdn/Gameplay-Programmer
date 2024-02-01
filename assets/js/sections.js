window.onload = function () {
    function showSection(evt) {
        // Prevent the link from navigating
        evt.preventDefault();

        // Get all sections and links
        var sections = document.querySelectorAll('section');
        var links = document.querySelectorAll('#nav a');

        // Hide all sections
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }

        // Show the clicked section
        var sectionName = evt.currentTarget.getAttribute('data-section');
        document.getElementById(sectionName).style.display = 'block';
    }

    // Add the click event listener to each link
    var links = document.querySelectorAll('#nav a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', showSection);
    }

    // Show the default section
    document.getElementById('top').style.display = 'block';
}