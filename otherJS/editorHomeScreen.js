const editorHomeScreen = document.querySelector(".editorHomeScreen");

function openEditorHomeScreen() {
    allApp.classList.add("scaleForEdit");

    editorHomeScreen.querySelector("[name='done']").addEventListener("click", closeEditorHomeScreen);
}
function closeEditorHomeScreen() {
    allApp.classList.remove("scaleForEdit");
}
