const form = document.getElementById("transactionForm");

            form.addEventListener("submit", function(event) {
                event.preventDefault();
            let transactionFormData = new FormData(form);
                transactionObj = convertFormDataToTransactionObj(transactionFormData)
                   insertRowInTransactionTable(transactionObj)
            });


           function convertFormDataToTransactionObj(transactionFormData){
            let transactionType = transactionFormData.get("transactionType")
            let transactionDescription = transactionFormData.get("transactionDescription")
            let transactionAmount = transactionFormData.get("transactionAmount")
            let transactionCategory = transactionFormData.get("transactionCategory")
            return {
                "transactionType": transactionType,
                "transactionDescription": transactionDescription,
                "transactionAmount": transactionAmount,
                "transactionCategory": transactionCategory
            }
        }
          
        function insertRowInTransactionTable(transactionObj) {
            let transactionTableRef = document.getElementById("transactionTable");
          

           let newTransactionRowRef = transactionTableRef.insertRow(-1);

           let newTypeCellRef = newTransactionRowRef.insertCell(0);
           newTypeCellRef.textContent = transactionObj["transactionType"];

           newTypeCellRef = newTransactionRowRef.insertCell(1);
           newTypeCellRef.textContent = transactionObj["transactionDescription"];

           newTypeCellRef = newTransactionRowRef.insertCell(2);
           newTypeCellRef.textContent = transactionObj["transactionAmount"];

           newTypeCellRef = newTransactionRowRef.insertCell(3);
           newTypeCellRef.textContent = transactionObj["transactionCategory"];
           }