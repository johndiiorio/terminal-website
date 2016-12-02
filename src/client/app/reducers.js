export default function terminalApp(state = [], action) {
    switch (action.type) {
        case 'ADD_LINE':
           return [...state, {
               id: action.id,
               active: true
           }];
        case 'DISABLE_LINE':
            return state.map((line, index) => {
                if (index === action.index) {
                    return Object.assign({}, line, {
                        active: false
                    });
                }
                return line;
            });
        default:
            return state;
    }
}