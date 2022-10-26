let nav = document.querySelector("nav");

let array1 = [
    "/img/fb.png",
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

let array2 = [
    "https://www.facebook.com/",
    "https://github.com/",
    "https://discord.com",
    "https://www.mozilla.org/fr/firefox/new/?utm_source=mozilla-fr&utm_medium=referral",
    "https://www.calendrier.com/",
    "https://mail.google.com",
    "https://www.google.fr/",
    "https://www.whatsapp.com/?lang=fr",
    "https://play.google.com/store/apps/details?id=photo.camera.hdcameras&hl=fr&gl=US",
    "https://www.messenger.com/",
    "https://www.tiktok.com/fr/",
    "https://www.amazon.fr/",
    "https://www.youtube.com/",
    "https://outlook.live.com/",
    "https://www.twitch.tv/"
];

let array3 = [
    'facebook',
    'gitHub',
    'discord',
    'mozilla',
    'calendrier',
    'google',
    'whatsapp',
    'photo',
    'messenger',
    'tiktok',
    'amazon',
    'youtube',
    'outlook',
    'twitch'
]

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
                image.style.transform = "scale(1.6)";
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


