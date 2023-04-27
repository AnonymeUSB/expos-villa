var t1 = document.getElementById("t1")
sessionStorage.setItem("diapo", parseInt(1))

function Next() {
    switch (sessionStorage.getItem("diapo")) {
        case "1":
            var x = t1.offsetLeft;
            
                for (counter=x;counter!=0-x*4;counter-=1){
                    setInterval(() => {
                    t1.style.left = counter
                    console.log(counter)
                    counter-=1
                }, 1000)
                }
                
            break
        default:
            alert("erreur")
    }
}