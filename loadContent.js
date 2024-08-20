document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
            const currentPath = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('nav ul li a');
            let activeFound = false;

            navLinks.forEach(link => {
                const star = link.querySelector('.star');
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                    star.textContent = '★'; // Full star for the active page
                    activeFound = true;
                } else {
                    star.textContent = '☆'; // Empty star for other pages
                }
            });

            // Default the "Design" tab to active if no active tab is found
            if (!activeFound) {
                const designLink = document.querySelector('nav ul li a[href="index.html"]');
                if (designLink) {
                    designLink.classList.add('active');
                    designLink.querySelector('.star').textContent = '★';
                }
            }
        })
        .catch(error => console.error('Error loading the navbar:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading the footer:', error));
});


document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project-overlay');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            // Remove 'active' class from all projects except the one clicked
            projects.forEach(p => {
                if (p !== project) {
                    p.classList.remove('active');
                }
            });

            // Toggle the 'active' class on the clicked project
            project.classList.toggle('active');
        });
    });

    // Close the overlay if clicking outside the project (optional)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.project-overlay')) {
            projects.forEach(p => p.classList.remove('active'));
        }
    });
});
