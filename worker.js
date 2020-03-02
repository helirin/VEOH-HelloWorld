//kotitehtävä 10.js
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class worker{
    constructor(n_food){
        this.n_food = n_food;
    }
    
    do_work = async(duration) => {
        if(this.n_food > 0){
            console.log('start work');
            await sleep(duration);
            console.log('work doned');
            this.n_food--;
            console.log('n_food', this.n_food)
        }else{
           console.log('no food');
          }
        return; //promise
    }

}
let worker_obj = new worker(3);

worker_obj.do_work(2500).then(() => {
   return worker_obj.do_work(1000);
}).then(() => {
    return worker_obj.do_work(500);
});


console.log('end of program');
