//first way of execute any objects
const jUser={Name: "sameeksha",Age: 12,Email:"14sameeksha@gmail.com"}
console.log(jUser["Email"]);
//Second way of execute objects
const jUser1={Name: "sam",Age: 22,Email:"14sam@gmail.com"}
console.log(jUser.Age);

//changes any element in the object
const User1={Name: "sameeksha",Age: 12,Email:"14sameeksha@gmail.com",inlogged:"flase",
    place: "delhi"
}
User1.Name="harshita";
console.log(User1.Name);

//freeze the object
const UserA={Name: "sameeksha",Age: 12,Email:"14sameeksha@gmail.com",inlogged:"flase",
    place: "delhi"
}
Object.freeze(UserA)
UserA.email="harshita@gmail.com";
console.log(UserA);

