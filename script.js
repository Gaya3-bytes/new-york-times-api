var masterDiv = document.createElement('div');
masterDiv.setAttribute('class', 'container container-sm container-md container-lg');

var nytTitle = document.createElement('div');
nytTitle.setAttribute('class', ' row-sm row-md row-lg');


var nytTitleCol = document.createElement('div');
nytTitleCol.setAttribute('class', 'col-sm col-md col-lg titleFont');
nytTitleCol.innerHTML = "New York Times";

nytTitle.append(nytTitleCol);

var navBar = document.createElement('nav');
navBar.setAttribute('class', 'navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light');

var navLink1 = document.createElement('button');
navLink1.setAttribute('class', 'nav-link navFont');
navLink1.id = "home"
navLink1.innerHTML = "HOME";
navLink1.onclick = getData1;


var navLink2 = document.createElement('button');
navLink2.setAttribute('class', 'nav-link navFont');
navLink2.id = "world"
navLink2.innerHTML = "WORLD";
navLink2.onclick = getData2;

var navLink3 = document.createElement('button');
navLink3.setAttribute('class', 'nav-link navFont');
navLink3.id = "politics"
navLink3.innerHTML = "POLITICS";
navLink3.onclick = getData3;

var navLink4 = document.createElement('button');
navLink4.setAttribute('class', 'nav-link navFont');
navLink4.id = "magazine"
navLink4.innerHTML = "MAGAZINE";
navLink4.onclick = getData4;

var navLink5 = document.createElement('button');
navLink5.setAttribute('class', 'nav-link navFont');
navLink5.id = "technology"
navLink5.innerHTML = "TECHNOLOGY";
navLink5.onclick = getData5;

var navLink6 = document.createElement('button');
navLink6.setAttribute('class', 'nav-link navFont');
navLink6.id = "science"
navLink6.innerHTML = "SCIENCE";
navLink6.onclick = getData6;

var navLink7 = document.createElement('button');
navLink7.setAttribute('class', 'nav-link navFont');
navLink7.id = "health"
navLink7.innerHTML = "HEALTH";
navLink7.onclick = getData7;

var navLink8 = document.createElement('button');
navLink8.setAttribute('class', 'nav-link navFont');
navLink8.id = "sports"
navLink8.innerHTML = "SPORTS";
navLink8.onclick = getData8;

var navLink9 = document.createElement('button');
navLink9.setAttribute('class', 'nav-link navFont');
navLink9.id = "arts"
navLink9.innerHTML = "ARTS";
navLink9.onclick = getData9;

var navLink10 = document.createElement('button');
navLink10.setAttribute('class', 'nav-link navFont');
navLink10.id = "fashion"
navLink10.innerHTML = "FASHION";
navLink10.onclick = getData10;

var navLink11 = document.createElement('button');
navLink11.setAttribute('class', 'nav-link navFont');
navLink11.id = "food"
navLink11.innerHTML = "FOOD";
navLink11.onclick = getData11;

var navLink12 = document.createElement('button');
navLink12.setAttribute('class', 'nav-link navFont');
navLink12.id = "travel"
navLink12.innerHTML = "TRAVEL";
navLink12.onclick = getData12;



navBar.append(navLink1, navLink2, navLink3, navLink4, navLink5, navLink6, navLink7, navLink8, navLink9, navLink10, navLink11, navLink12);

masterDiv.append(nytTitle, navBar);




async function getData1() { 
        let request1 = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
        let bottomDiv = document.createElement('div');
        if ((request1.status >= 200) && (request1.status <=300)) {
          let homeCard = await request1.json(); 
          for (var i=0; i<homeCard.results.length; i++){

              

              let card1 = document.createElement('div');
              card1.className = 'card card-sm-md-lg ';
              card1.id = "CardB"

              let ro1 = document.createElement('div');
              ro1.setAttribute('class', 'row row-sm-md-lg');

              let col1 = document.createElement('div');
              col1.setAttribute('class', 'col col-sm-md-lg');

              let col2 = document.createElement('div');
              col2.setAttribute('class', 'col-4 col-sm-md-lg');

              let card2 = document.createElement('div');
              card2.className = 'card card-sm-md-lg';

              

              let sect = document.createElement('h6');
              sect.className = 'section-card';
              sect.innerHTML = "HOME";

              let title = document.createElement('h4');
              title.className = 'title-card';
              title.innerHTML = homeCard.results[i].title;

              let date = document.createElement('div');
              date.className = 'date-card';
              let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
              let newsMonth = dateElement[0];
              let newsDate = dateElement[1];

              function mon (){ 
             
              
              switch (true) {
                case (newsMonth == 1):
                  return "January";
                  break;
                case (newsMonth == 2):
                  return "February";
                  break;
                case (newsMonth == 3):
                  return "March";
                  break;
                case (newsMonth == 4):
                  return "April";
                  break;
                case (newsMonth == 5):
                  return "May";
                  break;
                case (newsMonth ==6):
                  return "June";
                  break;
                case (newsMonth == 7):
                  return "July";
                  break;
                case (newsMonth == 8):
                  return "August";
                  break;
                case (newsMonth == 9):
                  return "September";
                  break;
                case (newsMonth == 10):
                  return "October";
                  break;
                  
                case (newsMonth == 11):
                  return "November";
                  break;
                case  (newsMonth == 12):
                  return "December";
                  break;
                default:
                  return "invalid";
              }
            }
             
              date.innerHTML = newsDate + " " + mon(newsMonth);

              let abstract = document.createElement('div');
              abstract.className = 'abstract-card';
              abstract.innerHTML = homeCard.results[i].abstract;

              let readFurther = document.createElement('a');
              readFurther.setAttribute('class', 'continueReading');
              readFurther.innerHTML = "Continue reading";
              readFurther.href = homeCard.results[i].short_url;


              card2.append(sect, title, date, abstract, readFurther);

              col1.append(card2);


              let card3 = document.createElement('div');
              card3.setAttribute('class', 'card card-md-lg');
              
              let image = document.createElement('img');
              image.setAttribute('class', 'card-img-thumbnail');
              image.src = homeCard.results[i].multimedia[4].url;
              
              card3.append(image);

              col2.append(card3);

              ro1.append(col1,col2);
            
              card1.append(ro1);
              bottomDiv.append(card1);
          }
          masterDiv.innerHTML = "";
          masterDiv.append(nytTitle, navBar, bottomDiv);
        } 
          
throw new Error(request1.status);
}      

