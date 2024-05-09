let page1=document.getElementById('page-1');
let page2=document.getElementById('page-2');
let page3=document.getElementById('page-3');
let page4=document.getElementById('page-4');
let theme= document.getElementById('theme');
let body= document.getElementById('body');
let cube= document.getElementById('cube');
let home= document.getElementById('home');
let projects= document.getElementById('projects');
let skills= document.getElementById('skills');
// let msg= document.getElementById('msg');
let loding= document.getElementById('lprog');
let loderclass=document.getElementById('loader');
let comments= document.getElementById('comments');
let savebtn= document.getElementById('savebtn');
let details= document.querySelectorAll('.details');
let list= document.querySelectorAll('.list');
let isDark=localStorage.getItem('darkMode');
let gotop=document.getElementById('gotop');
let root = document.documentElement;
let loder;
let spanMaker;

if (document.readyState === 'loading') {
    body.style.overflow='hidden';
    loder=  setInterval(() => {
        // loding.style.accentColor=`rgb(56, 345, 34)`;
        loding.style.accentColor=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        // console.log(`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`)
        // console.log("window loading...")
    }, 1000);
    spanMaker= setInterval(() => {
        let span= document.createElement('span');
        span.style.top=`${Math.random()*100}vh`;
        span.style.left=`${Math.random()*100}%`;
        span.style.height=`${Math.random()*200}px`;
    span.style.width=`${Math.random()*200}px`;
    span.style.background=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    loderclass.appendChild(span)
    setTimeout(() => {
        loderclass.removeChild(span);
    }, 500);

}, 100);
}


window.addEventListener('scroll',()=>{
    if(scrollY >= 200){
        gotop.style.display='block';
        // console.log(scrollY)

    }
    else{
        gotop.style.display='none';

    }
    // console.log(scrollY);
})

gotop.addEventListener('click',()=>{
    window.scrollTo(0,0);
})
// window.addEventListener('load',load())
// document.addEventListener('DOMContentLoaded',load());
function load(){
    clearInterval(loder);
    clearInterval(spanMaker);
    loderclass.style.display='none';
    body.style.overflow='';

}

list.forEach(li =>{

    li.addEventListener('click',() => {
        details.forEach(e =>{
            e.style.display='none';
        });
        let detailsShow=li.querySelector('.details')
        detailsShow.style.display='block';
    });
    // li.addEventListener('mouseout',() => {
        //     details.forEach(e =>{
    //         e.style.display='none';
    //     });
    // });
})


home.style.background='linear-gradient(to right, rgba(255, 102, 0, 0.757),rgba(255, 0, 179, 0.659)90%)';
if (isDark === 'on'){
    theme.style.color='white';
    root.style.setProperty('--fcolor', 'white');
    root.style.setProperty('--bcolor', 'black');
}
else{
    theme.style.color='black';
    root.style.setProperty('--bcolor', 'white');
    root.style.setProperty('--fcolor', 'black');

}
theme.addEventListener('click',() => {
    let root = document.documentElement;
    let isDark=localStorage.getItem('darkMode');
    if(isDark === 'on'){
        theme.style.color='black';
        localStorage.removeItem('darkMode');
        root.style.setProperty('--bcolor', 'white');
        root.style.setProperty('--fcolor', 'black');
    }
    else{
        theme.style.color='white';
        localStorage.setItem('darkMode','on');
        root.style.setProperty('--fcolor', 'white');
        root.style.setProperty('--bcolor', 'black');
    }
})
home.addEventListener('click',()=>{
    // home --about-- page-4
    cube.style.transform="rotateY(270deg)";
    home.style.background='linear-gradient(to right, rgba(255, 102, 0, 0.757),rgba(255, 0, 179, 0.659)90%)';
    page4.style.height='';
    page4.style.overflow='';
    page3.style.height='100vh';
    page3.style.overflow='hidden';
    page2.style.height='100vh';
    page2.style.overflow='hidden';
    projects.style.background='';
    skills.style.background='';
    msg.style.background='';

})
projects.addEventListener('click',()=>{
    // projects --projects-- page-3
    cube.style.transform="rotateY(180deg)";
    projects.style.background='linear-gradient(to right, rgba(255, 102, 0, 0.757),rgba(255, 0, 179, 0.659)90%)';
    page3.style.height='';
    page3.style.overflow='';
    page4.style.height='100vh';
    page4.style.overflow='hidden';
    page2.style.height='100vh';
    page2.style.overflow='hidden';
    home.style.background='';
    skills.style.background='';
    msg.style.background='';
})
skills.addEventListener('click',()=>{
    // skills --skills-- page-2
    cube.style.transform="rotateY(90deg)";
    skills.style.background='linear-gradient(to right, rgba(255, 102, 0, 0.757),rgba(255, 0, 179, 0.659)90%)';
    page2.style.display='block';
    page2.style.height='';
    page2.style.overflow='';
    page4.style.height='100vh';
    page4.style.overflow='hidden';
    page3.style.height='100vh';
    page3.style.overflow='hidden';
    home.style.background='';
    projects.style.background='';
    msg.style.background='';
})
// msg.addEventListener('click',()=>{
//     cube.style.transform="rotateY(0deg)";
//     msg.style.background='linear-gradient(to right, rgba(255, 102, 0, 0.757),rgba(255, 0, 179, 0.659)90%)';
//     home.style.background='';
//     skills.style.background='';
//     projects.style.background='';
// })

savebtn.addEventListener('click',()=>{
    let text= document.getElementById('texts');
    let texts=text.value;
    let newPara = document.createElement('p');
    newPara.textContent=texts;
    comments.appendChild(newPara);
    text.value='';
})

