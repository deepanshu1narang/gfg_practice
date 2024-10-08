function moveZeroesToEnd(arr, n) {
    console.log("moveZeroesToEnd");
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            [arr[count], arr[i]] = [arr[i], arr[count]];
            count++;
        }
    }
}

let arr = [10, 8, 0, 0, 12, 0];
console.log(arr);
moveZeroesToEnd(arr, arr.length);
console.log(arr);

function maxDifference(arr, n) {
    let maxIndDiff = 0;
    for (let i = 0; i < n; i++) {
        let indDiff = 0;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i] > 0) {
                indDiff = j - i;
            }
        }
        if (indDiff > maxIndDiff) {
            maxIndDiff = indDiff;
        }
    }
    return maxIndDiff;
}

arr = [1, 10];
arr = [34, 8, 10, 3, 2, 80, 30, 33, 1]; //6
arr = [34, 18, 10, 3, 2, 80, 30, 33, 0, 11]; // 7
let a = maxDifference(arr, arr.length);
console.log(a);
arr.find
function maxDifference2(arr, n) {
    let diff = 0;
    for (let i = 0; i < n; i++) {
        let idx = arr.findLastIndex(e => e > arr[i]);
        if (idx - i > diff) {
            diff = idx - i;
        }
    }
    return diff;
}

a = maxDifference2(arr, arr.length);
console.log(a);

function maxDifference3(arr, n) {
    let lastJ = -1;
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
        let diff = 0;
        for (let j = lastJ + 1; j < n; j++) {
            if (arr[j] - arr[i] >= 0) {
                lastJ = j;
            }
        }
        diff = lastJ - i;
        if (diff > maxDiff)
            maxDiff = diff;

        if (lastJ === n - 1)
            break;
    }

    return maxDiff;
}

a = maxDifference3(arr, arr.length);

a = maxDifference3(arr, arr.length);
console.log(a);

function maxIndexDiff(arr) {
    // code here
    const n = arr.length;
    const auxillaryArray = [];
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = -1;

    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }

        auxillaryArray.unshift(maxIndex)

    }
    let diff = 0;
    for (let i = 0; i < n; i++) {

        if (arr[auxillaryArray[i]] > arr[i]) {
            diff = Math.max(auxillaryArray[i], diff)
        }


    }
    return diff

}
arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
// arr = [3, 34];
a = maxIndexDiff(arr, arr.length);
console.log(a);

function twoSum(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j)
                if (arr[i] + arr[j] === target)
                    return [i, j];
        }
    }
}

let arr1 = [2, 7, 11, 15];
console.log(twoSum(arr1, 9));

var removeDuplicates = function (nums) {
    return new Set(nums).size;
};

var removeDuplicates = function (nums) {
    return [...new Set(nums)];
};

var removeDuplicates = function (nums) {
    const n = nums.length;
    let arr = [];
    arr[0] = nums[0];
    let x = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            arr[x] = nums[i];
            x++;
        }
    }
    const a = arr.length;
    let idx = 0;
    for (; idx < a; idx++) {
        nums[idx] = arr[idx];
    }
    for (; idx < n; idx++) {
        nums.pop();
    }
};
let arr2 = [1, 1, 2];
arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(arr2);
removeDuplicates(arr2);
console.log(arr2);

var removeElement = function (nums, val) {
    const n = nums.length;
    let i2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== val) {
            nums[i2] = nums[i];
            i2++;
        }
    }
    return i2;
};

let b = [3, 2, 2, 3]
removeElement(b, 3);
console.log(b);

function primeFactorisation(num) {
    let pFs = [];
    let i = 2;
    while (num > 1 && i * i <= num) {
        console.log(num, i);
        if (num % i === 0) {
            pFs.push(i);
            num /= i;
        }
        else {
            i++;
        }
    }
    // corner case
    if (num > 1)
        pFs.push(num);
    return pFs;
}

console.log(primeFactorisation(36));

function segregatePositiveAndNegative(arr, n) {
    let slowPointer = 0;
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            arr[slowPointer] = arr[i];
            slowPointer++;
        }
        else {
            arr2.push(arr[i]);
        }
    }
    for (i = slowPointer; i < n; i++) {
        arr[i] = arr2[i - slowPointer];
    }
    // return arr;
}

