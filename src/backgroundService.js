chrome.runtime.onMessage.addListener(function(message, callback) {
    console.log(message);
    // if (message == "changeColor"){
    //     chrome.tabs.executeScript({
    //         code: 'document.body.style.backgroundColor="orange"'
    //     });
    // }
});

