document.addEventListener('DOMContentLoaded', function(event) {
    const githubRepos = document.getElementById("#github-repos");

    fetch('https://api.github.com/users/Scetch/repos?per_page=4&sort=updated')
        .then((response) => response.json())
        .then((repos) => {
            githubRepos.innerHTML = '';

            repos.forEach((repo) => {
                const element = document.createElement("a");
                element.setAttribute("href", repo.html_url);
                element.setAttribute("target", "_blank");
                element.className = "tile";
                element.innerHTML = `
                    <div class="pill">${repo.name}</div>
                    <div class="description">${repo.description ?? ""}</div>
                `;
            
                githubRepos.appendChild(element);
            });
        });
}); 