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
    formData["No"] = document.getElementById("No").value;
    formData["NamaSembako"] = document.getElementById("NamaSembako").value;
    formData["JumlahStok"] = document.getElementById("JumlahStok").value;
    formData["Provinsi"] = document.getElementById("Provinsi").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("sembakoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.No;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.NamaSembako;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.JumlahStok;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Provinsi;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Hapus</a>`;
}

function resetForm() {
    document.getElementById("No").value = "";
    document.getElementById("NamaSembako").value = "";
    document.getElementById("JumlahStok").value = "";
    document.getElementById("Provinsi").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("No").value = selectedRow.cells[0].innerHTML;
    document.getElementById("NamaSembako").value = selectedRow.cells[1].innerHTML;
    document.getElementById("JumlahStok").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Provinsi").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.No;
    selectedRow.cells[1].innerHTML = formData.NamaSembako;
    selectedRow.cells[2].innerHTML = formData.JumlahStok;
    selectedRow.cells[3].innerHTML = formData.Provinsi;
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
    if (document.getElementById("NamaSembako").value == "") {
        isValid = false;
        document.getElementById("NamaSembakoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NamaSembakoValidationError").classList.contains("hide"))
            document.getElementById("NamaSembakoValidationError").classList.add("hide");
    }
    return isValid;
}