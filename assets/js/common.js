// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });
})

// ===== Dark Mode Toggle =====
function setDarkMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.getElementById('darkModeIcon').className = 'fas fa-sun';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.getElementById('darkModeIcon').className = 'fas fa-moon';
    }
}

function getSystemDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateDarkModeFromPref() {
    const userPref = localStorage.getItem('darkMode');
    if (userPref === 'dark' || userPref === 'light') {
        setDarkMode(userPref);
    } else {
        setDarkMode(getSystemDarkMode() ? 'dark' : 'light');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateDarkModeFromPref();
    var btn = document.getElementById('darkModeToggle');
    if (btn) {
        btn.onclick = function() {
            const isDark = document.body.classList.contains('dark-mode');
            if (isDark) {
                setDarkMode('light');
                localStorage.setItem('darkMode', 'light');
            } else {
                setDarkMode('dark');
                localStorage.setItem('darkMode', 'dark');
            }
        };
    }
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('darkMode')) {
                setDarkMode(e.matches ? 'dark' : 'light');
            }
        });
    }
});
