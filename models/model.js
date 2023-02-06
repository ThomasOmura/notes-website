let data = [{ id: 1, name: 'Example note' }];

exports.getData = () => {
  return data;
};

exports.addData = (newData) => {
  data.push({ id: data.length + 1, name: newData });
  console.log(data);
};

exports.removeData = (id) => {
  data = data.filter(item => item.id != id);
  console.log(data);
};
