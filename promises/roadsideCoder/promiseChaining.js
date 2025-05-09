console.log("start");

function importantAction(username) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000);
    });
}

function likeThisVideo(video) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Like this ${video} video`);
        }, 1000);
    });
}

function shareThisVideo(video) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Share this ${video} video`);
        }, 1000);
    });
}

function promiseHell() {

    // promise hell
    importantAction("Roadside coder")
        .then(data => {
            console.log(data);
            likeThisVideo("Pomises").then(data => {
                console.log(data);
                shareThisVideo("Promises").then(data => {
                    console.log(data);
                })
            })
        })
        .catch(err => {
            console.log(err);
        })
}

promiseHell();

function promiseChaining() {
    importantAction("Roadside coder").then(data => {
        console.log(data);
        return likeThisVideo("Promises");
    })
        .then(data => {
            console.log(data);
            return shareThisVideo("Promises");
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}

promiseChaining();

console.log("stop");