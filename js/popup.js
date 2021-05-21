document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#download_clicked_id').addEventListener('click', downloadCSV);
});

function downloadCSV()
{
    const dl_name = document.querySelector('#donwload_rename_id').value;
    msg = {message:"donwload_button_clicked_to_content", download_name:dl_name};
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
        if (tabs[0].id === undefined) return;
        chrome.tabs.sendMessage(tabs[0].id, msg);
    });
}