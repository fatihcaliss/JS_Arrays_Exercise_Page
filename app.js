
let sub = document.getElementById("save");
sub.addEventListener("click", scorecheck);

function scorecheck() {
    let ans1 = document.getElementById("1").value;
    let ans2 = document.getElementById("2").value;
    let ans3 = document.getElementById("3").value;
    let ans4 = document.getElementById("4").value;
    let ans5 = document.getElementById("5").value;
    let ans6 = document.getElementById("6").value;
    let score = 0;
    if (ans1 == "nums.splice(2,1)"){
        score += 10;
    }
    if (ans2 == "nums.pop()") {
        score += 10;
    }
    if (ans3 == "nums.splice(0)") {
        score += 20;
    }
    if (ans4 == "nums.concat(b)") {
        score += 20;
    }
    if (ans5 == "nums.unshift(1)") {
        score += 20;
    }
    if (ans6 == ("nums.splice(1,0,'two-and-half')") || ans6 == ('nums.splice(1,0,"two-and-half")') ) {
        score += 20;
    }
    document.getElementById("result").innerHTML = score
}

function refresh() {
    document.getElementById("result").innerHTML = ""
}
