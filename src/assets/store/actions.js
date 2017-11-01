import * as types from './types'
export default {
    addnum:({state,commit},payload)=>{
        let find = false;
       state.shuju.forEach((item)=>{
           if( item.id == payload.id){
               item.num++;
               find = true;
           }
       })
        if(!find){
           payload.num = 1;
           state.shuju.push(payload);
        }
        commit(types.addNum,[...state.shuju]);
    },
    delnum:({state,commit},payload)=>{
        let find = false;
        state.shuju.forEach((item)=>{
            if( item.id == payload.id){
                item.num--;
                find = true;
            }
        })
        if(!find){
            payload.num = 1;
            state.shuju.push(payload);
        }
        commit(types.addNum,[...state.shuju]);
    }
}