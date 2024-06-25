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
   const element = document.querySelector(".headerContainer");
   element.scrollIntoView({behavior: "smooth"});

}
function scrollToProjects(){
   const element = document.querySelector(".projectsHeader");
   element.scrollIntoView({behavior: "smooth"});

}

function scrollToAbout(){
   const element = document.querySelector(".aboutContent");
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