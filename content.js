//alert('Hello World')
chrome.runtime.onMessage.addListener(function (request){
    alert(request)
})