const domElements = {
  calculatedValue: document.querySelector('.calculatedValue')
}

export default billSpliter = (e) => {
  e.preventDefault()

  domElements.calculatedValue.textContent = ''

  const newBillValue = parseFloat(billValue.value)
  const newPeopleAmount = Number(peopleAmount.value)
  const newTipAmount = Number(tipAmount.value)

  if ( typeof(newBillValue) === 'number' && typeof(newPeopleAmount) === 'number' && typeof(newTipAmount) === 'number' ) {
    const calculatedValue = (( newBillValue + ( newBillValue * newTipAmount ) ) / newPeopleAmount).toFixed(2)
    const messg = `
    If there are:</br>
    <span>${newPeopleAmount}</span> people </br>
    <span>${newBillValue} $</span> of bill</br>
    <span>${newTipAmount*100}%</span> of tip</br>
    Everyone should leave <span>${calculatedValue} $</span>`
    domElements.calculatedValue.innerHTML = messg

    calculator.reset()
  }
}



