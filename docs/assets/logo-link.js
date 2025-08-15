document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('#sidebar img.logo');
  if (!img) return;

  // change cursor so it feels clickable
  img.style.cursor = 'pointer';

  // create a link wrapping the image
  const a = document.createElement('a');
  a.href = 'https://n0signal.dev'; 
  a.setAttribute('aria-label', 'Home');

  // move the image inside the link
  img.parentNode.insertBefore(a, img);
  a.appendChild(img);
});
