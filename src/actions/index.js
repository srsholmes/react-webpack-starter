export function helloToggle() {
  return (dispatch, getState) => {
    const { hello } = getState();
    return dispatch({
      type: hello === 'hello' ? 'GOODBYE' : 'HELLO'
    });
  };
}
