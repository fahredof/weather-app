function saveToLocalStorage(cities) {
    const citiesList = cities.map((city) => ({city: city.city}));
    localStorage.setItem("state", JSON.stringify({cities: citiesList}));
}

export {
    saveToLocalStorage
};