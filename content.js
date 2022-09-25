var elementsIndex = -1;

document.addEventListener('keydown', (event) => {
  var inputElements = document.querySelectorAll("input:not([type='hidden'])");
  if(event.code == "KeyQ" && event.ctrlKey){
    if(event.shiftKey){
      elementsIndex <= 0
        ? elementsIndex = inputElements.length - 1
        : elementsIndex--
    }else{
      elementsIndex == inputElements.length - 1
        ? elementsIndex = 0
        : elementsIndex++;
    }
    inputElements[elementsIndex].select();
    console.log(elementsIndex);
    console.log(inputElements[elementsIndex]);    
  }
});