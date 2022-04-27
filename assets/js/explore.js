///// First Tab /////
const foods = [
    {
        name: "A&W",
        location: "Petaling Jaya",
        rating: "⭐⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/3670c01d812f9e0dc3efc04f0b5b1cfb/w380-crop.png",
        category: "FAST FOOD RESTAURANT",
        service: "Dine-in · Drive-through · No-contact delivery",
        address: "No 9, Lorong Sultan, Pjs 52, 46000 PJ, Selangor",
        hours: "8am - 12am (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(3,417 Reviews)",
        phone: "03-7932 4533"
    },
    {
        name: "Empire Sushi",
        location: "1 Utama Shopping Centre",
        rating: "⭐⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/de02a336b2d2983caf1a45e6ccd62937/w380-crop.png",
        category: "SUSHI",
        service: "Sushi Takeaway",
        address: "1 Utama Shopping Centre, 1, Lebuh Bandar Utama PJ",
        hours: "11am - 8pm (Mon - Fri)",
        ratings: "4.0 ⭐⭐⭐⭐(7 Reviews)",
        phone: "03-8864 4733"
    },
    {
        name: "Ah Cheng Laksa",
        location: "NU Sentral",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/2cd3cf71024b9f8c4b5daeb25f8f434a/w380-crop.png",
        category: "RESTAURANT",
        service: "Dine-in · Takeaway",
        address: " LG-16, NU SENTRAL, KL Sentral",
        hours: "10am - 8pm (Mon - Fri)",
        ratings: "3.7 ⭐⭐⭐(76 Reviews)",
        phone: "013-957 2576"
    },
    {
        name: "Burger King",
        location: "Kuala Lumpur Sentral",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/50d27a0c78a15a18e3ae7eb6315066a8/w380-crop.png",
        category: "FAST FOOD RESTAURANT",
        service: "Dine-in · Takeaway · No-contact delivery",
        address: "Kl City Air Teminal, DH 3A, KL Sentral",
        hours: " 7am - 10pm (Mon - Fri)",
        ratings: "3.3 ⭐⭐⭐(380 Reviews)",
        phone: "03-3362 6526"
    },
    {
        name: "老招牌",
        location: "Sunway Velocity Mall",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/7438dc8c19c53c92bb284c46053c69f2/w380-crop.png",
        category: "CANTONESE RESTAURANT",
        service: "Dine-in · Takeaway · Delivery",
        address: "Sunway Velocity Mall, 2-04, Jln Cheras, 55100 KL",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "3.7 ⭐⭐⭐(155 Reviews)",
        phone: "03-2712 3066"
    },
    {
        name: "Dubuyo",
        location: "Nu Sentral",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/e9883263d6f52a06139b661bcb763645/w380-crop.png",
        category: "KOREAN RESTAURANT",
        service: "Dine-in · Takeaway · Delivery",
        address: "L4, 04, Level 04, Nu Sentral Shopping center",
        hours: "10am - 8am (Mon - Fri)",
        ratings: "3.5 ⭐⭐⭐(352 Reviews)",
        phone: "03-2276 1254"
    },
    {
        name: "Easy Heng",
        location: "Taman Ibu Kota",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/e6e07e83d310ea16f0a93d6b430f74b5/w380-crop.png",
        category: "RESTAURANT",
        service: "Dine-in · Drive-through · No-contact delivery",
        address: "G-36, 67, Jln Taman Ibu Kota, KL",
        hours: "8am - 12am (Mon - Fri)",
        ratings: "3.0 ⭐⭐⭐(8 Reviews)",
        phone: "03-6731 1452"
    },
    {
        name: "有間麵館",
        location: "Mid Valley City",
        rating: "⭐⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/81b684ef07e662581187fbc2e17fd3b6/w512.png",
        category: "RESTAURANT",
        service: "Dine-in · Takeaway · Delivery",
        address: "LG0-59, Mid Valley City, 58000 KL",
        hours: "8am - 12am (Mon - Fri)",
        ratings: "4.0 ⭐⭐⭐⭐(404 Reviews)",
        phone: "03-7932 4533"
    }
];

