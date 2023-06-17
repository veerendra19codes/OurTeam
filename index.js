
//to check js file is connected to .html file and is working
//alert("working");


// array of names of persons
var names =["John Carmack","Linus Torvalds","Satya Nadella","Sundar Pichai","Jony Ive"];


//array of job position/title in the company
var titles =["Software Engineer","Software Engineer","Product Manager","Product Manager","UI/UX Designer"];


// storing introduction paragraphs of person in a short variable
var i1 = "John Carmack is a renowned software engineer and co-founder of id Software. He is known for his groundbreaking work in the development of influential video games such as Doom, Quake, and Wolfenstein 3D. Carmack has made significant contributions to the field of 3D graphics and game engines, revolutionizing the gaming industry.";
var i2 ="Linus Torvalds is a Finnish-American software engineer and creator of the Linux operating system. His development of the Linux kernel, an open-source project, has had a profound impact on the world of technology. Torvalds' work has fostered the growth of collaborative software development and has made Linux one of the most widely used operating systems today.";
var i3 ="Satya Nadella is an Indian-American business executive and the CEO of Microsoft. Since taking the helm in 2014, Nadella has focused on transforming Microsoft into a cloud-first, mobile-first company. Under his leadership, Microsoft has seen significant growth, expanded its product offerings, and embraced open-source initiatives.";
var i4 ="Sundar Pichai is an Indian-American business executive and the CEO of Google. He played a pivotal role in the development of Google's popular products, including Chrome, Chrome OS, and Android. Pichai is known for his leadership in driving innovation and growth at Google, and he has been instrumental in shaping the company's strategic direction.";
var i5 =" Sir Jony Ive is a British industrial designer and former Chief Design Officer at Apple. He played a crucial role in the design and development of iconic Apple products like the iPhone, iPod, and iMac. Ive's minimalist and user-centric design philosophy has made a significant impact on the consumer electronics industry."


//accessing introduction paragraphs of persons in short in an array
var intro = [i1,i2,i3,i4,i5];



//setting a initial array index
var arrayIndex = 0;


//when left.previous button is clicked
document.querySelector(".container .options .left").addEventListener("click", function() {
    arrayIndex--;
    if(arrayIndex < 0) {
        arrayIndex = names.length-1;
    }
    document.querySelector(".name").textContent=names[arrayIndex];
    document.querySelector(".image").src="images/image" + arrayIndex + ".png";

    document.querySelector(".title").textContent=titles[arrayIndex];
    document.querySelector(".introduction").textContent=intro[arrayIndex];

});


//when right/next button is clicked
document.querySelector(".container .options .right").addEventListener("click", function() {
    arrayIndex++;
    if(arrayIndex > names.length-1) {
        arrayIndex = 0;
    }
    document.querySelector(".name").textContent=names[arrayIndex];
    document.querySelector(".image").src="images/image" + arrayIndex + ".png";

    document.querySelector(".title").textContent=titles[arrayIndex];
    document.querySelector(".introduction").textContent=intro[arrayIndex];
    
});



// when surprise me button is clicked
document.querySelector(".random").addEventListener("click", function() {

    arrayIndex = Math.floor(Math.random()*5);
    document.querySelector(".name").textContent=names[arrayIndex];
    document.querySelector(".image").src="images/image" + arrayIndex + ".png";

    document.querySelector(".title").textContent=titles[arrayIndex];
    document.querySelector(".introduction").textContent=intro[arrayIndex];

});