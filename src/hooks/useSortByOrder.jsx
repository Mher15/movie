import Cookies from "js-cookie";

export const useSortByOrder = (originalArray) => {
  const queue = Cookies?.get("queue");
  if (!queue) return originalArray;
  const orderArray = JSON.parse(queue);
  const orderMap = new Map();
  orderArray.forEach((id, index) => {
    orderMap.set(id, index);
  });

  const customSort = (a, b) => {
    const orderA = orderMap.get(a.Id);
    const orderB = orderMap.get(b.Id);

    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB;
    }

    if (orderA !== undefined) {
      return -1;
    }
    if (orderB !== undefined) {
      return 1;
    }

    return originalArray.indexOf(a) - originalArray.indexOf(b);
  };

  const sortedArray = [...originalArray];
  sortedArray.sort(customSort);

  return sortedArray;
};
