const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399', 'River-655', 'Waterfall-941', 'Wave-2737'];

document.addEventListener('DOMContentLoaded', function () {
    setupVideoThumbnails();

    const videoPlayer = document.getElementById('vidPlayer');
    const playButton = document.getElementById('play');
    const volumeControl = document.getElementById('volume');

    // Play/Pause toggle
    if (playButton) {
        playButton.addEventListener('click', function () {
            if (videoPlayer.paused) {
                videoPlayer.play();
                playButton.textContent = symbolPause; // Update to show pause symbol
            } else {
                videoPlayer.pause();
                playButton.textContent = symbolPlay; // Update to show play symbol
            }
        });
    }

    // Volume control
    if (volumeControl) {
        volumeControl.addEventListener('input', function () {
            videoPlayer.volume = volumeControl.value;
        });
    }

    // Stop button
    const stopButton = document.getElementById('stop');
    if (stopButton) {
        stopButton.addEventListener('click', function () {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
            playButton.textContent = symbolPlay; // Update to show play symbol
        });
    }

    // Skip buttons
    const skipButtons = document.querySelectorAll('[data-skip]');
    skipButtons.forEach(button => {
        button.addEventListener('click', function () {
            const skipValue = parseFloat(button.dataset.skip);
            videoPlayer.currentTime += skipValue;
        });
    });
});

function createVideoThumbnail(filename) {
    const imagePath = 'images/' + filename + '.jpg';
    const videoPath = 'videos/' + filename + '.mp4';

    let img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Thumbnail for ' + filename;

    img.addEventListener('click', function () {
        const videoPlayer = document.getElementById('vidPlayer');
        videoPlayer.querySelector('source').src = videoPath;
        videoPlayer.load();
        videoPlayer.play();
        document.getElementById('play').textContent = symbolPause;
    });

    return img;
}

function setupVideoThumbnails() {
    const asideElement = document.querySelector('aside');
    files.forEach(function (file) {
        const thumbnail = createVideoThumbnail(file);
        asideElement.appendChild(thumbnail);
    });
}
