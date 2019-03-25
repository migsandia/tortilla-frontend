import React, { Component } from 'react';
import tortillaService from '../services/tortillaService';

class EditForm extends Component {
  
  state = {
    name: this.props.data.name,
    special: this.props.data.special,
    size: this.props.data.size,
    imageUrl: this.props.data.imageUrl,
  }
 

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: this.props.data.name,
      special: this.props.data.special,
      size: this.props.data.size,
      imageUrl: this.props.data.imageUrl,
    })
  }



  render() {
    console.log(this.props)
    const {name,special,size,imageUrl} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={name} onChange={this.handleChange} name="name" type="text"/>
        <input value={special} onChange={this.handleChange} name="special" type="text"/>
        <input value={size} onChange={this.handleChange} name="size" type="text"/>
        <input value={imageUrl} onChange={this.handleChange} name="imageUrl" type="text"/>
        <button type="submit">Edit</button>
      </form>
    );
  }
}

export default EditForm;