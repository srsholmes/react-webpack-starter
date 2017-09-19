export default function hello(state = 'hello', action) {
  switch (action.type) {
    case 'HELLO':
      return 'hello';
    case 'GOODBYE':
      return 'goodbye';
    default:
      return state;
  }
}
