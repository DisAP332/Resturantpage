export function initPageLoad() {
    const contentDiv = document.getElementById('content');
    const heading = document.createElement('heading');
    heading.classList.add('heading');
    const navOption1 = document.createElement('div');
    navOption1.textContent='Home'
    navOption1.setAttribute('id', 'home')
    const navOption2 = document.createElement('div');
    navOption2.setAttribute('id', 'menu')
    navOption2.textContent='Menu'
    const navOption3 = document.createElement('div');
    navOption3.setAttribute('id', 'contact')
    navOption3.textContent='Contact'
    contentDiv.appendChild(heading);
    heading.append(navOption1, navOption2, navOption3)

    const background = document.createElement('div')
    background.classList.add('background')
    background.setAttribute('id', 'modalWrapper')
    contentDiv.appendChild(background)

    // const modalWrapper = document.getElementById('modalWrapper');
    // const wrapper = document.createElement('div')
    // wrapper.classList.add('wrapper')
    // wrapper.setAttribute('id', 'wrapper');
    // modalWrapper.appendChild(wrapper);
}
