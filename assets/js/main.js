// const openTab = (evt, tabName) => {
//     let i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
  
//   Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();


  const changeTheme = () => {
    let element = document.body;
    element.classList.toggle("dark");
    document.querySelector(".dark").style.transition = "0.7s"
    }

    // const scrollBtn = document.querySelector("#scrollEffect");

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        console.log(scrolled)
        console.log(scrollable)
    });


    // logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 0,
            dots:true,
            arrows:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                700:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        });

        // typed effect
        let typed = new Typed('.typing-effect', {
            strings: [
            "WEB DEVELOPER",
            "GRAPHIC DESIGNER",
            "WEB DESIGNER",
            "GOOD COOK"
            ],
            backSpeed: '9',
            typeSpeed: '9',
            loop: true
            });