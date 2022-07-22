import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: '' });
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({ name: '', nickname: '' });
    };
    
    return (
        <div>
            <input placeholder="이름" onChange={onChange} name="name" value={name} />
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