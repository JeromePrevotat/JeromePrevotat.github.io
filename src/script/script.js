displayed = 0;

class Project{
    constructor(name, desc, url){
        this.name = name;
        this.desc = desc;
        this.url = url;
    }
}

const p1 = new Project("Bot Discord", "Bot Discord pour un jeu mobile retournant les caractéristiques et capacités des différents personnages en réponse aux commandes des utilisateurs","https://github.com/JeromePrevotat/SWDiscordBot");
const p2 = new Project("Portfolio","Portfolio fait avec Python et Django présentant mes projets persos stockés dans une DB SQL","https://github.com/JeromePrevotat/Portfolio");
const p3 = new Project("Messagerie Instantannée","Messagerie Instantannée en ligne dont les parties client et serveur sont faites en Python","https://github.com/JeromePrevotat/ProjectM");
arr_projects = [p1,p2,p3];

function update_project_info(displayed){
    document.getElementById("project-name").innerHTML = arr_projects[displayed].name;
    document.getElementById("project-desc").innerHTML = arr_projects[displayed].desc;
    document.getElementById("project-url").innerHTML = arr_projects[displayed].url;
}

function next_project(displayed){
    if (displayed < arr_projects.length - 1){
        displayed = displayed + 1;
    }
    else{
        displayed = 0
    }
    update_project_info(displayed);
    return displayed;
}

function previous_project(displayed){
    if (displayed > 0){
        displayed = displayed - 1;
    }
    else{
        displayed = arr_projects.length - 1;
    }
    update_project_info(displayed);
    return displayed;
}

const button_prev = document.getElementById("left-arrow");
const button_next = document.getElementById("right-arrow");
button_next.onclick = function(){displayed = next_project(displayed)};
button_prev.onclick = function (){displayed = previous_project(displayed)};
