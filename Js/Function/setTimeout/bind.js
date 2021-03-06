let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(() => {
  //burda bind ile cozebilirdik ama artik arrow func. bu isi hallediyor.
  user.sayHi();
}, 1000);

//=========================================

let dog = {
  sound: "whoof",
  talk: function () {
    console.log(this.sound);
  },
};

dog.talk(); //whoof

let talkdog = dog.talk;
talkdog(); //undefined

let talkdogBind = dog.talk.bind(dog);
talkdogBind(); //woof

let talkdogArrow = () => {
  dog.talk();
};
talkdogArrow(); //whoof
