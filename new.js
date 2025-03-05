var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      display.innerText = '0';
      return;
    }
    

    if (button.id === 'equal') {
      try {
        var result = eval(display.innerText);
        display.innerText = result;
      } catch (error) {
        display.innerText = 'Error';
      }
      return;
    }
    
    var value = button.getAttribute('data-value');
    if (display.innerText === '0' || display.innerText === 'Error') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  });
});
