import { createStore } from 'redux';

function counter(state = 0, action) {
  if(action.type === 'INCREMENT'){
      return state +4;
  }
  else if (action.type=='DECREMENT'){
    return state -1;
  }
  }


  let store = createStore(counter);

  store.subscribe(() =>
  console.log(store.getState())
)

    // Единственный способ изменить внутреннее состояние - это вызвать экшен
    // Экшены могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
    store.dispatch({ type: 'INCREMENT' })


    export default store;