arr = [1, 3 - 8, 5, -9, -10, 21, 0, 65, -9, 0, -8, 7, 8, 0, 78];
arr = "720 616 -775 930 960 991 811 94 798 -214 134 102 -659 715 -900 156 711 531 809 -763 -439 969 -848 -293 593 -807 440 261 139 -850 -492 305 462 166 334 82 -942 521 -696 -123 415 -402 -646 322 -854 -531 481 578 -361 495 -225 -290 100 810 820 460 -138 164 320 725 -775 -908 -795 511 -111 77 -171 -778 -522 -890 -524 106 600 -393 835 822 -311 -390 -710 -330 -307 -772 728 208 181 156 363 384 -292 521 -578 -279 -190 -886 772 447 235 -270 -349 -350 339 -200 -444 563 -701 479 -592 58 760 -512 971 82 446 587 -28 741 -378 547 993 596 878 338 -641 -443 -475 614 -717 87 856 708 31 745 -477 757 58 -53 267 -474 119 811 -526 185 0 870 606 -465 -556 -965 -88 585 -734 150 -121 -954 522 222 895 -593 580 454 -271 501 -341 816 134 359 207 880 681 584 -282 613 -637 -650 -396 360 282 935 141 412 74 783 -557 -546 538 2 788 -369 -714 548 767 971 -310 853 997 -398 -760 -573 -256 -784 714 957 600 734 439 -818 782 -690 905 -362 -590 858 48 -262 667 941 441 14 -69 569 -327 -605 778 -317 -348 283 -781 -284 -616 -154 -20 760 378 -24 -555 -929 947 -80 -444 282 -159 -775 -408 944 848 188 -570 241 38 -806 382 -36 428 -892 -183 -647 865 -284 -962 -121 -808 744 69 -205 260 -198 510 19 -793 6 -875 -753 -740 -566 -20 -15 257 790 998 -838 -30 964 877 13 444 -268 -411 -432 861 -338 -304 557 -410 -324 340 161 264 429 323 -285 -653 -83 148 383 -933 -712 -221 -857 -550 119 -841 571 -641 944 748 -2 -298 -970 -940 152 491 -812 610 -715 -607 -920 321 -834 -119 452 482 374 -914 229 578 552 -523 -70 -876 -792 -271 -859 315 86 260 -688 383 -913 -582 -121 880 124 -774 234 -777 -889 361 910 -137 378 255 295 821 792 -360 935 0 -949 577 168 348 308 -921 661 678 804 94".split(" ").map(e => Number(e));
console.log(arr);
segregatePositiveAndNegative(arr, arr.length);
console.log(arr);

function segregateElements(arr, n) {
    let p = 0;
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            arr[p] = arr[i];
            p++;
        }
        else {
            arr2.push(arr[i]);
        }
    }
    let x = 0;
    for (let i = p; i < n; i++) {
        // if (arr2[i] === 0) console.log(arr2[i - 1], arr2[i], arr2[i + 1], "arr2");
        arr[i] = arr2[x++];
    }
    return arr;
}

const x = segregateElements(arr, arr.length);
console.log(x);

function findFirstOccurrence(arr, k) {
    // let idx = -1;
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === k) {
            if (mid === 0 || arr[mid - 1] !== k) {
                return mid;
            }
            else {
                high = mid - 1;
            }
        }
        else if (arr[mid] < k) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}

arr = [1, 10, 10, 10, 20, 20, 40];
let x2 = findFirstOccurrence(arr, 10);
console.log(x2);
x2 = findFirstOccurrence(arr, 13);
console.log(x2);

function findLastOccurrence(arr, k) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        if (arr[mid] === k) {
            if (mid === arr.length - 1 || arr[mid + 1] !== k) {
                return mid;
            }
            else {
                low = mid + 1;
            }
        }
        else if (arr[mid] < k) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
}

function frequency(arr, k) {
    return findLastOccurrence(arr, k) - findFirstOccurrence(arr, k) + 1;
}

function dnf(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low < high - 1) {
        if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
        else if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        }
    }
}

arr = [2, 2, 2, 0, 0, 0, 1, 1];
dnf(arr);
console.log(arr);

var setZeroes = function (matrix) {
    let zeroFound = false;
    let culprits = new Map();

    const m = matrix.length;
    for (let i = 0; i < m; i++) {
        const n = matrix[i].length;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroFound = true;
                if (!culprits.has("i")) {
                    let set1 = new Set();
                    let set2 = new Set();
                    set1.add(i);
                    set2.add(j);
                    culprits.set("i", set1);
                    culprits.set("j", set2);
                }
                else {
                    let set1 = culprits.get("i");
                    set1.add(i);
                    let set2 = culprits.get("j");
                    set2.add(j);
                    culprits.set("i", set1);
                    culprits.set("j", set2);
                }
            }
        }
    }
    if (culprits.has("i")) {
        for (let i = 0; i < m; i++) {
            const n = matrix[i].length;
            for (let j = 0; j < n; j++) {
                if (culprits.get("i").has(i) || culprits.get("j").has(j)) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
};

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix);
console.log(matrix);
matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(matrix);
console.log(matrix);

var moveZeroes = function (nums) {
    let i2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i2], nums[i]] = [nums[i], nums[i2]];
            i2++;
        }
    }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

function findUnion(arr1, arr2, n, m) {
    //your code here
    let i = 0;
    let j = 0;
    arr1 = Array.from(new Set(arr1));
    n = arr1.lnegth;
    arr2 = Array.from(new Set(arr2));
    m = arr2.lnegth;
    let arr = [];
    while (i < n && j < m) {
        if (arr1[i] === arr2[j]) {
            arr.push(arr1[i]);
            i++;
            j++;
        }
        else if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        else {
            arr.push(arr2[j]);
            j++;
        }
    }
    for (; i < n; i++) {
        arr.push(arr1[i]);
    }
    for (; j < m; j++) {
        arr.push(arr2[j]);
    }
    return arr;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3, 6, 7];
