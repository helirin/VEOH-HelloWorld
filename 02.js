//varrin käyttöä ei nykyään suositella -> const ja let
const order_id = 1234;
const order_message = 'My order'; // käyttää myös lainausmerkkejä
let order_delivered = false;

function summarize_order(id, message, delivered){
    var summary = 'order id: ' +
    id + 'message: ' + message + 'delivered: ' + delivered;
    return summary;
}

var order_summary = summarize_order(order_id, order_message, order_delivered);

console.log(order_summary);
