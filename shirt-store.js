export const cost = (shirts) => {
  let discounted = {
    5: 5 * 800 * 0.75,
    4: 4 * 800 * 0.8,
    3: 3 * 800 * 0.9,
    2: 2 * 800 * 0.95,
    1: 800,
    0: 0,
  };

  let shirtsSet = [];

  while (shirts.length > 0) {
    shirtsSet.push(new Set(shirts).size);
    new Set(shirts).forEach((elem) => {
      shirts.splice(shirts.indexOf(elem), 1);
    });
  }

  while (shirtsSet.includes(3) && shirtsSet.includes(5)) {
    shirtsSet.splice(shirtsSet.indexOf(3), 1);
    shirtsSet.splice(shirtsSet.indexOf(5), 1);
    shirtsSet.push(4, 4);
  }

  let total = 0;
  shirtsSet.forEach((elem) => (total += discounted[`${elem}`]));
  return total;
};