let x3 = findUnion(arr1, arr2, arr1.length, arr2.length);
console.log(x3);

var sortColors = function (nums) {
    // dutch national flag
    let low = 0;
    let high = 0;
    let medium = nums.length - 1;

    while (medium <= high) {
        console.log(nums, "i", low, medium, high);
        if (nums[meddim] === 2) {
            [nums[high], nums[medium]] = [nums[medium], nums[high]];
            high--;
        }
        else if (nums[medium] === 0) {
            [nums[low], nums[medium]] = [nums[medium], nums[low]];
            low++;
            medium++;
        }
        else {
            medium++;
        }
        console.log(nums, "f", low, medium, high);
    }
};

nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);

function isAnagram(a, b) {
    // code here
    if (a.length !== b.length)
        return false;

    let map1 = new Map();
    for (let i = 0; i < a.length; i++) {
        map1.set(a[i], ((map1.get(a[i]) || 0) + 1));
    }
    for (let i = 0; i < b.length; i++) {
        let freq = 0;
        if (map1.has(b[i])) {
            freq = map1.get(b[i]);
            freq--;
            if (freq === 0) {
                map1.delete(b[i]);
            }
            else {
                map1.set(b[i], freq);
            }
        }
        else {
            return false;
        }
    }
    if (map1.size === 0)
        return true;
    else
        return false;
}

console.log(isAnagram('geeksforgeeks', 'forgeeksgeeks'));

var rearrangeArray = function (nums) {
    let numsP = [];
    let numsN = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0 && nums[i] < 0) {
            numsN.push(i);
        }
        else if (i % 2 !== 0 && nums[i] > 0) {
            numsP.push(i);
        }
    }
    let x = 0;
    let y = 0;
    while (x < numsN.length && y < numsP.length) {
        [nums[numsN[x]], nums[numsP[y]]] = [nums[numsP[y]], nums[numsN[x]]];
        x++;
        y++;
    }
    return nums;
};

console.log([4, 5, 6, 2, -7, -2, -1, -6]);
console.log(rearrangeArray([4, 5, 6, 2, -7, -2, -1, -6]));

var removeOuterParentheses = function (s) {
    let count = -1;
    let s2 = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++;
            if (count > 0) {
                s2 += s[i];
            }
        }
        else if (s[i] === ")") {
            count--;
            if (count >= 0) {
                s2 += s[i];
                console.log(s2, i);
            }
        }
    }
    return s2;
};

console.log(removeOuterParentheses("((()()))()"));

let s1 = "69147625380966414753369524746653538962985324367924157127638354346858639061682497939981615381168371030737260720148967808264931214639476254292645633917299403694811266497196706833539101612590163994901333443767348140984101679301481160499100420288661680199034213485484203531607917913860157117132194024702881411287452719367857646391381074916194232154013153506962616845525274102547179899488566948993005195675635584227172662565046070014413068624087100668904172820762381152232822282408475283599940041084791351135053572289206415780978302801041945341952814478674280218893063578037891213974369905585575994084290696904528986061065673374570165276136814980253084376992964447725084232423480041724155369158557490627960242570333295945231582863040296629917217429220416782153926693706325031392804850220619019333593797190000295616225647185594079923045323167781456474370194539117766650527612092815780619022311678706763532237185921268485637114294300037539892313246598669327841783765915382011406526642673512724553375656976487849622494510462506929656851206276729350979344212914650223477804579725184070339821478233720945167670636328630112200848426483336796082896713605494692085649013249519350011546175808038890441040431566851353814837475580309016856471778401902716988371611586686119976759833261705058353458195657285353399824266217758015846687930302853272766983451502528546130873089720738277771184252786309007121024234473057771961997165965667640996833440095224265379322191439070547360157911501016260080265893475978335488357192149679146386643203172665282468549272400020860146051908543271630335636930100090899318781048028354158929093043766136628081226815947470531105833096739798421891426937650167671877628836368850162762922666788093761652289890749935981255977726597640838580501417165789391295651887114860050092449287875703029301125018607429069522233693180620073024266249753740571446956740687354453451466886583483483586267366485320775870894326983443695805045050928467200734293907737295450380162585150204502814353127943379531112359042652742866251085738385545146091935117455537062728167337461215756264126084818762099069319630399516704505998226731234388804851420259364502823134275576729911549044318343695310297711506291792651732816291087392219836915737671052987707459915304450020268387890345029586760304093467541823688101382721051334601842201388253208316816360389173690789476720005214107071634850895123708511919445456972965561927671377188626395612667830557371388740223461446627633041176142152483196863647046568969870368830048379363159229127065934104062911872282471830181796075789849749979905221711486565818981061735631631297557261694963788119389990682013071675321633613179854900490372954585835639981274392255174192581476212360186399454138453156309307968590964598724089921773516681133973670721734024222419830632365401814442484202435094765118615640994147539891370542451908261103565942992023766696922953386194118390934242406628346334889334375186694086542438269285507435095288959470396964535917650471883009954288734496686679899470617069014971103847156756650518860167449234359698504505669375402428617892571402503857626481638493680635853010127896951930485277586703656203634443946896331812335761707317445776262636785089897747594434852953774037676874042076751497534115733099000940656582344538565352326600047091103495611998996511815837466144776186870479666829052565995089142330292764054739862214051318660474733891478524744203594410238735186647741313518302585346581539885217895599098412865581675923831934891800381463429242195973091218527341146133155530153030440778110965984557663454182991269945206419106166910082242168268221756269962083479100593257228703220074859724387129514520580286060480224065474769509041898566430165562388788876569931360622901138604794719903803514895382944191479053472839516730953267084886865629258228280183235306885684676780964583744959752135317555928974874114862675119976453496551564196789630093582016301597224228483492766809846018040334801537358667155446053926096746272053649911928567285021553830775582126264395678446078907519919817755129441492531649828385974776565907055494343687715692209490763415359771001154773494314872255785641354741685573952328555809579475816602841362334704071469714797341855950837456017039610175900170679490786928551621593896763536735589607072288341335139014309742749366357967148030073565826082526379412886691122321425261197892594";

