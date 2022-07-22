import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: '' });
    const { name, nickname } = inputs;
    const nameInput = useRef();

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({ name: '', nickname: '' });
        nameInput.current.focus();
    };
    
    return (
        <div>
            <input placeholder="이름" onChange={onChange} name="name" value={name} ref={nameInput} />
            <input placeholder="닉네임" onChange={onChange} name="nickname" value={nickname} />
            <button onClick={onReset}> 초기화 </button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;