const beverages = [
    {
        name: "霸王茶姬",
        location: "Kepong Menjalara",
        rating: "⭐⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/f1a23716911382e33794c67eaad0a2da/w512.png",
        category: "CAFE",
        service: "Dine-in · Takeaway",
        address: "29, Jalan 11/62a, Bandar Menjalara, 52200 KL",
        hours: "10am - 11pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(229 Reviews)",
        phone: "03-7932 4533"
    },
    {
        name: "ABU ICE",
        location: "1 Utama Shopping Centre",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/26e7a146ed00cbd46b793630214e2dc0/w512.png",
        category: "CAFE",
        service: "Takeaway · No-contact delivery",
        address: "1 Utama Shopping Centre, PJ",
        hours: "7.45am - 9pm (Mon - Fri)",
        ratings: "3.8 ⭐⭐⭐(115 Reviews)",
        phone: "03-8864 4733"
    },
    {
        name: "BOOST JUICE",
        location: "Kompleks Sogo",
        rating: "⭐⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/57b84a41a4047b6a3357ad9632b07c6e/w512.png",
        category: "JUICE SHOP",
        service: "Dine-in · Takeaway · Delivery",
        address: " Kompleks Sogo, 50100 Kuala Lumpur.",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(42 Reviews)",
        phone: "013-957 2576"
    },
    {
        name: "CHATIME",
        location: "KL Sentral",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/43a5bfd60fbc465a758fe086c92af95d/w512.png",
        category: "CAFE",
        service: "Dine-in · Takeaway · Delivery",
        address: "Jalan Stesen Sentral 3, KL Sentral",
        hours: " 7am - 10pm (Mon - Fri)",
        ratings: "3.4 ⭐⭐⭐(36 Reviews)",
        phone: "03-7622 8542"
    },
    {
        name: "Llao Llao",
        location: "Nu Sentral",
        rating: "⭐⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/2b6d61d97593eed9859208ef36e98bde/w512.png",
        category: "FROZEN YOGURT SHOP",
        service: "Dine-in · Takeaway",
        address: "Kuala Lumpur Sentral, 50470 KL",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(53 Reviews)",
        phone: "03-6151 8581"
    },
    {
        name: "貢茶 GONG CHA",
        location: "Mid Valley City",
        rating: "⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/b78de85843aa9341b5c0083ab04959b9/w512.png",
        category: "BUBBLE TEA STORE",
        service: "Dine-in · Takeaway",
        address: "The Gardens Mall, Mid Valley City, 58000 KL",
        hours: "10am - 8am (Mon - Fri)",
        ratings: "3.6 ⭐⭐⭐(80 Reviews)",
        phone: "03-2284 9328"
    },
    {
        name: "YOMIE'S RICE X YOGURT",
        location: "Mid Valley City",
        rating: "⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/79ef9037998a6295972d666b77302737/w512.png",
        category: "FROZEN YOGURT SHOP",
        service: "Dine-in · Takeaway",
        address: "LG-K08B, The Gardens Mall, Mid Valley City",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "2.4 ⭐⭐(27 Reviews)",
        phone: "03-6731 1452"
    },
    {
        name: "STARBUCKS COFFEE",
        location: "Amcorp Mall",
        rating: "⭐⭐⭐⭐",
        img: "https://assets.sunwayvelocitymall.com/shops/ffc64dcf6a96268c4a1e4ab380af93ba/w512.png",
        category: "CAFE",
        service: "Dine-in · Takeaway",
        address: "G-01, Ground Floor, Amcorp Tower",
        hours: "8am - 8pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(193 Reviews)",
        phone: "03-7931 4019"
    },    
];

