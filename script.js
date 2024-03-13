document.addEventListener('DOMContentLoaded', function () {
    // Fetch folder names from the PHP script
    fetch('index.php?fetchFolders=true')
        .then(response => response.json())
        .then(folders => {
            const menu = document.getElementById('menu');
            let firstFolderLoaded = false;
            let activeMenuItem = null;

            folders.forEach(folder => {
                // Create a new div element for each folder
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.textContent = folder;

                // Set the click event to load the folder content in the iframe
                menuItem.onclick = () => {
                    // Update the iframe source
                    document.getElementById('folderFrame').src = 'projects/' + folder;

                    // Update active class on menu items
                    if (activeMenuItem) {
                        activeMenuItem.classList.remove('active');
                    }
                    menuItem.classList.add('active');
                    activeMenuItem = menuItem;
                };

                // Append the menu item to the menu div
                menu.appendChild(menuItem);

                // Load the first folder by default and set it as active
                if (!firstFolderLoaded) {
                    document.getElementById('folderFrame').src = 'projects/' + folder;
                    menuItem.classList.add('active');
                    activeMenuItem = menuItem;
                    firstFolderLoaded = true;
                }
            });
        })
        .catch(error => {
            console.error('Error fetching folder list:', error);
        });
});
