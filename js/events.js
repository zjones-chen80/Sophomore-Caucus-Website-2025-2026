// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const eventsContainer = document.getElementById('eventsContainer');
    const eventCards = document.querySelectorAll('.event-card');

    // Add input event listener for real-time search
    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        let visibleCount = 0;
        
        eventCards.forEach((card, index) => {
            const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
            const cardText = card.textContent.toLowerCase();
            
            const isMatch = searchTerm === '' || 
                           title.includes(searchTerm) || 
                           cardText.includes(searchTerm);
            
            if (isMatch) {
                showCard(card, index * 50);
                visibleCount++;
            } else {
                hideCard(card);
            }
        });
        
        handleNoResults(visibleCount);
    });

    function showCard(card, delay = 0) {
        setTimeout(() => {
            card.classList.remove('hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            void card.offsetWidth;
            
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, delay);
    }

    function hideCard(card) {
        card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            card.classList.add('hidden');
        }, 200);
    }

    function handleNoResults(visibleCount) {
        const existingMessage = document.querySelector('.no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        if (visibleCount === 0 && searchBar.value.trim() !== '') {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results-message';
            noResultsDiv.style.cssText = `
                text-align: center;
                padding: 60px 20px;
                color: #666;
                font-size: 20px;
                background: white;
                border-radius: 20px;
                margin: 20px auto;
                max-width: 600px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            `;
            noResultsDiv.innerHTML = `
                <h3 style="margin-bottom: 10px; color: #5ba3b8;">No events found</h3>
                <p style="color: #888; font-size: 16px;">Try searching with different keywords</p>
            `;
            eventsContainer.appendChild(noResultsDiv);
        }
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchBar.focus();
        }
        
        if (e.key === 'Escape' && document.activeElement === searchBar) {
            searchBar.value = '';
            searchBar.dispatchEvent(new Event('input'));
            searchBar.blur();
        }
    });
});