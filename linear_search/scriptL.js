let inp=document.getElementById("inp");
let son_cont=document.getElementById("son_cont");
let qiymatInp = document.getElementById("qiymatInp");
let linear_arr=[]
function qosh(){
    if(inp.value==""){
     alert("Iltimos qiymat kiriting!")
    }
    else {
    linear_arr.push(inp.value);
    }
   inp.value=""
   console.log(linear_arr)
   draw()
}
function draw(){
    let s=""
    linear_arr.map((item)=>{
        s += ` <h4 style="padding:3px;">${item}</h4>`;
    })
    son_cont.innerHTML=s;
  
}
function boshla(){
    draw1()
        let qiymat = qiymatInp.value.trim();
    if (!qiymat) {
        alert("Qidirilayotgan qiymatni kiriting!");
        return;
    }

    let i = 0;
    function qidirishQadami() {
        if (i < linear_arr.length) {
            let element = document.getElementById(`item-${i}`);
            element.classList.add("yellow");
            setTimeout(() => {
                if (linear_arr[i] === qiymat) {
                    element.classList.remove("yellow");
                    element.classList.add("green");
                    element.classList.add("animat")
                    return;
                } else {
                    element.classList.remove("yellow");
                    element.classList.add("red");
                    i++;
                    qidirishQadami();
                }
            }, 1300);
        } else {
            alert("Qiymat topilmadi!");
        }
    }
    qidirishQadami();
}
function draw1(){
    let s=""
    linear_arr.map((item,index)=>{
        s += ` <div id="item-${index}" class="kvadrat">${item}</div>`;
    })
    document.getElementById("dizayn_conatiner").innerHTML=s;
}