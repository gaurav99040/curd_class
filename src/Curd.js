import React, { Component } from 'react'

export default class Curd extends Component {
    constructor() {
        super()
        this.state = {
            curd_arr: [],
            name1: "",
            email: "",
            mobile: "",
            gender: "",
            hobby: [
            {id:0,lable: 'cricket', value: false,key:1},
            {id:1,lable: 'singing', value: false,key:2},
            {id:2,lable: 'playing', value: false,key:3},
            {id:3,lable: 'swimming', value: false,key:4}
             ],
            option: [],
            male:false,
            female:false,
            err:'',
            err2:'',
            err3:"",
            err4:"",
            err5:"",
            isNotValidated:false
        }
        this.onhandal = this.onhandal.bind(this);
        this.onobject = this.onobject.bind(this);
        // this.onhobby = this.onhobby.bind(this);

    }
    

    onValidate=()=>{

        this.state.name1==="" ? this.setState({
            err:"name is requier",
            isNotValidated:true
        }) :
            this.setState({
                err:"",
            })
            
        
        // if(this.state.name1===""){
        //     this.setState({
        //         err:"name is requier",
        //         isNotValidated:true
        //     })
            
        // }

        this.state.email===""?
           this.setState({
                err2:"email is requier",
                isNotValidated:true
            })
        :this.setState
        ({
            err2:""
        })

         this.state.mobile===""?
          this.setState({
                err3:"mobile is requier",
                isNotValidated:true
            })
        :this.setState
        ({
            err3:""
        })

         this.state.gender===""?
          this.setState({
                err4:"gender is requier",
                isNotValidated:true
            })
        :this.setState
        ({
            err4:""
        }) 

        if((this.state.name1!=="") && (this.state.email!=="") && (this.state.mobile!=="") && (this.state.gender!=="")){
            this.setState({
                isNotValidated:false
            })
        }
    }

    componentDidMount(){
        this.onValidate();
    }
    
    onPlaying = () =>{
        console.log("this.state.playing",this.state.playing)
        this.setState({
        playing:!this.state.playing
        })
    }

    onSwimming(){
        this.setState({
            swimming:!this.state.swimming
        })
    }

    onSinging(){
        this.setState({
            singing:!this.state.singing
        })
    }

    onRunning(){
        this.setState({
            running:!this.state.running
        })
    }

    onhandal(e) {
        console.log(e)

        this.setState({
            [e.target.name]: e.target.value
        })
        // if(this.state.name1.length===0){
        //     this.setState({
        //         err:"name is requier",
        //         isNotValidated:true
        //     })
            
        // }
        // if(this.state.email===""){
        //    this.setState({
        //         err2:"email is requier",
        //         isNotValidated:true
        //     })
        // }
        //  if(this.state.mobile===""){
        //   this.setState({
        //         err3:"mobile is requier",
        //         isNotValidated:true
        //     })
        // }
        //  if(this.state.gender===""){
        //   this.setState({
        //         err4:"gender is requier",
        //         isNotValidated:true
        //     })
        // }
        // console.log(this.state.name1.length)
        // if(this.state.name1>=0){
        //     this.setState({
        //         err:"",
        //         isNotValidated:false
        //     })
        // }

    }

    onhobby = (e) => {
        // console.log(e?.target?.name,"value--------->",e.target.value,e.target.checked)
        let option = this.state.option;
        // // e.target.checked=true
        
        // if (this.state.playing===true) {
        //     console.log(e.target.name)
        //     option.push(e.target.name)
        // }
        // this.setState({
        //     option:option
        // })
        // console.log(option);
        console.log('event',e.target.checked)
        if(e.target.checked){
           option.push(e.target.name)
        }else{
            option.filter((item)=> item.label !== e.target.name)
           let index=option.indexOf(e.target.name)
           option.splice(index,1)
        }
        this.setState({option:option});
     
        //   else{
        //     index=options.indexOf(+event.target.value)
        //     options.splice(index,1)
        //   }
    }
   




    onobject(e) {
        
        console.log('------------------------------------------------------------------------>');
        // e.preventDefault();
        // let check=document.querySelector("input[type=checkbox]:checked");
        // let hobby=this.state.hobby;
        // for(let i;i<=check.length;i++){
        //     hobby.push(this.ckeck[i].value)
        // }
        this.onValidate();

      if(!this.state.isNotValidated){
            let obj = {
            name1: this.state.name1,
            email: this.state.email,
            mobile: this.state.mobile,
            city: this.state.city,
            gender: this.state.gender,
            option: this.state.option
        }

        let option = this.state.option;
        // e.target.checked=true
        // for(let i=5;i<5;i++){
        // if (this.state.playing===true) {
        //     console.log()
        //     option.push('playing')
        // }
        //  if (this.state.swimming===true) {
        //     console.log()
        //     option.push('swimming')
        // }
        // if (this.state.singing===true) {
        //     console.log()
        //     option.push('singing')
        // }
        //  if (this.state.running===true) {
        //     console.log()
        //     option.push('running')
        // }
    // }
        this.setState({
            option:option
        })
        console.log(option);

        //   let curd_arr = this.state.curd_arr;
        let curd_arr = this.state.curd_arr;
        curd_arr.push(obj);
        this.setState({
            curd_arr: curd_arr
        })
        console.log(curd_arr);
       
        this.setState({
            name1: "",
            email: "",
            mobile: "",
            option:[]
        })
        document.getElementById('male').checked=false;
        document.getElementById('female').checked=false;
        this.state.hobby.forEach((item)=>{
            document.getElementById(item.lable).checked = false;
        })
        this.state.hobby.forEach((item)=>{
            document.getElementById(`u${item.lable}`).checked = false;
        })
        document.getElementById('umale').checked=false;
        document.getElementById('ufemale').checked=false;
        // document.getElementById('playing').checked = false;
        // document.getElementById('singing').checked = false;
        // document.getElementById('swimming').checked = false;
        // document.getElementById('running').checked = false;
        // e.target.checked=false;
        }
    }

    

