import { onSaleRef } from './config'
import moment from 'moment'


const start = () => {
  return onSaleRef
  .remove()
  .then(() => console.log('done'))
}

setInterval(() => start(), 86100000)