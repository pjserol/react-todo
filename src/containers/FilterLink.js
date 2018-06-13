import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link'

/*const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})*/

const mapStateToProps = function (state, ownProps) {
   console.log("state");
   console.log(state.items.length);
   return {
   active: ownProps.filter === state.visibilityFilter,
   numberItemsLeft:state.items.length
 }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Link)
