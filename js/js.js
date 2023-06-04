$(document).ready(function() {
  // Récupérer tous les liens de la barre de défilement
  var links = $('.sidebar a');

  // Fonction pour ajouter ou supprimer la classe "active" en fonction de la section visible
  function setActiveLink() {
    var scrollPosition = $(window).scrollTop();

    // Parcourir tous les liens
    links.each(function() {
      var sectionId = $(this).attr('href');
      var section = $(sectionId);

      if (section.offset().top <= scrollPosition && section.offset().top + section.outerHeight() > scrollPosition) {
        // Ajouter la classe "active" à l'élément correspondant à la section visible
        $(this).addClass('active');
      } else {
        // Supprimer la classe "active" des autres liens
        $(this).removeClass('active');
      }
    });
  }

  // Appeler la fonction setActiveLink lors du chargement de la page et à chaque défilement
  $(window).on('load scroll', setActiveLink);
});




















