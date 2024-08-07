function hideSections() {
    var sections = document.getElementsByTagName("section");
    for (i = 0; i < sections.length; ++i) {
        sections[i].style.display = "none";
    }
};

(function() {
    hideSections();
    var menuItems = document.getElementsByClassName("menuItem");
    for (i = 0; i < menuItems.length; ++i) {
        var mi = menuItems[i];
        mi.addEventListener('click', function(event) {
            event.preventDefault();
            var href = event.target.href;
            if (href) {
                hideSections();
                var sectionName = href.split("#")[1];
                var section = document.getElementById(sectionName);
                if (section) {
                    section.style.display = "block";
                }
            }
        });
    }
})();

