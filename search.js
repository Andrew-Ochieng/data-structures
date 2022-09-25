// fetch
// const api = "db.json"
const data = [
    {
        "date": "2019-12-06",
        "description": "Venmo, Alice Pays you for Burrito",
        "category": "Food",
        "amount": 8.75
    },
    {
        "date": "2019-12-06",
        "description": "Chipotle",
        "category": "Food",
        "amount": -17.59
    },
    {
        "date": "2019-12-07",
        "description": "Birthday Check from Grandma",
        "category": "Gift",
        "amount": 50
    },
]

console.log(data)


// initialize variables
const search = document.getElementById('search')
const transactions = document.getElementById('transactions')
const newTransaction = document.getElementById('new-transaction')


const showTransactions = data.map((item) => {
    // return transact[0]
    // console.log(transact.description)
    transactions.innerHTML = `
        <div>
            <h3>${item.date}</h3>
            <p>${item.description}</p>
            <h4>${item.category}</h4>
            <p>${item.amount}</p>
        </div>
    `
})

const eachTransaction = data.forEach((newItem) => {
    newTransaction.innerHTML = `
        <div>
            <h3>${newItem.date}</h3>
            <p>${newItem.description}</p>
            <h4>${newItem.category}</h4>
            <p>${newItem.amount}</p>
        </div>
    `
}) 




// search.addEventListener('keyup', () => {
//     console.log('proceed')

//     // getTransactions()
// })











































// const getTransactions = () => {
//     fetch(api)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         console.log(data.transactions[0])
          
//     })

// }

// console.log(getTransactions())



















