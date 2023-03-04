    document.querySelector("#scaleweight").onmouseover = event => {
        setInterval(() => {
        event.target.innerText = Math.floor(Math.random() * 200);
    }, 100)
    }