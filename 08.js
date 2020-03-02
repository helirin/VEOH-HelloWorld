//simuloidaan esim. tietokantahaun viivettä
//käytössä vain yksi säie
//async palauttaa promise-objektin,  ilman sitä palauttaa stringin
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {
    products = ['omena', 'maito'];
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
    deliver = async () => {
        await sleep(1000);
        this.delivered = true;
        return
    }
    summarize = async () => {
        console.log('start summarize');

        //Simulate database delay or heavy calculation
        await sleep(1000);
        let summary = 'order id: ' +
            this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        //lisätään tuotteita
        summary += ', Products: [';
        this.products.forEach((product, index) => {
                summary += product + ', ';
            });
            summary += ']';
        console.log('end summarize');
        return summary;
    }
    
}

let order_obj = new order(1237, 'Second order');
//ketjutus then-komennolla
order_obj.deliver().then(()=>{
console.log('delivered');
    return order_obj.summarize()
}).then((summary) => {
    console.log(summary);
});