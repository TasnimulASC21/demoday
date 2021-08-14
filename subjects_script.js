let singleton = {
    name: "Jhon Singleton - English Professor ",
    subject: "English",
    role: "Tutor",
    description: "A English Professor who has many accolades in the field is very meticulous with his teaching style",
    image: "images/singleton.png",
    color: 'red'
};

let ornn = {
    name: "Orrn - Fire below the Mountain ",
    champion_class: "Tank",
    role: "Toplaner",
    description: "This tanky toplaner likes to zone and threaten enimies with his ult during fights",
    image: 'Images/ornn.jpg',
    color: 'red'
};

let pyke = {
    name: "Pyke - The Ripper of the Blood Harbor ",
    champion_class: "Assasin",
    role: "Support",
    description: "This assasin likes to go invisiable and hook in order to land his one shot combo",
    image: 'Images/pyke.jpg',
    color: 'green'
};

let zoe = {
    name: "Zoe - The Aspect of Twilight ",
    champion_class: "Mage",
    role: "Midlaner",
    description: "This crafty mage likes to pick up spells and items that are dropped and give her enemies a taste of their own medicine",
    image: 'Images/zoe.jpg',
    color: 'pink'
};

let sett = {
    name: "Sett - The Boss ",
    champion_class: "Tank",
    role: "Toplaner",
    description: "This brawler likes to get in the enemy's face and stun them so as to zone them out of the fight, his ult and insane W shield help in that endeavor",
    image: 'Images/sett.png',
    color: 'black'

};


let tutor_list = [singleton, sett];

let divider = document.getElementById("add-stuff-here");

for (let i = 0; i < tutor_list.length; i++){
    let new_div = document.createElement("div");
    new_div.classList.add("flex");
    let move = tutor_list[i];
    let new_element = document.createElement("ul");
    new_element.style["color"] = move.color;

    let point0 = document.createElement("li");
    point0.innerHTML = "Name: " + move.name;
    new_element.append(point0);

    let point1 = document.createElement("li");
    point1.innerHTML = "Subject: " + move.subject;
    new_element.append(point1);

    let point2 = document.createElement("li");
    point2.innerHTML = "Role: " + move.role;
    new_element.append(point2);

    let point3 = document.createElement("li");
    point3.innerHTML = "Description: " + move.description;
    new_element.append(point3);
    
    let image = document.createElement("img");
    image.classList.add("img");
    image.src = move.image;
    new_div.appendChild(image)

    let x = document.createElement("hr");
    x.classList.add("breakline");
    new_div.appendChild(x);

    let y = document.createElement("hr");
    divider.appendChild(y);
    new_div.appendChild(new_element);

    divider.appendChild(new_div);
    
    // divider.appendChild(new_element);
    

    

}