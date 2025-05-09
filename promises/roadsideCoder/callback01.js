console.log("start");

function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Subscribe to ${username}`);
    }, 500);
}

function likeThisVideo(video, cb) {
    setTimeout(() => {
        cb(`Like this ${video}`);
    }, 1000);
}

function shareThisVideo(video, cb) {
    setTimeout(() => {
        cb(`Share this ${video}`);
    }, 1000);
}

function callbackHell() {
    importantAction("Roadside coder", function (message) {
        console.log(message);
        likeThisVideo("Promises", function (message) {
            console.log(message);
            shareThisVideo("Promises", function (message) {
                console.log(message);
                importantAction("Roadside Coder", (action) => {
                    console.log(action);
                });
            })
        })
    });
}
callbackHell();

console.log("stop");