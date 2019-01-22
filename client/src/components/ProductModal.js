import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {addProduct} from './../actions/productActions';
import {connect} from 'react-redux';

class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      quantity: '',
      description: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();

    const newProduct = {
      name: this.state.name,
      quantity: this.state.quantity,
      description: this.state.description
    }

    this.props.addProduct(newProduct);

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>Add Product</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>All fields are required</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" placeholder="Add a product name" onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="quantity">Quantity</Label>
                <Input type="text" id="quantity" name="quantity" placeholder="Quantity" onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input type="text" id="description" name="description" placeholder="Describe the product" onChange={this.onChange}/>
              </FormGroup>
              <Button>
                Add a new product
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapPropsToComponent = state => {
  return {
    product: state.product
  };
};

export default connect(mapPropsToComponent, {addProduct})(ProductModal);
