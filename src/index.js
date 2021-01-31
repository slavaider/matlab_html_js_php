const $data = document.querySelector(".data")
const arr = $data.querySelectorAll('data')
arr.forEach(data => {
    console.log(data.value,':', data.textContent)
})

