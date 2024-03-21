let stocks = [];

document.addEventListener('DOMContentLoaded', function () {
    let users = [];

    // Fetch and parse the JSON data
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            users = data;
            generateUserList(users);
        });

    fetch('stocks-complete.json')
        .then(response => response.json())
        .then(data => {
            stocks = data;
        });

    // Hide the details section initially
    document.querySelector('.Details').style.display = 'none';

    // User list click event
    document.querySelector('.UserList ul').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            let userId = event.target.dataset.userId;
            let selectedUser = users.find(user => user.id.toString() === userId);
            displayUserDetails(selectedUser);
        }
    });

    // Save button click event
    document.getElementById('btnSave').addEventListener('click', function (event) {
        event.preventDefault();
        alert("Save button is clicked")
    });

    // Delete button click event
    document.getElementById('btnDelete').addEventListener('click', function (event) {
        event.preventDefault();
        alert("Delete button is clicked")
    });
});

function generateUserList(users) {
    let userList = document.querySelector('.UserList ul');
    userList.innerHTML = ''; // Clear existing list
    users.forEach(user => {
        let li = document.createElement('li');
        li.textContent = user.user.firstname + ' ' + user.user.lastname;
        li.dataset.userId = user.id; // Set user ID in data attribute
        userList.appendChild(li);
    });
}

function displayUserDetails(user) {
    document.querySelector('.Details').style.display = 'block';

    // Fill in the user details in your form fields
    document.getElementById('firstname').value = user.user.firstname;
    document.getElementById('lastname').value = user.user.lastname;
    document.getElementById('email').value = user.user.email;
    document.getElementById('address').value = user.user.address;
    document.getElementById('city').value = user.user.city;
    document.getElementById('state').value = user.user.state;
    document.getElementById('zip').value = user.user.zip;

    // Display portfolio
    let portfolioList = document.getElementById('listPortfolio');
    // Clear existing portfolio items, keeping the headers
    while (portfolioList.childElementCount > 3) {
        portfolioList.removeChild(portfolioList.lastChild);
    }

    user.portfolio.forEach(stock => {
        let stockSymbolDiv = document.createElement('div');
        stockSymbolDiv.textContent = stock.symbol;

        let stockSharesDiv = document.createElement('div');
        stockSharesDiv.textContent = stock.owned;

        let stockViewDiv = document.createElement('div');
        let viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.addEventListener('click', function () {
            displayStockDetails(stock.symbol);
        });
        stockViewDiv.appendChild(viewButton);

        portfolioList.appendChild(stockSymbolDiv);
        portfolioList.appendChild(stockSharesDiv);
        portfolioList.appendChild(stockViewDiv);
    });
}

function displayStockDetails(symbol) {
    let stock = stocks.find(s => s.symbol === symbol);
    if (stock) {
        document.getElementById('stockName').textContent = stock.name;
        document.getElementById('stockSector').textContent = stock.sector;
        document.getElementById('stockIndustry').textContent = stock.subIndustry;
        document.getElementById('stockAddress').textContent = stock.address;

        // Construct the path to the logo based on the stock symbol
        let logoPath = `logos/${symbol.toUpperCase()}.svg`; // Capitalized SVG filenames
        document.getElementById('logo').src = logoPath;
        document.getElementById('logo').alt = `Logo of ${stock.name}`;
        document.getElementById('logo').style.display = 'block'; // Ensure it's visible if it was hidden before
    } else {
        // Hide the logo and clear previous details if no stock is found
        document.getElementById('logo').style.display = 'none';
        document.getElementById('stockName').textContent = '';
        document.getElementById('stockSector').textContent = '';
        document.getElementById('stockIndustry').textContent = '';
        document.getElementById('stockAddress').textContent = '';
    }
}
