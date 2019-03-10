var oneMonth = document.getElementById("box-1"),
            threeMonths = document.getElementById("box-3"),
            sixMonths = document.getElementById("box-6"),
            oneYear = document.getElementById("box-12"),
            modal = document.getElementById("bank"),
            couch = document.getElementById("couch-box"),
            price = document.getElementById("price"),
            buy = document.getElementById("buy");
cost = 0,
couchState = false,
subscription = 0;

oneMonth.onclick = function () {
    oneMonth.classList.toggle("active");
    threeMonths.classList.remove("active");
    sixMonths.classList.remove("active");
    oneYear.classList.remove("active");

    subscription = 1;

    calcPrice(subscription, couchState);
}

threeMonths.onclick = function () {
    threeMonths.classList.toggle("active");
    oneMonth.classList.remove("active");
    sixMonths.classList.remove("active");
    oneYear.classList.remove("active");

    subscription = 3;

    calcPrice(subscription, couchState);
}

sixMonths.onclick = function () {
    sixMonths.classList.toggle("active");
    oneMonth.classList.remove("active");
    threeMonths.classList.remove("active");
    oneYear.classList.remove("active");

    subscription = 6;

    calcPrice(subscription, couchState);
}

oneYear.onclick = function () {
    oneYear.classList.toggle("active");
    oneMonth.classList.remove("active");
    threeMonths.classList.remove("active");
    sixMonths.classList.remove("active");

    subscription = 12;

    calcPrice(subscription, couchState);
}

couch.onclick = function () {
    if (couchState == false) {
        couch.classList.add("active");
        couchState = true;
    } else {
        couch.classList.remove("active");
        couchState = false;
    }

    if (subscription > 0) {
        calcPrice(subscription, couchState);
    }
}

buy.onclick = function () {
    if (cost > 0) {
        modal.style.display = "block";
    }
}

function calcPrice(subscription, couch) {
    var paymentForMonth = 300;

    if (couch) {
        paymentForMonth += 50;
    }

    cost = paymentForMonth * subscription;
    price.innerHTML = paymentForMonth * subscription;
}

function closeModal() {
    modal.style.display = "none";
}