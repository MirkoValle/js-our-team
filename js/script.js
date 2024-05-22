const container = document.querySelector("section")

const team = [
    {
        namE: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        namE: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        namE: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        namE: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        namE: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        namE: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
];



for (const key in team) {
    let scheda = document.createElement("article");
    singleMember = team[key];

    let imgEl = document.createElement("img");
    imgEl.src = "./img/" + singleMember.img;
    scheda.appendChild(imgEl);

    let nameEl = document.createElement("h2");
    nameEl.append(singleMember.namE);
    scheda.appendChild(nameEl);


    let roleEl = document.createElement("p");
    roleEl.append(singleMember.role);
    scheda.appendChild(roleEl);

    container.appendChild(scheda);
}