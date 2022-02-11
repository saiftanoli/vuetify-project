export default{
    state:{
        mobile:[
            {id:1, company:'dell' , price:20000},
            {id:2, company:'linux' , price:30000},
            {id:3, company:'accer' , price:25000},
            {id:4, company:'microsoft' , price:70000},
        ],
    },
    mutations:{
        addMobile(state,payload){
            state.mobile.push(payload)
        }
    },
    actions:{
        addMobile(context){
            context.commit('addMobile', {id:5, company:'samsung' , price:'80000'} )
        }
    },
    getters:{  
        getMobile(state){
            return state.mobile;
        },  
}}