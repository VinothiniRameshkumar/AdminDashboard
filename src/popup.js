import React from 'react';
import Popup from 'reactjs-popup';
import db from './db.json'
import 'reactjs-popup/dist/index.css'


const headers =['invoiceDate','invoiceNumber','invoiceStatus']
class TableDb extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          
            name: 'Invoice.JSON',
            objects: [],
      
            
        } 
        this.handleSubmit = this.handleSubmit.bind(this)       
        this.addItems = this.addItems.bind(this)  
        this.handleRemoveRow=this.handleRemoveRow.bind(this)

    }
    componentDidMount(){
      this.setState({objects:db})
      
    }
    
    handleSubmit(event){
        event.preventDefault()
    }
    handleRemoveRow(row){
      console.log(row)
      const removeRowIndex = this.state.objects.findIndex(e =>e.invoiceNumber == row);
      this.state.objects.splice(removeRowIndex,1);
     // console.log(this.state.objects)
      this.setState({objects : this.state.objects})
      
    }
    
    
   
    addItems() {
      console.log(this.state.obj)
         if (!this.state.obj) 
         
     return
      const objects = this.state.objects||[]
     objects.push(this.state.obj)
     this.setState({objects:objects, obj:null})
     }
    render(){
        return(
          
            <div className="container">
                
                <h2>
                    {this.state.name}
                </h2>
                
                <form name="addItems" onSubmit={this.handleSubmit}>
                    <table className="table table-info table-bordered">
                        <thead className="thead-inverse">
                            <tr>
                            
                            {
                            headers.map((colName,index)=>(
                              <th key={index}>{colName}</th>
                            ))
                            }
                        
                            </tr>
                            </thead>
                            <tbody>
                            
                            {
                    (this.state.objects||[]).map((obj, index)=>(
                       <tr key={index}>
                          {
                          headers.map((header,index)=>(console.log(obj) ||
                            <td key={index}>
                              {obj[header]}
                            </td>
                          ))
                        }
                       {/* <span className="material-icons" onClick={this.editItems} >edit</span>  */}

                       <span className="material-icons" onClick={() => this.handleRemoveRow(obj["invoiceNumber"])} >delete</span> 

                        {/* <button type="button" name=" material-icons" onClick={() => this.handleRemoveRow(obj["invoiceNumber"])}>delete</button> */}
                      </tr>
                ))
              }
         
               <tr>
                {
                  headers.map((header,index)=>(
                    <a href="#" data-toggle="tooltip" title="Hooray!"><td key={index}>
                      <input
                        name={header}
                         value={this.state.obj?this.state.obj[header]:''}
                        onChange={event=>{
                          
                          const obj = this.state.obj||{}
                           obj[header] = event.target.value
                          this.setState({obj})
                       }}
                        className="form-control"
                      /></td>
                    </a>
                    

                  ))
                }
              </tr> 

              </tbody>
              

          </table>
                </form>
                <button type="submit" name="addItems" onClick={this.addItems}>Add</button>
                
            </div>
        )
    }
    
}
export default TableDb;