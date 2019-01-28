function insertOrUpdate(listData, data) {
  const newListData = [...listData];
  if (newListData.map(x => x.id).includes(data.id)) {
    const dataExist = newListData.find(d => d.id == data.id);
    dataExist.name = data.name;
    return newListData;
  }
  return [...newListData, data];
}
module.exports = { insertOrUpdate };
