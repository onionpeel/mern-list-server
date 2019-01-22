import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {updateProduct} from './actions/productActions';
import {connect} from 'react-redux';

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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

    const productId = this.props.productId;
    const name = this.state.name;
    const quantity = this.state.quantity;
    const description = this.state.description;

    const updatedProduct = {
      name,
      quantity,
      description
    }

    this.props.updateProduct(updatedProduct, productId);

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>Update Product</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update this product</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" placeholder={this.props.name} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="quantity">Quantity</Label>
                <Input type="text" id="quantity" name="quantity" placeholder={this.props.quantity} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input type="text" id="description" name="description" placeholder={this.props.description} onChange={this.onChange}/>
              </FormGroup>
              <Button>
                Submit the product changes
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
    name: state.name,
    description: state.description,
    quantity: state.quantity,
    _id: state._id
  }
};

export default connect(mapPropsToComponent, {updateProduct})(UpdateModal);
