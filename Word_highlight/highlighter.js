const text = document.getElementById('myParagraph').textContent.toLowerCase()
const result =  document.getElementById('output')
const symbols = ['!', '?', '.', ',', ';', ':', '"', "'", '↵'];

const removeSymbol = text.split('').filter(str=> !symbols.includes(str))
const normalText = removeSymbol.join('')
const removeWhitespace = normalText.split(' ').filter(str => str.length > 0)

const count= removeWhitespace.reduce((a,b)=>{
    a[b] = (a[b] || 0)+1
    return a
},{})

const Mostword = Object.entries(count)
.sort((a,b) => b[1] -a[1])
.slice(0,5)
.map(([word]) => word)


const originalWords = text.split(' '); 

const highlighted = originalWords.map(word => {
  const cleaned = word.toLowerCase().split('').filter(c => !symbols.includes(c)).join('');
  
  if (Mostword.includes(cleaned)) {
 
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return `<span style="text-decoration: underline; font-weight: bold;">${capitalized}</span>`;
  }
  
  return word;
});

result.innerHTML= highlighted.join(' ');
