/* 
    Project: Vinnie's Website
    Author: Vineet W. Singh 
    Start Date: 13/02/21
    Date of last edit: 14/2/21
*/
    export const bannerHeading1 = "Vineet W. Singh";
    export const bannerHeading2 = "Vinnie";
    export const educationFooter = `
        AND over 30 other courses finished with Digital Equipment Corporation, National Instruments, Coursera, EdX, Udacity, Codacedemy &  Udemy. 
        Details of some courses and achievements can be found in the LinkedIn profile.`;
    export const contactInfo=`
    Phone: 0424-092-540
    <br/> Address: U 105, 5 Highmoor Av., Bayswater, VIC - 3153, AUSTRALIA
    <br/> Address: House 1054, Sector 4, Panchkula, Haryana - 134 112, INDIA
    <br/> I can be contacted through:  
        <span class="inline-flex align-items-center" >
            <a href="https://www.linkedin.com/in/vineet-singh-389a7b18/"> 
                <img id="lIn2" src="./assets/img/LI-Logo.png" 
                alt="LinkedIn Logo" width="110px" height="auto"/>
            </a>                                 
        </span>
    </br/>
    <br/> Code is on: 
        <span class="inline-flex">
            <a href="https://github.com/Vulcan-Logic">
                <img src="./assets/img/GitHub-Mark-120px-plus.png"
                alt="Github Logo" width="45px" height="auto"/> GitHub.com/Vulcan-Logic
            </a>
        </span>`;
    export const profileHead=`
    Autodidact, Philomath, Manufacturing enthusiast and Software developer`;

    export const navListItems=[
        {
            Item: "Profile",
            Location:"secProfile",
            id: "aProfile"
        },
        {
            Item: "Portfolio",
            Location:"secPortfolio",
            id: "aPortfolio"
        },
        {
            Item: "Education",
            Location:"secEducation",
            id:"aEducation"
        },
        {
            Item: "Contact",
            Location:"secContact",
            id:"aContact"
        }
    ];
    
    export const profileData=
    `<p> 
    For many years computer programming has been both a pastime and a tool I 
    have used extensively in the workplace. Some of the programmes and packages 
    I have used proficiently include: 
    </p>
    <ul style="list-style-type:circle">
        <li> COBOL, SQL, C, Java, R, Python, JavaScript (JS-ES6). </li>
        <li> MS-EXCEL.</li>
        <li> MATLAB.</li>
        <li> LABVIEW.</li>
        <li> AutoCAD, Pro-Engineer (Creo), CATIA.</li>
        <li> HTML 5, CSS 3.</li>
    </ul>                                        
    <p> Examples of how I have implemented many of these skills in the workplace include:
    <ul style="list-style-type:circle">
        <li> Increasing efficiency by programming and customising MS-Office products. </li>
        <li> Developing an application (using JAVA (SWING, JDBC) & PostgreSQL) for inventory management. </li>
        <li> Using MS-EXCEL to digitise inventory, and collect & analyze data to arrive at estimate for error in cost 
        estimates.</li>
        <li> Development of 3D models and drawings for use in technical development and manufacturing processes.</li>
    </ul>
    </p> I am a constant learner, as I believe it is important to keep up with new trends in computing so that I can keep 
    abreast of best practice. This is evidenced by: 
    </p>                                       
    <ul style="list-style-type:circle">
        <li> Attending online courses in Information technology as outlined in my profile on 
            <a href="https://www.linkedin.com/in/vineet-singh-389a7b18/"> 
                <img id="lIn2" src="./assets/img/LI-Logo.png" 
                    alt="LinkedIn Logo" width="110px" height="auto"/>
            </a> 
        </li>
        <li> Applying for and being accepted into the Junior Web Development programme conducted by Academy Xi and 
        Generation Australia. This programme has been extremely beneficial for me as it has increased my knowledge in HTML5, 
        CSS3, JavaScript and Agile skills, whilst also reminding me of the importance of behavioural and soft skills like 
        communication, collaboration and adaptability. </li>
    </ul>                                         
    <p> In Summary:
    I can write full stack web apps and I am looking towards specializing as a 
    full stack or data science software developer. The following is evidence of this ability:
    </p>
    <ul style="list-style-type:circle">
    <li> Current skill set of writing code in: <strong> 
    HTML5, CSS3, JavaScript ES6, SQL, Python (my preferred language) & R. </strong> </li> 
    <li> The use of libraries and frameworks including: <strong>
    REACT.js, REACT-Redux, Bootstrap 4, Node.js & Flask. </strong> </li> 
    <li> Extensive use of git and GitHub for storing, sharing and collaborating on code. </li> 
    <li> Use of relational databases including Oracle and PostgreSQL.  </li> 
    <li> Repair and reloading Windows & Linux on physical and virtual machines (cloud computing).</li> 
    <li> Familiarity with systems analysis & design methodologies including OOAD due to "software engineering education".</li> 
    <li> Familiarity with agile software development methodologies.</li> 
    </ul>
    `;

        export const webContentArray = [
        {href:"p1",title: "Vineet Singh's (This) Website"} ,
        {href:"p2", title: "Multi-page website, Electronics Repair Hub"},
        {href:"p3", title: "Single-page website, Electronics Repair Hub"},
        {href:"p4", title: "Multi-page website, Junior Web Development Course"},
        {href:"p5", title: "ES6 single-page website, JavaScript Course"},
        {href:"p6", title: "React single-page website, REACT Course"},
        {href:"p7", title: "Multi-page full stack web-app, Python-Flask"},
        {href:"p8", title: "Multi-page full stack web-app, Full stack web-app course"}
        ];
                                        
        export const dataContentArray=[
        {href:"d1", title: "Data analysis for tyrecompare.com.au"},
        {href:"d2", title: "Capstone project web-app, Data Science Specialisation"},
        {href:"d3", title: "Data products web-app, Data Science Specialisation"},
        {href:"d4", title: "Machine learning report, Data Science Specialisation"}
        ];

        export const portfolioWebData=[
        { 
            no:1,
            id:"p1",
            site: "#secPortfolio",
            siteTitle:"www.vinniesingh.me",
            title: "Single Page website for Vinnie Singh Portfolio",
            about: `This project was made to publish my personal profile and portfolio. 
            <br/> This portfolio lists programming tasks and projects
            that I have undertaken during the recent past and to demonstrate 
            the two different skill sets that I have been pursuing: <strong> Full stack 
            web application development and data science software development. </strong>    
            <br/>  Projects include those I have done on a freelance basis and those completed as part of my education. 
            I started on the current website to make it as a simple single page 
            web-app to highlight the profile and portfolio. 
            <br />
            The current website started as a simple single page using HTML 5, CSS 3, Bootstrap 4 classes and vanilla javascript.
            CSS has been used to customise the fonts, make the shadow and text effects and ensure responsiveness.
            Vanilla JavaScript is used to enable activation of menu links, smooth scrolling and proper margins on different 
            devices and to implement a scroll spy effect to update the links in the menu bar as the content is manually scrolled.`,
            status:`
            Currently under development. 
            <br/>
            In the first version, everything was hardcoded into a single 
            index.html page. 
            In the current version, the site was changed to dynamically 
            update the DOM using JavaScript and the content stored as data in JSON format in a hard-coded data file.
            An upcoming third version will convert this site into a
            full stack REACT web-app, using REACT 
            for UI implementation, Flask as the middleware and PostgreSQL as 
            the database engine.`,                                             
            repo:"WEB_vinniesingh",
            siteCrtImg:"vsEducation.png",
            siteCrtImgAlt:"vinnie singh's website image"
        },
        {
            no:2,
            id:"p2",
            repo:"electronicsrepairhub",
            siteCrtImg:"electronicsrepairhub.png",
            siteCrtImgAlt:"electronics repair hub website image",
            title: "Multi-page website developed for Sam Electrocomm Pty Ltd",
            site: "https://www.electronicsrepairhub.com.au",
            siteTitle:"www.electronicsrepairhub.com",
            about:`This is the third project that I have implemented as a freelancer. 
            Previously this project was a single page app, however, the client decided to expand to a multi-page. 
            To minimise time, and for consistency of design, 
            the first page was checked for responsiveness, then used as a template for all subsequent pages.
            HTML 5, CSS 3 and Bootstrap 4 classes were used to layout the design. The CSS was modified for various classes for 
            customisation and responsive design. 
            <br /> The additional pages (services/security equipment):
            <ul style="list-style-type:circle"> 
            <li>The content is laid out in cards generated by JavaScript, using stored data and dynamically added to the 
            DOM so that they can be rendered by the browser. </li>
            <li>Display a modal window that has content specific to the card that was selected. Javascript loads the modal 
            content dynamically and modifies the styles of the classes for responsiveness, this includes changes in 
            images and layout. </li>
            <li>The contact page has an active map, data from which is fetched from the openmaps website using it's API.</li>
            `,
            status:"Being maintained."
        },
        {
            no:3,
            id:"p3",
            repo:"erh",
            siteCrtImg:"erh.png",
            siteCrtImgAlt:"electronics repair hub single page website image",
            title: "Single-page website developed for Sam Electrocomm Pty Ltd",
            site: "https://vulcan-logic.github.io/erh/",
            siteTitle:"Visit Demo",
            about: `This was the second project that I implemented as a freelancer. 
            Never commercially deployed as the client changed their 
            mind and wanted a multi-page website that incorporated another 
            aspect of their business.
            <br/>
            This was the third single page site that was made using HTML 5, 
            CSS 3, Bootstrap4 and JS-ES6. Bootstrap carousel was used to display 
            images and scroll spy for updating the navigation links on the 
            navigation bar.   
            <br/>
            The background image on the main section changes every few seconds
            which was implemented using JS-ES6. Experimental use of the parallax effect with differential background scrolling 
            rate was made. CSS & JS-ES6 were used for responsiveness and to make the expansion and collapsing of cards on the 
            services page.  
            <br />
            The contact section has an active map, data from which is fetched
            from the openmaps website using it's API.`,
            status:"Developed but not deployed"
        },
        {   
            no:4,
            id:"p4",
            repo:"JWD_final_project",
            siteCrtImg:"jwd.png",
            siteCrtImgAlt:"junior web development final project website image",
            title: `Multi-page website as a Project for Junior Web Development 
            Bootcamp (Generation Australia in association with Academy-Xi)`,
            site: "https://vulcan-logic.github.io/JWD_final_project/",
            siteTitle:"Visit Demo",
            about:`Selected in September 2020, this was 
            an intensive bootcamp designed to help people in switching careers
            to Web Development. 
            <br/>
            Already familiar with HTML, CSS & JS, this course 
            helped me in many ways. It was a welcome refresher in good coding 
            practices, persistence, adaptability, communication and knowledge 
            (HTML5, CSS3, JS-ES6, Data Structures and algorithms). 
            <br/>
            Learning about wire-frame designs and agile methodologies in this 
            programme added another feather to my cap. This was a great opportunity to work in a 
            formal corporate-like environment which required practice of   
            communication 
            co-operation, sharing, collaboration and working on tasks with course mates. 
            Helping others during the course was a great learning and teaching exercise. 
            <br />
            The course also encouraged the use of git and git-hub regularly 
            which I had used off and on in the past but not in 
            a regular fashion. Working with others in resolving merge issues
            in git was a good learning exercise. 
            <br />
            In technical terms, the site is a simple multi-page site that 
            uses HTML 5 CSS3, Bootstrap 4 classes and JS-ES6. It uses local storage which I had not directly used in the 
            past.`,
            status:"Developed, submitted, graded and closed."
        },
        {
            no:5,
            id:"p5",
            repo:"WEB_Udemy_JavaScript",
            siteCrtImg:"udemy.png",
            siteCrtImgAlt:"udemy course website image",
            title: "Single-page website (Jonas Schmedtmann's JavaScript Course on Udemy)",
            site: "https://vulcan-logic.github.io/WEB_Udemy_JavaScript/",
            siteTitle:"Visit Demo",
            about:`This course was purchased to refresh my knowledge of JavaScript. 
            ES6 concepts including object oriented JS, scoping, fat arrow functions, comprehensions, 
            promises, arrays etc were visited on and learnt.
            <br/> In building this website by following the course, I got 
            to know of all the key JS-ES6 concepts that are being used by 
            frameworks like REACT, ANGULAR and Node.js. 
            <br /> This is a single page website that uses just a skeleton
            index.html file. Everything else is dynamically generated by 
            JS-ES6 with data fetched from remote sites by using axios API. 
            <br /> Making this site also clarified a lot of practices that were used in making the REACT website which was made 
            just before doing this course and making this site.`,
            status:"Developed and closed."
        },
        {
            no:6,
            id:"p6",
            repo:"WEB_HKU_React",
            siteCrtImg:"react.png",
            siteCrtImgAlt:"react web app image",
            title: `Single-page REACT full stack web-app (The Hong Kong University of Science 
            and Technology in association with Coursera) <a href='#certReact'> Certificate image </a>`,
            site: "https://vulcan-logic.github.io/WEB_HKU_React/",
            siteTitle:"Visit Demo",
            about: `I enrolled in this course to get to know REACT and JS UI frameworks.
            It was a first exposure to advanced JavaScript and the first 
            brush with JS-ES6 concepts like fat arrow functions etc.  
            This was also my first single-page web-app. 
            <br/> In building this website by following the course, I got 
            to know of the pattern used by single-page dynamically assembled
            JS-ES6 based web-apps. 
            <br/> 
            This course also introduced other REACT libraries like 
            REACT-REDUX, REACT-STRAP.`,
            status:"Developed, submitted, peer assessed and closed."
        },
        {
            no:7,
            id:"p7",
            repo:"WEB_flask_inventory_project",
            siteCrtImg:null,
            siteCrtImgAlt:null,
            title: "Full stack multi-page web-app for a closed business",
            site: null, 
            siteTitle:null,
            about: `I made this web-app to generate an SKU based on the category of 
            an item and a serial number associated with that category. It was possible to  add different categories 
            which would cascade under other categories. The logic was to start with the top 
            category and go further into categories stored within the 
            outer category and so on. 
            <br />
            This was based on the Udacity full stack web app that had been made
            earlier. Google appEngine had moved on to include the full flask
            environment and so flask was used to make the middleware for this app. 
            The database used was google-dataStore. 
            <br/>
            Developed with HTML, CSS, JavaScript, Python, Python-Flask(Jinja2), 
            this app was used for a few months until it was no longer needed. For financial reasons, it was taken offline. 
            The API used is deprecated and this project does not work.`,
            status:"Developed, used, deprecated and retired."
        },
        {
            no:8,
            id:"p8",
            repo:"WEB_flask_Udacity_appEngine",
            siteCrtImg:null,
            siteCrtImgAlt:null,
            title: `Multi-page full stack web-app (Full stack webapp development 
            course - Udacity)`,
            site: null, 
            siteTitle:null,
            about: `My first brush with developing web-sites and web-apps. I got to 
            know a lot about how to write full stack web-apps in doing this 
            course and building this web-app. This project was made for 
            hosting on google appEngine, probably one of the first PAAS 
            to be commercially offered. 
            <br/> 
            Building this project, updated my knowledge of HTML and introduced Python to me. 
            This project also introduced the use of cookies while authenticating users 
            and persisting session and user data.
            <br/>
            Python was used to write the middleware i.e. configuring the routing based on the URL, 
            accessing the dataStore to access, store & retrieve data,  using 
            Jinja2 for templating and dynamically constructing HTML files. 
            I had a lot of fun in building and deploying this project.`,
            status:"Developed, submitted, peer-assessed, deprecated and retired."
        }
    ];
    export const portfolioDSdata = [
        {   
            no:9,
            id:"d1",
            repo:"DS_tyre_compare",
            siteCrtImg:null,
            siteCrtImgAlt:null,
            title: "Data analysis and reporting task for tyrecompare.com.au",
            site: null, 
            siteTitle:null,
            about: `This was the first freelancing project that I did soon after 
            arriving in Australia. On meeting Matt Banks, the CEO of 
            tyrecompare.com.au, he offered to help me in getting started 
            commercially with data science. 
            <br />
            Access to data from his business was arranged which was analysed by writing a Rmd mixture 
            of markdown & R - runs in R-Studio) programme 
            that generated a PDF report. 
            <br />
            The programme filtered data rows, rejecting invalid data and 
            used the remaining rows to generate statistics like which 
            regions in Australia were generating the maximum inquiries for 
            the business and for which type of car tyres.`,
            status: "Developed and submitted."
        },
        {
            no:10,
            id:"d2",
            repo:"DSC10_Capstone_Project",
            siteCrtImg:"cp.png",
            siteCrtImgAlt:"data science capstone web app image",
            title: `Capstone Project for Data Science Specialisation (John Hopkins 
            University in association with Coursera <a href='#certData'> Certificate image </a>`,
            site: "https://vwsingh.shinyapps.io/capstoneProject/?_ga=2.133096462.1460294540.1612303728-308781024.1612303728", 
            siteTitle:"Visit Site",
            about:`A data centric web-app made with R and hosted on shinyapps.io 
            This web page analyses input phrase to predict possible next word. 
            It used all the knowledge and practice of R programming and statistics 
            that had been obtained after studying data science for almost 7 months. 
            <br/> A major accomplishment, completing this Data Science
            Specialzation wasn't an easy task and the Capstone Project was needless to say, a bit tough. 
            A good amount of reading, research and programming in R was done to be successful 
            in this project and ultimately in this specialization. 
            <br /> This web-app is an implementation of Katz Back-off Models 
            algorithm in Natural Language Programming to generate word 
            probabilities based on the processing of n-grams.`,
            status:"Developed, submitted, peer assessed and closed."
        },
        {
            no:11,
            id:"d3",
            repo:"DSC9W4",
            siteCrtImg:"dp.png",
            siteCrtImgAlt:"data products web app image",
            title: `Data Products Assignment for Data Science Specialisation 
            (John Hopkins University in association with Coursera)`,
            site: "https://vwsingh.shinyapps.io/shinyapp/?_ga=2.204467600.1460294540.1612303728-308781024.1612303728", 
            siteTitle:"Visit Site",
            about:`Data centric web-app made with R and hosted on shinyapps.io. 
            This was the first data-centric web-app that was made using R, R Studio and shinyapps.io. 
            Getting to know as to how to use R to make interactive data products, that could be 
            hosted on the internet was the goal of this assignment. 
         <br/> 
             No knowledge of HTML was required. R and R-Studio process 
             a specifically written R programme to generate the website which 
             can run on shinyapps.io, a platform made for running data-centric 
             web-apps written on R.`,
             status:"Developed, submitted, peer assessed and closed."
        },
        {
            no:12,
            id:"d4",
            repo:"DSC8W4_machine_learning",
            siteCrtImg:"ml.png",
            siteCrtImgAlt:"machine learning pdf report image",
            title: `Machine Learning for prediction assignment - Data Science 
            Specialisation  (John Hopkins University in association with Coursera)`,
            site: "https://rpubs.com/vwsingh/387638", 
            siteTitle:"Read report on rpubs.com",
            about:`This was an assignment that required using R and machine learning techniques and libraries 
            to make predictions based on data.`,
            status:"Developed, submitted, peer assessed and closed."
        }];

    export const educationData=[
        {   id:"diploma",
            name: "Honours Diploma in Systems Management.",
            institution: "National Institute of Inforamtion Technology (NIIT), INDIA - 1995.",
            certImg: null,
            certImgAbout:null,
            about: `A two year course that covered introduction to programming, elements of software 
            engineering and information technology systems analysis, design and implementation.`
        },
        {   id:"degree",
            name: "Bachelor of Science (Mathematics Honours).",
            institution: "University of London - 2007.",
            certImg: null,
            certImgAbout: null, 
            about: `Bachelor's degree in mathematics reading calculus, statistics, programming, 
            real analysis, software engineering, optimisation.`
        },
        {   id:"certData",
            name: "Data Science Specialization.",
            institution: "John Hopkins University through Coursera - 2018.",
            certImg: "Coursera NX9NMCQ3ZF6J.jpg",
            certImgAbout:"john hopkins university data science certificate",
            about: `A 10 course specialisation offered by John Hopkins University in association with 
            Coursera. Read R programming, Statistical Inference, Probability, 
            Regression Models, Machine Learning, Develoing Data Products. 
            Many of the assignments and course work can be accessed in repositories stored 
            the GitHub A/c. Some samples of work done in the course have been inclued in 
            the Portfolio Section above.`
        },
        {
            id:"certReact",
            name: "Certificate in React.",
            institution: "The Hong Kong University of Science & Technology through Coursera- 2020.",
            certImg: "Coursera QBNW59VEBPH4.jpg",
            certImgAbout:"Hong Kong University React certificate",
            about: `A part of the wep-apps specialisation, this course teaches about using the React.js framework for UI dynamic implementation.  
            A sample of the work done in the course have been showcased in the Portfolio Section above.`
        },
        {   id:"certJWD",
            name: "Certificate in Junior Web Development.",
            institution: "Academy Xi through Generation Australia - 2021.",
            certImg: "jwd3.png",
            certImgAbout: "Junior Web Developer certificate",
            about: `A 12 week full-time intensive boot camp designed to help people switching into or starting a career in Web Development.   
            HTML 5, CSS 3, JavaScript ES6, Bootstrap 4, Data Structures and algorithms and Agile methedologies were covered in this boot camp. 
            A sample of the work done in the course have been showcased in the Portfolio Section above.`
        }
    ];
