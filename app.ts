// script.ts

// Function to save changes
function saveChanges() {
    const educationContent = document.getElementById("education")?.querySelector("p")?.innerHTML;
    const experienceContent = document.getElementById("experience")?.querySelector("p")?.innerHTML;
    const skillsContent = document.getElementById("skills")?.querySelector("p")?.innerHTML;
  
    if (educationContent && experienceContent && skillsContent) {
      localStorage.setItem("education", educationContent);
      localStorage.setItem("experience", experienceContent);
      localStorage.setItem("skills", skillsContent);
    }
  
    alert("Changes saved successfully!");
  }
  
  // Function to load saved changes from localStorage
  function loadChanges() {
    const savedEducation = localStorage.getItem("education");
    const savedExperience = localStorage.getItem("experience");
    const savedSkills = localStorage.getItem("skills");
  
    if (savedEducation) {
      document.getElementById("education")?.querySelector("p")?.innerHTML
    };
  
    if (savedExperience) {
      document.getElementById("experience")?.querySelector("p")?.innerHTML
    };
  
    if (savedSkills) {
      document.getElementById("skills")?.querySelector("p")?.innerHTML
    };
  }
  
  // Event listener to handle save button click
  document.getElementById("save-button")?.addEventListener("click", saveChanges);
  
  // Load saved content when the page loads
  window.addEventListener("load", loadChanges);
  


