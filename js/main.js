const $pass = document.querySelector('.pass')
const $button = document.querySelector('#button')
const $clip = document.querySelector('.clip')

function generatePass (len) {
  let pass = ''
  let str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$'

  for (let i = 1; i <= len; i++) {
    let char = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char)
  }

  return pass
}

$button.addEventListener('click', () => {
  const $radio = document.querySelector('input[type="radio"]:checked')
  const len = Number($radio.value)
  const pass = generatePass(len)
  $pass.textContent = pass
})

$clip.addEventListener('click', () => {
  navigator.clipboard.writeText($pass.textContent)
  $clip.children[0].src = '../assets/check.svg'

  setTimeout(() => {
    $clip.children[0].src = '../assets/clip.svg'
  }, 2000)
})
