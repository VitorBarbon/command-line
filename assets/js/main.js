(() => {
  const input = document.querySelector('input')
  const divCommands = document.querySelector('.commands')
  const commands = [
    {command: 'Tema claro', image: './assets/images/brush-solid.svg'},
    {command: 'Tema escuro', image: './assets/images/brush-solid.svg'},
    {command: 'Comando 3', image: './assets/images/gear-solid.svg'},
    {command: 'Comando 4', image: './assets/images/gear-solid.svg'},
    {command: 'Comando 5', image: './assets/images/gear-solid.svg'},
    {command: 'Comando 6', image: './assets/images/gear-solid.svg'},
    {command: 'Comando 7', image: './assets/images/gear-solid.svg'},
    {command: 'Comando 8', image: './assets/images/gear-solid.svg'},
    {command: 'Comando 9', image: './assets/images/gear-solid.svg'},
    {command: 'Comando 10', image: './assets/images/gear-solid.svg'}
  ]
  addEventFocus(input, divCommands, commands)
  removeStyleEventFocus(input, divCommands)
  document.addEventListener('keyup', (event) =>  {
    if(event.ctrlKey && event.code === 'keyQ') {
      console.log('aqui')
    } 
      
    console.log(event)
  })
})()

function addEventFocus(input, divCommands, commands) {
  if(!input.classList.contains('input-focus')) {
    input.addEventListener('focus', () => {
      input.classList.add('input-focus')
      divCommands.style.visibility = 'visible'
      
      if(input.value === '') {
        commands.map((obj) => {
          const classHtml = obj.command.toLowerCase().replace(' ', '-')
          divCommands.innerHTML += `
            <li class="item ${classHtml}"><img src="${obj.image}" class="item-icon ${classHtml}"><p class="item-text ${classHtml}">${obj.command}</p></li>
          `
        })
      }

      input.addEventListener('keyup', () => {
        divCommands.innerHTML = ''

        const filterCommands = commands.filter((obj) => {
          return obj.command.toLowerCase().trim().indexOf(input.value.toLowerCase().trim()) !== -1
        })

        filterCommands.map((obj) => {
          const classHtml = obj.command.toLowerCase().replace(' ', '-')
          divCommands.innerHTML += `
            <li class="item ${classHtml}"><img src="${obj.image}" class="item-icon ${classHtml}"><p class="item-text ${classHtml}">${obj.command}</p></li>
          `
        })
        if(filterCommands.length === 0) divCommands.innerHTML = '<li class="item not-found"><p class="item-text">Nenhum comando foi encontrado para esse filtro</p></li>'
      })
    })
  }
}

function removeStyleEventFocus(input, divCommands) {
  document.addEventListener('click', (event) => {
    input.value = ''
    const element = event.target;
    const classHtmlList = ['c-input', 'search-commands', 'magnifying-glass']
    let hasClass = false;
        
    for(classHtml of classHtmlList) {
      if(element.classList.contains(classHtml)) hasClass = true
    }

    if(!hasClass) {
      input.classList.remove('input-focus')
      divCommands.innerHTML = ''
      divCommands.style.visibility = 'hidden'
    }

    if(element.classList.contains('tema-claro')) {
      document.querySelector('html').classList.remove('dark')
      document.querySelector('html').classList.add('light')
    }
    if(element.classList.contains('tema-escuro')) {
      document.querySelector('html').classList.remove('light')
      document.querySelector('html').classList.add('dark')
    }
  })
}