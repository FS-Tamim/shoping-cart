const btns=document.getElementsByTagName("button");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        console.log("hi");
    });
});