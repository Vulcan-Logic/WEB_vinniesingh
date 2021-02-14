/* 
    Project: Vinnie's Website
    Author: Vineet W. Singh 
    Start Date: 14/02/21
    Date of last edit: 14/2/21
*/
import { webContentArray, dataContentArray, portfolioWebData, portfolioDSdata } from "./data.js";

export const addSecPortfolio=()=>{
    const secEl=document.querySelector("#secPortfolio");
    const contentStS1=`
    <div class="row sectionHead">
        <div class="col-12">
            <h1 class="text-right hMainCol"> Portfolio</h1>
        </div>
        <div class="col-12">
            <div class="row align-items-start">
                <div class="col-12 col-md-6 portCont">
                    <h3> Web Development </h3>
                    <ol>`;
    let contentStS2="";
    webContentArray.forEach(el=>{
        contentStS2+=` <li> <a href="#${el.href}"> ${el.title} </a></li>`;
    });
    const contentStS3 = `
                    </ol>
                </div>
                <div class="col-12 col-md-6 portCont">
                    <h3> Data Science</h3>
                    <ol>`;
    let contentStS4="";
    dataContentArray.forEach(el=>{
        contentStS4+=` <li> <a href="#${el.href}"> ${el.title} </a></li>`;
    });    
    const contentStS5=`
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 secPortfolioCol">
            <h3 class="secPortfolio">Web Development</h3>
            <ul class="secPortfolio"> `;    
    const contentStS6=getSubSecPortfolio("web");
    const contentStS7=`
            </ul>
            <h2 class="secPortfolio">Data Science</h2>
            <ul class="secPortfolio">`;
    const contentStS8=getSubSecPortfolio("data");
    const contentStS9=`            
            </ul>
        </div>
    </div>`;
    const contentSt=contentStS1+contentStS2+contentStS3+contentStS4+contentStS5+contentStS6+contentStS7+contentStS8+contentStS9;
    secEl.insertAdjacentHTML("afterbegin",contentSt);
};

const getSubSecPortfolio=typeP=>{
    let contentSt="";
    const processArray=typeP==="web"?portfolioWebData:portfolioDSdata;
    processArray.forEach(el=>{
        const colClass=el.siteCrtImg!==null?"col-12 col-md-8":"col-12";
        const contentStS1=
                `<li>
                    <div class="row" id="${el.id}">
                        <div class="col-12">
                                <h4>${el.title}</h4>`;
        const contentStS2=el.site!==null?`
                             <a href="${el.site}"> ${el.siteTitle}</a>`:"";
        const contentStS3=      
                        `</div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p> ${el.about}</p>
                        </div>
                        <div class="${colClass}">
                            <div> 
                                    <h4>Status.</h4> 
                                    <p>${el.status}</p>
                            </div>
                            <div>
                                <span class="githubSpan">
                                    <h4>Repo:</h4> 
                                    <a href="https://github.com/Vulcan-Logic/${el.repo}">
                                        <img src="./assets/img/GitHub-Mark-120px-plus.png" 
                                            alt="Github Logo" width="45px" height="auto"/>
                                    </a>
                                </span>
                            </div>
                        </div>
                        `;                            
        const contentStS4=el.siteCrtImg!==null?
                                ` <div class="col-12 col-md-4 imgCol">
                                    <a href="${el.site}">
                                        <img class="siteCertImg" src="./assets/img/${el.siteCrtImg}" 
                                            alt="${el.siteCrtImgAlt}"/>
                                    </a>
                                    </div>`:"";
        const contentStS5=
                        `<div class="col-12">
                            <hr />
                        </div>
                    </div>
                </li>`;
        contentSt+=contentStS1+contentStS2+contentStS3+contentStS4+contentStS5;
    });
    return contentSt;
};





