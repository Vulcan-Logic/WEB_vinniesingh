/* 
    Project: Vinnie's Website
    Author: Vineet W. Singh 
    Start Date: 14/02/21
    Date of last edit: 14/2/21
*/

import { educationData, educationFooter } from "./data.js";

export const addSecEducation=()=>{
    const secEl=document.querySelector("#secEducation");
    const contentStS1=`
    <div class="row sectionHead">
        <div class="col-12">
            <h1 class="text-right hMainCol"> Education</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <ul>`;
    let contentStS2="";
    educationData.forEach(el=>{
        const colClass=el.certImg!==null?"col-12 col-md-8":"col-12";
        const contentStS2S1 = `
                <li>
                    <div class="row d-flex align-items-center secEduRow" id="${el.id}">
                        <div class="col-12 justify-content-start">
                                <h3>
                                    ${el.name} 
                                </h3>
                                <h4>
                                    ${el.institution}
                                </h4>    
                        </div>
                        <div class="${colClass}">
                            <p>
                            ${el.about}
                            </p>
                        </div>`;
        const contentStS2S2=el.certImg!==null?
                        `<div class="col-12 col-md-4 imgCol">   
                            <img class="siteCertImg" src="./assets/img/${el.certImg}" 
                                alt="${el.certImgAbout}"/>
                        </div>`:"";
                        
        const contentStS2S3=
                    `   <div class="col-2"> </div>
                        <div class="col-8"> <hr class="secEducationHr"> </div>
                        <div class="col-2"> </div>                        
                    </div>
                </li>`;   
        contentStS2+=contentStS2S1+contentStS2S2+contentStS2S3;
    });
    const contentStS3=`
            </ul>
            <h3 id="otherCourseInfo"> ${educationFooter} </h3>
            <hr />
        </div>
    </div>`;
    const contentSt=contentStS1+contentStS2+contentStS3;
    secEl.insertAdjacentHTML("afterbegin",contentSt);
};
