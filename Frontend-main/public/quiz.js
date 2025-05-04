/*
TODO:
Incorporate REACT into this to make the website more dynamic what with UI design and creating
a more dynamic experience.
jQUERY stuff too maybe.
Fixed bugs
Make another finished message that's not a browser message. 
Instead of a finished message, add a results page that accesses the database

NOTES for Questions: Pricing, Basic Weather, Adverse Weather, and Walkability
*/

const questions = [
    {
        // Basic Weather
        question: "What type of weather do you prefer?",
        options: [
            { img: "images/cat", desc: "Temperate" },
            { img: "images/mountains", desc: "I love feeling the heat every single day" },
            { img: "images/onefortheroad", desc: "Mild weather with some sunshine" },
            { img: "images/mix", desc: "White snow falling from the sky" },
        ]
    },
    {
        question: "Pick a vacation destination!",
        options: [
            { img: "images/shoa_dead", desc: "A sunny beach town" },
            { img: "images/smiley", desc: "An urban city" },
            { img: "images/ThrowDown", desc: "A cozy forest cabin" },
            { img: "images/tokyodrifter", desc: "A remote mountain village" },
        ]
    },
    {
        question: "Pick an activity!",
        options: [
            { img: "images/wlf", desc: "Swimming in the ocean" },
            { img: "images/boxing", desc: "Skiing down snowy slopes" },
            { img: "images/kidsreturnbike", desc: "Skateboarding through the city" },
            { img: "images/election", desc: "Climbing or hiking outdoors" },
        ]
    },
    {
        // Adverse weather
        question: "Which of these weather conditions would be the worst to you?",
        options: [
            { img: "images/wlf", desc: "Heat waves" },
            { img: "images/boxing", desc: "Heavy snowstorms" },
            { img: "images/kidsreturnbike", desc: "Torrential rains" },
            { img: "images/election", desc: "Strong winds" },
        ]
    },
    {
        question: "How do you feel about possible adverse weather?",
        options: [
            { img: "images/kagemusha", desc: "I like to stay indoors" },
            { img: "images/rouge", desc: "I prepare with the appropriate gear and clothing" },
            { img: "images/implosison", desc: "It's an opportunity to experience something new" },
            { img: "images/lighthouse", desc: "I'll make plans around it" },
        ]
    },
    {
        question: "What types of clothes do you prefer?",
        options: [
            { img: "images/kagemusha", desc: "Long summer days with lots of sunshine" },
            { img: "images/rouge", desc: "The mild weather that comes with spring" },
            { img: "images/implosison", desc: "The cool air and changing leaves of autumn" },
            { img: "images/lighthouse", desc: "Winter" },
        ]
    },
    {
        // Pricing
        question: "What's your budget for your next trip?",
        options: [
            { img: "images/kagemusha", desc: "I like to save" },
            { img: "images/rouge", desc: "I'll spend money as long as I get value from the purchase" },
            { img: "images/implosison", desc: "I like to splurge on conveniences and comfort" },
            { img: "images/lighthouse", desc: "Money is not a factor" },
        ]
    },
    {
        question: "How important is the affordability of a destination to you?",
        options: [
            { img: "images/kagemusha", desc: "Very important" },
            { img: "images/rouge", desc: "A good balance between price and comfort" },
            { img: "images/implosison", desc: "I'll pay more for location and style" },
            { img: "images/lighthouse", desc: "Quality first, price later" },
        ]
    },
    {
        question: "How much do you usually spend while travelling or living?",
        options: [
            { img: "images/kagemusha", desc: "Essentials only" },
            { img: "images/rouge", desc: "I have a budget for the things I want to do" },
            { img: "images/implosison", desc: "I'll go out to dine and for fun" },
            { img: "images/lighthouse", desc: "I like to indulge in shopping and luxury" },
        ]
    },
    {
        // Walkability
        question: "What kind of environment is most appealing?",
        options: [
            { img: "images/kagemusha", desc: "A dense, walkable city" },
            { img: "images/rouge", desc: "Suburbia or a small town" },
            { img: "images/implosison", desc: "A rural place" },
            { img: "images/lighthouse", desc: "A neighborhood with a mix of walking and driving" },
        ]
    },
    {
        question: "How important is the ability to walk to destinations to you?",
        options: [
            { img: "images/kagemusha", desc: "Very important" },
            { img: "images/rouge", desc: "I'd like to walk but not to everything" },
            { img: "images/implosison", desc: "I don't mind driving to most locations" },
            { img: "images/lighthouse", desc: "I enjoy driving and open space" },
        ]
    },
    {
        question: "What's you most preferable daily commute?",
        options: [
            { img: "images/kagemusha", desc: "Public transport" },
            { img: "images/rouge", desc: "Walking" },
            { img: "images/implosison", desc: "Driving" },
            { img: "images/lighthouse", desc: "Biking or other similar means" },
        ]
    }
    
];

