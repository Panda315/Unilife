import React, { Component } from 'react';
import './addHostel.css';
import { withRouter } from 'react-router-dom';
import { saveHostel } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import classnames from 'classnames';
import jwt_decode from 'jwt-decode';

const token = jwt_decode(localStorage.getItem('jwtToken'));
class AddHostel extends Component{
  constructor() {
    super();
    this.state = {
      _title : '',
      ownedby: '',
      ownerid:'',
      city : '',
      address : '',
      description : '',
      contact : '',
      imagepath : [],
      imagepath0 : '',
      imagepath1 : '',
      imagepath2 : '',
      imagepath3 : '',
      imagepath4 : '',
      category :'',
      price : '',
      availability:'',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeAddItem = e => {        
    this.setState({ [e.target.id]: e.target.value });
  };

  addItem = e => {                  
    e.preventDefault();
    const newHostel = {
      title:this.state._title,
      ownedby :this.state.ownedby,
      ownerid:token.id,
      city : this.state.city,
      address :  this.state.address,
      description:this.state.description,
      imagepath:[this.state.imagepath0,this.state.imagepath1,this.state.imagepath2,this.state.imagepath3,this.state.imagepath4],
      contact:this.state.contact,
      category:this.state.category,
      price:this.state.price,
      availability:this.state.availability
    }
      this.props.saveHostel(newHostel,this.props.history);
  };


  render() {
    const { errors,description,price,ownedby,city,contact,address,_title,category,imagepath0,imagepath1,imagepath2,imagepath3,imagepath4,availability } = this.state;
    return (
        <div className="_container">
          <div className="_row">
            <div className="col-lg-6">
              <div className="addproduct-title">
                <h1 className='add_hostel_title'>Add Your Hostel</h1>
                <form noValidate onSubmit={this.addItem}>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="title">Hostel</label> <br />
                      <input
                        type="text"
                        className="input-control"
                        placeholder="Enter Hostel Name"
                        id="_title"
                        value={_title}
                        onChange={this.onChangeAddItem}
                        error={errors.title}
                        className={classnames('', {
                          invalid: errors._title
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.title}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="productby">OwnedBy</label> <br />
                      <input
                        type="text"
                        className="input-control"
                        placeholder="Owned By"
                        id="ownedby"
                        value={ownedby}
                        onChange={this.onChangeAddItem}
                        error={errors.ownedby}
                        className={classnames('', {
                          invalid: errors.ownedby
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.ownedby}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="description">Description</label> <br />
                      <input
                        type="text"
                        className="input-control"
                        placeholder="Description about product"
                        id="description"
                        value={description}
                        onChange={this.onChangeAddItem}
                        error={errors.description}
                        className={classnames('', {
                          invalid: errors.description
                        })}
                      />{' '}
                      <br />   
                      <span className="text-danger">{errors.description}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="price">City</label>
                      <br />
                      <input
                        type="text"
                        className="input-control"
                        placeholder="City"
                        id="city"
                        value={city}
                        onChange={this.onChangeAddItem}
                        error={errors.city}
                        className={classnames('', {
                          invalid: errors.city
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.city}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="price">Address</label>
                      <br />
                      <input
                        type="text"
                        className="input-control"
                        placeholder="Address"
                        id="address"
                        value={address}
                        onChange={this.onChangeAddItem}
                        error={errors.address}
                        className={classnames('', {
                          invalid: errors.address
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.address}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="price">Contact Number</label>
                      <br />
                      <input
                        type="number"
                        className="input-control"
                        placeholder="contact"
                        id="contact"
                        value={contact}
                        onChange={this.onChangeAddItem}
                        error={errors.contact}
                        className={classnames('', {
                          invalid: errors.contact
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.contact}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="price">Price ( Monthly )</label>
                      <br />
                      <input
                        type="number"
                        className="input-control"
                        placeholder="Price"
                        id="price"
                        value={price}
                        onChange={this.onChangeAddItem}
                        error={errors.price}
                        className={classnames('', {
                          invalid: errors.price
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.price}</span>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                    <label htmlFor="availability">Availability</label> <br/>
                      <label><input type="radio" id="availability" name="myCheckbox" value="Yes" onClick={this.onChangeAddItem}/>Yes</label>
                      <label><input type="radio" id="availability" name="myCheckbox" value="No" onClick={this.onChangeAddItem}/>No</label>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                    <label htmlFor="availability">Category</label> <br/>
                      <label><input type="radio" id="category" name="myCheckbox2" value="Boys" onClick={this.onChangeAddItem} />Boys</label>
                      <label><input type="radio" id="category" name="myCheckbox2" value="Girls" onClick={this.onChangeAddItem}/>Girls</label>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="imagepath">Image URL</label> <br />
                      <input
                        type="url"
                        className="input-control"
                        placeholder="Url to image ( Main Image )"
                        id="imagepath0"
                        value={imagepath0}
                        onChange={this.onChangeAddItem}
                        error={errors.imagepath0}
                        className={classnames('', {
                          invalid: errors.imagepath0
                        })}
                      />{' '}

                      <input
                        type="url"
                        className="input-control"
                        placeholder="Url to image"
                        id="imagepath1"
                        value={imagepath1}
                        onChange={this.onChangeAddItem}
                        error={errors.imagepath1}
                        className={classnames('', {
                          invalid: errors.imagepath1
                        })}
                      />{' '}
                      <input
                        type="url"
                        className="input-control"
                        placeholder="Url to image"
                        id="imagepath2"
                        value={imagepath2}
                        onChange={this.onChangeAddItem}
                        error={errors.imagepath2}
                        className={classnames('', {
                          invalid: errors.imagepath2
                        })}
                      />{' '}
                      <input
                        type="url"
                        className="input-control"
                        placeholder="Url to image"
                        id="imagepath3"
                        value={imagepath3}
                        onChange={this.onChangeAddItem}
                        error={errors.imagepath3}
                        className={classnames('', {
                          invalid: errors.imagepath3
                        })}
                      />{' '}
                      <input
                        type="url"
                        className="input-control"
                        placeholder="Url to image"
                        id="imagepath4"
                        value={imagepath4}
                        onChange={this.onChangeAddItem}
                        error={errors.imagepath4}
                        className={classnames('', {
                          invalid: errors.imagepath4
                        })}
                      />{' '}


                      <br />   
                      <span className="text-danger">{errors.imagepath}</span>
                    </div>
                  </div>
                  {/* <div class="confirm"> */}
                  {/* </div> */}
                  <div class="form-row">  

                  
                    <div class="form-group col-md-12">
                      <div className="checkbox-container">
                      <div className="checkbox"><input type="checkbox" id="onlyChoice" name="confirm" value="confirming" required="required"
                      onChange="document.getElementById('addProduct').disabled=!this.checked;"
                      />
                      </div>
                      <div className="notice">
                      By clicking this you agree to the terms and conditions of Unilife and will be found guilty for any misbehaves caused by your product.
                      </div>


                      </div>
                      <button type="submit" id="addProduct" className="btn additem">
                        Add Hostel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
// export default AddProduct;
export default connect(mapStateToProps, {saveHostel})(withRouter(AddHostel));



