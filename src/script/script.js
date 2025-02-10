displayed = 0
arr_projects =[]

class Project{
    constructor(name, desc, url){
        this.name = name;
        this.desc = desc;
        this.url = url;
    }
}

const placeholder = new Project("This is a Placeholder", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima natus voluptatum incidunt cumque. Ullam velit natus iste asperiores ex culpa non! Laudantium officiis dicta quasi deserunt, consequuntur cumque enim nobis!","Points to nowhere");
const p1 = new Project("Bot Discord", "Bot Discord pour un jeu mobile retournant les caractéristiques et capacités des différents personnages récupérées via une API tierce en réponse aux différentes commandes des utilisateurs, le tout sous forme d'un embed pour une mise en forme claire et concise.","https://github.com/JeromePrevotat/SWDiscordBot");
const p2 = new Project("Portfolio","Portfolio fait avec Python et Django présentant mes projets personnels stockés dans une DB SQL.","https://github.com/JeromePrevotat/Portfolio");
const p3 = new Project("Messagerie Instantannée","Messagerie Instantannée en ligne dont les parties client et serveur sont faites en Python. Pas de voice, uniquement du texte. UI faite avec le module tkinter. Cela m'a introduit aux problèmes de queueing et programmation asynchrone.","https://github.com/JeromePrevotat/ProjectM");
arr_projects = [placeholder,p1,p2,p3];

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

function init_page(){
    update_project_info(displayed);
}

init_page();