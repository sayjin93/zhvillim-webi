<?php
// Directory to scan - 'projects' folder in the same directory as this script
$directory = __DIR__ . '/projects';

// Scan the directory and filter folders
$folders = array_filter(glob($directory . '/*'), 'is_dir');

// Convert full paths to folder names
$folderNames = array_map(function($folder) use ($directory) {
    return str_replace($directory . '/', '', $folder);
}, $folders);

// Check if the request is for fetching folder names
if (isset($_GET['fetchFolders'])) {
    header('Content-Type: application/json');
    echo json_encode(array_values($folderNames));
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Project Folders</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="menu"></div>
    <iframe id="folderFrame"></iframe>

    <script src="script.js"></script>
</body>
</html>
