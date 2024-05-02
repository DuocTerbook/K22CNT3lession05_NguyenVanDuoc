import React, { Component } from 'react'

export default class NVD_Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            KhoaHoc:'ReactJS'
        }
    }
    //Hàm xử lí sự kiện
    handleChange = (ev)=>{
        this.setState({
            KhoaHoc:ev.target.value
        })
    }
    handleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.KhoaHoc )
    }
    render() {
        return (
        <div>
            <form>
                <label>Khóa học</label>
                <select value={this.state.KhoaHoc} name="KhoaHoc" onChange={this.handleChange}>
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='JS'>JS</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }
}
