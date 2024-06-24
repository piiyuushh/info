function showSidebar(){
   const sidebar = document.querySelector('.sidebar'); 
   sidebar.style.display = 'flex';
   sidebar.style.color = 'white';
   sidebar.style.height = '100vh';
}

function closeSidebar(){
   const sidebar = document.querySelector('.sidebar'); 
   sidebar.style.display = 'none';
}

function buttonHover(){
   const button = document.querySelector('.button');
   button.style.backgroundColor = 'black';
   button.style.color = 'white';

}

function scrollToHome(){
   const element = document.querySelector(".headerContent");
   element.scrollIntoView({behavior: "smooth"});

}
function scrollToProjects(){
   const element = document.querySelector(".projectsHeader");
   element.scrollIntoView({behavior: "smooth"});

}

function scrollToAbout(){
   const element = document.querySelector(".aboutHeader");
   element.scrollIntoView({behavior: "smooth"});
}

function scrollToContact(){
   const element = document.querySelector(".contactDiv");
   if(element){
      element.scrollIntoView({behavior: "smooth"});
   }
   else{
      console.log("Element not found");
   }
   
}
// function scrolltoContact(){
//    var element = document.getElementById("#contactH1");
//    element.scrollIntoView({behavior:"smooth"});
// }
function scrollToProjects(){
   const element = document.querySelector(".projectsHeader");
   element.scrollIntoView({behavior: "smooth"});

}
function scrollToProjectsHeader(){
   const element = document.querySelector(".projectsHeader");
   element.scrollIntoView({behavior: "smooth"});
}
function scrollToProjecDisplay(){
   const element = document.querySelector(".projectDisplay");
   element.scrollIntoView({behavior: "smooth"});

}

function validateForm(){
   const name = document.forms["contactForm"]["name"].value;
   const email = document.forms["contactForm"]["email"].value;
   const message = document.forms["contactForm"]["message"].value;

   if(name == "" || email == "" || message == ""){
      alert("Please fill out all fields");
   }
   else{
      alert("Thank you for your reaching out to us!");
   }
}

function changeMode() {
   var body = document.body;
   var nav = document.querySelector('nav');
   var li = document.querySelector('.listItems');
   var footer = document.querySelector('footer');
   var sunIcon = document.querySelector('.sun'); 
   var moonIcon = document.querySelector('.moon');

   if (body.classList.contains('light-mode')) {
       // Switch to dark mode
       [body, li].forEach(el => {
           el.classList.remove('light-mode');
           el.classList.add('dark-mode');
           el.style.backgroundColor = 'rgb(17, 18, 61)';
           el.style.color = 'white';
       });

       sunIcon.style.display = 'none';
       moonIcon.style.display = 'block';
   } else {
       // Switch to light mode
       [body, nav, footer].forEach(el => {
           el.classList.remove('dark-mode');
           el.classList.add('light-mode');
           el.style.backgroundColor = ''; // reset to default
           el.style.color = ''; // reset to default
       });
       sunIcon.style.display = 'block';
       moonIcon.style.display = 'none';
   }
}