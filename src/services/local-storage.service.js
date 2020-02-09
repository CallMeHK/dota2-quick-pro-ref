const get = key => {
  const localValue = localStorage.getItem(key);
  try {
    if (localValue) {
      return {
        success: true,
        data: JSON.parse(localValue)
      };
    }
  } catch (e) {
    console.error(e.message);
  }
  return {
    success: false
  };
};

const set = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export { get, set };
