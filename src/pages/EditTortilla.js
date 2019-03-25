import React, { Component } from 'react';
import EditForm from '../components/EditForm';
import tortillaService from '../services/tortillaService';

class EditTortilla extends Component {

  state = {
    data: [],
    isloading: true
  }

  
  componentDidMount = () => {
    
    this.getTortilla();
  }
  
  
  handleSubmit = (data) => {
    const {id} = this.props.match.params;
    tortillaService.editTortilla(data, id)
      .then((result) => {
        console.log(result);
        this.props.history.push('/tortillas');
      })
      .catch(err => console.log(err));
  }

  getTortilla = () => {
    const {id} = this.props.match.params;
    tortillaService.getById(id)
      .then(data => {
        this.setState({
            data,
            isloading: false
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    const {isloading} = this.state;
    switch (isloading){
      case true:
        return 'loading...';
      case false:
      return (
        <div>
          <EditForm onSubmit={this.handleSubmit} data={this.state.data}/>
        </div>
      );
      default:
        break;
    }
    
  }
}

export default EditTortilla;