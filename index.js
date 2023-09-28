//Prompt and if else structure to make the user say hello by name
var veri = prompt("Lütfen isminizi giriniz.");
    if(veri !== ""){
        var yenisim = "Merhablar, " + veri + "! Hoş Geldin!"
        }else{
            var yenisim = "Merhabalar ama isminizi girmediniz..."
        }

    document.getElementById("isim").innerHTML = yenisim ;
    // Function and Variable Structures for Clock
    function realTime(){
        const time = new Date();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();
        let d = time.getDay();
        d = checkDay(d);
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + d;
        setTimeout(realTime, 1000);
    }
    //Function for 0 before hour and minute.
    function checkTime(i){
        if(i < 10){
            i = "0" + i;
        }
        return i;
    }
    //Function and Swich structure for Days in Turkish
    function checkDay(d){
        switch(d){
            case 0 :
                return "Pazar";
            break;
            case 1 :
                return "Pazartesi";
            break;
            case 2 :
                return "Salı";
            break;
            case 3 :
                return "Çarşamba";
            break;
            case 4 :
                return "Perşembe";
            break;
            case 5 :
                return "Cuma";
            break;
            case 6 :
                return "Cumartesi";
            break;
            
        }
    }
    //Variable and Function for change to background color
    var buton1 = document.querySelector("#btn1");
    buton1.addEventListener("click", function(){
        var renk = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.background = "#" + renk;
    });
    
    //Variable and Function for change to text color
    var buton2 = document.querySelector("#btn2");
    buton2.addEventListener("click", function(){
        var renk = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.color = "#" + renk;
    }); 