const shop = [
    {
        name: "Yamaha",
        location: "Kepong Menjalara",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/yamaha-md.jpg",
        category: "MOTORCYCLE DEALER",
        service: "Vehicle Purchasing & Repairing Services",
        address: "No 9, Lorong Sultan, Pjs 52, 46000 PJ, Selangor",
        hours: "10am - 11pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(229 Reviews)",
        phone: "03-7932 4533"
    },
    {
        name: "Popular Bookstore",
        location: "1 Utama Shopping Centre",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/Logo08Oct2018114210.jpg",
        category: "BOOKSTORE",
        service: "Purchasing Books",
        address: "1 Utama Shopping Centre, PJ",
        hours: "7.45am - 9pm (Mon - Fri)",
        ratings: "3.8 ⭐⭐⭐(115 Reviews)",
        phone: "03-8864 4733"
    },
    {
        name: "Asics",
        location: "Kompleks Sogo",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/asics_logo_desktop29Mar2017170154.jpg",
        category: "SHOE STORE",
        service: "Purchasing Shoe",
        address: " Kompleks Sogo, 50100 Kuala Lumpur.",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(42 Reviews)",
        phone: "013-957 2576"
    },
    {
        name: "Faber-Castell",
        location: "KL Sentral",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/faber-md.jpg",
        category: "PEN STORE",
        service: "Purchasing Stationery",
        address: "Jalan Stesen Sentral 3, KL Sentral",
        hours: " 7am - 10pm (Mon - Fri)",
        ratings: "3.4 ⭐⭐⭐(36 Reviews)",
        phone: "03-7622 8542"
    },
    {
        name: "LEGO®️ Certified Store",
        location: "Nu Sentral",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/Logo18Oct2018180805.jpg",
        category: "TOY STORE",
        service: "Purchasing Lego",
        address: "Kuala Lumpur Sentral, 50470 KL",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(53 Reviews)",
        phone: "03-6151 8581"
    },
    {
        name: "Mr D.I.Y.",
        location: "Mid Valley City",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/MrDIY_Logo_Desktop23Jan2018162407.jpg",
        category: "HOME IMPROVEMENT STORE",
        service: "Purchasing DIY Materials",
        address: "The Gardens Mall, Mid Valley City, 58000 KL",
        hours: "10am - 8am (Mon - Fri)",
        ratings: "3.6 ⭐⭐⭐(80 Reviews)",
        phone: "03-2284 9328"
    },
    {
        name: "Watsons",
        location: "Mid Valley City",
        rating: "⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/watson_logo_desktop28Sep2017121638.jpg",
        category: "PHARMACY",
        service: "Purchasing Medicine",
        address: "LG-K08B, The Gardens Mall, Mid Valley City",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "2.4 ⭐⭐(27 Reviews)",
        phone: "03-6731 1452"
    },
    {
        name: "AEON (Homes, Sports & Outdoor)",
        location: "Amcorp Mall",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/aeon-md.jpg",
        category: "SHOPPING MALL",
        service: "Purchsing Homes, Sports & Outdoor equipment",
        address: "G-01, Ground Floor, Amcorp Tower",
        hours: "8am - 8pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(193 Reviews)",
        phone: "03-7931 4019"
    }
];

const facility = [
    {
        name: "ExcelView Eye Specialist Centre",
        location: "Kepong Menjalara",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/logo16Nov2021085435.jpg",
        category: "LASIK SURGEON",
        service: "Eye Lasik",
        address: "No 9, Lorong Sultan, Pjs 52, 46000 PJ, Selangor",
        hours: "10am - 11pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(229 Reviews)",
        phone: "03-7932 4533"
    },
    {
        name: "Ai Home",
        location: "1 Utama Shopping Centre",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/LOGO22May2020145723.jpg",
        category: "SMART HOME",
        service: "Ai Home Equipment Shopping",
        address: "1 Utama Shopping Centre, PJ",
        hours: "7.45am - 9pm (Mon - Fri)",
        ratings: "3.8 ⭐⭐⭐(115 Reviews)",
        phone: "03-8864 4733"
    },
    {
        name: "Gintell",
        location: "Kompleks Sogo",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/gintell_logo_desktop25Aug2017110901.jpg",
        category: "MASSAGE SUPPLY STORE",
        service: "Body Massage",
        address: " Kompleks Sogo, 50100 Kuala Lumpur.",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(42 Reviews)",
        phone: "013-957 2576"
    },
    {
        name: "Alphamax",
        location: "KL Sentral",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/Alphamaxlogo_Desk25May2016170354.jpg",
        category: "SAFE & VAULT SHOP",
        service: "Safe & Vault",
        address: "Jalan Stesen Sentral 3, KL Sentral",
        hours: " 7am - 10pm (Mon - Fri)",
        ratings: "3.4 ⭐⭐⭐(36 Reviews)",
        phone: "03-7622 8542"
    },
    {
        name: "The Home+Care Shop",
        location: "Nu Sentral",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/the-home-care-shop_logo_desktop15Sep2015151632.jpg",
        category: "MEDICAL SUPPLY STORE",
        service: "Purchasing Home Care Equipment",
        address: "Kuala Lumpur Sentral, 50470 KL",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(53 Reviews)",
        phone: "03-6151 8581"
    },
    {
        name: "OPTICAL 88",
        location: "Mid Valley City",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/optical88_logo_desktop03May2016095323.jpg",
        category: "OPTICIAN",
        service: "Purchasing Spectacles",
        address: "The Gardens Mall, Mid Valley City, 58000 KL",
        hours: "10am - 8am (Mon - Fri)",
        ratings: "3.6 ⭐⭐⭐(80 Reviews)",
        phone: "03-2284 9328"
    },
    {
        name: "Focus Point Signature",
        location: "Mid Valley City",
        rating: "⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/focuspointsignature_logo_desktop26May2014155415.jpg",
        category: "OPTICIAN",
        service: "Purchasing Spectacles",
        address: "LG-K08B, The Gardens Mall, Mid Valley City",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "2.4 ⭐⭐(27 Reviews)",
        phone: "03-6731 1452"
    },
    {
        name: "Caring Pharmacy",
        location: "Amcorp Mall",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/caring-md.jpg",
        category: "PHARMACY",
        service: "Purchsing Medicines",
        address: "G-01, Ground Floor, Amcorp Tower",
        hours: "8am - 8pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(193 Reviews)",
        phone: "03-7931 4019"
    }
];

