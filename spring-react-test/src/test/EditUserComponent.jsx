import React, {Component} from 'react';
import ApiService from '../ApiService';

class EditUserComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id:'',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
    }

    componentDidMount(){
        this.loadUser()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem("userID"),
            window.localStorage.getItem("userNAME"))
        .then( res => {
            let user = res.data;
            this.setState({
                id:user.id,
                username:user.username,
                firstName:user.firstName,
                lastName:user.lastName,
                age:user.age,
                salary:user.salary
            })
        })
        .catch(err => {
            console.log('loadUser() 에러', err)
        })
    }

    saveUser = (e) => {
        e.preventDefault();
        
        let user = {
            id:this.state.id,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            age:this.state.age,
            salary:this.state.salary
        }
        ApiService.editUser(user)
        .then( res => {
            this.setState({
                message: user.lastName + "정보가 수정되었습니다."
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch(err => {
            console.log('saveUser() Error', err);
        });
    }

    render(){
        return(
            <div>
                <h2>Add User</h2>
                <form>
                    <div>
                        <label>User Name:</label>
                        <input type="text" name="username" readOnly={true} value={this.state.username} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" name="age" value={this.state.age} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input type="number" name="salary" value={this.state.salary} onChange={this.onChange} />
                    </div>
                    <button onClick={this.saveUser}>Save</button>
                </form>
            </div>
        )
    }
}

export default EditUserComponent;