function openTab(evt, tabName) {
    // Create variables to hold all the tab contents, tablinks and a counter variable
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablink" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (evt.currentTarget.id === 'unreal') {
        tablinks[0].className += " active";
    } else if (evt.currentTarget.id === 'unity') {
        tablinks[1].className += " active";
    } else if (evt.currentTarget.id === 'godot') {
        tablinks[2].className += " active";
    }
}