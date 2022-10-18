const setDataToLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
  return true;
};

export default setDataToLocalStorage;
