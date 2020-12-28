interface products {
 name: string,
 id: number,
 url: string
}
function getProduct(obj:products){
  return obj.name + obj.id + obj.url
}

console.log(getProduct({name:'apple',id:1,url:'4'}))
// 可选值
interface productsClone {
  name: string,
  id: number,
  url?: string
 }
 function getProducts(obj:productsClone){
  return obj.name + obj.id + obj.url
}
console.log(getProducts({name:'apple',id:1}))