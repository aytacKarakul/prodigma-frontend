export const categoryId = function () {
  const locationCatParams = window.location.search;
  if (locationCatParams) {
    // Further parsing:
    const params = new URLSearchParams(locationCatParams);
    const cat = parseInt(params.get("cat")); // is the number
    return cat;
  }
};
