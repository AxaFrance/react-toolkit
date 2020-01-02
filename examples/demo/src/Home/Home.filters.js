export const filterPaging = (items, numberItems, currentPage) => {
  let pageIndex = 0;
  if (currentPage > 1) {
    pageIndex = currentPage - 1;
  }

  let controlledNumberItems = 0;
  if (numberItems > 0) {
    controlledNumberItems = numberItems;
  }

  const length = items.length;
  const beginIndex = pageIndex * controlledNumberItems;
  const lastIndex =
    length < beginIndex + controlledNumberItems
      ? length
      : beginIndex + controlledNumberItems;

  return items.slice(beginIndex, lastIndex);
};

export const computeNumberPages = (items, numberItems) => {
  if (!items) {
    return 1;
  }
  const numberItemsControlled = numberItems < 1 ? 1 : numberItems;
  const length = items.length;
  return length > 0 ? Math.ceil(length / numberItemsControlled) : 1;
};

export const getItemsSorted = (items, columns) => {
  return [...items].sort((itemA, itemB) => {
    const entries = [];
    for (let [key, value] of Object.entries(columns)) {
      entries.push({key, value});
    }
    entries.sort((a, b) => {
      if (a.value.timeLastUpdate === b.value.timeLastUpdate) {
        return 0;
      }

      if (a.value.timeLastUpdate === null) {
        return 1;
      }

      if (b.value.timeLastUpdate === null) {
        return -1;
      }

      return a.value.timeLastUpdate - b.value.timeLastUpdate;
    });
    for (let i = 0; i < entries.length; i++) {

      const entry = entries[i];
      if (columns[entry.key].value === "asc") {
        if (itemB[entry.key] && itemA[entry.key]) {

          if (itemB[entry.key] instanceof Date) {
            return itemA[entry.key].getTime() - itemB[entry.key].getTime();
          }
          const localComp = itemA[entry.key].localeCompare(itemB[entry.key]);
          if (localComp !== 0) {
            return localComp;
          }
        }
      }
      if (columns[entry.key].value === "desc") {
        if (itemB[entry.key] && itemA[entry.key]) {
          if (itemB[entry.key] instanceof Date) {
            return itemB[entry.key].getTime() - itemA[entry.key].getTime();
          }
          const localComp = itemB[entry.key].localeCompare(itemA[entry.key]);
          if (localComp !== 0) {
            return localComp;
          }
        }
      }
    }

    return 0;
  });
};
