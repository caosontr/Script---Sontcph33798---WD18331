function convertToCamelCase(text) {
    const words = text.split('_');
    const camelCaseWords = words.map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    );
    return camelCaseWords.join('');
  }
  
  document.getElementById('convertButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const inputLines = inputText.split('\n');
  
    inputLines.forEach((line) => {
      const camelCase = convertToCamelCase(line);

      const uniqueWords = new Set(camelCase.split('_'));
      const numberOfCheckmarks = uniqueWords.size;

      const outputDiv = document.getElementById('output');
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = camelCase + '   ' + '✔'.repeat(numberOfCheckmarks);
      outputDiv.appendChild(resultParagraph);
    });
  });