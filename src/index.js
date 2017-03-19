require('./style.scss')

function portals() {
  document.addEventListener('keydown', _keyDownHandler)

  const mover = document.querySelector('.mover')
  const portals = document.querySelector('portal')
  const blue = document.querySelector('.blue')
  const orange = document.querySelector('.orange')

  blue.addEventListener('mousedown', () => togglePortalMovement('movingBluePortal'))
  orange.addEventListener('mousedown', () => togglePortalMovement('movingOrangePortal'))
  blue.addEventListener('mouseup', () => togglePortalMovement('movingBluePortal'))
  orange.addEventListener('mouseup', () => togglePortalMovement('movingOrangePortal'))


  document.addEventListener('mousemove', _handleMouseMove)

  const state = {
    location: {
      top: 0,
      left: 0
    },
    movingBluePortal: false,
    movingOrangePortal: false
  }

  function togglePortalMovement (movingColorPortal) {
    state[movingColorPortal] = !state[movingColorPortal];
  }

  function _handleMouseMove (ev) {
    if (state.movingOrangePortal || state.movingBluePortal) {
      console.log('ev', ev);
    }
  }

  function _keyDownHandler (ev) {
    switch (ev.key) {
      case 'ArrowUp':
        updateState('top', -5)
        break
      case 'ArrowRight':
        updateState('left', 5)
        break
      case 'ArrowDown':
        updateState('top', 5)
        break
      case 'ArrowLeft':
        updateState('left', -5)
        break
    }
  }

  function updateState (direction, val) {
    const newMargin = state.location[direction] + val
    state.location[direction] = newMargin
    mover.style[direction] = newMargin
  }
}

portals()
