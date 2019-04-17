const Stock = require('./stock.service');

class StaticStock extends Stock {
    constructor(priceMin, priceMax, step, amount, unit, date) {
        super(priceMin, priceMax, step, amount, unit);
        this.date = date;
    }

    startAutoIncrement(interval) {
        const today = new Date().getTime();
        const data = [];
        while(this.date.getTime() <= today && data.length < 5000) {
            const increment = this.increment();
            data.push(increment);
            this.date.setTime(this.date.getTime() + interval)
        }
        return data;
    }

    getDate() {
        return new Date(this.date.getTime()).toISOString();
    }
}

module.exports = StaticStock;