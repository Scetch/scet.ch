document.addEventListener('DOMContentLoaded', function (event) {
    const githubRepos = document.getElementById("#github-repos");

    fetch('https://api.github.com/users/Scetch/repos?per_page=4&sort=updated')
        .then((response) => response.json())
        .then((repos) => {
            githubRepos.innerHTML = '';

            repos.forEach((repo) => {
                const tile = document.createElement("a");
                tile.className = "tile";
                tile.setAttribute("href", repo.html_url);
                tile.setAttribute("target", "_blank");

                const pill = document.createElement("div");
                pill.className = "pill";
                pill.innerText = repo.name;
                tile.appendChild(pill);

                const description = document.createElement("div");
                description.className = "description";
                description.innerText = repo.description ?? "";
                tile.appendChild(description);

                githubRepos.appendChild(tile);
            });
        });
});
