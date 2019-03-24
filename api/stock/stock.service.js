/* const priceStart = 2.5;
const priceMax = 100;
const cpt = 1;
const step = 0.5;

const increment = (price, amount) => {
    // 5

    const min = price - step;
    const max = price + step;

    const newValue = random(min, max);

}

const random = (min, max) => {
    // const operator = Math.random() < 0.5 ? -1 : 1;
    const operator = 1;
    const value = (Math.random() * (+max - +min) + +min) * operator;

    return value.toFixed(2);
}
 */
class Stock {
    constructor(priceMin, priceMax, step, amount, unit) {
        this.priceMin = priceMin;
        this.priceMax = priceMax;
        this.step = step
        this.backupStep = step
        this.cpt = 0;
        this.price = priceMin;
        this.amount = amount;
        this.trend = 'flat';
        this.unit = unit;
    }

    increment(price, amount) {
        let min, max;
        if (this.cpt >= 10 && this.cpt <= 25) {
            this.step = this.backupStep;
            min = this.price;
            max = this.price + this.step;  
            this.trend = 'up';
        } else if (this.cpt >= 60 && this.cpt <= 80) {
            this.step = this.backupStep * 1.5;
            min = this.price - this.step;
            max = this.price;
            this.trend = 'down';
        } else {
            this.step = this.backupStep;
            min = this.price - this.step;
            max = this.price + this.step;
            this.trend = 'flat'
        }

        min = min >= this.priceMin ? min : this.priceMin;
        max = max <= this.priceMax ? max : this.priceMax;

        this.price = this.random(min, max);

        this.cpt++;

        this.cpt = this.cpt === 100 ? 0: this.cpt;

        return {
            date: new Date().toISOString(),
            price: this.price.toFixed(2),
            amount: this.amount,
            unit: this.unit,
            trend: this.trend,
            trades: Math.floor(this.random(10, 2500))
        }    
    }

    random(min, max) {
        // const operator = Math.random() < 0.5 ? -1 : 1;
        const value = Math.random() * (+max - +min) + +min;

        return value
    }
}

module.exports = Stock;