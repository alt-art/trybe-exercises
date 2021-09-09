function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

function dayAddClass(elem, array, name) {
    array.forEach(num => {
        if (num === parseInt(elem.innerText)) {
            elem.className = `${elem.className} ${name}`
        }
    });
}

function createDay() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holiday = [24, 25, 31];
    const friday = [4, 11, 18, 25];
    let days = document.querySelector('ul#days');
    dezDaysList.forEach(item => {
        let day = document.createElement('li');
        day.className = 'day';
        day.innerText = item;
        day.style.cursor = 'default';
        dayAddClass(day, holiday, 'holiday')
        dayAddClass(day, friday, 'friday')
        day.addEventListener('mouseover', event => event.target.style.transform = 'scale(1.3)')
        day.addEventListener('mouseout', event => event.target.style.transform = 'scale(1)')
        day.addEventListener('click', (event) => {
            let selected = document.querySelector('.selected');
            if (selected) {
                event.target.style.backgroundColor = selected.style.backgroundColor;
            } else {
                event.target.style.backgroundColor = '#eee'
            }
        })
        days.appendChild(day);
    })
}
createDay();

function createButton(name, id) {
    let buttonsContainer = document.querySelector('.buttons-container')
    let button = document.createElement('button');
    button.innerText = name;
    button.id = id;
    buttonsContainer.appendChild(button);
    return button;
}

let buttonHoliday = createButton('Feriados', 'btn-holiday');
buttonHoliday.addEventListener('click', () => toggleHolidayHighlight());

let buttonFryday = createButton('Sexta-feira', 'btn-friday');
buttonFryday.addEventListener('click', () => toggleFridayHighlight());

let holidayHighlight = false;
function toggleHolidayHighlight() {
    let holidays = document.querySelectorAll('.holiday');
    if (holidayHighlight) {
        holidays.forEach(elem => {
            elem.style.backgroundColor = '#eee';
            elem.style.color = '#777';
        })
        holidayHighlight = false;
    } else {
        holidays.forEach(elem => {
            elem.style.backgroundColor = 'green';
            elem.style.color = 'white'
        })
        holidayHighlight = true;
    }
}

let fridayHighlight = false;
function toggleFridayHighlight() {
    let holidays = document.querySelectorAll('.friday');
    if (fridayHighlight) {
        holidays.forEach(elem => {
            let text = elem.innerHTML;
            text = text.replace('[', '');
            text = text.replace(']', '');
            elem.innerHTML = text;
        })
        fridayHighlight = false;
    } else {
        holidays.forEach(elem => {
            elem.innerText = `[${elem.innerHTML}]`
        })
        fridayHighlight = true;
    }
}

let day = document.querySelectorAll('day');

let myTasks = document.querySelector('.my-tasks');
function addTask(name) {
    let color = name.match(/#(.+)/)[1];
    let span = document.createElement('span');
    span.innerText = name;
    myTasks.appendChild(span);
    addTaskDescription(color)
}

function addTaskDescription(colour) {
    let div = document.createElement('div');
    div.style.backgroundColor = colour;
    div.className = 'task';
    div.addEventListener('click', (event) => {
        event.target.classList.toggle("selected");
    })
    myTasks.appendChild(div)
}

let taskInput = document.querySelector('#task-input');

let buttonAdd = document.querySelector('#btn-add');

buttonAdd.addEventListener('click', () => {
    addTask(taskInput.value)
    taskInput.value = '';
});

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask(event.target.value)
      event.target.value = '';
    }
});