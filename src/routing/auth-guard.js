import store from '../store/store'

export default function (to, from, next) {
  if (store.getters.user === 'user') {
    next()
  } else {
    next('/')
  }
}
