export default{
    state:{
        computer:[
            {id:1, company:'dell' , price:'20000'},
            {id:2, company:'linux' , price:'30000'},
            {id:3, company:'accer' , price:'25000'},
            {id:4, company:'microsoft' , price:'70000'},
        ]
    },
    getters:{
        addComputer(state){
            return state.computer;
        }
    }
}