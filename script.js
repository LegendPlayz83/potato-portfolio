const repolinks = {
    "Veekos " : "https://github.com/LegendPlayz83/Veekos",
    "Block of Light " : "https://github.com/LegendPlayz83/Block-of-Light",
    "Stream Forge " : "https://github.com/LegendPlayz83/StreamForge",
    "ESP-BLJ " : "https://github.com/LegendPlayz83/ESP-BLJ", 
    "Depth Rush " : "https://github.com/LegendPlayz83/Depth-Rush"
};

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    const titleText = project.querySelector("h2").textContent;
    const link = repolinks[titleText];
    if(link){
        const button = document.createElement("a");
        button.href = link;
        button.textContent = "View Repo";
        button.classList.add("repo-button");
        button.target = "_blank";
        project.appendChild(button);
    }
});