let boxes=document.querySelectorAll(".m");
let res=document.querySelectorAll("#re");
let h=document.querySelector("#msg");
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [1,4,7],
];
let turno=true;
boxes.forEach((m) =>{
    m.addEventListener("click",() =>{
        if(turno){
            m.innerText="O";
            turno=false;
        }
        else{
            m.innerText="X";
            turno=true;
        }
        m.disabled=true;
        check();
    })
    
})
const w= (wii) => {
    h.innerText = `winner is ${wii}`;
}
const check=() =>{
    for(let i of win){
        let p1=boxes[i[0]].innerText;
        let p2=boxes[i[1]].innerText;
        let p3=boxes[i[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                console.log("winner",p1);
                w(p1);
                for(bo of boxes){
                    bo.disabled=true;
                }
            }
        }
    }
};
function en(){
    for(bo of boxes){
        bo.disabled=false;
        bo.innerText="";
    }
}