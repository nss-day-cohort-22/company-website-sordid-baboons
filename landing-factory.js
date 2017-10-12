//array of objects containing images and associated info
const landingPagePics = [
    {
        animal: "Monkeys",
        picURL:"https://cdn.newsday.com/polopoly_fs/1.13214903.1489173536!/httpImage/image.png_gen/derivatives/display_960/image.png",
        alt: "Justin Beiber with monkey",
        caption: "Belieb...you need a monkey"
    },
    {
        animal: "Tigers",
        picURL:"https://cdn.newsday.com/polopoly_fs/1.13205510.1489167217!/httpImage/image.jpg_gen/derivatives/display_960/image.jpg",
        alt: "Mike Tyson with a baby tiger",
        caption: "Nothing says class like walkling a tiger into an alley."
    },
    {
        animal: "Lions",
        picURL:"https://cdn.newsday.com/polopoly_fs/1.13215143.1489167309!/httpImage/image.png_gen/derivatives/display_960/image.png",
        alt: "Tippi Hedron getting dunked by a lion",
        caption: "Lions are excellent about letting you know when they need alone time."
    }
]

const coupons = [//coupons array of objects
    {
        name: "New NFL Contract Special",
        text: "30% Off for Newly Signed NFL Players ",
        subtext: "Because there's no way you'll ever go broke"
    }
];

const couponsDB = {//coupons to be sent to storage
    "coupon": coupons
};

const picsDB = {//object to be sent to browser storage
    "pics": landingPagePics
};

const couponsDBstring = JSON.stringify(couponsDB); //converts object to string for storage
localStorage.setItem("couponsDataBase", couponsDBstring); //push to storage

const picsDBstring = JSON.stringify(picsDB); //converts object to string for storage
localStorage.setItem("picsDataBase", picsDBstring); //push to storage

