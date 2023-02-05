var elementsIndex = -1;

document.addEventListener('keydown', (event) => {
  if (event.code == "KeyQ" && event.ctrlKey) {
    var inputElements = document.querySelectorAll("input:not([type='hidden'])");
      if (event.shiftKey) {
        elementsIndex <= 0
          ? elementsIndex = inputElements.length - 1
          : elementsIndex--
      } else {
        elementsIndex == inputElements.length - 1
          ? elementsIndex = 0
          : elementsIndex++;
      }
      if (inputElements[elementsIndex] !== undefined){
        inputElements[elementsIndex].select();
      }
      console.log(elementsIndex);
      console.log(inputElements[elementsIndex]);
  }
});