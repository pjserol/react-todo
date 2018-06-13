import { connect } from 'react-redux';
import { doneItem } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items;
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter(i => !i.done);
    case VisibilityFilters.SHOW_COMPLETED:
      return  items.filter(i => i.done);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  items: getVisibleItems(state.items, state.visibilityFilter)
})

/*const mapStateToProps = function (state) {

   var numberItemLeft = state.items.reduce(function (accum, item) {
    				return item.done ? accum : accum + 1;
    			}, 0);

   console.log("VisibleTodoList | nbItemLeft : " + numberItemLeft);
   return {
   items: getVisibleItems(state.items, state.visibilityFilter),
   numberItemLeft: numberItemLeft
 }
}*/

const mapDispatchToProps = dispatch => ({
  doneItem: key => dispatch(doneItem(key))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (TodoList)
