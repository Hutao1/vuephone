import * as types from './types'
export default {
   [types.addNum]:(state,payload)=>{
       state.shuju = payload;
    },
    [types.delNum]:(state,payload)=>{
        state.shuju = payload;
    }
}