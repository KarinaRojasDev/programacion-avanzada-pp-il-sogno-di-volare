const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        const aleatorioVehiculoCivil = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[aleatorioVehiculoCivil];
    }
    
    getRandomMilitary() {
        const aleatorioVehiculoMilitar = Math.floor(Math.random() * this.militaryImages.length);
        return this.militaryImages[aleatorioVehiculoMilitar];
    }
    
    getAll() {
        return [...this.civilImages, ...this.militaryImages];
    }
}

class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        this.gallery = document.createElement("section");
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        let picture = document.createElement("picture");
        let img = document.createElement("img");
        img.src = imageUrl;
        picture.appendChild(img);
        return picture;
    }

    paintSingleImage(imageUrl) {
        let picture = this.createImageTag(imageUrl);
        this.gallery.appendChild(picture);
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(img =>{
            this.paintSingleImage(img);
        })
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

