export function initMenu(option) {
        const background = document.getElementById('modalWrapper')
        const createWrapper = document.createElement('div')
        createWrapper.classList.add('wrapper')
        createWrapper.setAttribute('id', 'wrapper')
        background.appendChild(createWrapper);

        const menuDisp = document.createElement('div');
        menuDisp.classList.add('menuDisp');
        menuDisp.setAttribute('id', 'menuDisp')

        const menuItem1 = document.createElement('h1')
        menuItem1.textContent = 'heyo';
        menuDisp.appendChild(menuItem1)

        createWrapper.appendChild(menuDisp);
}