let currentQuestion = 0;
let progress = 0;
let userAnswers = [];

function retakeQuiz() {
    currentQuestion = 0;
    progress = 0;
    userAnswers = [];

    // Reset the progress bar height
    document.getElementById("progress-bar").style.height = `${progress}%`;

    document.getElementById("retakeButton").style.display = "none";

    // Hide results, show quiz
    document.getElementById("results-container").style.display = "none";
    document.querySelector(".personality__test").style.display = "block";

    // Reset button visibility
    document.getElementById("retakeButton").style.display = "none";
    document.getElementById("backButton").style.display = "none";

    // Re-enable answer buttons
    document.querySelectorAll(".option").forEach(button => {
        button.disabled = false;
    });

    updateQuiz();
}

function backButton() {
    document.querySelectorAll(".option").forEach(button => {
        button.disabled = false;
    });
    if (currentQuestion > 0) {
        currentQuestion--;
        progress = Math.max(progress - 8, 0); // Decrease progress
        updateQuiz();
    }
    if(currentQuestion == 0){
        progress = 0;
        document.getElementById("retakeButton").style.display = "none";
        updateQuiz();
    }
}

function selectAnswer(selectedIndex) {

    userAnswers.push(questions[currentQuestion].options[selectedIndex].desc); 

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        progress = Math.min(progress + 8, 100); // Increase progress
        updateQuiz();
    } else {
        // When on the last question, set progress to 100%
        progress = 100;
        document.getElementById("progress-bar").style.height = `${progress}%`; // Update height
        document.getElementById("retakeButton").style.display = "inline-block";
        document.getElementById("backButton").style.display = "inline-block";

        // Disable answer buttons when quiz is finished
        document.querySelectorAll(".option").forEach(button => {
            button.disabled = true;
        });

        document.querySelector(".personality__test").style.display = "none";
        document.getElementById("results-container").style.display = "block";

        // Generate results
        showResults();

    }
}

function updateQuiz() {
    const questionElement = document.querySelector(".question");
    const options = document.querySelectorAll(".option");

    // Update the question text
    questionElement.innerText = questions[currentQuestion].question;

    // Update images and descriptions for each option
    questions[currentQuestion].options.forEach((option, index) => {
        const imgElement = options[index].querySelector("img");
        const descElement = options[index].querySelector("p");
        const basePath = option.img;

        // Try PNG first, then JPG if PNG fails
        imgElement.src = basePath + ".png";
        imgElement.onerror = function () {
            imgElement.onerror = null; // Prevent infinite loop
            imgElement.src = basePath + ".jpg";
        };

        descElement.innerText = option.desc;
    });

    // Update the progress bar height based on current progress
    document.getElementById("progress-bar").style.height = `${progress}%`;

    // Show or hide the back button depending on the current question
    document.getElementById("backButton").style.display = currentQuestion > 0 ? "inline-block" : "none";
}

