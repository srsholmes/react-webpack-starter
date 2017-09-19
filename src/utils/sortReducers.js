const sortReducers = red =>
  Object.keys(red)
    .sort().reduce((acc, r) => ({ ...acc, [r]: red[r] }), {});

export default sortReducers;