const entertainment = [
    {
        name: "Golden Screen Cinemas",
        location: "Kepong Menjalara",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/LOGO02Nov2020132332.jpg",
        category: "MOVIES",
        service: "Watching Movies",
        address: "No 9, Lorong Sultan, Pjs 52, 46000 PJ, Selangor",
        hours: "10am - 11pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(229 Reviews)",
        phone: "03-7932 4533"
    },
    {
        name: "Toys'R'Us",
        location: "1 Utama Shopping Centre",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/toysrus_logo_desktop23May2014104546.jpg",
        category: "TOYS",
        service: "Purchasing Toys",
        address: "1 Utama Shopping Centre, PJ",
        hours: "7.45am - 9pm (Mon - Fri)",
        ratings: "3.8 ⭐⭐⭐(115 Reviews)",
        phone: "03-8864 4733"
    },
    {
        name: "MPH Bookstores",
        location: "Kompleks Sogo",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/mph-md.jpg",
        category: "BOOKSTORE",
        service: "Purchasing Books",
        address: " Kompleks Sogo, 50100 Kuala Lumpur.",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(42 Reviews)",
        phone: "013-957 2576"
    },
    {
        name: "Popular Bookstore",
        location: "KL Sentral",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/Logo08Oct2018114210.jpg",
        category: "BOOKSTORE",
        service: "Purchasing Books",
        address: "Jalan Stesen Sentral 3, KL Sentral",
        hours: " 7am - 10pm (Mon - Fri)",
        ratings: "3.4 ⭐⭐⭐(36 Reviews)",
        phone: "03-7622 8542"
    },
    {
        name: "Gamer's Hideout",
        location: "Nu Sentral",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/Gamer'sHideout_LogoDesktop08Dec2015192343.jpg",
        category: "GAMING AND CONSOLE",
        service: "Purchasing Gaming Console",
        address: "Kuala Lumpur Sentral, 50470 KL",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "4.1 ⭐⭐⭐⭐(53 Reviews)",
        phone: "03-6151 8581"
    },
    {
        name: "LEGO®️ Certified Store",
        location: "Mid Valley City",
        rating: "⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/Logo18Oct2018180805.jpg",
        category: "LEGO",
        service: "Purchasing Lego",
        address: "The Gardens Mall, Mid Valley City, 58000 KL",
        hours: "10am - 8am (Mon - Fri)",
        ratings: "3.6 ⭐⭐⭐(80 Reviews)",
        phone: "03-2284 9328"
    },
    {
        name: "The Roof",
        location: "Mid Valley City",
        rating: "⭐⭐",
        img: "https://www.1utama.com.my/images/tenant/theRoof.jpg",
        category: "ENTERTAINMENT",
        service: "Entertainment",
        address: "LG-K08B, The Gardens Mall, Mid Valley City",
        hours: "10am - 10pm (Mon - Fri)",
        ratings: "2.4 ⭐⭐(27 Reviews)",
        phone: "03-6731 1452"
    },
    {
        name: "Fitness Concept",
        location: "Amcorp Mall",
        rating: "⭐⭐⭐⭐",
        img: "https://www.midvalley.com.my/img/tenant/fitnessconcept-md.jpg",
        category: "FITNESS",
        service: "Purchasing Fitness Equipment",
        address: "G-01, Ground Floor, Amcorp Tower",
        hours: "8am - 8pm (Mon - Fri)",
        ratings: "4.2 ⭐⭐⭐⭐(193 Reviews)",
        phone: "03-7931 4019"
    }
];

