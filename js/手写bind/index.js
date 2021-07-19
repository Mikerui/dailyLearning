Function.prototype.bind = Function.prototype.bind || function (context) {
    const self = this
    const args = Array.prototype.slice.call(arguments,1)
    return function bound(){
        const innerArgs = Array.prototype.slice.call(arguments)
        const finalArgs = args.concat(innerArgs)
        return self.apply(context,finalArgs)
    }
}