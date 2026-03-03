const projects = [
  {
    title: "Portfolio Website",
    description: "Multi-page portfolio deployed with GitHub + Vercel.",
    tech: "HTML, CSS, Git",
    link: "project-1.html"
  },
  {
    title: "Coming Soon",
    description: "Next project will be added here.",
    tech: "",
    link: ""
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><b>Tech:</b> ${project.tech}</p>
    ${project.link ? `<a class="btn" href="${project.link}">View Details</a>` : ""}
  `;

  container.appendChild(card);
});