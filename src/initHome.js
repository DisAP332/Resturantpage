export function initHome(option) {
        console.log('heyo')
        const background = document.getElementById('modalWrapper')
        const createWrapper = document.createElement('div')
        createWrapper.classList.add('wrapper')
        createWrapper.setAttribute('id', 'wrapper')
        background.appendChild(createWrapper);


        const homeDisp = document.createElement('div');
        homeDisp.classList.add('homeDisp');
        homeDisp.setAttribute('id', 'homeDisp')
        createWrapper.appendChild(homeDisp);

        const h1 = document.createElement('h1')
        const headerContainer = document.createElement('div')
        headerContainer.classList.add('headerContainer')
        h1.textContent = 'Sushi Sushi!'
        homeDisp.appendChild(headerContainer)
        headerContainer.appendChild(h1)

        const hoursCont = document.createElement('div')
        hoursCont.classList.add('hoursCont')
        const hoursHeader = document.createElement('h1')
        hoursHeader.textContent = 'Hours'
        const sunday = document.createElement('p');
        sunday.textContent = 'Sunday:';
        const monday = document.createElement('p');
        monday.textContent = 'Monday:';
        const tuesday = document.createElement('p');
        tuesday.textContent = 'Tuesday:'
        const wednesday = document.createElement('p');
        wednesday.textContent = 'Wednesday:'
        const thursday = document.createElement('p');
        thursday.textContent = 'Thurday:'
        const friday = document.createElement('p');
        friday.textContent = 'Friday:'
        const saturday = document.createElement('p');
        saturday.textContent = 'Saturday:'
        const hours = document.createElement('div')
        hours.classList.add('hours')
        homeDisp.appendChild(hoursCont);
        hoursCont.appendChild(hoursHeader);
        hoursCont.appendChild(hours)
        hours.appendChild(sunday)
        hours.appendChild(monday)
        hours.appendChild(tuesday)
        hours.appendChild(wednesday)
        hours.appendChild(thursday)
        hours.appendChild(friday)
        hours.appendChild(saturday)
}