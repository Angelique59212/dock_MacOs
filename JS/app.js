let nav = document.querySelector("nav");

let array1 = ["/img/fb.png",
    "/img/git.png",
    "/img/discord.png",
    "/img/mozilla.png",
    "/img/calendar.png",
    "/img/gmail.png",
    "/img/google.png",
    "/img/whatsapp.png",
    "/img/picture.png",
    "/img/messenger.png",
    "/img/tiktok.png",
    "/img/amazon.png",
    "/img/youtube.png",
    "/img/outlook.png",
    "/img/twitch.png"



];
let array2 = ["https://www.google.fr","https://www.youtube.com/","https://www.google.fr"];

let array3 = ['infobulle1', 'infobulle2',  'infobulle3']

let Icons = function (array1, array2, array3) {
    this.array1 = array1;
    this.array2 = array2;
    this.array3 = array3;

    this.createIcons = function () {
        for (let i = 0; i < this.array1.length && this.array2.length && this.array3.length; i++) {
            let link = document.createElement("a");
            link.href = array2[i];

            let image = document.createElement("img");
            image.src = array1[i];
            image.title = array3[i];

            image.addEventListener("mouseover", ()=> {
                image.style.transform = "scale(1.4)";
                image.style.transition = "0.5s";
            })
            image.addEventListener("mouseleave", ()=> {
                image.style.transform = "scale(1)";
            })


            nav.append(link);
            link.append(image);
        }
    }
}

let logo = new Icons(array1, array2, array3);
logo.createIcons();