var largestOddNumber = function (num) {
    let s1 = "";
    let s2 = "";
    // if (num % 2 !== 0) {
    //     if (BigInt(num) % BigInt(2) !== 0)
    //         return num;
    // }

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            s1 = s1 + s2 + num[i];
            s2 = "";
        }
        else {
            s2 += num[i];
        }

        console.log(s1, s2);
        if (i === num.length - 2) {
            var x = 7;
        }
    }
    return s1;
};

// console.log(largestOddNumber(s1));


var longestCommonPrefix = function (strs) {
    let longest = "";
    let initial = Math.min(strs[0].length, strs[1]);

    for (let i = 0; i < strs.length - 1; i++) {
        let x = 0;
        let y = 0;
        let first = longest ? longest : strs[i];
        let second = strs[i + 1];
        if (!second)
            return first;


        let long = "";
        while (x < first.length && y < second.length) {
            if (first[x] === second[y]) {
                long += first[x];
                x++;
                y++;
                longest = long;
            }
            else {
                if (longest === "") return "";
                break;
            }
        }
    }
    return longest;
};

console.log(longestCommonPrefix(["flower"]));

var searchRange = function (nums, target) {
    function getLowerLimit(arr, target) {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                if (mid === 0 || arr[mid - 1] < target) {
                    return mid;
                }
                else {
                    high = mid - 1;
                }
            }
            else if (arr[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return -1;
    }
    function getHigherLimit(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        const n = arr.length;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                if (mid === n - 1 || arr[mid + 1] > target) {
                    return mid;
                }
                else {
                    low = mid + 1;
                }
            }
            else if (arr[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return -1;
    }

    return [getLowerLimit(nums, target), getHigherLimit(nums, target)];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 7));

var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            low = mid + 1;
        // nums[mid] > target
        else
            high = mid - 1;
        console.log(low);
    }
};

console.log(searchInsert([1, 3, 5, 6], 7));

var singleNonDuplicate = function (nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if ((nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) || low === high) {
            return mid;
        }
        else if (nums[mid] === nums[mid - 1]) {
            // number of elements in left and right
            // let left = mid - 2 + 1;
            let left = mid - 1;
            let right = high - mid;
            if (left % 2 !== 0) {
                high = mid - 2;
            }
            else if (right % 2 !== 0) {
                low = mid + 1;
            }
        }
        else if (nums[mid] === nums[mid + 1]) {
            // number of elements in left and right
            // let left = mid - 1 + 1;
            let left = mid;
            let right = high - (mid + 1);
            if (left % 2 !== 0) {
                high = mid - 1;
            }
            else if (right % 2 !== 0) {
                low = mid + 2;
            }
        }
    }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 1, 3, 3, 4, 4, 7, 8, 8]));


var findPeakElement = function (nums) {
    if (nums[0] > nums[1]) return 0;
    else if (nums[nums.lengh - 1] > nums[nums.length - 2]) return nums.length - 1;

    function inner(nums, low, high) {
        // base condition
        if (high - low > 1) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            else {
                let left = inner(nums, low, mid);
                if (left) {
                    return left;
                }
                else {
                    let right = inner(nums, mid, high);
                    return right;
                }
            }
        }
        else return;
    }
    const x = inner(nums, 0, nums.length - 1);
    if (x) return x;
    // return nums.length - 1;
};

console.log(findPeakElement([1, 2, 3, 1]), "x");
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]), "x");
console.log(findPeakElement([3, 4, 3, 2, 1]), "x");
console.log(findPeakElement([3, 4]), "x");

