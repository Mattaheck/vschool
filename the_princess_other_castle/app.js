class Player {
    constructor() {
        this.name = '';
        this.totalCoins = 0;
        this.status = "Small"; //needs a default value,
        this.hasStar = false; // Default value for hasStar
    }

    setName(namePicked) {
        if (namePicked === "Mario" || namePicked === "Luigi") {
            this.name = namePicked;
        } else {
            const randomValue = getRandomRange(0, 1);
            if (randomValue === 0) {
                this.name = 'Mario';
            } else {
                this.name = 'Luigi';
            }
        }
    }

    gotHit() {
        if (this.status !== 'Dead') {
            if (this.status === "Powered Up") {
                this.status = "Big";
            } else if (this.status === "Big") {
                this.status = "Small";
            } else if (this.status === "Small") {
                this.status = "Dead";
            }
        }
    }

    gotPowerUp() {
        if (this.status !== 'Dead') {
            if (this.status === "Small") {
                this.status = "Big";
            } else if (this.status === "Big") {
                this.status = "Powered Up";
            } else if (this.status === "Powered Up") {
                this.hasStar = true;
            }
        }
    }

    addCoin() {
        if (this.status !== 'Dead') {
            this.totalCoins++;
        }
    }

    printStatus() {
        console.log(`Player name: ${this.name}, Status: ${this.status}, Coins: ${this.totalCoins}`);
    }
}

function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const player = new Player(); // Create an instance of the Character class
player.setName(); // Use random range & if statement or readline sync to set the name

const interval = setInterval(() => {
    if (player.status !== 'Dead') {
        const randomValue = getRandomRange(0, 2);

        if (randomValue === 0) {
            player.gotHit();
        } else if (randomValue === 1) {
            player.gotPowerUp();
        } else {
            player.addCoin();
        }

        player.printStatus();
    }

    if (player.status === 'Dead') {
        clearInterval(interval);
        console.log('Player is dead. Game over!');
    }
}, 1000); // Adjust the interval duration as needed
