import { createTitle } from "./functions";

const menus = [
    {
        name : "Zamin",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/292378505_171889371996240_1324336053329073844_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=M4ztXyH_xdoAX9YE_dF&tn=HINv3FwEsRXc_7Bv&_nc_ht=scontent.fbko4-1.fna&oh=00_AT8HqvHM-fTHkjno5wT-KDeW0oDGqvj62fiX7e24jMHOkQ&oe=62F3F3D4"
    },
    {
        name : "Tchiep Poulet",
        link : "https://scontent.fbko4-2.fna.fbcdn.net/v/t39.30808-6/297480189_178428434675667_7615958816903077419_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QiYopwYMtKgAX-xBfwn&_nc_ht=scontent.fbko4-2.fna&oh=00_AT-gO75pc5boa_kf_vb9QwRJc79tHosNDWVAd5gxQDiKOQ&oe=62F58182"
    },
    {
        name : "Tchiep Ananas",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/272059944_127214009797110_1445570484786842594_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IQiLVxor7MkAX-XoRHY&_nc_ht=scontent.fbko4-1.fna&oh=00_AT-ZT-ti1D8eZwmuuZWwWR4O4dwZfdqQG8dz_cYRz2zHKQ&oe=62F49D9D"
    },
    {
        name : "Attieke",
        link : "https://scontent.fbko4-2.fna.fbcdn.net/v/t39.30808-6/296586106_178213314697179_5628818894996567390_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oeB4vBdt3xkAX8yZ7Ea&_nc_ht=scontent.fbko4-2.fna&oh=00_AT9twy-OVV3dGxpsudRe6_DsgRRRh3e2iJVcKIXFuszSzA&oe=62F4D644"
    },
    {
        name : "Salade de legumes",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/271490247_124130983438746_9059170993344319916_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xfgL6SjcAF4AX8UTzO5&_nc_ht=scontent.fbko4-1.fna&oh=00_AT9Yj64vV9BYqe9YxvkIpK55w8TraROjM8yenpu8Dc711Q&oe=62F441D2"
    },
    {
        name : "Sauce legumes",
        link : "https://scontent.fbko4-2.fna.fbcdn.net/v/t39.30808-6/273207352_131634342688410_216272328655339041_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gEMM96duFZgAX-BYY56&_nc_ht=scontent.fbko4-2.fna&oh=00_AT-4sKfK7DwtP9boWXY6qkYTU-L6hGEn1BA9QYKKmWDaYQ&oe=62F3E7B8"
    },
    {
        name : "Soupe Legumes",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/295129149_175672901617887_4323055613426639661_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=saA3Q-80-uAAX8RqFF4&_nc_ht=scontent.fbko4-1.fna&oh=00_AT9AcPJutBIKYlZhnUtoh06wvoB29-ECeWsXyEWm1I5AHg&oe=62F400FA"
    },
    {
        name : "Sauces legumes",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/271443256_123807976804380_8097191196205376320_n.jpg?stp=dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c5byNVfeWWIAX_v-PvE&_nc_ht=scontent.fbko4-1.fna&oh=00_AT_cQJxW_UeieXWyuh6S5TnhtkbCF5Ynmw_mrAdCcYnYzA&oe=62F52E50"
    }
]

function createContent() {
    let divContent = document.createElement("div");
    divContent.classList.add("menus");

    for (const menu of menus) {
        let div = document.createElement("div");
        div.classList.add("menu","flex");

        let name = document.createElement("h3");
        name.innerText = menu.name;
        let img = document.createElement("img");
        img.src = menu.link;
        div.append(name,img);
        divContent.appendChild(div)
    }

    let text = document.createElement("p");
    text.innerText = "For more click ";
    let anchor = document.createElement("a");
    anchor.innerText = "here"
    anchor.setAttribute("href","https://www.facebook.com/mydietmali/");
    anchor.setAttribute("target","_blank");
    text.appendChild(anchor);
    text.innerHTML += ".";

    divContent.appendChild( text );
    return divContent;
}

export default function(){
    document.querySelector(".main").append(
        createTitle("Menu"),
        createContent(),
    )
}