const transform = data => (
  Object.keys(data).reduce((acc, key) => {
    const values = data[key];

    values.forEach((value) => {
      acc[value.toLowerCase()] = parseInt(key, 10);
    });

    return acc;
  }, {})
);

export default transform;
