const tinderUser={}
tinderUser.id=" 123abx"
tinderUser.Name="sameeksha"
tinderUser.isloggedIn=false
console.log(tinderUser);

//nested loop
const User={
    email:"sam@gmail.com",
    fullname:{
        username:{
            firstname:"sam",
            lastname:"xx"
        }
    }
}
console.log(User.fullname.username);

//combine an object

let a={1:"a",2:"b",3:"c"}
let b={4:"d",5:"e",6:"f"}
let c= Object.assign({}, a,b)
console.log(c);