function showResults(){
    // basic weather vars
    let warm = 0;
    let cold = 0;
    let mild = 0;
    let hot = 0;
    
    // adverse weather vars
    let storm = 0;
    let snowstorm = 0;
    let heatwave = 0;
    let strong_winds = 0;
    let adverse = 0; 

    // pricing vars
    let cheap = 0;
    let moderate = 0;
    let costly = 0;
    let luxury = 0;

    // walk vars
    let walk = 0;
    let drive = 0;

    userAnswers.forEach(answer => {
    // Basic Weather
    if (answer == "Warm most of the time") warm++;
    else if (answer == "I love feeling the heat every single day") hot++;
    else if (answer == "Mild weather with some sunshine") mild++;
    else if (answer == "White snow falling from the sky") cold++;

    if (answer == "A sunny beach town") hot++;
    else if (answer == "An urban city") warm++;
    else if (answer == "A cozy forest cabin") mild++;
    else if (answer == "A remote mountain village") cold++;

    if (answer == "Swimming in the ocean") hot++;
    else if (answer == "Skiing down snowy slopes") cold++;
    else if (answer == "Skateboarding through the city") mild++;
    else if (answer == "Climbing or hiking outdoors") warm++;

    // Adverse Weather
    if (answer == "Heat waves") heatwave++;
    else if (answer == "Heavy snowstorms") snowstorm++;
    else if (answer == "Torrential rains") storm++;
    else if (answer == "Strong winds") strong_winds++;

    if (answer == "I like to stay indoors") adverse+=0;
    else if (answer == "I prepare with the appropriate gear and clothing") adverse++;
    else if (answer == "It's an opportunity to experience something new") adverse+=2;
    else if (answer == "I'll make plans around it") adverse+=.5;

    if (answer == "Tank top and shorts") hot++;
    else if (answer == "Warm, layered clothes") cold++;
    else if (answer == "A hoodie and jeans") warm++;
    else if (answer == "A windbreaker and boots") mild++;

    // Pricing
    if (answer == "I like to save") cheap++;
    else if (answer == "I'll spend money as long as I get value from the purchase") moderate++;
    else if (answer == "I like to splurge on conveniences and comfort") costly++;
    else if (answer == "Money is not a factor") luxury++;

    if (answer == "Very important") cheap++;
    else if (answer == "A good balance between price and comfort") moderate++;
    else if (answer == "I'll pay more for location and style") costly++;
    else if (answer == "Quality first, price later") luxury++;

    if (answer == "Essentials only") cheap++;
    else if (answer == "I have a budget for the things I want to do") moderate++;
    else if (answer == "I'll go out to dine and for fun") costly++;
    else if (answer == "I like to indulge in shopping and luxury") luxury++;

    // Walkability
    if (answer == "A dense, walkable city") walk++;
    else if (answer == "Suburbia or a small town") drive++;
    else if (answer == "A rural place") drive++;
    else if (answer == "A neighborhood with a mix of walking and driving"){ walk+=.5; drive+=.5; }

    if (answer == "Very important") walk++;
    else if (answer == "I'd like to walk but not to everything") walk+=.75;
    else if (answer == "I don't mind driving to most locations") drive++;
    else if (answer == "I enjoy driving and open space") drive++;

    if (answer == "Public transport") walk+=.5;
    else if (answer == "Walking") walk++;
    else if (answer == "Driving") drive++;
    else if (answer == "Biking or other similar means") walk+=.5;
    });

    let finalResult = "";
    let resultImage = "";
    

    if (warm > overcast && warm > mild && warm > mix) {
        finalResult = "You're best suited for a tropical destination!";
        resultImage = "images/tropical_image.jpg";
    } 
    else if (overcast > warm && overcast > mild && overcast > mix) {
        finalResult = "You'd thrive in cooler, overcast climates!";
        resultImage = "images/tropical_image.jpg";
    } 
    else if (mild > warm && mild > overcast && mild > mix) {
        finalResult = "You'd enjoy humid, mild environments!";
        resultImage = "images/tropical_image.jpg";
    } 
    else {
        finalResult = "You'd love the thrill of mix weather!";
        resultImage = "images/tropical_image.jpg";
    }

    document.getElementById("quizOutcome").innerText = finalResult;
    document.getElementById("quizOutcome").classList.add("show");

    document.querySelector("#results-container img").src = resultImage;
    document.querySelector("#results-container img").style.display = "block";
}
// Initialize quiz on page load
updateQuiz();
