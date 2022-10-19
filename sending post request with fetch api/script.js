//Here we created a function in which data for the body can be passed.
const CreateTodo =async(data)=>{// The function is set to be async as await are to be used.
let option ={
    method :"POST",//In this step, we determined the method of 
    headers:{// Without headers, the option won't run.
        'Content-Type':'application/json'//Here we determine the content type.
    },
    body: JSON.stringify(data),//In the body, we pass the data as object. Here the value will be assigned later with the help of function.
    }

    let url="https://jsonplaceholder.typicode.com/posts";// Here we create a varaible so that it would be easier to assign the url.
    
    let a = await fetch(url,option);//Here we fetched the url and also passed the option and data.

    let response = await a.json();//Here response awaits the fetch data from the url.
    return response;//The fetched data is then return in form of json.
}

let data={
    name:"Animesh",
    surname:"Acharya",
    contact:"+91984565786",
}//Here we created a object which is later to be passed into the function as data.

const getTodo=async(id)=>{
    let response =await fetch('https://jsonplaceholder.typicode.com/todos/'+id)//This is a additional function to get data from custom id.
  let r=await response.json();//Here it await the fetched data from the url and then the data is returned in next step.
  return r;
}
const mainFunc = async()=>{//This is the main function.
   let todor= await CreateTodo(data);//Here the object is passed as data into the CreateTodo function.
    console.log(todor);//The function is displayed.
    console.log(await getTodo(5));//This is the function with custom id.
}

mainFunc();//This is to call the main function.

// const func = async(data)=>{

    
//     let option={
//         method:'POST',
//         headers:{
//             'Content-Type':'applicaton/json',
//         },
//         body:JSON.stringify(data)
//     }
    
//     let a= await fetch("https://api.rainviewer.com/public/weather-maps.json");
//    let response =await  a.json();
//    return response;
// }

// data={
//     name:"Animesh",
//     phone:"1234131",
//     userID:123,
// }

// const mainFunc = async() =>{
//     let todo=await func(data);
//     console.log(todo);
// }

// // func(data);
// mainFunc();