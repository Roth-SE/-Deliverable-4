        const thumbnails = document.querySelectorAll('.thumbnail');
        const imageSlider = document.getElementById('imageSlider');
        let currentIndex = 0;

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                thumb.classList.add('active');
                
                // Slide to the corresponding image
                currentIndex = index;
                imageSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        });