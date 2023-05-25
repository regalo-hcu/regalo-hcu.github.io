window.addEventListener('DOMContentLoaded', function() {
  if (!sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true');
    setTimeout(function() {
      location.reload();
    }, 1000);
  }
});
