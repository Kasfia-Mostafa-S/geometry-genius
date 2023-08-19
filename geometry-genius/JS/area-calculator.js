function calculateTriangleArea(){
  
  // triangle base
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  

  // triangle height
  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;
  
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
  
}


function calculateRectangleArea(){
  
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  // console.log(width);


  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  // console.log(length);

  // validation
  if(isNaN(width) || isNaN(length)){
    alert('Provide a number');
    return;
  }

  const area = width * length;
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = area;
}


// reusable function --> reduce code

function calculateParallelogramArea(){
   const base = getInputValue('parallelogram-base');

   const height = getInputValue('parallelogram-height');
  
   if(isNaN(base) || isNaN(height)){
    alert('Provide a number');
    return;
  }

   const area = base * height;
   setElementInnerText('parallelogram-area',area);
}

function calculateEllipseArea(){
   const majorRadius = getInputValue('ellipse-first-radius')
   const minorRadius = getInputValue('ellipse-second-radius');

   const area = 3.14 * majorRadius * minorRadius;
   const areaTwoDecimal = area.toFixed(2);
   setElementInnerText('ellipse-area',areaTwoDecimal)
}

function getInputValue(fieldId){
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reusable function

function setElementInnerText(elementId,area){
 const element = document.getElementById(elementId);
 element.innerText = area;
}