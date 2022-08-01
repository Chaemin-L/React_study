import React, {Component} from 'react';

// 클래스형 컴포넌트
class Hello extends Component{
    render() {
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

Hello.defaultProps = { namd: '이름없음' }

export default Hello;