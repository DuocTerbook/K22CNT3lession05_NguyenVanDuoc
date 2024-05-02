import React, { Component } from 'react'

export default class NVD_Form1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Nguyễn Văn Được"
        }
    }
    // Hàm xử lí sự kiện
    handleChange = (ev)=>{
        //Lấy giá trị khi thay đổi trên form
        let ten = ev.target.name;
        let gtri = ev.target.value;
        // Cập nhật state
        this.setState({
            [ten]:gtri
        })
    }
    handleSubmit = (ev)=>{
        ev.preventDefault();
        //Lấy giá trị mọi trong state
        alert(this.state.studentName)
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Họ và tên</label>
                    <input name='studentName' value={this.state.studentName} 
                        onChange={this.handleChange}
                        />
                </div>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}
