/* 
    Project: Vinnie's Website
    Author: Vineet W. Singh 
    Start Date: 14/02/21
    Date of last edit: 14/2/21
*/
import { bannerHeading1, bannerHeading2, navListItems, profileData, profileHead, contactInfo } from "./data.js";

export const addBannerItems=()=>{
    const bannerEl = document.querySelector("#bannerHeadingCol");
    const contentSt = `<h1 class="text-center hBannerCol"> ${bannerHeading1}</h1>
    <hr class="hRule" />
    <h2 class="text-center hBannerCol nickName"> ${bannerHeading2}</h2>`;
    bannerEl.insertAdjacentHTML("afterbegin",contentSt);
};

export const addNavMenu=()=>{
    const menuColEl=document.querySelector("#bannerMenuCol");
    let contentSt="";
    navListItems.forEach(el=>{
        contentSt+=`
        <li>
        <a  class="menuItem" href="#${el.Location}" id="${el.id}"> ${el.Item} </a>
        </li>`;
    });
    contentSt="<ul>" + contentSt + "</ul>";
    menuColEl.insertAdjacentHTML("afterbegin",contentSt);
};

export const addSecProfile=()=>{
    const secEl=document.querySelector("#secProfile");
    const contentSt=` 
    <div class="row sectionHead" >
        <div class="col-12">
            <h2 class="text-center hMainCol"> 
                ${profileHead}
            </h2>
            <h1 class="text-right hMainCol"> Profile</h1>
        </div>
    </div>
    <div class="row sectionCont">
        <div class="col-12">
        ${profileData}
        <hr />
        </div>
    </div`;
    secEl.insertAdjacentHTML("afterbegin",contentSt);
};

export const addSecContact=()=>{
    const secEl=document.querySelector("#secContact");
    const contentSt=` 
    <div class="row sectionHead">
        <div class="col-12">
            <h1 class="text-right hMainCol"> Contact</h1>
        </div>
    </div>
    <div class="row sectionCont" id="contactRow">
        <div class="col-12" id="contactDetails"> 
            <div class="row">
                <div class="col-12">
                <h4>
                    ${contactInfo}
                </h4>
                </div>
            </div>
        </div>
    </div>`;
    secEl.insertAdjacentHTML("afterbegin",contentSt);
};