const obj = [foods, beverages, shop, facility, entertainment];

for(let j = 0; j < obj.length; j++){
    const array = obj[j];
    const explore_page = document.querySelector(`#tab-${j+1}`) ;
    for (let i = 0; i < array.length; i++) {
        const food = array[i];

        const div = document.createElement('div');
        div.classList.add('card', 'col-lg-3', 'col-md-4', 'col-sm-6');

        const div2 = document.createElement('div');
        div2.classList.add('card-body', 'text-center');

        const link = document.createElement('a');
        link.href = "#";
        link.classList.add('text-decoration-none');
        link.setAttribute('data-bs-toggle', 'modal');
        link.setAttribute('data-bs-target', `#exampleModal${j*10+i+1}`);

        const image = document.createElement('img');
        image.setAttribute('src', food.img);
        image.classList.add('card-img-top');

        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.textContent = food.name;

        const p = document.createElement('p');
        p.textContent = food.location;

        const rating = document.createElement('p');
        rating.textContent = food.rating;

        // Pop Up Model
        const div3 = document.createElement('div');
        div3.classList.add('modal', 'fade');
        div3.setAttribute('id', `exampleModal${j*10+i+1}`);
        div3.setAttribute('tabindex', '-1');
        div3.setAttribute('aria-labelledby', 'exampleModalLabel');
        div3.setAttribute('aria-hidden', 'true');

        const div4 = document.createElement('div');
        div4.classList.add('modal-dialog', 'modal-xl', 'modal-dialog-scrollable');

        const div5 = document.createElement('div');
        div5.classList.add('modal-content');

        const div6 = document.createElement('div');
        div6.classList.add('modal-header');

        const SECh5 = document.createElement('h5');
        SECh5.classList.add('modal-title');
        SECh5.setAttribute('id', 'exampleModalLabel');
        SECh5.textContent = food.category;

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('btn-close');
        button.setAttribute('data-bs-dismiss', 'modal');
        button.setAttribute('aria-label', 'Close');

        const div7 = document.createElement('div');
        div7.classList.add('modal-body', 'd-flex');

        const img = document.createElement('img');
        img.setAttribute('src', `${food.img}`);

        const div8 = document.createElement('div');
        div8.classList.add('tab');

        var x1 = document.createElement("BR");
        var x2 = document.createElement("BR");
        var x3 = document.createElement("BR");

        const h2 = document.createElement('h2');
        h2.textContent = food.name;

        const p2 = document.createElement('p');
        p2.textContent = `Service: ${food.service}`;

        const p3 = document.createElement('p');
        p3.textContent = `Address: ${food.address}`;

        const p4 = document.createElement('p');
        p4.textContent = `Hours: ${food.hours}`;

        const p5 = document.createElement('p');
        p5.textContent = `Ratings: ${food.ratings}`;

        const p6 = document.createElement('p');
        p6.textContent = `Phone: ${food.phone}`;

        const div9 = document.createElement('div');
        div9.classList.add('modal-footer');

        const button2 = document.createElement('button');
        button2.setAttribute('type', 'button');
        button2.classList.add('btn', 'btn-secondary');
        button2.setAttribute('data-bs-dismiss', 'modal');
        button2.textContent = "Close";

        // Append Children Node
        link.append(image, h5, p, rating);
        div2.appendChild(link);
        div.appendChild(div2);
        
        // Append Children Node for Pop Up Model
        div8.append(x1, x2, x3, h2, p2, p3, p4, p5, p6);
        div6.append(SECh5, button);
        div7.append(img, div8);
        div9.appendChild(button2);
        div5.append(div6, div7, div9);
        div4.appendChild(div5);
        div3.appendChild(div4);
        
        // Append All Children
        explore_page.append(div, div3);
    }
}


