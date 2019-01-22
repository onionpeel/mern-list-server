import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getOneProduct} from './actions/productActions';
import {Container} from 'reactstrap';
import UpdateModal from './UpdateModal';
import {Link} from 'react-router-dom';

class DetailComponent extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getOneProduct(id);
  }

  render() {
    const name = this.props.name;
    const description = this.props.description;
    const quantity = this.props.quantity;
    return (
      <div>
        <Container>
            <div>
              <h1>{name}</h1>
              <p>Quantity: {quantity}</p>
              <p>Description: {description}</p>
            </div>

            <UpdateModal productId={this.props._id} name={this.props.name}
              description={this.props.description} quantity={this.props.quantity}/>

            <Link to={`/`}>Return to product list</Link>
        </Container>
      </div>
    )
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

const mapDispatchToProps = {
  getOneProduct
};

export default connect(mapPropsToComponent, mapDispatchToProps)(DetailComponent);
