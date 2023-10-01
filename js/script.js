    // Sélectionnez tous les liens de navigation avec l'attribut href qui commence par #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Récupérez l'élément cible basé sur l'attribut href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Utilisez scrollIntoView pour faire défiler en douceur vers l'élément cible
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
