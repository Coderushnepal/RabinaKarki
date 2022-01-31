"use strict";

// 1: getting the dom element
const total_balance = document.getElementsByClassName("total_balance")[0];
const positive_balance = document.getElementsByClassName("positive_balance")[0];
const negative_balance = document.getElementsByClassName("negative_balance")[0];
const items = document.getElementsByClassName("items")[0];
const input_text = document.getElementById("input_text");
const input_amount = document.getElementById("input_amount");
const form = document.getElementById("form");


// ---data format---
// const dummyTransaction = [
//     { id: 1, text: "flower", amount: -200 },
//     { id: 2, text: "Salary", amount: 60000 },
//     { id: 3, text: "Book", amount: -10000 },
//     { id: 4, text: "Camera", amount: -150000 },
// ];


// 2. Get the data if it is in local storage 
const localStorageTransaction = JSON.parse(
    localStorage.getItem("transactions")
);
let transactions =
    localStorage.getItem("transactions") !== null
        ? localStorageTransaction
        : [];


function generateId() {
    return Math.ceil(Math.random() * 1000000000);
}

// add transaction (when form is submitted)
function addTransaction(event) {
    event.preventDefault();

    if (input_text.value.trim() === "" || input_amount.value.trim() === "") {
        alert("Please Enter Text and Value");
    } else {
        const transaction_ = {
            id: generateId(),
            text: input_text.value,
            amount: +input_amount.value,
        };

        transactions.push(transaction_);
        addTransactionToHistory(transaction_);
        updateLocalStorage();
        updateValues();
        input_text.value = "";
        input_amount.value = "";
    }
}

// adding transaction to history
function addTransactionToHistory(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("history__item");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus", "item");
    div.innerHTML = `
        <span>${transaction.text}</span>
        <span>${sign} ${Math.abs(transaction.amount)}</span>
    `;
    item.innerHTML = `
        <button class="delete-btn" onclick="removeItem(${transaction.id})">
           X
        </button>
    `;
    item.append(div);
    items.appendChild(item);
}

// removing history item
function removeItem(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    updateLocalStorage();
    init();
}

// update total_balance, income_ and expense_
function updateValues() {
    const amount_ = transactions.map((transaction) => transaction.amount);
    const total_ = amount_.reduce((prev, current) => (prev += current), 0).toFixed(2);
    const income_ = amount_
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense_ = (
        amount_
            .filter((item) => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    total_balance.innerText = `Rs. ${total_}`;
    positive_balance.innerText = `Rs. ${income_}`;
    negative_balance.innerText = `Rs. ${expense_}`;
}

// updating local storage
function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// 3. init app
function init() {
    items.innerHTML = "";
    transactions.forEach(addTransactionToHistory);
    updateValues();
}

init();

form.addEventListener("submit", addTransaction);