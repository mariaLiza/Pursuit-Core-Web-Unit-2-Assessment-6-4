document.addEventListener("DOMContentLoaded", () => {
  // console.log("hello")

  let form = document.querySelector("form")
  let select = document.querySelector("select")
  let option = document.querySelector("option")
  let textInput = document.querySelector("#textInput")
  let submitInput = document.querySelector("#submitInput")

  const populateSelect = async () => {
    try {
      let res = await axios.get("https://ghibliapi.herokuapp.com/films")
      res.data.forEach(movie => {
        let options = document.createElement("option")
        options.value = movie.title
        options.innerText = movie.title
        select.appendChild(options)
      })
    } catch (err) {
      console.log(err)
    }
  }

  populateSelect()
})
