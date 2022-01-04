function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const ActionTypes = {
    PreviousColor: 'PREVIOUS_COLOR',
    NextColor: 'NEXT_COLOR',
    RandomColor: 'RANDOM_COLOR',
}

const reducer = (state = ESTADO_INICIAL, action) => {
    const { type } = action;
    const { index, colors } = state;
    switch (type) {
        case ActionTypes.PreviousColor:
            return {
                ...state,
                index: index - 1 < 0 ? colors.length - 1 : index - 1,
            };
        case ActionTypes.NextColor:
            return {
                ...state,
                index: index < colors.length - 1 ? index + 1 : 0,
            };
        case ActionTypes.RandomColor:
            return {
                ...state,
                colors: [...colors, criarCor()],
            };
        default:
            return state;
    }
}


const store = Redux.createStore(reducer);

function randomColor() {
    store.dispatch({ type: ActionTypes.RandomColor });
}

function nextColor() {
    store.dispatch({ type: ActionTypes.NextColor });
}

function previousColor() {
    store.dispatch({ type: ActionTypes.PreviousColor });
}

const container = document.querySelector('#container');

const previousButton = document.querySelector('#previous');
previousButton.addEventListener('click', previousColor);

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', nextColor);

const randomButton = document.querySelector('#random');
randomButton.addEventListener('click', randomColor);

store.subscribe(() => {
    const state = store.getState();
    container.style.backgroundColor = state.colors[Math.abs(state.index)];
});
