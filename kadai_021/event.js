const clickBtn = document.getElementById('btn');
const clickText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  setTimeout((clickBtn) => {
    clickText.textContent = 'ボタンをクリックしました';
  }, 2000);
})