getData1();


async function getData2() { 

    
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "WORLD";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);

        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
throw new Error(request1.status);
}      


async function getData3() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "POLITICS";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
throw new Error(request2.status);
}      

async function getData4() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "MAGAZINE";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
      
throw new Error(request2.status);
}      

async function getData5() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "TECHNOLOGY";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
throw new Error(request2.status);
}      


async function getData6() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "SCIENCE";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);

        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
throw new Error(request2.status);
}      


      
async function getData7() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "HEALTH";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
      
throw new Error(request2.status);
}      

async function getData8() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "SPORTS";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
throw new Error(request2.status);
}      




async function getData9() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "ARTS";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);

        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
      
throw new Error(request2.status);
}      

async function getData10() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "FASHION";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
      
      
throw new Error(request2.status);
}      


async function getData11() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "FOOD";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
      
throw new Error(request2.status);
}      

async function getData12() { 
    let request2 = await fetch('https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=XrOlXBCLJqs4h2kgJgTdrKq6wEvu4COJ'); 
  
    let bottomDiv = document.createElement('div');
    if ((request2.status >= 200) && (request2.status <=300)) {
      let homeCard = await request2.json(); 
      for (let i=0; i<homeCard.results.length; i++){
        let card1 = document.createElement('div');
        card1.className = 'card card-sm-md-lg ';
        card1.id = "CardB"

        let ro1 = document.createElement('div');
        ro1.setAttribute('class', 'row row-sm-md-lg');

        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col col-sm-md-lg');

        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col-4 col-sm-md-lg');

        let card2 = document.createElement('div');
        card2.className = 'card card-sm-md-lg';

        

        let sect = document.createElement('h6');
        sect.className = 'section-card';
        sect.innerHTML = "TRAVEL";

        let title = document.createElement('h4');
        title.className = 'title-card';
        title.innerHTML = homeCard.results[i].title;

        let date = document.createElement('div');
        date.className = 'date-card';
        let dateElement = homeCard.results[i].created_date.slice(5,10).split("-");
        let newsMonth = dateElement[0];
        let newsDate = dateElement[1];

        function mon (){ 
       
        
        switch (true) {
          case (newsMonth == 1):
            return "January";
            break;
          case (newsMonth == 2):
            return "February";
            break;
          case (newsMonth == 3):
            return "March";
            break;
          case (newsMonth == 4):
            return "April";
            break;
          case (newsMonth == 5):
            return "May";
            break;
          case (newsMonth ==6):
            return "June";
            break;
          case (newsMonth == 7):
            return "July";
            break;
          case (newsMonth == 8):
            return "August";
            break;
          case (newsMonth == 9):
            return "September";
            break;
          case (newsMonth == 10):
            return "October";
            break;
            
          case (newsMonth == 11):
            return "November";
            break;
          case  (newsMonth == 12):
            return "December";
            break;
          default:
            return "invalid";
        }
      }
       
        date.innerHTML = newsDate + " " + mon(newsMonth);


        let abstract = document.createElement('div');
        abstract.className = 'abstract-card';
        abstract.innerHTML = homeCard.results[i].abstract;

        let readFurther = document.createElement('a');
        readFurther.setAttribute('class', 'continueReading');
        readFurther.innerHTML = "Continue reading";
        readFurther.href = homeCard.results[i].short_url;


        card2.append(sect, title, date, abstract, readFurther);

        col1.append(card2);


        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card card-md-lg');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'card-img-thumbnail');
        image.src = homeCard.results[i].multimedia[4].url;
        
        card3.append(image);

        col2.append(card3);

        ro1.append(col1,col2);
      
        card1.append(ro1);
        bottomDiv.append(card1);
    }
    masterDiv.innerHTML = "";
    masterDiv.append(nytTitle, navBar, bottomDiv);
  } 
      
   
      
throw new Error(request2.status);
}      

document.body.append(masterDiv);







