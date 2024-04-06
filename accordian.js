document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const content = btn.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                const allAccordionContents = document.querySelectorAll('.accordion-content');
                allAccordionContents.forEach(function(item) {
                    item.style.display = 'none';
                });
                content.style.display = 'block';
            }
        });
    });
});
