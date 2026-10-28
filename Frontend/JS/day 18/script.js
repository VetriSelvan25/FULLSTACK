
function createCounter() {
    let count = 0;

    return () => {
        count = count + 10;
        console.log(count);
        document.getElementById("result").innerHTML += count + "<br>";
    };
}

let counter = createCounter();
