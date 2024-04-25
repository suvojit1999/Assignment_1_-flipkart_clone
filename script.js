let login = document.querySelector(".login")
let dropdownmenu = document.querySelector(".dropDownMenu")
let downarrowimg = document.querySelector(".downarrow img")

login.addEventListener("mouseenter", ()=>{
    console.log("hover working")
    downarrowimg.classList.add("rotate")
})
dropdownmenu.addEventListener("mouseenter", ()=>{
    console.log("hover working")
    downarrowimg.classList.add("rotate")
})
login.addEventListener("mouseleave", () => {
    console.log("mouse leave working");
    downarrowimg.classList.remove("rotate");
});
dropdownmenu.addEventListener("mouseleave", ()=>{
    console.log("hover working")
    downarrowimg.classList.remove("rotate")
})


let smallcard = Array.from(document.getElementsByClassName("small_card"));
smallcard.forEach(ele => {
    ele.addEventListener("mouseenter", ()=>{
        console.log("it's working... yeahhhh")
        ele.querySelector(".downarrow2 img").style.transform = "rotate(180deg)" 
    })
    ele.addEventListener("mouseleave", ()=>{
        console.log("it's reverse working... yeahhhh")
        ele.querySelector(".downarrow2 img").style.transform = "rotate(360deg)" 
    })
});

let count = 0
const changeBanner = () =>{
    let banner = Array.from(document.getElementsByClassName("banner"))
    if(count > 2){ 
        count = 0 
    }

    let count2 = count + 1
    if(count2 == 3){
        count2 = 0
    }

    let count3 = count + 2
    if (count3 >= 3) {
        count3 = count3 - 3;
    }

    let tx1, tx2, tx3;
    if(count == 0) {tx1 = 210; tx2 = -105 ; tx3 = -105}
    else if(count == 1) {tx1 = 105; tx2 = -210 ; tx3 = 105}
    else{tx1 = 0; tx2 = 0 ; tx3 = 0}

    banner[count].style.transform = `translateX(${tx1}%)`
    banner[count].style.position = "relative"; 
    banner[count].style.zIndex = "-20"; 
    banner[count2].style.transform = `translateX(${tx2}%)`
    banner[count2].style.position = "relative"; 
    banner[count2].style.zIndex = "-10";
    banner[count3].style.transform = `translateX(${tx3}%)`
    banner[count3].style.position = "relative";
    banner[count3].style.zIndex = "10"; 
    count++;
}

setInterval(changeBanner , 7000)

document.querySelector(".rightarrow").addEventListener("click", changeBanner)





function scrollCards(scrollAmount) {
    const card_container = document.querySelector(".card_container");
    card_container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

document.getElementById("scrollLeft").addEventListener("click", function() {
    scrollCards(-250); 
});
document.getElementById("scrollRight").addEventListener("click", function() {
    scrollCards(250); 
});


