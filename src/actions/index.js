export const addItem = item => ({type: 'ADD_ITEM', item})

export const doneItem = key => ({type: 'DONE_ITEM', key})

export const removeItem = key => ({type: 'REMOVE_ITEM', key})

export const setVisibilityFilter = filter => ({type: 'SET_VISIBILITY_FILTER', filter})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
