import {addSecPortfolio} from './addSecPortfolioContent.js';
import {addSecEducation} from './addSecEducationContent.js';
import {addBannerItems, addNavMenu, addSecProfile, addSecContact} from './addSecContent.js';


window.addEventListener('DOMContentLoaded',() => {
    addSecPortfolio();
    addSecEducation();
    addBannerItems();
    addNavMenu();
    addSecProfile();
    addSecContact();

    let currentEl=0;
    let deviceOffset=0;
    //get all sections
    const sections=Array.from(document.querySelectorAll("section"));
    //store name and position of sections in an array of objects
    const secArray=[];
    sections.forEach(el=>{
        secArray.push({
            section: el.id,
            position: el.offsetTop
        });
    });
    //get all anchors
    const anchors=Array.from(document.querySelectorAll(".menuItem"));
    //for top of the section to appear on top of different devices set device offset
    if (window.matchMedia('(min-width:280px) and (max-width:480px) and (max-height:855px) and (orientation:portrait)').matches)
        deviceOffset=-55;
    if (window.matchMedia('(min-width:280px) and (max-width:480px) and (max-height:740px) and (orientation:portrait)').matches)
        deviceOffset=-25;
    if (window.matchMedia('(min-width:280px) and (max-width:480px) and (max-height:680px) and (orientation:portrait)').matches)
        deviceOffset=-15;
    if (window.matchMedia('(min-width:280px) and (max-width:320px) and (max-height:570px) and (orientation:portrait)').matches)
        deviceOffset=-5;
    
    if (window.matchMedia('(min-width: 568px) and (max-width:896px) and (max-height: 540px) and (orientation:landscape)').matches)
        deviceOffset=-45;
    if (window.matchMedia('(min-width: 568px) and (max-width:896px) and (max-height: 375px) and (orientation:landscape)').matches)
        deviceOffset=-55;
    if (window.matchMedia('(min-width: 568px) and (max-width:896px) and (max-height: 360px) and (orientation:landscape)').matches)
        deviceOffset=-65;
        
    if (window.matchMedia('(min-width:600px) and (max-width:800px) and (orientation:portrait)').matches)
        deviceOffset=10;
    if (window.matchMedia('(min-width:960px) and (max-width:1280px) and (orientation:landscape)').matches)
        deviceOffset=5;
    //process an event listener for all anchors to enable smooth scrolling and 
    //device specific scrolling
    anchors.forEach(el=> {
        el.addEventListener('click', ev=>{
            console.log(deviceOffset);
            ev.preventDefault();
            const elem=ev.target;
            const href=elem.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;
            //add media queries here to cater to mobile phones in portrait mode 
            let phoneOffset=0; 
            window.scroll({
              top: offsetTop + 75 + deviceOffset,
              behavior: "smooth"
            }); 
            anchors.forEach(ele=>{
                if (ele.classList.contains("active")) ele.classList.remove("active");
                if (elem.id===ele.id) el.classList.add("active");
            });
        });
    });

    window.addEventListener('resize', ()=>{
        secArray.length=0;
        sections.forEach(el=>{
            secArray.push({
                section: el.id,
                position: el.offsetTop
            });
        });
        //for top of the section to appear on top oof different devices set device offset
        if (window.matchMedia('(min-width:280px) and (max-width:480px) and (max-height:855px) and (orientation:portrait)').matches)
        deviceOffset=-55;
        if (window.matchMedia('(min-width:280px) and (max-width:480px) and (max-height:740px) and (orientation:portrait)').matches)
            deviceOffset=-25;
        if (window.matchMedia('(min-width:280px) and (max-width:480px) and (max-height:680px) and (orientation:portrait)').matches)
            deviceOffset=-15;
        if (window.matchMedia('(min-width:280px) and (max-width:320px) and (max-height:570px) and (orientation:portrait)').matches)
            deviceOffset=-5;
        if (window.matchMedia('(min-width: 568px) and (max-width:896px) and (max-height: 540px) and (orientation:landscape)').matches)
        deviceOffset=-45;
        if (window.matchMedia('(min-width: 568px) and (max-width:896px) and (max-height: 375px) and (orientation:landscape)').matches)
        deviceOffset=-55;
        if (window.matchMedia('(min-width: 568px) and (max-width:896px) and (max-height: 360px) and (orientation:landscape)').matches)
            deviceOffset=-65;
        if (window.matchMedia('(min-width:600px) and (max-width:800px) and (orientation:portrait)').matches)
            deviceOffset=10;
        if (window.matchMedia('(min-width:960px) and (max-width:1280px) and (orientation:landscape)').matches)
            deviceOffset=5;
    });

    window.addEventListener('scroll', ev=>{
        let newEl=currentEl;
        const curY=window.pageYOffset;
        //get the offset trigger
        const UOffset = 125;
        //get top posiiton of various sections
        for(let ctr=0; ctr<secArray.length; ctr++){
            //check if we are not in the last section
            if (ctr<secArray.length-1) {
                //get the current section by comparing position of the top of the screen and postions of the sections
                if (((curY+UOffset)>=secArray[ctr].position) && (curY<secArray[(ctr+1)].position)){
                    newEl=ctr;
                //current element has been set break out of the loop
                break;
                }
            } else // already in the last section 
                newEl=secArray.length-1;
        }
        if (currentEl!==newEl){
            currentEl=newEl;
            anchors.forEach(el=>{
                if (el.classList.contains("active")) el.classList.remove("active");
                const elName = el.href.slice(el.href.indexOf('#')+1,el.href.length);
                if (elName===secArray[currentEl].section) el.classList.add("active");
            });
        }
    });
});

