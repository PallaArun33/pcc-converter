let cardItemContainerEl = document.getElementById('cardItemContainer');
let formContainerEl = document.getElementById('formContainer');
let pccGradeofConcreteEl = document.getElementById('pccGradeofConcrete');
let pcctxtLengthEl = document.getElementById('pcctxtLengthA');
let pcctxtWidthAEl = document.getElementById('pcctxtWidthA');
let pcctxtDepthAEl = document.getElementById('pcctxtDepthA');
let lengthErrorMsgEl = document.getElementById('lengthErrorMsg');
let widthErrorMsgEl = document.getElementById('widthErrorMsg');
let depthErrorMsgEl = document.getElementById('depthErrorMsg');
let btnResetEl = document.getElementById('btnReset');

pccGradeofConcreteEl.addEventListener('change', function (event) {
  pccGradeofConcreteEl.value = parseFloat(event.target.value);
});

pcctxtLengthEl.addEventListener('change', function (event) {
  pcctxtLengthEl.value = parseFloat(event.target.value);
});

pcctxtWidthAEl.addEventListener('change', function (event) {
  pcctxtWidthAEl.value = parseFloat(event.target.value);
});

pcctxtDepthAEl.addEventListener('change', function (event) {
  pcctxtDepthAEl.value = parseFloat(event.target.value);
});

pcctxtLengthEl.addEventListener('blur', function (event) {
  if (!isNaN(event.target.value)) {
    lengthErrorMsgEl.textContent = '';
  } else {
    lengthErrorMsgEl.textContent = 'Enter a valid number';
  }
});
pcctxtWidthAEl.addEventListener('blur', function (event) {
  if (!isNaN(event.target.value)) {
    widthErrorMsgEl.textContent = '';
  } else {
    widthErrorMsgEl.textContent = 'Enter a valid number';
  }
});
pcctxtDepthAEl.addEventListener('blur', function (event) {
  if (!isNaN(event.target.value)) {
    depthErrorMsgEl.textContent = '';
  } else {
    depthErrorMsgEl.textContent = 'Enter a valid number';
  }
});

function displayTotal() {
  let totalDetailsContainer = document.createElement('div');
  totalDetailsContainer.classList.add('total-container');
  cardItemContainerEl.appendChild(totalDetailsContainer);

  let totalHeadingEl = document.createElement('h1');
  totalHeadingEl.textContent = 'Total Volume of Cement Concrete';
  totalHeadingEl.classList.add('total-heading');
  totalDetailsContainer.appendChild(totalHeadingEl);

  let floatValueLength = parseFloat(pcctxtLengthEl.value);
  let floatValuesWidth = parseFloat(pcctxtWidthAEl.value);
  let floatValuesDepth = parseFloat(pcctxtDepthAEl.value);
  let totalValumeInCubMeters =
    floatValueLength * floatValuesWidth * floatValuesDepth;
  let valumeInMeter3 = totalValumeInCubMeters.toFixed(2);

  let convertCubMetInTofet = totalValumeInCubMeters * 35.31;
  let volumnInFt3s = convertCubMetInTofet.toFixed(2);

  let metersInfo = document.createElement('p');
  metersInfo.classList.add('number');
  metersInfo.textContent = valumeInMeter3 + ' m3';
  totalDetailsContainer.appendChild(metersInfo);

  let ftsInfo = document.createElement('p');
  ftsInfo.textContent = volumnInFt3s + ' ft3';
  ftsInfo.classList.add('number');
  totalDetailsContainer.appendChild(ftsInfo);
}

formContainerEl.addEventListener('submit', function (event) {
  event.preventDefault();
  displayTotal();
});

btnResetEl.onclick = function () {
  pcctxtLengthEl.value = '';
  pcctxtWidthAEl.value = '';
  pcctxtDepthAEl.value = '';
};
