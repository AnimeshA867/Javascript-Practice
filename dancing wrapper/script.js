let wrapper = document.getElementById("wrapper");

let combination=[
    {configuration:1,roundness:2},
    {configuration:5,roundness:1},
    {configuration:3,roundness:4},
    {configuration:4,roundness:4},
    {configuration:4,roundness:1},
    {configuration:2,roundness:2}
]
let index=0;
setInterval(async()=>{
    if(index>=6){
        index=0;
        return index;
    }else{
        ++index;
    }
},3000);

let combinations=combination[index];
wrapper.dataset.configuration=combinations.configuration;
wrapper.dataset.roundness=combinations.roundness;

setInterval(()=>{

    // let index=Math.floor(Math.random()*5);
    combinations=combination[index];
    wrapper.dataset.configuration=combinations.configuration;
    wrapper.dataset.roundness=combinations.roundness;
    

},3000);

