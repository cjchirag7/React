import {DISHES} from '../shared/dishes.js';
import {COMMENTS} from '../shared/comments.js';
import {LEADERS} from '../shared/leaders.js';
import {PROMOTIONS} from '../shared/promotions.js';

export const initialState ={
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

// use default parameter to avoid the case when state is undefined
export const Reducer = (state=initialState,action) =>{
    return state;
}