    ondelete(id) {
       
        console.log(id)
        let curd_arr1 = this.state.curd_arr;
        curd_arr1.splice(id, 1);
        console.log(curd_arr1);
        this.setState({
            curd_arr: curd_arr1
        })
    }

    onupdate(id) {

        
        let curd_arr1 = this.state.curd_arr[id];
        console.log(curd_arr1);
        this.setState({
            name1:curd_arr1.name1,
            email:curd_arr1.email,
            mobile:curd_arr1.mobile,
            option:curd_arr1.option
        })
        // var check
        if(curd_arr1.gender==='male'){
             document.getElementById('umale').checked=true
        //    e.target.value.checked =true
        }
        if(curd_arr1.gender==='female'){
            document.getElementById('ufemale').checked=true
            // this.setState({female: true})
        //    e.target.value.checked =true
        } 
        for(let i=0;i<=curd_arr1.option.length;i++){
            if(curd_arr1.option[i]==='playing'){
                document.getElementById('uplaying').checked=true
            }
           else if(curd_arr1.option[i]==='singing'){
                document.getElementById('usinging').checked=true
            }
          else  if(curd_arr1.option[i]==='swimming'){
                document.getElementById('uswimming').checked=true
            }
            else if(curd_arr1.option[i]==='cricket'){
                document.getElementById('ucricket').checked=true
            }
        }
     
        let curd_arr2 = this.state.curd_arr;
          console.log(id);
        curd_arr2.splice(id, 1);
        
    }
    
