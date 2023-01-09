export const CountDown = () => {
    var countDownDate = new Date("Jan 3, 2023 17:31").getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();
          
        var distance = countDownDate - now;
          
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
           
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "Geçti";
        }

        if (document.getElementById("timer").innerHTML === "Geçti") {
            document.getElementById("before").style.display = "none"; 
            document.getElementById("after").style.display = "block";
        } else {
            document.getElementById("before").style.display = "block"; 
            document.getElementById("after").style.display = "none";
        }
      }, 1000);
}