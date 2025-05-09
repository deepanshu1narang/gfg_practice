const container = document.getElementsByClassName('container')[0];
const container2 = document.getElementsByClassName('container2')[0];
const container3 = document.getElementsByClassName('container3')[0];
const container4 = document.getElementsByClassName('container4')[0];

function markScale(container) {
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Horizontal marks
    for (let i = 0; i <= width; i += 100) {
        const mark = document.createElement('div');
        mark.classList.add('mark');
        mark.style.left = `${i}px`;
        mark.style.top = `-5px`;
        mark.style.height = `${height}px`;
        container.appendChild(mark);
    }

    // Vertical marks
    for (let i = 0; i <= height; i += 100) {
        const mark = document.createElement('div');
        mark.classList.add('mark');
        mark.style.top = `${i}px`;
        mark.style.left = `-5px`;
        mark.style.height = '2px';
        // mark.style.width = '10px';
        mark.style.width = `${width}px`;
        container.appendChild(mark);
    }
}

markScale(container);
markScale(container2);
markScale(container3);
markScale(container4);

// setTimeout(() => {
//     container.style.display = "none";
//     container2.style['margin-top'] = 0;
//     container2.style.display = "none";
//     container3.style['margin-top'] = 0;
//     container3.style.display = "none";
//     container4.style['margin-top'] = 0;
// }, 1000);

const gridItems = document.getElementsByClassName("grid-item");
function getWidths(gridItems) {
    Array.from(gridItems).forEach(element => {
        element.innerHTML = element.offsetWidth;
    });
}

// getWidths(gridItems);

function removeMarkings(parent, childClass) {
    const children = Array.from(parent.getElementsByClassName(childClass));
    children.forEach(child => {
        parent.removeChild(child);
    });
}
let resizeTimeout;
window.addEventListener("resize", () => {
    console.log("resize");
    getWidths(gridItems);
    removeMarkings(container, "mark");
    removeMarkings(container2, "mark");

    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
        markScale(container);
        markScale(container2);
    }, 100);
});