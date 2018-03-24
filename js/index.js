//스타일 값 가져오기
const getValueOfStyle = (element, style) => {
  let value = 0;

  if(element.currentStyle) {
    value = element.currentStyle[style];
  } else {
    value = document.defaultView.getComputedStyle(element, null).getPropertyValue(style);
  }

  return parseInt(value, 10);
}

const handleLetter = (e) => {
  //textarea information
  const textarea = document.getElementById('textarea');
  const textareaPadding = getValueOfStyle(textarea, 'padding') * 2;
  const textareaLineHeight = getValueOfStyle(textarea, 'line-height');
  const maxRows = (textarea.clientHeight - textareaPadding) / textareaLineHeight;
  const currentRow = textarea.value.substr(0, textarea.selectionStart).split("\n").length;

  //When pressing enter at the last row, disable
  if(e.key === "Enter") {
    console.log('bb');
    if(currentRow >= maxRows) {
      console.log('aa');
      const newTextarea = document.createElement('textarea');
       document.getElementById('container').appendChild(newTextarea);
       newTextarea.className = 'letter';
       newTextarea.focus();
      e.preventDefault();
    }
  }
}
