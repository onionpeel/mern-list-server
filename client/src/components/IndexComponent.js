import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProducts, deleteProduct} from './../actions/productActions';
import ProductModal from './ProductModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, ListGroup, ListGroupItem} from 'reactstrap';


class IndexComponent extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  onDeleteClick = _id => {
    if(window.confirm("Are you sure you want to delete this task?")){
      this.props.deleteProduct(_id);
    }
  }

  render() {
    const {products} = this.props.product;
    return(
      <Container>
        <div>
          <ProductModal />
          <div>
            <ListGroup>
              {products.map((item, index) => (
                 <div key={index}>
                    <ListGroupItem>
                      <Button
                        className="remove-btn"
                        size="sm"
                        color="info"
                        onClick={this.onDeleteClick.bind(this, item._id)}
                        >
                        &times;
                      </Button>
                      <Link to={`/detail/${item._id}`}>{item.name}</Link>
                    </ListGroupItem>
                  </div>
              ))}
            </ListGroup>
          </div>
        </div>
      </Container>
    )
  }
}

const mapPropsToComponent = state => {
  return {
    product: state.product
  }
};

const mapDispatchToProps = {
  getProducts,
  deleteProduct
};

export default connect(mapPropsToComponent, mapDispatchToProps)(IndexComponent);
