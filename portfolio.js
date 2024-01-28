let tab = document.getElementById('about');
let tab1 = document.getElementById('education');
let tab2 = document.getElementById('skills');
let tab3 = document.getElementById('achievements');
let tab4 = document.getElementById('references');
console.log(tab1);

let h1 = document.querySelector('.heading1');
let c1 = document.querySelector('.border');
let h2 = document.querySelector('.heading2');
let c2 = document.querySelector('.content2');
let h3 = document.querySelector('.heading3');
let c3 = document.querySelector('.content3');


tab.addEventListener('click',(e)=>{
    tab.style.color = 'grey';
    tab2.style.color = 'white';
    tab1.style.color = 'white';
    tab3.style.color = 'white';
    tab4.style.color = 'white';

    h1.innerHTML = "Profile";
    c1.style.borderLeft = "2px  solid #40b783";
    c1.style.paddingLeft = "3%";
    c1.innerHTML = '<br>"There is no end to education. It is not that you read a book, pass an examination, and finish the education. The whole of life, from the moment you are born to the moment you die, is a process of learning."<br><br><br>Jiddu Krishnamurti.';
    h2.innerHTML = "A few words about me";
    c2.innerHTML = "<p><br>Until in my life , I change from active moments with a lot of variety, challenges and improvisations, to moments of traquility and stability, being difficult to stay in a place during a long time. I consider myself a tolerant and respectful person with open mind and quite honest. I really like to listen people stories and backgrounds and their different experiences around the world.</p><br><br>";
    h3.innerHTML = "Personal Details";
    c3.innerHTML = "<p>Name             :        Vansh Dhawan<br>Age              :        18<br>Date Of Birth    :        June 25, 2005<br>Father's Name    :        Kapil Dhawan<br>Mother's Name    :        Vandana Dhawan<br>Nationality      :        Indian<br>Languages Known  :        English, Hindi, Punjabi<br>Marital Status   :        Unmarried<br>Hobbies          :        Gaming, Travel, Music</p>";
})

tab1.addEventListener('click',(e)=>{
    tab1.style.color = 'grey';
    tab.style.color = 'white';
    tab2.style.color = 'white';
    tab3.style.color = 'white';
    tab4.style.color = 'white';

    h1.innerHTML = "Education";
    c1.style.border = "none";
    c1.style.padding = "0";
    c1.innerHTML = "<br>Primary Education : Vardhman International Public School<br><br>Secondary Education : Vardhman International Public School<br><br>Higher Education : Bachelor Of Infromation Technology (BTech : IT-BI)";
    h2.innerHTML = "";
    c2.innerHTML = "";
    h3.innerHTML = "";
    c3.innerHTML = "";

})


tab2.addEventListener('click',(e)=>{
    tab2.style.color = 'grey';
    tab.style.color = 'white';
    tab1.style.color = 'white';
    tab3.style.color = 'white';
    tab4.style.color = 'white';


    h1.innerHTML = "Skills";
    c1.style.border = "none";
    c1.style.padding = "0";
    c1.innerHTML = "";
    h2.innerHTML = "Technical Skills :-";
    c2.innerHTML = "<p>1.) Data Structure And Algorithms -> C++ and C<br>2.) Web Development -> HTML , CSS and JavaScript<br>3.) Competitive Programming -> C++ and C";
    h3.innerHTML = "Soft Skills :-";
    c3.innerHTML = "<p>1.) Good Communication<br> 2.) Fast Learner<br> 3.) Creative<br>4.) Stress Management";
})

tab3.addEventListener('click',(e)=>{
    tab3.style.color = 'grey';
    tab.style.color = 'white';
    tab1.style.color = 'white';
    tab2.style.color = 'white';
    tab4.style.color = 'white';



    h1.innerHTML = "Achievements";
    c1.style.border = "none";
    c1.style.padding = "0";
    c1.innerHTML = "<br>Cleared JEE MAINS<br> Percentile : 99.49 %ile<br>All India Rank : 5932<br>";
    h2.innerHTML = "";
    c2.innerHTML = "Got Indian Institute Of Information Technology, Allahabad (IIIT-A)";
    h3.innerHTML = "";
    c3.innerHTML = "12th Percentage : 94.2%<br>10th Percentage : 91.17%";

})

tab4.addEventListener('click',(e)=>{
    tab4.style.color = 'grey';
    tab.style.color = 'white';
    tab1.style.color = 'white';
    tab3.style.color = 'white';
    tab2.style.color = 'white';

    h1.innerHTML = "References";
    c1.style.border = "none";
    c1.style.padding = "0";
    c1.innerHTML = "";
    h2.innerHTML = "Professional References";
    c2.innerHTML = "<br>1.) Jane Doe<br><br>-Title: Senior Project Manager<br>- Company : ABC Corporation<br>- Email: jane.doe@email.com<br>- Phone: (555) 123-4567<br><br><br>2.) John Smith<br><br>- Title: Marketing Specialist<br>- Company: XYZ Marketing<br>- Email: john.smith@email.com<br>- Phone: (555) 987-6543<br><br><br>";
    h3.innerHTML = "Personal References";
    c3.innerHTML = "<br>1.) Professor Emily Johnson<br><br>- Relationship: Academic Advisor<br>- Email: emily.johnson@email.com<br>- Phone: (555) 111-2222<br><br><br>2.) Mary Johnson<br><br> - Relationship: Family Friend<br>- Email: mary.johnson@email.com<br>- Phone: (555) 333-4444<br><br><br>";

})
