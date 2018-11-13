const Boi = require('./src/index');
Boi.options({ language: "eng" });


const schema1 = Boi.object().keys({
  username: Boi.string().required().min(5).max(10),
  password: Boi.string().min(8),
  custom: Boi.object().keys({
    cf1: Boi.string().max(3),
    cf2: Boi.string().min(3),
    cf3: Boi.object().keys({
      x: Boi.string().max(3),
      y: Boi.string().required().min(3)
    })
  })
});


//console.log(schema1._value.custom._value);

//console.log(schema1._value);


const data1 = { username: 'kalanat' ,password: 'mypassword',custom:{
  cf1: 'ass',
  cf2: 'bss',
  cf3: {
    x:'xxx',
    y:''
  }
}};


const result1 = Boi.validate(data1,schema1);

console.log(result1);
