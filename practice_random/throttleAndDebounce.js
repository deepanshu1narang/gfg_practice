const input = document.getElementById("inp1");
const defaulted = document.getElementById("default");
const debouncing = document.getElementById("debouncing");
const throttling = document.getElementById("throttling");

const updateDebouncedText = debounce(text => debouncing.textContent = text, 1000);
const throttledText = throttle(text => throttling.textContent = text, 3000);

input.addEventListener('input', e => {
    defaulted.textContent = e.target.value;
    updateDebouncedText(e.target.value);
    throttledText(e.target.value);
});

function debounce(callBackFunction, delay = 2000) {
    let timeOut;
    return (...args) => {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            callBackFunction(...args);
        }, delay);
    }
}

function throttle(callbackFunc, delay) {
    let shouldWait = false;
    let waitingArgs;

    const timeoutFunc = () => {
        if (waitingArgs === null) {
            shouldWait = false;
        }
        else {
            callbackFunc(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        callbackFunc(...args);
        shouldWait = true;

        setTimeout(timeoutFunc, delay);
    }
}

