const data = "1,0,0,0,0"

const menu = {
  0: 'Best fish',
  1: 'Smelly Burger',
  2: 'Super burrito',
  3: 'Square watermelon',
  4: 'Salty churro',
}
const items = data.split(',').reduce((customerOrder, selected, itemID) => {

  if(parseInt(selected)) {
    customerOrder.push(menu[itemID])
  }
  return customerOrder
}, [])


console.log('items:', items)
