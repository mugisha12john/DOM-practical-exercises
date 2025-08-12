const text = document.getElementById('myParagraph').textContent.toLowerCase();
const output = document.getElementById('myWordCloud');
const symbols = ['!', '?', '.', ',', ';', ':', '"', "'", '↵'];


const cleanedChars = text.split('').filter(char => !symbols.includes(char));
const cleanedText = cleanedChars.join('');
const words = cleanedText.split(' ').filter(word => word.length > 0);

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

const topWords = Object.entries(wordCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 12);


const fontSizes = [64, 60, 56, 52, 48, 44, 40, 36, 32, 28, 24, 20];


const colors = ['#f12727ff', '#0099ffff', '#ffba0aff', '#00fb47ff', '#b300ffff', '#ff6bbf'];

output.innerText = ''
output.style.position = 'relative';
output.style.width = '80%';
output.style.height = '400px';
output.style.border = '1px solid #868686ff';
output.style.overflow = 'hidden';


topWords.forEach(([word, count], index) => {
  const span = document.createElement('span');
  span.textContent = word;
  span.style.position = 'absolute';
  span.style.fontSize = `${fontSizes[index]}px`;
  span.style.color = colors[Math.floor(Math.random() * colors.length)];
  span.style.fontWeight = 'bold';
  span.style.transform = `rotate(${[-45, 0, 45, 90][Math.floor(Math.random() * 4)]}deg)`;
  span.style.left = `${Math.random() * 80}%`;
  span.style.top = `${Math.random() * 80}%`;

  output.appendChild(span);
});
