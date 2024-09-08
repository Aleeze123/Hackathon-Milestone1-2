// EDUCATION SECTION TOGGLE BUTTON
var toggleButtonEducation = document.getElementById("toggle-education");
var educationContainer = document.querySelector(".education-container");
toggleButtonEducation === null || toggleButtonEducation === void 0 ? void 0 : toggleButtonEducation.addEventListener("click", function () {
    if (educationContainer.style.display === "none" || !educationContainer.style.display) {
        educationContainer.style.display = "block";
        toggleButtonEducation.textContent = "Hide Education";
    }
    else {
        educationContainer.style.display = "none";
        toggleButtonEducation.textContent = "Show Education";
    }
});
// WORK EXPERIENCE SECTION TOGGLE BUTTON
var toggleButtonWork = document.getElementById("toggle-work");
var workExperienceContainer = document.querySelector(".work-experience-container");
toggleButtonWork === null || toggleButtonWork === void 0 ? void 0 : toggleButtonWork.addEventListener("click", function () {
    if (workExperienceContainer.style.display === "none" || !workExperienceContainer.style.display) {
        workExperienceContainer.style.display = "block";
        toggleButtonWork.textContent = "Hide Work Experience";
    }
    else {
        workExperienceContainer.style.display = "none";
        toggleButtonWork.textContent = "Show Work Experience";
    }
});
// SKILLS SECTION TOGGLE BUTTON
var toggleButtonSkills = document.getElementById("toggle-skills");
var skillsContainer = document.querySelector(".skills-container");
toggleButtonSkills === null || toggleButtonSkills === void 0 ? void 0 : toggleButtonSkills.addEventListener("click", function () {
    if (skillsContainer.style.display === "none" || !skillsContainer.style.display) {
        skillsContainer.style.display = "block";
        toggleButtonSkills.textContent = "Hide Skills";
    }
    else {
        skillsContainer.style.display = "none";
        toggleButtonSkills.textContent = "Show Skills";
    }
});
