//Loadscript function with the use of promise:

//Here we are going to use loadscript function with promise instead of callback;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.append(script);
    script.onload = () => {
      resolve("The script has been loaded.");
    }
    script.onerror = () => {
      reject("Error loading the script.");
    }
  });
}
//Here we can create a promise chain with the use of .then
let p1=loadScript("index.js");
p1.then((value)=>{
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js");
}).then((value)=>{
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js");
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})