function rowWithMax1s(arr) {
    // code here
    const n = arr.length;
    let maxCount = 0;
    let row = -1;

    function bSearch(nums) {
        const m = nums.length;
        let low = 0;
        let high = m - 1;

        let count = 0;
        // corner cases
        if (nums[0] === 1) return m;
        else if (nums[m - 1] === 0) return 0;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] === 1 && nums[mid - 1] !== 1) {
                // 1st occurrence of 1 is at mid
                count = m - mid;
                return count;
            }
            else {
                if (nums[mid] === 1 && nums[mid - 1] === 1) {
                    high = mid - 1;
                }
                else if (nums[mid] === 0) {
                    if (nums[mid + 1] === 1) {
                        count = m - (mid + 1);
                        return mid;
                    }
                    else {
                        low = mid + 1;
                    }
                }
            }
        }
        return count;
    }

    for (let i = 0; i < n; i++) {
        let count = bSearch(arr[i]);
        if (count > maxCount) {
            maxCount = count;
            row = i;
        }
    }
    return row;
}

arr = [[0, 1, 1, 1],
[0, 0, 1, 1],
[1, 1, 1, 1],
[0, 0, 0, 0]];

console.log(rowWithMax1s(arr));

const rowWithMax1s_2 = (arr) => {
    // code here
    const n = arr.length;
    let maxCount = 0;
    let row = -1;

    function bSearch(nums) {
        const m = nums.length;
        let low = 0;
        let high = m - 1;

        let count = 0;
        // corner cases
        if (nums[0] === 1) return m;
        else if (nums[m - 1] === 0) return 0;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] === 1 && nums[mid - 1] !== 1) {
                // 1st occurrence of 1 is at mid
                count = m - mid;
                return count;
            }
            else {
                if (nums[mid] === 1 && nums[mid - 1] === 1) {
                    high = mid - 1;
                }
                else if (nums[mid] === 0) {
                    if (nums[mid + 1] === 1) {
                        count = m - (mid + 1);
                        return count;
                    }
                    else {
                        low = mid + 1;
                    }
                }
            }
        }
        return count;
    }

    for (let i = 0; i < n; i++) {
        let count = bSearch(arr[i]);
        if (count > maxCount) {
            maxCount = count;
            row = i;
        }
    }
    return row;
}

var searchMatrix = function (matrix, target) {
    const n = matrix.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        const m = matrix[mid].length;
        let low2 = 0;
        let high2 = m - 1;

        if (matrix[mid][0] > target) {
            high = mid - 1;
        }
        else if (matrix[mid][m - 1] < target) {
            low = mid + 1;
        }
        else {
            while (low2 <= high2) {
                const mid2 = Math.floor((low2 + high2) / 2);
                if (matrix[mid][mid2] === target) {
                    return true;
                }
                else if (matrix[mid][mid2] < target) {
                    low2 = mid2 + 1;
                }
                else {
                    high2 = mid2 - 1;
                }
            }
            return false;
        }
    }
    return false;
};

let target;
matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
// console.log(searchMatrix(matrix, target));

matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
console.log(searchMatrix(matrix, target));

// var searchMatrix2 = function (matrix, target) {
//     const n = matrix.length;
//     const m = matrix[0].length;

//     // suppose if we flatten this array it will have totla length of n*m and Bianry Search operation on it will cost O(log (n * m)) TC

//     let low = 0;
//     let high = n * m - 1;

//     while (low <= high) {
//         const mid = Math.floor((low + high) / 2);
//         let row = Math.floor(mid / m);
//         let column = mid % m;

//         if (matrix[row][column] === target) {
//             return true;
//         }
//         else if (matrix[row][column] < target) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }
//     return false;
// };

// console.log(searchMatrix2([[1, 1]], 2));

function visualiseMatrix(mat) {
    const matrixDiv = document.getElementById("matrix");
    matrixDiv.style.margin = "auto";
    matrixDiv.style.marginLeft = "25%";

    for (let row = 0; row < mat.length; row++) {
        let rowVal = "";
        let rowDiv = document.createElement('div');
        rowDiv.style.display = "flex";

        for (let col = 0; col < mat[row].length; col++) {
            let colDiv = document.createElement("div");
            colDiv.style.width = "1.5rem";
            colDiv.style.height = "1.5rem";
            colDiv.style.textAlign = "center";
            // colDiv.style.marginLeft = "4px";

            // if (col === mat[row].length - 1) {
            //     rowVal += mat[row][col];
            // }
            // else {
            //     rowVal += mat[row][col] + "_";
            // }

            colDiv.innerHTML = mat[row][col];
            rowDiv.appendChild(colDiv);
        }
        // rowDiv.innerHTML = rowVal;
        matrixDiv.appendChild(rowDiv);
    }
}

