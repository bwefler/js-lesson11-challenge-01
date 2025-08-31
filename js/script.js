const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

// Factory function
const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            console.log(`${name} neeps a nap. zzz...`);
            this.isTired = 1;
        },
        play: function () {
            if (this.isTired == 10) {
                console.log("Too tired to play.");
                sleep();
            } else {
                console.log(`Yay! ${name} loves to play!`);
                this.isTired++;
            }
        }
    }
    return pet;
};

// Create pet objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");
// console.log("Pet objects created:");
// console.log(sora, clover, baxter, cleo, francine);

clover.sleep();
baxter.play();
console.log(clover);
console.log(baxter);