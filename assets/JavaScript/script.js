    $(document).ready(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#currentDay").text(currentTime);
    });

    setInterval(function () {
        var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
        $("#currentDay").text(currentTime);
     }, 1000)
    
    var currentHour = parseInt(moment().format('HH'));

    console.log(currentHour)

    $('.description').each(function () {
        var hour = parseInt(($(this).attr("id")));

        console.log($(this).attr("id"))
        
        if (hour < currentHour) {
            $(this).addClass("pastTime");
        }
        else if (hour === currentHour) {
            $(this).addClass("presentTime");
        }
        else if (hour > currentHour) {
            $(this).addClass("futureTime");
        }
   })

   var saveBtns = document.querySelectorAll (".saveBtn");
   for (var i = 0; i < saveBtns.length; i++) {
       saveBtns[i].addEventListener("click", saveText)
   } 
   function saveText (event) {
       console.log(this)
       var text = this.value;
       var block = document.getElementById(text);
       localStorage.setItem(text, block.value);

   }
   var block9 = document.getElementById("9");
   block9.value = localStorage.getItem("9");
   
   var block10 = document.getElementById("10");
   block10.value = localStorage.getItem("10");

   var block11 = document.getElementById("11");
   block11.value = localStorage.getItem("11");
   
   var block12 = document.getElementById("12");
   block12.value = localStorage.getItem("12");

   var block13 = document.getElementById("13");
   block13.value = localStorage.getItem("13");

   var block14 = document.getElementById("14");
   block14.value = localStorage.getItem("14");

   var block15 = document.getElementById("15");
   block15.value = localStorage.getItem("15");

   var block16 = document.getElementById("16");
   block16.value = localStorage.getItem("16");

   var block17 = document.getElementById("17");
   block17.value = localStorage.getItem("17");
















   
    


        










        // another method to do this throught JS


        

/* 
    var currentDay = document.getElementById ("currentDay")
    var monthNames = [ "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                   "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
    var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];                       
    var today = new Date();
    var dd   = today.getDate();
    var mm   = monthNames[today.getMonth()]; 
    var yyyy = today.getFullYear();
    var day  = days[today.getDay()];
    var hour = today.getHours();
    today = dd + '-' + mm + '-' + yyyy;
    currentDay.textContent = day + " " + today
    



function colorRows () {
    var rows = document.querySelectorAll (".description");
    console.log(hour)
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i] .id)
        if (rows[i].id == hour) {
            rows[i].style.backgroundColor = "red"
        }
        else if (rows[i].id > hour) {
            rows[i].style.backgroundColor = "green"
        }
        else if (rows[i].id < hour) {
            rows[i].style.backgroundColor = "grey"
        }
    }
}
colorRows()

var saveBtns = document.querySelectorAll (".saveBtn");
    for (var i = 0; i < saveBtns.length; i++) {
        saveBtns[i].addEventListener("click", saveText)
    } 
    function saveText (event) {
        console.log(this)
        var text = this.value;
        var block = document.getElementById(text);
        localStorage.setItem(text, block.value);

    }
    var block9 = document.getElementById("9");
    block9.value = localStorage.getItem("9");


    $(function () {


        console.log(document.getElementById('test'));
        
        
        });
   

    */