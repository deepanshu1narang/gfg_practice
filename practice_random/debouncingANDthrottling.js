// By Akshay Saini

const ourDiv = document.querySelectorAll(".d-t")[0];
// console.log(ourDiv);
let simpleInput = ourDiv.querySelector('input[data-debouncing="simple_input"]');
let dbInput = ourDiv.querySelector('input[data-debouncing="db_input"]');

// console.log(dbInput);
let count = 0;
function getData() {
    console.log("fetching data ....", count++);
}

simpleInput.addEventListener('keyup', getData);

function debouncedFun(fn, delay) {
    let timeout;

    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.call(context, ...args);
            // fn.apply(context, args);
        }, delay);
    }
}

const betterFunc = debouncedFun(getData, 1000);
// const betterFunc = useCallback(debounced(query => getData(query), 1000), []);
dbInput.addEventListener('keyup', betterFunc);

const btn1 = document.getElementById("not-throttled");
const btn2 = document.getElementById("throttled");


function throttle(fn, limit) {
    let flag = true;

    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => flag = true, limit);
        }
    }
}

const fnClick = () => {
    console.log("clicked");
}

btn1.addEventListener('click', fnClick);

const betterFn = throttle(fnClick, 1000);

btn2.addEventListener('click', betterFn);