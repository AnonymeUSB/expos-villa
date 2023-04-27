var t1 = document.getElementById("t1")
var t2 = document.getElementById("t2")
var t3 = document.getElementById("t3")
sessionStorage.setItem("diapo", parseInt(1))

function Next() {
    switch (sessionStorage.getItem("diapo")) {
        case "1":
            var x = t1.offsetLeft;
            var x2 = t2.offsetLeft;
            sessionStorage.setItem("x", x)
            const x3 = x
            const x4 = x2
                for (counter=x;counter!=0;counter-=1){
                    setInterval(() => {
                    if (t2.offsetLeft > x3) {
                    t1.style.left = counter
                    t2.style.left = x2;
                    console.log(counter)
                    counter-=0.1
                    x2-=0.1
                    }
                    else {
                        //t1.style.left = x4
                        sessionStorage.setItem("diapo", parseInt(2))
                    }
                }, 10)
            }
            
            break
            case "2":
            var x = t2.offsetLeft;
            var x2 = t3.offsetLeft;
            sessionStorage.setItem("x", x)
            const x32 = x
            const x42 = x2
                for (counter=x;counter!=0;counter-=1){
                    setInterval(() => {
                    if (t3.offsetLeft > x32) {
                    t2.style.left = counter
                    t3.style.left = x2;
                    console.log(counter)
                    counter-=0.1
                    x2-=0.1
                    }
                    else {
                        //t2.style.left = x42
                        sessionStorage.setItem("diapo", parseInt(3))
                    }
                }, 10)
            }
            
                
            break
        default:
            alert("erreur")
    }
}