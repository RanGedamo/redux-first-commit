import { useState } from "react"
import { connect } from "react-redux"
import { addUserAction } from "../../store/actions/user-actions"

const mapStateToProps = (state)=>({
    users:state.users
})

const mapDispatchToProps = (dispatch)=>({
    addNewUser: (newUser)=>dispatch(addUserAction(newUser))
})

function MyForm({addNewUser}){
const [user,setUser] = useState({})

const changeInput = (e)=>{
user[e.target.name] = e.target.value
}
// const {fname}=props.users[0]
// const {lname}=props.users[1]
// const {age}=props.users[2]
// const {email}=props.users[3]
return(
    <div className="form">
        Fname:<input  type="text" name="fname" onChange={changeInput} />
        Lname:<input  type="text" name="lname" onChange={changeInput} />
        Age:<input  type="number" name="age" onChange={changeInput} />
        {/* Email:<input value={email} type="text" name="email" onChange={changeInput} /> */}
        <button onClick={()=>addNewUser(user)}>Check</button>
    </div>
)
}
export default connect(mapStateToProps,mapDispatchToProps)(MyForm)