let testMat = [[72, 85, 92, 63, 20, 25, 38, 28, 8, 75, 95, 70, 8, 96, 41, 8, 7, 75, 62, 65, 68, 21, 8, 66, 11], [24, 9, 77, 9, 87, 31, 52, 16, 73, 32, 75, 77, 6, 80, 11, 54, 85, 73, 67, 41, 34, 27, 86, 92, 41], [31, 34, 51, 17, 86, 83, 39, 59, 41, 97, 10, 2, 59, 73, 13, 10, 69, 28, 65, 34, 17, 45, 9, 32, 48], [37, 21, 57, 70, 91, 39, 79, 84, 68, 2, 86, 71, 39, 85, 14, 18, 34, 15, 14, 96, 71, 20, 35, 37, 78], [27, 92, 44, 27, 88, 82, 34, 65, 63, 33, 7, 12, 82, 55, 36, 6, 1, 43, 99, 17, 82, 34, 21, 95, 57], [71, 91, 55, 72, 2, 15, 10, 89, 20, 70, 5, 48, 75, 71, 19, 56, 17, 6, 40, 47, 6, 46, 27, 88, 32], [86, 14, 46, 100, 72, 53, 80, 96, 31, 21, 23, 53, 4, 23, 95, 43, 53, 86, 95, 32, 35, 21, 90, 14, 49], [5, 61, 29, 26, 59, 45, 40, 30, 29, 4, 85, 25, 52, 43, 36, 9, 99, 36, 45, 83, 66, 52, 87, 69, 43], [4, 15, 34, 23, 75, 34, 5, 14, 77, 56, 45, 94, 41, 56, 78, 66, 15, 50, 74, 25, 33, 6, 91, 56, 1], [67, 69, 88, 93, 95, 86, 26, 47, 56, 9, 86, 43, 80, 41, 85, 16, 93, 39, 65, 40, 86, 53, 42, 52, 90], [38, 71, 17, 25, 54, 49, 87, 96, 23, 79, 73, 39, 52, 71, 1, 39, 37, 27, 56, 75, 78, 84, 60, 57, 87], [28, 66, 61, 95, 22, 85, 11, 37, 66, 85, 82, 80, 43, 12, 97, 31, 87, 40, 29, 26, 19, 4, 6, 32, 61], [79, 99, 10, 59, 54, 81, 74, 25, 92, 90, 50, 64, 52, 32, 19, 84, 89, 1, 97, 99, 14, 100, 55, 29, 23], [90, 67, 60, 7, 72, 32, 16, 59, 18, 60, 86, 68, 72, 77, 41, 97, 57, 79, 93, 65, 55, 71, 58, 21, 96], [61, 58, 34, 97, 32, 82, 36, 99, 100, 67, 63, 81, 31, 36, 57, 10, 92, 37, 31, 35, 43, 41, 70, 11, 18], [20, 30, 50, 89, 20, 91, 28, 9, 54, 53, 43, 70, 60, 54, 8, 27, 54, 50, 99, 75, 90, 3, 98, 74, 49], [62, 1, 46, 39, 97, 50, 54, 69, 96, 95, 70, 78, 29, 63, 29, 35, 56, 63, 4, 50, 44, 86, 87, 52, 93], [22, 60, 17, 80, 69, 4, 51, 76, 73, 85, 4, 11, 83, 55, 18, 60, 24, 7, 34, 49, 42, 28, 59, 42, 44], [98, 49, 36, 97, 54, 33, 11, 61, 3, 96, 70, 7, 45, 29, 84, 9, 100, 84, 6, 97, 4, 32, 26, 3, 80], [20, 31, 17, 61, 86, 15, 73, 28, 60, 90, 33, 99, 48, 22, 78, 96, 92, 15, 100, 21, 40, 14, 75, 4, 40], [74, 87, 49, 51, 92, 26, 10, 76, 89, 81, 32, 14, 90, 99, 39, 88, 77, 16, 73, 6, 45, 69, 55, 85, 48], [9, 65, 83, 44, 2, 54, 63, 14, 56, 47, 82, 59, 91, 20, 56, 23, 94, 67, 84, 35, 79, 100, 62, 60, 56], [94, 76, 35, 42, 32, 12, 36, 58, 32, 97, 60, 73, 79, 86, 49, 44, 4, 64, 42, 24, 63, 28, 46, 34, 44], [36, 77, 90, 36, 72, 2, 67, 25, 11, 31, 93, 53, 63, 72, 98, 31, 89, 61, 83, 92, 58, 3, 12, 38, 29]];

visualiseMatrix(testMat);
console.log(testMat[0][9]);

var findPeakGrid = function (mat) {
    const n = mat.length;
    const m = mat[0].length;

    if (n === 1 && m === 1) return [0, 0];
    // else if(mat[0][0] > mat[0][1] && mat[0][0] > mat[1][0]) return [0,0];
    // else if(mat[0][0] > mat[0][1] && mat[0][0] > mat[1][0]) return [0,0];

    function peakColumnIndex(nums, m) {

        if (m === 1) return 0;
        // else if (nums[0] > nums[1]) return 0;
        // else if (nums[m - 1] > nums[m - 2]) return m - 1;

        let low = 0;
        let high = m - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (!nums[mid - 1]) nums[mid - 1] = Number.MIN_SAFE_INTEGER;
            if (!nums[mid + 1]) nums[mid + 1] = Number.MIN_SAFE_INTEGER;
            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1])
                return mid;
            // single peaks
            // increasing
            else if (nums[mid] > nums[mid - 1] && nums[mid + 1] > nums[mid])
                low = mid + 1;
            // decreasing
            else if (nums[mid] < nums[mid - 1] && nums[mid + 1] < nums[mid])
                high = mid - 1;
            // dip case
            else if (nums[mid] < nums[mid - 1] && nums[mid + 1] > nums[mid]) {
                console.log("danger");
                if (nums[mid + 1] > nums[mid - 1]) {
                    console.log("1")
                    low = mid + 1;
                }
                else {
                    console.log("2")
                    high = mid - 1;
                }
            }
            // else if()
        }
        return - 1; // situation not gonna arise
    }
    // let col = peakColumnIndex

    for (let i = 0; i < n; i++) {
        let col = peakColumnIndex(mat[i], m);
        console.log(col);
        if (col > -1) {
            if (mat[i - 1] && mat[i + 1]) {
                if (mat[i][col] > mat[i - 1][col] && mat[i][col] > mat[i + 1][col]) {
                    return [i, col];
                }
            }
            else if ((!mat[i - 1] && mat[i][col] > mat[i + 1][col]) || (!mat[i + 1] && mat[i][col] > mat[i - 1][col])) {
                return [i, col];
            }
        }
    }
    return [-1, -1];
};

