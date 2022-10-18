const getDataFromLocalStorage = (key) => {
  const foundData = JSON.parse(localStorage.getItem(key));
  return foundData;
};

export default getDataFromLocalStorage;
