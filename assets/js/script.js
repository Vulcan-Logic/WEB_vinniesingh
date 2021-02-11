window.addEventListener('DOMContentLoaded',() => {
    let currentEl=0;
    const sections=Array.from(document.querySelectorAll("section"));
    const secArray=[];
    sections.forEach(el=>{
        secArray.push({
            section: el.id,
            position: el.offsetTop
        });
    });
    const anchors=Array.from(document.querySelectorAll(".menuItem"));
    anchors.forEach(el=> {
        el.addEventListener('click', ev=>{
            ev.preventDefault();
            const elem=ev.target;
            const href=elem.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;
            //add media queries here to cater to mobile phones in portrait mode 
            let phoneOffset=0; 
            window.scroll({
              top: offsetTop + 75,
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
                if ((curY>=secArray[ctr].position) && (curY<secArray[(ctr+1)].position)){
                    if (curY>secArray[ctr+1].position-UOffset)
                        //top position of next section is within the offset so switch to next element
                        newEl=ctr+1;
                    else //stick to the current element as the previous section is still on screen
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