///// Second Tab /////
const sports = [
    {
        name: "Gymnasium",
        location: "A-03-G1",
        img: "https://media.istockphoto.com/photos/modern-gym-picture-id492061477?k=20&m=492061477&s=612x612&w=0&h=b_r1Ydu6FolOFQjV7INSIM0fOqO7HCQfUJx-Zb1QXP4=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Under Maintenance",
    },
    {
        name: "Swimming Pool",
        location: "A-03-S1",
        img: "https://media.istockphoto.com/photos/swimming-pool-accented-with-a-waterfall-picture-id134108091?k=20&m=134108091&s=612x612&w=0&h=It4OD29epLpx3glQlVAckdezTu7dmdt-Ei3XoHfeFVw=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Under Maintenance",
    },
    {
        name: "Badminton Court",
        location: "C-03-B1",
        img: "https://media.istockphoto.com/photos/aerial-view-of-badminton-court-inside-condominium-picture-id827338538?k=20&m=827338538&s=612x612&w=0&h=YiPWcdlZF4nw-5Kr_xhQs7IHLGxFLSLi0GOZ0Ky2hxM=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Opened",
    },
    {
        name: "Golf Course",
        location: "B-03-O1",
        img: "https://media.istockphoto.com/photos/golf-course-in-autumn-at-sunset-picture-id118442928?k=20&m=118442928&s=612x612&w=0&h=jmz9s_qelnfUU57jnSMqgkHi53HbZOLC3mo2LaQyBMw=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Closed",
    },
    {
        name: "Jogging Track",
        location: "A-03-J1",
        img: "https://media.istockphoto.com/photos/track-and-field-training-lanes-picture-id92206727?k=20&m=92206727&s=612x612&w=0&h=I3MVf9LQyYyawdDtXnsF7jsA_P1aMiA3h9AcVw4y0B4=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Opened",
    },
    {
        name: "Tennis Court",
        location: "B-03-T1",
        img: "https://media.istockphoto.com/photos/small-blue-asphalt-neighborhood-tennis-court-surrounded-by-green-picture-id1015585614?k=20&m=1015585614&s=612x612&w=0&h=S0cueZZuaGYeN3Ceo0g1Wt2VALxkH-xb1uITd69S4_w=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Opened",
    },
    {
        name: "Football Pitch",
        location: "C-03-F1",
        img: "https://media.istockphoto.com/photos/fiftyyard-line-of-football-field-at-night-picture-id160197981?k=20&m=160197981&s=612x612&w=0&h=uJ_PF8K5QdB9DphNKlpEj6GifVg_osn64mimZyIXwkI=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Closed",
    },
    {
        name: "Basketball Court",
        location: "A-03-K1",
        img: "https://media.istockphoto.com/photos/portrait-of-gym-and-parquet-basketball-court-picture-id1203692557?k=20&m=1203692557&s=612x612&w=0&h=iwwQ5myVlXd5uaXxsB0dobfAXBzZBkMw_Jc1eEOgCcc=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Under Maintenance",
    }
];

