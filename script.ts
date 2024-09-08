// EDUCATION SECTION TOGGLE BUTTON

const toggleButtonEducation = document.getElementById("toggle-education") as HTMLButtonElement;
const educationContainer = document.querySelector(".education-container") as HTMLElement;

toggleButtonEducation?.addEventListener("click", () => {
    if (educationContainer.style.display === "none" || !educationContainer.style.display) {
        educationContainer.style.display = "block";
        toggleButtonEducation.textContent = "Hide Education";
    } else {
        educationContainer.style.display = "none";
        toggleButtonEducation.textContent = "Show Education";
    }
});

// WORK EXPERIENCE SECTION TOGGLE BUTTON

const toggleButtonWork = document.getElementById("toggle-work") as HTMLButtonElement;
const workExperienceContainer = document.querySelector(".work-experience-container") as HTMLElement;

toggleButtonWork?.addEventListener("click", () => {
    if (workExperienceContainer.style.display === "none" || !workExperienceContainer.style.display) {
        workExperienceContainer.style.display = "block";
        toggleButtonWork.textContent = "Hide Work Experience";
    } else {
        workExperienceContainer.style.display = "none";
        toggleButtonWork.textContent = "Show Work Experience";
    }
});

// SKILLS SECTION TOGGLE BUTTON

const toggleButtonSkills = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsContainer = document.querySelector(".skills-container") as HTMLElement;

toggleButtonSkills?.addEventListener("click", () => {
    if (skillsContainer.style.display === "none" || !skillsContainer.style.display) {
        skillsContainer.style.display = "block";
        toggleButtonSkills.textContent = "Hide Skills";
    } else {
        skillsContainer.style.display = "none";
        toggleButtonSkills.textContent = "Show Skills";
    }
});
