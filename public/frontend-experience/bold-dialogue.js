(function(){
  const fallback = 'Jeg er i tvivl om, om noget gik galt under min behandling. Jeg vil gerne starte med at fortælle, hvad der bekymrer mig.';
  const text = (window.localStorage && localStorage.getItem('eh_initial_story')) || fallback;
  document.querySelectorAll('[data-pulled-story]').forEach(function(el){ el.textContent = text; });
  document.querySelectorAll('[data-story-field]').forEach(function(el){ el.value = text; });
})();
