document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("user-data-select");
    const dataTable = document.getElementById("data-table");
    
    selectElement.addEventListener("change", function() {
      const selectedOption = selectElement.value;
      fetchData(selectedOption);
    });
  
    function fetchData(option) {
      // Simulated data fetching, replace with actual data fetching logic
      const data = getDummyData(option);
      renderTable(data);
    }
  
    function renderTable(data) {
      // Clear previous table
      dataTable.innerHTML = '';
  
      // Create table header
      const tableHeader = document.createElement("thead");
      const headerRow = document.createElement("tr");
      for (const key in data[0]) {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
      }
      tableHeader.appendChild(headerRow);
      dataTable.appendChild(tableHeader);
  
      // Create table body
      const tableBody = document.createElement("tbody");
      data.forEach(item => {
        const row = document.createElement("tr");
        for (const key in item) {
          const cell = document.createElement("td");
          cell.textContent = item[key];
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
      });
      dataTable.appendChild(tableBody);
    }
  
    // Dummy data for demonstration
    function getDummyData(option) {
      if (option === "users") {
        return [
          { id: 1, name: "John Doe", email: "john@example.com" },
          { id: 2, name: "Jane Smith", email: "jane@example.com" },
          { id: 3, name: "Mike Johnson", email: "mike@example.com" }
        ];
      } else if (option === "orders") {
        return [
          { id: 101, product: "Product A", quantity: 2, total: 50 },
          { id: 102, product: "Product B", quantity: 1, total: 30 },
          { id: 103, product: "Product C", quantity: 3, total: 80 }
        ];
      } else if (option === "products") {
        return [
          { id: 201, name: "Product X", price: 20 },
          { id: 202, name: "Product Y", price: 25 },
          { id: 203, name: "Product Z", price: 30 }
        ];
      }
      return [];
    }
  
    // Initially fetch and render data
    fetchData(selectElement.value);
  });
  