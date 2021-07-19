class Notify {
    constructor(){
        this.subscribers = []
    }
    add(handler){
        this.subscribers.push(handler)
    }
    emit(){
        this.subscribers.forEach(subscriber => subscriber())
    }
}

let notify = new Notify()
notify.add(()=>{
    console.log('emit here')
})
notify.emit()