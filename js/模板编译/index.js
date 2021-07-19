/**
 * @param {*} el  节点
 * @param {*} data  模板数据
 */
function compile(el, data){
    // 创建虚拟节点
    let fragment = document.createDocumentFragment()
    while(child = el.firstChild){
        fragment.appendChild(child)
    }
    //  对el中的内容进行替换
    function replace(fragment){
        Array.from(fragment.childNodes).forEach(node=>{
            let textContent = node.textContent
            let reg = /\{\{(.*?)\}}/g
            if(node.nodeType === 3 && reg.test(textContent)){
                const nodeTextContent = node.textContent
                const replaceText = ()=>{
                    node.textContent = nodeTextContent.replace(reg, (matched, placeholder)=>{
                        return placeholder.split('.').reduce((prev,key)=>{
                            return prev[key]
                        },data)
                    })
                }
                replaceText()
            }
            // 如果还有子节点，则继续递归replace
            if(node.childNodes && node.childNodes.length){
                replace(node)
            }
        })     
    }
    replace(fragment)
    el.appendChild(fragment)
    return el
}