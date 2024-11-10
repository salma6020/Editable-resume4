function toggleEdit(button) {
    var paragraph = button.previousElementSibling;
    if (paragraph.isContentEditable) {
        // Disable editing and change button text back to "Edit"
        paragraph.contentEditable = "false";
        button.textContent = "Edit";
    }
    else {
        // Enable editing and change button text to "Save"
        paragraph.contentEditable = "true";
        button.textContent = "Save";
        paragraph.focus();
    }
}
function toggleEdit1(button) {
    var paragraph = button.previousElementSibling;
    if (paragraph.isContentEditable) {
        // Disable editing when "Save" is clicked
        paragraph.contentEditable = "false";
        button.textContent = "Edit";
    }
    else {
        // Enable editing
        paragraph.contentEditable = "true";
        button.textContent = "Save";
        paragraph.focus();
        // Save changes when clicking outside
        paragraph.addEventListener("blur", function () {
            paragraph.contentEditable = "false";
            button.textContent = "Edit";
        }, { once: true });
    }
}
