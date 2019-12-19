document.addEventListener("DOMContentLoaded", () => {
  // console.log("hello")

  let form = document.querySelector("form")
  let select = document.querySelector("select")
  let option = document.querySelector("option")
  let textInput = document.querySelector("#textInput")
  let submitInput = document.querySelector("#submitInput")
  let movieInfo = document.querySelector("#movieInfo")

  let h3 = document.createElement("h3")
  movieInfo.appendChild(h3)
  let dateP = document.createElement("p")
  movieInfo.appendChild(dateP)
  let descriptionP = document.createElement("p")
  movieInfo.appendChild(descriptionP)

  select.addEventListener("change", async e => {
    h3.innerText = e.target.value
    try {
      let res = await axios.get("https://ghibliapi.herokuapp.com/films")
      res.data.forEach(movie => {
        if (e.target.value === movie.title) {
          dateP.innerText = movie.release_date
          descriptionP.innerText = movie.description
        }
      })
    } catch (err) {
      console.log(err)
    }

    let ul = document.createElement("ul")
    form.appendChild(ul)
    let li = document.createElement("li")
    ul.appendChild(li)
    let titleP = document.createElement("p")

    form.addEventListener("submit", async e => {
      // h2.innerText = `${movie.title}:`
      e.preventDefault()
      try {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films")
        res.data.forEach(movie => {
        //   if (e.target.value === movie.title) {
            // titleP.innerText = res.data.movie.title
            li.innerText = `${textInput.value}`
            form.appendChild(titleP)
        //   }
        })
      } catch (err) {
        console.log(err)
      }
      // ul.removeChild(li)
    })
  })

  // select.addEventListener("change", async e => {
  //     h3.innerText = e.target.value
  //     try {
  //       let res = await axios.get("https://ghibliapi.herokuapp.com/films")
  //       res.data.forEach(movie => {
  //         if (e.target.value === movie.title) {
  //           dateP.innerText = movie.release_date
  //           descriptionP.innerText = movie.description
  //         }
  //       })
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   })

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

    // let h3 = document.createElement("h3")
    // movieInfo.appendChild(h3)
    // let dateP = document.createElement("p")
    // movieInfo.appendChild(dateP)
    // let descriptionP = document.createElement("p")
    // movieInfo.appendChild(descriptionP)

    // select.addEventListener("change", async e => {
    //   h3.innerText = e.target.value
    //   try {
    //     let res = await axios.get("https://ghibliapi.herokuapp.com/films")
    //     res.data.forEach(movie => {
    //       if (e.target.value === movie.title) {
    //         dateP.innerText = movie.release_date
    //         descriptionP.innerText = movie.description
    //       }
    //     })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // })

    // let reviewDiv = document.createElement("div")
    // body.appendChild(reviewDiv)

    // form.addEventListener("submit", async e => {
    //     e.preventDefault();
    //     let ul = document.createElement("ul")
    //     form.appendChild(ul)
    //     let li = document.createElement("li")
    //     ul.appendChild(li)
    //     if (e.target.value === movie.title)
    //     li.innerText = movie.title
    // })
  }
  populateSelect()
})
