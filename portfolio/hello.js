function myFunction() {
    var element = document.getElementsByTagName("BODY")[0];
    element.classList.toggle("dark");
    // document.body.style.backgroundColor = "red";
    element.addEventListener( e , ()=>{
        e.style.backgroundColor = "red";
    })
  }