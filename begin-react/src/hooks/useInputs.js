import { useReducer, useCallback } from 'react';

const initialForm = {
    username: '',
    email: '',
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, [action.name]: action.value };
        case 'RESET':
            return initialForm;
        default:
            return state;
    }
};


function useInputs() {
  //const [form, setForm] = useState(initialForm);
    const [state, dispatch] = useReducer(reducer, { username: '', email: ''});
  // change
  const onChange = useCallback(e => {
      const { name, value } = e.target;
      dispatch({
          type: 'CHANGE',
          name,
          value,
      });
    //setForm(form => ({ ...form, [name]: value }));
  }, []);
  //const reset = useCallback(() => setForm(initialForm), [initialForm]);
  //return [form, onChange, reset];
    const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
    return [state, onChange, reset];
}

export default useInputs;