// console.log(findPeakGrid([[10, 50, 40, 30, 20], [1, 500, 2, 3, 4]]));
// console.log(findPeakGrid([[1, 4], [3, 2]]));
console.log(findPeakGrid([[7, 2, 3, 1, 2], [6, 5, 4, 2, 1]]));

console.log(`Problem Statement:
There's an array 'A' of size 'N' with positive and negative elements (not necessarily equal). Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values. The leftover elements should be placed at the very end in the same order as in array A.

Note: Start the array with positive elements.

Examples: 

Example 1:

Input:
arr[] = {1,2,-4,-5,3,4}, N = 6
Output:
1 -4 2 -5 3 4

Explanation: 

Positive elements = 1,2
Negative elements = -4,-5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.
Leftover positive elements are 3 and 4 which are then placed at the end of the array.
`);

function segregatePositiveAndNegativeV2(nums) {
    // brute force is the only option
    let pos = [];
    let neg = [];
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) pos.push(nums[i]);
        else neg.push(nums[i]);
    }

    const len = Math.min(pos.length, neg.length);
    const overflow = pos.length > neg.length ? pos : neg;
    let idx = 0; // index upto which nums is filled
    for (let i = 0; i < len; i++) {
        nums[2 * i] = pos[i];
        nums[2 * i + 1] = neg[i];
        idx = 2 * i + 1;
    }

    for (let i = len; i < overflow.length; i++) {
        nums[idx + 1] = overflow[i];
        idx++;
    }
    return nums;
}

console.log(segregatePositiveAndNegativeV2([1, 2, -4, -5, 3, 4]));

// Bubble Sort
function bubbleSort1(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - (i + 1); j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

arr = [10, 8, 20, 5];
console.log(arr);
bubbleSort1(arr);
console.log(arr);

function bubbleSort2(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}

arr = [10, 8, 20, 5];
console.log(arr);
bubbleSort2(arr);
console.log(arr);

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}
arr = [64, 35, 12, 22, 11];
console.log(arr);
selectionSort(arr);
console.log(arr);

var minEatingSpeed = function (piles, h) {
    const max = Math.max(...piles);
    let low = 1;
    let high = max;

    function getTime(nums, k) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Math.ceil(nums[i] / k);
        }
        return sum;
    }

    for (let i = low; i <= max; i++) {
        let time = getTime(piles, i);
        if (time <= h) {
            return i;
        }
    }
    return max;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));

// to shift ith term in cyclic way
function rotateArray(arr, k) {
    const n = arr.length;
    let arr1 = [];
    for (let i = 0; i < arr.lengh; i++) {
        arr1[(i + k) % n] = arr[i];
    }
    return arr1;
}

function mergeSort(arr) {
    let low = 0;
    let high = arr.length - 1;

    function merge(arr, low, high) {
        const mid = Math.floor((low + high) / 2);
        let left = low;
        let right = mid + 1;

        let temp = [];
        while (left <= mid && right <= high) {
            if (arr[left] < arr[right]) {
                temp.push(arr[left]);
                left++;
            }
            else if (arr[left] > arr[right]) {
                temp.push(arr[right]);
                right++;
            }
            else {
                temp.push(arr[left]);
                temp.push(arr[right]);
                left++;
                right++;
            }
        }
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    function innerMergeSort(arr, low, high) {
        if (low >= high) return;

        const mid = Math.floor((low + high) / 2);
        innerMergeSort(arr, low, mid);
        innerMergeSort(arr, mid + 1, high);
        merge(arr, low, high);
    }

    innerMergeSort(arr, low, high);
}

const arr11 = [1, 14, 6, 2, 9, 7, 3, 12];
console.log(arr11);
mergeSort(arr11);
console.log(arr11);

var search = function (arr, target) {
    const n = arr.length;
    let low = 0;
    let high = n - 1;

    function innerSearch(arr, low, high) {
        if (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === target) {
                return mid;
            }

            let left = innerSearch(arr, low, mid - 1);
            if (left > -1) return left;
            else {
                let right = innerSearch(arr, mid + 1, high);
                if (right) return right;
                else return -1;
            }
        }
    }
    let idx = innerSearch(arr, low, high);
    return idx > -1 ? idx : -1;
};

