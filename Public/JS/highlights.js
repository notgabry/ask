(() => {
    if (window.location.search && window.location.search.split('?')[1] && parseInt(window.location.search.split('?')[1]) > 0 && parseInt(window.location.search.split('?')[1]) <= 6) {
        let section = document.querySelectorAll('section')[window.location.search.split('?')[1] - 1]
        let div = document.createElement('div')
        div.id = 'smallContainer'
        section.insertAdjacentElement('afterend', div)

        let realSection = document.querySelectorAll('section')[window.location.search.split('?')[1]]
        div.appendChild(realSection)
    } 
})()