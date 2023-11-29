document.addEventListener('DOMContentLoaded', function() {
  const recetas = [
      { title: "Torta de Pascua", link: "huelva.html" },
      { title: "Huevas Aliñas", link: "sevilla.html" },
      { title: "Tortilla de Camarones", link: "cadiz.html" },
      { title: "Ajobacalao", link: "malaga.html" },
      { title: "Salmorejo Cordobés", link: "cordoba.html" },
      { title: "Violetes", link: "jaen.html" },
      { title: "Tortilla del Sacromonte", link: "granada.html" },
      { title: "Migas de Almería", link: "almeria.html" },
  ];

  function mostrarRecetas(entrada) {
      const recetasFiltradas = recetas.filter(receta =>
          receta.title.toLowerCase().includes(entrada.toLowerCase())
      );

      const listaRecetasDiv = document.getElementById('recipeList');
      listaRecetasDiv.innerHTML = '';

      recetasFiltradas.forEach(receta => {
          const recetaDiv = document.createElement('div');
          recetaDiv.textContent = receta.title;
          recetaDiv.addEventListener('click', function() {
              window.location.href = receta.link;
          });
          listaRecetasDiv.appendChild(recetaDiv);
      });

      listaRecetasDiv.style.display = recetasFiltradas.length > 0 ? 'block' : 'none';
  }

  document.getElementById('searchInput').addEventListener('input', function(event) {
      const inputText = event.target.value;
      if (inputText.trim() === '') {
          document.getElementById('recipeList').style.display = 'none';
      } else {
          mostrarRecetas(inputText);
      }
  });

  const menuToggle = document.getElementById('menuToggle');
  const menuContent = document.getElementById('menuContent');

  menuToggle.addEventListener('click', function() {
      if (menuContent.style.display === 'block') {
          menuContent.style.display = 'none';
      } else {
          menuContent.style.display = 'block';
      }
  });

  window.onload = function() {
      const nombreIngresado = localStorage.getItem('nombre');

      if (!nombreIngresado) {
          const nombre = prompt('Por favor, introduce tu nombre:');
          if (nombre) {
              localStorage.setItem('nombre', nombre);
              mostrarNombre(nombre);
          }
      } else {
          mostrarNombre(nombreIngresado);
      }
  };

  function mostrarNombre(nombre) {
      const welcomeName = document.getElementById('welcomeName');
      welcomeName.textContent = nombre;
  }
});
