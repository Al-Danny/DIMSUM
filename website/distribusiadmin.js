var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["IDSembako"] = document.getElementById("IDSembako").value;
    formData["NamaSembako"] = document.getElementById("NamaSembako").value;
    formData["Rata"] = document.getElementById("Rata").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("sembakoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.IDSembako;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.NamaSembako;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Rata;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Hapus</a>`;
}

function resetForm() {
    document.getElementById("IDSembako").value = "";
    document.getElementById("NamaSembako").value = "";
    document.getElementById("Rata").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("IDSembako").value = selectedRow.cells[0].innerHTML;
    document.getElementById("NamaSembako").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Rata").value = selectedRow.cells[2].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.IDSembako;
    selectedRow.cells[1].innerHTML = formData.NamaSembako;
    selectedRow.cells[2].innerHTML = formData.Rata;

}

function onDelete(td) {
    if (confirm('Apakah Anda ingin menghapusnya?')) {
        row = td.parentElement.parentElement;
        document.getElementById("sembakoList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("IDSembako").value == "") {
        isValid = false;
        document.getElementById("IDSembakoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("IDSembakoValidationError").classList.contains("hide"))
            document.getElementById("IDSembakoValidationError").classList.add("hide");
    }
    return isValid;
}