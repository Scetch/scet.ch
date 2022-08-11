// $(document).ready(function () {
//     // Load the GitHub repos from Github API V3
//     $.getJSON('https://api.github.com/users/Scetch/repos?per_page=5&sort=updated', function (repos) {
//         var section = $("#github-repos");

//         section.empty();

//         // Insert a new entry for each repository.
//         $(repos).each(function () {
//             var repo = $(`<a class="tile" href="${this.html_url}" target="_blank" aria-label="${this.name}"></a>`);
//             repo.append(`<div class="pill">${this.name}</div>`);
//             repo.append('<div class="description">' + this.description ? this.description : "" + '</div>');
//             section.append(repo);
//         });
//     });
// });


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

    // const element = document.createElement("a");
    // element.setAttribute("href", "bacon.com");
    // element.className = "tile";
    // element.innerHTML = `
    //     <div class="pill">Test</div>
    //     <div class="description">Description</div>
    // `;

    // githubRepos.appendChild(element);
}); 