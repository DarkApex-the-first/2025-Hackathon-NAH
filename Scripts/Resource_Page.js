document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".resources-grid-wrapper");

    fetch("Scripts/Resource_Page.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(resources => {
            // Map the resources to HTML and insert them into the container
            container.innerHTML = resources.map(resource => `
                <div class="resource-grid-item">
                    <div class="resource-wallpaper">
                        <img src="${resource.image}" alt="Resource Image" loading="lazy">
                        <i class="${resource.icon}"></i>   
                    </div>
                    <div class="resource-content">
                        <div class="resource-lang">${resource.language}</div>
                        <a class="course-title" href="${resource.link}" class="resource-title">${resource.title}</a>
                        <div class="course-length"><i class="fa-solid fa-clock"></i> ${resource.length}</div>
                        <div class="progress-count">${resource.progress}</div>
                        <div class="options"><i class="fa-solid fa-ellipsis"></i></div>
                    </div>
                </div>
            `).join("");

        })
        .catch(error => {
            console.error("Error loading resources:", error);
        });
});
