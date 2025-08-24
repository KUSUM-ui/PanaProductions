document.addEventListener('DOMContentLoaded', function() {
            const blogItems = document.querySelectorAll('.Blog-Vertical-All');
            
            // Initial check to see which items are visible
            checkVisibility();
            
            // Check visibility when scrolling
            window.addEventListener('scroll', checkVisibility);
            
            function checkVisibility() {
                const triggerBottom = window.innerHeight / 5 * 4;
                
                blogItems.forEach(item => {
                    const itemTop = item.getBoundingClientRect().top;
                    
                    if (itemTop < triggerBottom) {
                        item.classList.add('visible');
                    }
                });
            }
        });