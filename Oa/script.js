const cols2and3 = document.querySelectorAll('td:nth-child(2), td:nth-child(3)');

cols2and3.forEach((col) => {
  let timeoutId;
  
  col.addEventListener('mouseenter', () => {
    timeoutId = setTimeout(() => {
      col.classList.add('show');
    }, 1500);
  });
  
  col.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId);
    col.classList.remove('show');
  });
});
