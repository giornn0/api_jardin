const test=()=>{
    test1()
}
const test1=()=>{
  test2()
}
const test2=()=>{
  const object = {
    name:"nombre",
    type:"type",
    address:"address",
  }
  test3(object)
}
const test3=({name,type,address})=>{
  console.log(name,type,address)
  throw Error({message:"ERRORRR!!!",statusCode:402})
}

test()