const leisure = [
    {
        name: "Playground",
        location: "C-03-A1",
        img: "https://media.istockphoto.com/photos/colorful-playground-equipment-picture-id898182848?k=20&m=898182848&s=612x612&w=0&h=LR0SnWTuQrEJGMaipiC8MP6dhF6GHpO3vOrQlquZnQE=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Under Maintenance",
    },
    {
        name: "Park",
        location: "A-03-P1",
        img: "https://media.istockphoto.com/photos/the-parks-meadows-and-thick-woods-under-the-clear-sky-in-spring-picture-id1211975936?k=20&m=1211975936&s=612x612&w=0&h=DvSUQJ_ZI9yw8c0VN9FxRv73RIZ6v1RBqrlM6Uctf2c=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Opened",
    },
    {
        name: "BBQ Area",
        location: "A-03-Q1",
        img: "https://media.istockphoto.com/photos/backyard-hardscape-patio-with-outdoor-barbecue-and-kitchen-picture-id1211179492?k=20&m=1211179492&s=612x612&w=0&h=iB47qirdN4imGek4cb7btNl8eG58yxoiGGdTa8JkWn8=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Closed",
    },
    {
        name: "Movie Theater",
        location: "B-03-M1",
        img: "https://media.istockphoto.com/photos/empty-cinema-screen-with-audience-picture-id453554783?k=20&m=453554783&s=612x612&w=0&h=SWzx0yaI4h_QFnOF-GI5yDHyZyQdjPzen3mXyx7ddbY=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Opened",
    },
    {
        name: "Garden",
        location: "A-03-D1",
        img: "https://media.istockphoto.com/photos/wooden-terrace-surrounded-by-greenery-picture-id957245348?k=20&m=957245348&s=612x612&w=0&h=_-NlF-OmeZPqBIolsVJMVXfZeAKZQJKoyI_wbCvpsLQ=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Under Maintenance",
    },
    {
        name: "Jacuzzi",
        location: "A-03-Z1",
        img: "https://media.istockphoto.com/photos/outdoor-living-picture-id181087270?k=20&m=181087270&s=612x612&w=0&h=pMCOnJ1nPmvvHmRVLGsghQcquTU_N8U4Jl9FgSoFbPA=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Closed",
    },
    {
        name: "Spa pool",
        location: "A-03-L1",
        img: "https://media.istockphoto.com/photos/modern-spa-interior-picture-id468392059?k=20&m=468392059&s=612x612&w=0&h=csMeRQWZlm80UToggc1asIC9ydcXo57p_GolYQ3qOo4=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Opened",
    },
    {
        name: "Sauna Room",
        location: "A-03-U1",
        img: "https://media.istockphoto.com/photos/interior-of-finnish-sauna-classic-wooden-sauna-picture-id827324092?k=20&m=827324092&s=612x612&w=0&h=XZPjWGaqnoVGkVc5K5Jf_4V-gLeqeM_uPwwASi_4Zvs=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Closed",
    }
];


const others = [
    {
        name: "Community Hall",
        location: "B-03-C1",
        img: "https://media.istockphoto.com/photos/committee-chairperson-presents-plan-for-beautification-at-homeowners-picture-id1158889642?k=20&m=1158889642&s=612x612&w=0&h=W62gu5jCoJuF_sH8agmN9o-6xQS273MtDmG0MKZCiWw=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Opened",
    },
    {
        name: "Party Room",
        location: "A-03-R1",
        img: "https://media.istockphoto.com/photos/halloween-food-table-picture-id1183577476?k=20&m=1183577476&s=612x612&w=0&h=30lji704Yivz_72Uq0syZ7MNP8UQBVN53SJt1ageaUg=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Closed",
    },
    {
        name: "Billiards Room",
        location: "B-03-N1",
        img: "https://media.istockphoto.com/photos/coworkers-hanging-out-in-a-bar-picture-id913805620?k=20&m=913805620&s=612x612&w=0&h=LOZynCwMca7l9pZjBUndY2Xb6c1Z7HhDKHSrGLfweHE=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Opened",
    },
    {
        name: "Hobby Room",
        location: "C-03-H1",
        img: "https://media.istockphoto.com/photos/waiting-to-be-played-picture-id1168477313?k=20&m=1168477313&s=612x612&w=0&h=aqNukICHNOqXFEaMcXxxEQ1D9eiMdFk7-n36wWEr1UQ=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Under Maintenance",
    },
    {
        name: "Music Studio",
        location: "B-03-M1",
        img: "https://media.istockphoto.com/photos/electrical-equipment-for-recording-and-computer-monitor-on-workplace-picture-id1176082550?k=20&m=1176082550&s=612x612&w=0&h=IiXsDvOcfSBOL_2RZTNnJRPQoairUm3sk9xyOwNAz1w=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Closed",
    },
    {
        name: "Yoga Studio",
        location: "A-03-Y1",
        img: "https://media.istockphoto.com/photos/limited-people-yoga-class-in-studio-during-covid19-pandemic-picture-id1249327712?k=20&m=1249327712&s=612x612&w=0&h=fuOaQbsrAdLQXWxbJh1nCYmNw65buYzieDBkCDpAWtE=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Opened",
    },
    {
        name: "Library",
        location: "C-03-X1",
        img: "https://media.istockphoto.com/photos/books-on-display-in-the-corner-of-a-second-hand-bookstore-picture-id1129874863?k=20&m=1129874863&s=612x612&w=0&h=FIL5hSudy89ghOg-LUz0neEokerGQreoRfe3DYFq6E0=",
        hours: "10am - 11pm",
        days: "Saturday to Sunday",
        status: "Opened",
    },
    {
        name: "Study Room",
        location: "A-03-E1",
        img: "https://media.istockphoto.com/photos/home-office-picture-id1211584942?k=20&m=1211584942&s=612x612&w=0&h=ZBqglfoRV2CdN5LRB3OPbuYi1a-fH8GVSQtr1A-Qsq0=",
        hours: "10am - 11pm",
        days: "Monday to Friday",
        status: "Closed",
    }
];

