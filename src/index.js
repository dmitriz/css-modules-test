// index.js

import greetings from './robot.js'
import styles from './app.css'
import animations from './scoped-animations.css'
require("./alert.js")


document.write(
	greetings("Affirmative", "Dave")
)

let element = `
  <div class="${styles.element}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
  </div>
`

document.write(element)

let el1 = `
	<div class="${animations.root}"></div>
	<div class="${animations.ball}"></div>
`

document.write(el1)