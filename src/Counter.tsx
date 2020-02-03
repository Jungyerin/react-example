import React, {Component} from 'react';

interface Props {

}

interface State {
    number : number
    fixedNumber : 0
}

class Counter extends Component<Props, State>{
    constructor(props: any) {
        super(props);
        // this.state = {
        //     number: 0,
        //     fixedNumber : 0
        // };
    }

    state : State = {
        number : 0,
        fixedNumber : 0
    };

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        //this.setState({number: number + 1});
                        this.setState((prevState) => {
                            return {
                                number : prevState.number + 1
                            }
                        },
                            () => {
                            console.log('방금 setState가 호출되었습니다.')
                            });
                        //
                        // this.setState((prevState) => {
                        //     return {
                        //         number : prevState.number + 1
                        //     }
                        // });
                    }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;