const domElements = {
  toDoForm: toDoForm,
  toDosContainer: document.querySelector('.toDosContainer'),
  toDoMssg: document.querySelector('.toDoList .mssg'),
}

const toDos = []

export const addToDo = (e) => {
  e.preventDefault()
  console.log(toDos);

  if (domElements.toDoForm.toDoInput.value) {
    const toDo = domElements.toDoForm.toDoInput.value
    toDos.push({
      toDoContent: toDo,
      done: false,
      id: Math.random().toString().slice(2, 9)
    })

    createToDosList(toDos)

    domElements.toDoForm.toDoInput.value = ''
    domElements.toDoMssg.classList.remove('show')

  } else {
    domElements.toDoMssg.classList.add('show')
    domElements.toDoMssg.textContent = "Can't add an empty toDo"
  }
}

const createNewToDo = ( toDo ) => {
  const toDoContainer = document.createElement('div')
  toDoContainer.classList.add('toDo')
  toDoContainer.setAttribute('data-id', toDo.id)
  toDoContainer.innerHTML = `
    <p class="toDoContent">${toDo.toDoContent}</p>
    <div class="toDoButtons">
      <button type="button" class="done"><i class="fa-solid fa-check"></i></button>
      <button type="button" class="edit"><i class="fa-solid fa-pen"></i></button>
      <button type="button" class="remove"><i class="fa-solid fa-xmark"></i></button>
    </div>
    `
  if ( toDo.done === true ) {
    toDoContainer.classList.add('toDoDone')
  }
  domElements.toDosContainer.append(toDoContainer)
}

const createToDosList = ( toDos ) => {
  domElements.toDosContainer.innerHTML = ''
  toDos.forEach( toDo => {
    createNewToDo(toDo)
  })
}

const toDoDone = (e) => {
  const toDo = e.target.parentElement.parentElement
  toDo.classList.toggle('toDoDone')

  const toDoId = e.target.parentElement.parentElement.getAttribute('data-id')
  toDos.forEach( toDo => {
    if ( toDo.id === toDoId && toDo.done === false) {
      toDo.done = true
    } else if (toDo.id === toDoId && toDo.done === true ){
      toDo.done = false
    }
  })
}

const removeToDo = (e) => {
  const toDoId = e.target.parentElement.parentElement.getAttribute('data-id')
  const toDoIndex = toDos.map( toDo => toDo.id ).indexOf(toDoId)
  console.log(toDoIndex);
  toDos.splice(toDoIndex, 1)

  createToDosList(toDos)
  e.target.remove()
  console.log(toDos);
}

const editToDoContent = (toDoId, newToDoContent) => {
  toDos.forEach( toDo => {
    if ( toDo.id === toDoId && newToDoContent) {
      toDo.toDoContent = newToDoContent
    }
  })
  createToDosList(toDos)
}

const editToDo = (e) => {
  const toDo = e.target.parentElement.parentElement

  if ( toDo.firstElementChild.localName === 'p' ) {
    const toDoP = toDo.firstElementChild
    const toDoContent = toDo.firstElementChild.textContent
    const toDoId = toDo.getAttribute('data-id')
    const editBtn = e.target
    let newToDoContent = ''
    editBtn.classList.toggle('editing')
    toDoP.remove()

    const editInput = document.createElement('input')
    editInput.classList.add('editInput')
    editInput.value = toDoContent

    editInput.addEventListener('keypress', (e) => {
      if ( e.key === 'Enter') {
        newToDoContent = editInput.value
        editToDoContent(toDoId, newToDoContent)
      }
    })

    editBtn.addEventListener('click', (e) => {
        newToDoContent = editInput.value
        editToDoContent(toDoId, newToDoContent)
    })
    toDo.prepend(editInput)
  }
}

export const searchToDos = () => {
  const searchValue = domElements.toDoForm.toDoInput.value.toLowerCase()

  if ( searchValue ) {
    const filteredToDos = toDos.filter( toDo => {
        return toDo.toDoContent.includes(searchValue)
    })

    if ( filteredToDos.length !== 0 && searchValue) {
      domElements.toDoMssg.classList.remove('show')
      domElements.toDoMssg.textContent = ''
    } else {
      domElements.toDoMssg.classList.add('show')
      domElements.toDoMssg.innerHTML = 'No existing toDo is matching this phrase. <br><span>You can add a new one.</span>'
    }

    createToDosList(filteredToDos)
  }
}

export const toDoBtnsFunc = (e) => {
  if ( e.target.classList.contains('done') ) {
    console.log(toDos);
    toDoDone(e)
  } else if ( e.target.classList.contains('edit')) {
    console.log(toDos);
    editToDo(e)
  } else if ( e.target.classList.contains('remove') ) {
    removeToDo(e)
  }
}