    render() {
        
        return (
            <>
                <div className="main_form">
                    <div className="form">
                        <div >
                            <div className="fild">
                                <label htmlFor="">Name:-</label><br />
                                <input type="text" id="name1" name="name1" onChange={(e)=>this.onhandal(e)} value={this.state.name1} /><br />
                                <span id='err' style={{color:"red"}}>{this.state.err}</span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">email:-</label><br />
                                <input type="text" id="email" name="email" onChange={(e)=>this.onhandal(e)} value={this.state.email} /><br />
                                <span id='err2' style={{color:"red"}}>{this.state.err2}</span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">mobile:-</label><br />
                                <input type="text" id="mobile" name="mobile" onChange={(e)=>this.onhandal(e)} value={this.state.mobile} /><br />
                                <span id='err3' style={{color:"red"}}>{this.state.err3}</span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">gender:-</label><br />
                                <input type="radio" name="gender" id="male" onChange={(e)=>this.onhandal(e)} value="male" /><label>male</label>
                                <input type="radio" name="gender" id="female"onChange={(e)=>this.onhandal(e)} value="female" /><label>female</label><br />
                                <span id='err4' style={{color:"red"}}>{this.state.err4}</span>
                            </div>
                            <br />

                            <div className="fild">
                                <label htmlFor="">city:-</label><br />
                                <select name="city" id="city" onChange={(e)=>this.onhandal(e)} value={this.state.city}>
                                    <option value="surat">surat</option>
                                    <option value="bhavnager">bhavnager</option>
                                    <option value="rajkot">rajkot</option>
                                    <option value="botad">botad</option>
                                </select><br />
                                <span id='error5' style={{color:"red"}}></span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">hobby:-</label><br />
                               {/* < input type="checkbox" id= 'playing' name='playing' value={this.state.playing}  onChange={(e)=>{this.onPlaying(e); console.log('checked',e.target);}}/>
                               playing
                               < input type="checkbox" id= 'singing' name='singing' value={this.state.singing}  onChange={(e)=>this.onSinging(e)}/>
                               singing
                               < input type="checkbox" id= 'swimming' name='swimming' value={this.state.swimming}  onChange={(e)=>this.onSwimming(e)}/>
                               swimming
                               < input type="checkbox" id= 'running' name='running' value={this.state.running}  onChange={(e)=>this.onRunning(e)}/>
                               running */}

                                {this.state.hobby.length > 0 ?
                                   this.state.hobby.map((item, index) => {
                                       return(
                                        <div className="filds" key={index}>
                                            <input 
                                             key={index}
                                            //  id={item.label}
                                            id={`${item.lable}`}
                                            type="checkbox" 
                                            className="checkbox" 
                                            onChange={(e)=>this.onhobby(e)} 
                                            name={item.lable} 
                                            // value={this.state.hobby.filter((i)=>{
                                            //     return i===index? true:false
                                            // })}
                                            value={this.state.hobby[index].value}
                                           
                                            />
                                            <label>{item.lable}</label>
                                     </div>
                                        )
                                            
                                    })
                                :null
                                } 
                                </div>
                            <br />
                            {/* <div className="fild">
                                                            <label htmlFor="">image:-</label><br/>
                                                                <input type="file" id='img' />
                                                        </div> */}
                            <br />
                            <div className="submit">
                                <button 
                                onClick={()=>this.onobject()}
                                id="submit" 
                                className="submit"
                                >submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search">
                    <input type="text" placeholder="search" id='search' name="" />
                    <button className="search_btn" id="search_btn">search</button>
                </div>
                <table className="table" border="2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Mobile No</th>
                            <th>gender</th>
                            <th>city</th>
                            <th>hobby</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.curd_arr.map((item, index) => {
                                console.log(item);
                                return <tr key={index}>
                                    <td>{item.name1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.city}</td>
                                    <td>{item.option}</td>
                                    <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.onupdate(index )}>
                                        upadate
                                    </button></td>
                                    <td><button onClick={() => this.ondelete( index )}>delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>




                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="main_form">
                                    <div className="form">
                                        <form action="" onSubmit={this.onobject}>
                                            <div className="fild">
                                                <label htmlFor="">Name:-</label><br />
                                                <input type="text" id="name1" name="name1" onChange={this.onhandal} value={this.state.name1} /><br />
                                                <span id='error1'></span>
                                            </div>
                                            <br />
                                            <div className="fild">
                                                <label htmlFor="">email:-</label><br />
                                                <input type="text" id="email" name="email" onChange={this.onhandal} value={this.state.email} /><br />
                                                <span id='error2'></span>
                                            </div>
                                            <br />
                                            <div className="fild">
                                                <label htmlFor="">mobile:-</label><br />
                                                <input type="text" id="mobile" name="mobile" onChange={this.onhandal} value={this.state.mobile} /><br />
                                                <span id='error3'></span>
                                            </div>
                                            <br />
                                            <div className="fild">
                                                <label htmlFor="">gender:-</label><br />
                                                <input type="radio" name="gender"  id="umale"  onChange={this.onhandal} value="male" /><label>male</label>
                                                <input type="radio" name="gender" id="ufemale"  value="female" onChange={this.onhandal} value="female" /><label>female</label><br />
                                                <span id='error4'></span>
                                            </div>
                                            <br />

                                            <div className="fild">
                                                <label htmlFor="">city:-</label><br />
                                                <select name="city" id="city" onChange={this.onhandal} value={this.state.city}>
                                                    <option value="surat">surat</option>
                                                    <option value="bhavnager">bhavnager</option>
                                                    <option value="rajkot">rajkot</option>
                                                    <option value="botad">botad</option>
                                                </select><br />
                                                <span id='error5'></span>
                                            </div>
                                            <br />
                                            <div className="fild">
                                                <label htmlFor="">hobby:-</label><br />
                                                {/* < input type="checkbox" name='playing' value={this.state.playing}  onChange={(e)=>this.onPlaying(e)}/>
                               playing
                               < input type="checkbox" name='singing' value={this.state.singing}  onChange={(e)=>this.onSinging(e)}/>
                               singing
                               < input type="checkbox" name='swimming' value={this.state.swimming}  onChange={(e)=>this.onSwimming(e)}/>
                               swimming
                               < input type="checkbox" name='running' value={this.state.running}  onChange={(e)=>this.onRunning(e)}/>
                               running */}
                                {this.state.hobby.length > 0 ?
                                   this.state.hobby.map((item, index) => {
                                       return(
                                        <div className="filds" key={index}>
                                            <input 
                                             key={index}
                                            //  id={item.label}
                                            id={`u${item.lable}`}
                                            type="checkbox" 
                                            className="checkbox" 
                                            onChange={(e)=>this.onhobby(e)} 
                                            name={item.lable} 
                                            // value={this.state.hobby.filter((i)=>{
                                            //     return i===index? true:false
                                            // })}
                                            value={this.state.hobby[index].value}
                                           
                                            />
                                            <label>{item.lable}</label>
                                     </div>
                                        )
                                            
                                    })
                                :null
                                } 

                                                {/* {this.state.hobby.length > 0 ?
                                                    this.state.hobby.map((item, index) => {

                                                        // console.log(item);
                                                        return <div className="fild" key={index}>
                                                            <input type="checkbox" className="checkbox" onChange={this.onhobby} name={item} value={index} />
                                                            <label>{item}</label>
                                                        </div>
                                                    }) : null
                                                } </div> */}
                                                </div>
                                            <br />
                                            {/* <div className="fild">
                                                            <label htmlFor="">image:-</label><br/>
                                                                <input type="file" id='img' />
                                                        </div> */}
                                            <br />
                                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={(e)=>this.onobject(e)}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </>
                    )
    }
}
