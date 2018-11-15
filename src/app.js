const DraggableMiniPlayer = {
    "miniPlayerTagName": 'ytd-miniplayer',
    "getPlayerTagName": function () {
        return this.miniPlayerTagName;
    },
    "makePlayerDraggable": function (playerElement) {
        console.log('making the player draggable');
        console.log(playerElement.style);
        playerElement.style.boxShadow = null;
        playerElement.style.backgroundColor = 'transparent';

        console.log(interact);

        if (!this.isDraggable) {
            interact(playerElement).draggable({});
        }

        this.isDraggable = true;

        console.log(tPlayer);
    },
    "isMiniPlayerAvailable": function() {
        return document.querySelectorAll('.ytp-miniplayer-button').length > 0;
    },
    "isDraggable": false
};

const miniPlayer = Object.create(DraggableMiniPlayer);
const retriesLimit = 4;
let currentRetries = 0;

const initApp = function () {
    if (!miniPlayer.isMiniPlayerAvailable()) {
        if (currentRetries >= retriesLimit) {
            throw new Error('Unable to detect the miniplayer functionality');
        }
        currentRetries += 1;
        setTimeout(() => {
            initApp();
        }, 1500);
    }

    currentRetries = 0;
    
    const miniPlayerElement = document.getElementsByTagName(miniPlayer.getPlayerTagName())[0];
    const miniPlayerButton = document.querySelector('.ytp-miniplayer-button');

    if (undefined === miniPlayerButton) {
        return;
    }

    document.addEventListener('click', function (event) {
        console.log(event.target === miniPlayerButton);
        if (event.target === miniPlayerButton) {
            miniPlayer.makePlayerDraggable(miniPlayerElement);
        }
    });
};

initApp();