const obj2 = [sports, leisure, others];

for(let j = 0; j < obj2.length; j++){
    const array2 = obj2[j];
    const explore_page2 = document.querySelector(`#tab-${j+6}`) ;
    for (let i = 0; i < array2.length; i++) {
        const food = array2[i];

        const div = document.createElement('div');
        div.classList.add('card', 'col-lg-3', 'col-md-4', 'col-sm-6');

        const div2 = document.createElement('div');
        div2.classList.add('card-body', 'text-center');

        const link = document.createElement('a');
        link.href = "#";
        link.classList.add('text-decoration-none');
        link.setAttribute('data-bs-toggle', 'modal');
        link.setAttribute('data-bs-target', `#example_Modal${j*10+i+1}`);

        const image = document.createElement('img');
        image.setAttribute('src', food.img);
        image.classList.add('card-img-top');

        var y1 = document.createElement("BR");
        var y2 = document.createElement("BR");

        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.textContent = food.name;

        const p = document.createElement('p');
        p.textContent = food.location;


        // Pop Up Model
        const div3 = document.createElement('div');
        div3.classList.add('modal', 'fade');
        div3.setAttribute('id', `example_Modal${j*10+i+1}`);
        div3.setAttribute('tabindex', '-1');
        div3.setAttribute('aria-labelledby', 'exampleModalLabel');
        div3.setAttribute('aria-hidden', 'true');

        const div4 = document.createElement('div');
        div4.classList.add('modal-dialog', 'modal-xl', 'modal-dialog-scrollable');

        const div5 = document.createElement('div');
        div5.classList.add('modal-content');

        const div6 = document.createElement('div');
        div6.classList.add('modal-header');

        const SECh5 = document.createElement('h5');
        SECh5.classList.add('modal-title');
        SECh5.setAttribute('id', 'exampleModalLabel');
        SECh5.textContent = food.category;

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('btn-close');
        button.setAttribute('data-bs-dismiss', 'modal');
        button.setAttribute('aria-label', 'Close');

        const div7 = document.createElement('div');
        div7.classList.add('modal-body', 'd-flex');

        const img = document.createElement('img');
        img.setAttribute('src', `${food.img}`);

        const div8 = document.createElement('div');
        div8.classList.add('tab');

        var x1 = document.createElement("BR");
        var x2 = document.createElement("BR");
        var x3 = document.createElement("BR");

        const h2 = document.createElement('h2');
        h2.textContent = food.name;

        const p2 = document.createElement('p');
        p2.textContent = `Operating Hours: ${food.hours}`;

        const p3 = document.createElement('p');
        p3.textContent = `Operating Days: ${food.days}`;

        const p4 = document.createElement('p');
        p4.innerHTML= `Status: ` + getBadge(food.status);
        
        const div9 = document.createElement('div');
        div9.classList.add('modal-footer');

        const button2 = document.createElement('button');
        button2.setAttribute('type', 'button');
        button2.classList.add('btn', 'btn-secondary');
        button2.setAttribute('data-bs-dismiss', 'modal');
        button2.textContent = "Close";

        // Append Children Node
        link.append(image, y1, y2, h5, p);
        div2.appendChild(link);
        div.appendChild(div2);
        
        // Append Children Node for Pop Up Model
        div8.append(x1, x2, x3, h2, p2, p3, p4);
        div6.append(SECh5, button);
        div7.append(img, div8);
        div9.appendChild(button2);
        div5.append(div6, div7, div9);
        div4.appendChild(div5);
        div3.appendChild(div4);
        
        // Append All Children
        explore_page2.append(div, div3);
    }
}

function getBadge(status) {
    switch(status){
        //warning
        case "Under Maintenance":
            return `<span class="badge rounded-pill bg-opacity-75 bg-warning">${status}</span>`
        //danger
        case "Closed":
            return `<span class="badge rounded-pill bg-opacity-75 bg-danger">${status}</span>`
        //success
        case "Opened":
            return `<span class="badge rounded-pill bg-opacity-75 bg-success">${status}</span>`
    }
}
