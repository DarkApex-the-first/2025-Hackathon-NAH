document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".resources-grid-wrapper");

    try {
        const response = await fetch("/Scripts/Resource_Page.json");

        const resources = await response.json();

        container.innerHTML = resources.map(resource => `
            <div class="resource-grid-item">
                <div class="resource-wallpaper">
                    <img src="${resource.image}" alt="Resource Image">
                    <i class="${resource.icon}"></i>   
                </div>
                <div class="resource-content">
                    <div class="resource-lang">${resource.language}</div>
                    <div class="course-title">${resource.title}</div>
                    <div class="course-length"><i class="fa-solid fa-clock"></i> ${resource.length}</div>
                    <div class="progress-count">${resource.progress}</div>
                    <div class="options"><i class="fa-solid fa-ellipsis"></i></div>
                </div>
            </div>
        `).join("");

    } catch (error) {
        console.error("Error loading resources:", error);
    }
});
