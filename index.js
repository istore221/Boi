const Boi = require('./src/index');
Boi.options({ language: "eng" });


const schema1 = Boi.object().keys({
  username: Boi.string().required().min(10).max(12),
  password: Boi.string().min(8)
});


const schema2 = Boi.object().keys({
  username: Boi.string().max(3)
});

const data1 = { username: '' ,password: 'fkz'};
const data2 = { username: 'javx' };

const result1 = Boi.validate(data1,schema1);
//const result2 = Boi.validate(data2,schema2);


// Boi.validate(data, schema1, (err, value) => {
//
//
// });

// console.log(schema1);
// console.log(schema2);
