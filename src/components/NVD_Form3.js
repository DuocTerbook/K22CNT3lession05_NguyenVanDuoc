import React, { Component } from 'react'

export default class NVD_Form3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:'Được Nguyễn',
            age:20,
            course:'ReactJS'
        }
    }
    handleChange = (ev)=>{
        let name=ev.target.name;
        let val = ev.target.value;
        this.setState({
            [name]:val
        })
    }
    handleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.studentName + "\n" + this.state.age + "\n" + this.state.course)
        let obj = {
            studentName:this.state.studentName,
            age:this.state.age,
            course:this.state.course
        }
        //Gửi dữ liệu lên app
        this.props.onSubmit(obj)
    }
    render() {
        return (
        <div>
            <form name="nvdfrom">
                <div>
                    <label>Họ và tên</label>
                    <input name='studentName' value={this.state.studentName} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Tuổi</label>
                    <input name='age' value={this.state.age} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Khóa học</label>
                    <select name="course" 
                        value={this.state.course}
                        onChange={this.handleChange}>
                        <option value='HTML'>HTML</option>
                        <option value='CSS'>CSS</option>
                        <option value='JS'>JS</option>
                        <option value='ReactJS'>ReactJS</option>
                    </select>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }
}