console.log([4, 5, 6, 7, 0, 1, 2], 0);
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

arr = [{ e: 2 }, { r: 1 }, { t: 1 }];
let str = arr.reduce((a, c) => {
    let key = Object.keys(c)[0];
    let count = c[key];
    let st = "";
    for (let i = 0; i < count; i++) {
        st += key;
    }
    a += st;
    return a;
}, "");
console.log(str);

function merge(arr1, arr2, N, M) {
    //your code here
    let jump = Math.ceil((N + M) / 2);

    while (jump > 0) {
        for (let i = 0; i < N + M - jump; i++) {
            let x = i;
            let y = i + jump;
            // both in 1st array array
            if (y < N) {
                if (arr1[x] > arr1[y]) {
                    [arr1[x], arr1[y]] = [arr1[y], arr1[x]];
                }
            }
            // x in arr1 and y in arr2
            else if (x < N && y >= N) {
                y = y - N;
                if (arr1[x] > arr2[y]) {
                    [arr1[x], arr2[y]] = [arr2[y], arr1[x]];
                }
            }
            // both in arr2
            else if (x >= N) {
                x = x - N;
                y = y - N;
                if (arr2[x] > arr2[y]) {
                    [arr2[x], arr2[y]] = [arr2[y], arr2[x]];
                }
            }
        }
        if (jump === 1) jump = 0;
        jump = Math.floor(jump / 2) + jump % 2;
    }

    console.log(arr1, arr2);
    return [null];
}

console.log(merge([1, 3, 5, 7], [0, 2, 6, 8, 9], 4, 5));

function kthElement(k, arr1, arr2) {
    // code here
    let count = 0;
    let res = 0;
    const n = arr1.length;
    const m = arr2.length;
    let i = 0;
    let j = 0;
    let xArr = [];
    while (i < n && j < m) {
        if (count === k) break;
        if (arr1[i] < arr2[j]) {
            res = arr1[i];
            i++
        }
        else {
            res = arr2[j];
            j++;
        }
        xArr.push(res);
        count++;
    }
    if (count < k) {
        let x = 0;
        let y = 0;
        let arr = [];
        if (i === n) {
            x = j;
            y = m;
            arr = arr2;
        }
        else {
            x = i;
            y = n;
            arr = arr1;
        }

        while (x < y) {
            if (count === k) break;
            res = arr[x];
            x++;
            count++;
            xArr.push(res);
        }
    }
    console.log(xArr);
    return res;
}

// console.log(kthElement(5, [2, 3, 6, 7, 9], [1, 4, 8, 10]));
// console.log(kthElement(7, [2, 3, 6, 7, 9], [1, 4, 8, 10]));
console.log(kthElement(8, [2, 3, 6, 7], [1, 4, 8, 9, 10]));

var smallestDivisor = function (nums, threshold) {
    let low = 1;
    let high = Math.max(...nums);

    function isDivisor(k) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Math.ceil(nums[i] / k);
            if (sum > threshold)
                return false;
        }
        return true;
    }

    let ans = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const isDiv = isDivisor(mid);

        if (isDiv) {
            ans = mid;
            high = mid - 1;
        }
        else
            low = mid + 1;
    }
    return ans;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([21212, 10101, 12121], 1000000));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));

var findKthPositive = function (arr, k) {
    let set1 = new Set(arr);
    let i = 1;
    let count = 0;
    let ans = 0;
    while (count < k) {
        if (!set1.has(i)) {
            // console.log(i);
            ans = i;
            count++;
        }
        i++;
    }
    return ans;
};

var addToArrayForm = function (num, k) {
    let number1 = num.reduce((a, c) => {
        a = a * 10 + c
        return a;
    }, 0);
    console.log(number1, "b");
    let num2 = number1 + k + "";
    return num2.split("").map(e => e - 0);

};

// console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516));

var countSmaller = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i])
                count++;
        }
        result.push(count);
    }
    return result;
};

console.log(countSmaller([5, 2, 6, 1]));

function inversionCount(arr) {
    // your code here
    function counter(arr, low, high) {
        const mid = Math.floor((low + high) / 2);

        let left = low;
        let right = mid + 1;

        let temp = [];
        while (left <= mid && right <= high) {
            if (arr[left] > arr[right]) {
                count.val = count.val + mid - left + 1;
                temp.push(arr[right]);
                right++;
            }
            else {
                temp.push(arr[left]);
                left++;
            }
        }
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
        // return count;
    }

    let count = { val: 0 };
    function inner(arr, low, high) {
        if (low >= high) return;
        const mid = Math.floor((low + high) / 2);
        inner(arr, low, mid);
        inner(arr, mid + 1, high);
        counter(arr, low, high);
    }
    inner(arr, 0, arr.length - 1);
    return count.val;
}

console.log(inversionCount([2, 4, 1, 3, 5]));
