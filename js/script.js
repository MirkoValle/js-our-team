const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
];



for (let index = 0; index < team.length; index++) {
    for (const key in team[index]) {
        console.log(key, team[index][key]);
    }
}