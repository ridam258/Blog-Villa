
  import getters from './getters.js';
  import mutations from './mutations.js';
  import actions from './actions.js';
  export default{
      
      state(){
        return {
          userId:null,
          token:null,
          isLoggedIn:false,
          firstName:'',
          lastName:''
        }
      },
      getters,
      mutations,
      actions
  }