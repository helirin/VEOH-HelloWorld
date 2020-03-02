//voi laittaa myös objektiksi
let order = {
    id: 1234,
    message: 'My order',
    delivered: false
}


function summarize_order(id, message, delivered){
    var summary = 'order id: ' +
    id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}
//huomaa pisteet esim. order.id
const order_summary = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary);
//delivered muutetaan
order.delivered = true;
const order_summary_2 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_2);
//order id muutetaan
order.id = 5436;
const order_summary_3 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_3);
