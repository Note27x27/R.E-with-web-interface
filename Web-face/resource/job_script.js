// latest jobs search bar

const input = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");
const tagsContainer = document.getElementById("tags");

const jobSuggestions = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Cybersecurity Analyst",
  "Cloud Engineer",
  "DevOps Engineer",
  "Mobile App Developer",
  "TCS",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Tech Mahindra",
  "LTIMindtree",
  "Cognizant",
  "Accenture",
  "Amazon",
  "Google",
  "Microsoft",
  "Oracle",
  "IBM",
  "JP Morgan Chase",
  "Adobe",
  "Persistent Systems",
  "Coforge",
  "L&T Technology Services"
];

let tags = [];

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  if (!query) {
    suggestionsBox.style.display = "none";
    return;
  }

  const filtered = jobSuggestions.filter(item =>
    item.toLowerCase().includes(query)
  );

  if (filtered.length) {
    suggestionsBox.style.display = "block";
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.textContent = item;
      div.classList.add("suggestion");
      div.addEventListener("click", () => addTag(item));
      suggestionsBox.appendChild(div);
    });
  } else {
    suggestionsBox.style.display = "none";
  }
});

function addTag(text) {
  if (!tags.includes(text)) {
    tags.push(text);

    const tagEl = document.createElement("div");
    tagEl.classList.add("tag");
    tagEl.innerHTML = `${text} <span>&times;</span>`;

    tagEl.querySelector("span").addEventListener("click", () => {
      tagsContainer.removeChild(tagEl);
      tags = tags.filter(t => t !== text);
    });

    tagsContainer.appendChild(tagEl);
  }
  input.value = "";
  suggestionsBox.style.display = "none";
}
