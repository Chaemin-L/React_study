export default function reducer(state, action) {
    switch (action.type) {
        // input change
        case 'CHANGE':
            return { ...state, input: action.value };
        // Guess button click-event handler and Main logic
        case 'GUESS':
            const { input, answer } = state;
            const { id, option } = action;
            if (isNaN(input) || Number(input) < 0 || input.length < 3) {
                return { ...state, caution: true };
            }
            // no caution
            console.log(answer);
            let strike = 0; let ball = 0;
            // Strike, Ball, Out Algorithm
            for (let i = 0; i < option; i++) {
                for (let a = 0; a < option; a++) {
                    if (answer[a] === input[i]) {
                        if (a === i) strike++;
                        else ball++;
                    }
                }
            }
            const guess = {
                'id': id,
                'input': input,
                'strike': strike,
                'ball': ball,
                'out': option - strike - ball,
            };

            const guessList = [...state.guessList, { ...guess }];
            if (strike === option) {
                return { ...state, guessList: guessList, caution: false, isOver: { status: true, msg: 'Win!!' } };
            }
            else if (guessList.length === 10) {
                return { ...state, guessList: guessList, caution: false, isOver: { ...state.isOver, status: true } };
            }
            return {...state, guessList: guessList, caution: false};
        case 'RESTART':
            return { ...action.initialValue };
        default:
            throw new Error('🚨에러 발생🚨');
    }
}