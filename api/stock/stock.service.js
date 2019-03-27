const {
    setInterval,
    clearInterval
} = require('timers')

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
        this.clients = [];
    }

    increment() {
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

        this.cpt = this.cpt === 100 ? 0 : this.cpt;

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
        const value = Math.random() * (+max - +min) + +min;

        return value
    }

    startAutoIncrement(interval) {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }

        this.intervalId = setInterval(() => {
            const increment = this.increment();
            this.broadcast(increment);
        }, interval);
    }

    addClient(ws) {
        this.clients.push(ws);
    }

    broadcast(message) {
        const toDelete = [];
        for (let i = 0; i < this.clients.length; i++) {
            const client = this.clients[i];

            if (client.readyState === 1) {
                client.send(JSON.stringify(message));
                console.log(message)
            } else if (client.readyState === 3) {
                toDelete.push(i);
            }
        }
        for (let i = 0; i < toDelete.length; i++) {
            this.clients.splice(toDelete[i], 1);
        }
    }
}

module.exports = Stock;