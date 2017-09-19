const envOr = (key, or = null) => {
  if (typeof key === 'object' && or === null) {
    return Object.keys(key).reduce((acc, k) => {
      acc[k] = process.env[k] || key[k];
      return acc;
    }, {});
  }
  return process.env[key] || or;
};

module.exports = envOr;
