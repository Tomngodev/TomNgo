const projects = [
  {
    title: "Portfolio Website",
    description: "Multi-page portfolio deployed with GitHub + Vercel.",
    tech: "HTML, CSS, Git",
    tags: ["web"],
    link: "project-1.html"
  },
  {
    title: "Coming Soon",
    description: "Next project will be added here.",
    tech: "",
    tags: ["web", "data", "cloud"],
    link: ""
  }
];

const container = document.getElementById("projects-container");
const searchInput = document.getElementById("search");
const chips = document.querySelectorAll(".chip");

let activeTag = "all";
let searchText = "";

function render(list){
  container.innerHTML = "";

  list.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    const tagsHtml = project.tags
      ? project.tags.map(t => `<span class="tag">${t.toUpperCase()}</span>`).join(" ")
      : "";

    card.innerHTML = `
      <div class="card-top">
        <h3>${project.title}</h3>
        <div class="tags">${tagsHtml}</div>
      </div>
      <p>${project.description}</p>
      ${project.tech ? `<p><b>Tech:</b> ${project.tech}</p>` : ""}
      ${project.link ? `<a class="btn" href="${project.link}">View Details</a>` : ""}
    `;

    container.appendChild(card);
  });
}

function applyFilters(){
  const filtered = projects.filter(p => {
    const matchesTag = activeTag === "all" ? true : (p.tags || []).includes(activeTag);
    const matchesSearch =
      (p.title + " " + p.description + " " + p.tech).toLowerCase().includes(searchText);
    return matchesTag && matchesSearch;
  });

  render(filtered);
}

// chip click
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeTag = chip.dataset.tag;
    applyFilters();
  });
});

// search input
searchInput.addEventListener("input", (e) => {
  searchText = e.target.value.trim().toLowerCase();
  applyFilters();
});

// first render
render(projects);

