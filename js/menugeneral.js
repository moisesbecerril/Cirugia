<script>
  fetch('menuinicio.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menunav').innerHTML = data;
    });
</script>
