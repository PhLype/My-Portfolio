const projects = {
    0: {
        name: "Editor De Imagens",
        links: {
            github: "https://github.com/PhLype/Editor-de-Imagens"
        },
        languages: ["Html", "Css", "JavaScript"],
        description: "Um simples projeto de edição de imagens."
    },
    1: {
        name: "Player de Música",
        links: {
            github: "https://github.com/PhLype/Music-Player"
        },
        languages: ["Html", "Css", "JavaScript"],
        description: "Player de música com javsacript puro"
    },
    2: {
        name: "To-Do List Classic",
        links: {
            github: "https://github.com/PhLype/To-Do-List-Classic"
        },
        languages: ["Html", "Css", "JavaScript"],
        description: "Um To-Do List no estilo clássico."
    },
    3: {
        name: "Sistema De Cadastro",
        links: {
            github: "https://github.com/PhLype/sistema-de-cadastro"
        },
        languages: ["Html", "Css", "JavaScript"],
        description: "Um simples sistema de cadastro."
    },
    4: {
        name: "Sistemas De Financeiro",
        links: {
            github: "https://github.com/PhLype/Sistema-Financeiro-Javascript-Puro"
        },
        languages: ["Html", "Css", "JavaScript"],
        description: "Criando simples sistema financeiro com javascript"
    },
    5: {
        name: "Website para Bot do Discord",
        links: {
            github: "https://github.com/voidlyp/Website-Bot-Discord"
        },
        languages: ["Html", "Css", "JavaScript"],
        description: "Como criar um bot para o discord."
    },
};

const cardProjects = document.querySelector(".projects");

for (let i = 0; i < 100; i++) {
    cardProjects.innerHTML += `
        <div class="card-projects">
            <div class="card-projects-title">
                <a href="${projects[i].links.github}">${projects[i].name}</a>
            </div>
            <div class="card-projects-languages">
                <ul>
                    <li><span>${projects[i].languages[0]}</span></li>
                    <li><span>${projects[i].languages[1]}</span></li>
                    <li><span>${projects[i].languages[2]}</span></li>
                </ul>
            </div>
            <div class="card-projects-description">
                <p>${projects[i].description}</p>
            </div>
        </div>
    `;
}