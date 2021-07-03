module.exports = ({ typescript }) => `const NEXT_COUNT = 'NEXT_COUNT';
const PREV_COUNT = 'PREV_COUNT';
${typescript ? `
type EventType = 'next' | 'prev';
type ActionType = 'NEXT_COUNT' | 'PREV_COUNT';

interface Action {
  type: ActionType;
}
interface IAction<T extends EventType> {
  (type: T): Action;
}
interface IReducer<T extends number> {
  (state: T, type: Action): T;
}
` : ``}
export const setCount${typescript ? ': IAction<EventType>' : ''} = (type) => ({
  type: type === 'next' ? NEXT_COUNT : PREV_COUNT,
});

export const countReducer${typescript ? ': IReducer<number>' : ''} = (state = 0, action) => {
  if (action.type === NEXT_COUNT) {
    return state + 1;
  }
  if (action.type === PREV_COUNT) {
    return state - 1;
  }
  return state;
};
`;
