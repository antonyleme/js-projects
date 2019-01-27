var trs = document.getElementsByTagName("tr");
for(i = 0; i < trs.length; i++){
    trs[i].addEventListener("mouseover", function(){
        this.style.background = "#007bff";
        this.style.color = "white";
    });
    trs[i].addEventListener("mouseout", function(){
        this.style.background = "white";
        this.style.color = "black";
    });
}