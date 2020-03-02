function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//luokka
class order {
    products = [];
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
    
    add_product = (product) => {
        this.products.push(product);            
    }
    deliver = async () => {
        await sleep(1000);
        this.delivered = true;
        return;
    }
    summarize = async () => {
        console.log('start summarize');

        //Simulate database delay or heavy calculation
        await sleep(1000);
        let summary = 'order id: ' +
            this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;

        summary += ', Products: [';
        this.products.forEach((product, index) => {
            summary += product + ', ';
        });
        summary += ']';

        console.log('end summarize');
        return summary;
    }
    
}//luokka päättyy

let order_obj = new order(1237, 'Second order');
order_obj.add_product('coffee');
order_obj.add_product('milk');
order_obj.add_product('banana')
//ketjutus
order_obj.deliver().then(()=>{
console.log('delivered');
    return order_obj.summarize()
}).then((summary) => {
    console.log(summary);
});