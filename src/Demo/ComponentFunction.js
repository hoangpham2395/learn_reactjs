import React, {Component} from 'react';

class ComponentFunction extends Component
{
    constructor(props){
        super(props)
        // Hàm này Thực hiện việc thiết lập state cho component
        // Việc sử dụng super(props) là để có thể sử dụng this.props trong phạm vi hàm constructor này
    }

    componentWillMount() {
        // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất, trước render view (STT: 1)
        alert('componentWillMount');
    }
    componentDidMount() {
        // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất, trước render view (STT: 2)
        // Hàm này rất hữu dụng khi bạn làm việc thêm với Map, bởi vì map chỉ render được
        // khi có node (id) trong DOM
        alert('componentDidMount');
    }
    componentWillUnmount() {
        // Hàm này thực hiện một lần duy nhất, khi component sẽ unmount
        // Hàm này hữu dụng khi bạn cần xoá các timer không còn sử dụng
        alert('componentWillUnmount');
    }
    componentWillReceiveProps(nextProps) {
        // Hàm này thực hiện liên tục mỗi khi props thay đổi, (STT: 4)
        alert('componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps, nextState) {
        // Hàm này thực hiện khi state và props thay đổi, (STT: 5)
        // Hàm này sẽ trả về kết quả true/false, bạn sẽ cần sử dụng đến hàm này để xử lý xem có cần update component không
        alert('shouldComponentUpdate');
    }

    componentWillUpdate(nextProps, nextState) {
        // Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
        // Nếu hàm trên trả về false, thì React sẽ không gọi hàm này
        alert('componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState) {
        // Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
        alert('componentDidUpdate');
    }

    render() {
        return (
            <div>
                <h1>Component Function</h1>
            </div>
        );
    }
}

ComponentFunction.propTypes = {
    //Khai báo kiểu biến cho props
};
ComponentFunction.defaultProps = {
    //Khai báo giá trị mặc định cho props
};

export default ComponentFunction;