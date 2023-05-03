let menuVisible = false;

function showhideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function skillseffect(){
    var skills = document.getElementById("skills");
    var distane_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distane_skills >= 300){
        let ability = document.getElementsByClassName("progress");
        ability[0].classList.add("javascript");
        ability[1].classList.add("htmlcss");
        ability[2].classList.add("java");
        ability[3].classList.add("mysql");
        ability[4].classList.add("figma");
        ability[5].classList.add("communication");
        ability[6].classList.add("solving");
        ability[7].classList.add("creativity");
        ability[8].classList.add("teamwork");
        ability[9].classList.add("timemanagement");
    }
}

window.onscroll = function(){
    skillseffect();
} 