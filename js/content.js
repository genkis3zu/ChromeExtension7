chrome.runtime.onMessage.addListener((message, sender, sendRes) => {
    if (message.message == 'donwload_button_clicked_to_content') {
        clickDLButton(message.download_name);
    }
    return true;
});

function clickDLButton(download_name) {
    msg = {message:"donwload_button_clicked_to_background", download_name:download_name};
    chrome.runtime.sendMessage(msg);

    document.querySelectorAll('span#csvdl')[0].children[0].click();
}

