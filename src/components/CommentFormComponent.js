import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import {LocalForm, Control, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
   
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }
        
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    toggleModal(){
        this.setState(
            {isModalOpen: !this.state.isModalOpen}
            );
    }

    render(){
    return (
            <React.Fragment>
            <Button outline onClick={this.toggleModal}>
            <span class="fa fa-pencil"/> Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
                Login
            </ModalHeader>
            <ModalBody>
            <div className="container">
            <LocalForm onSubmit={(values)=>{this.handleSubmit(values)}}>
                <Row className="form-group">
                    <Col md={12}>
                    <Label htmlFor="rating" > Rating </Label>
                    </Col>
                    <Col md={12}>
                    <Control.select model=".rating" name="rating">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                    </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={12}>
                    <Label htmlFor="author">Your Name</Label>
                    </Col>
                    <Col md={12}>
                    <Control.text model=".author" id="author" name="author" 
                    className="form-control" placeholder="Your Name" validators={{minLength: minLength(3),maxLength:maxLength(15)}} />
                    </Col>
                    <Errors className="text-danger" model=".author" show="touched" messages={{
                    minLength: 'Must be greater than 2 characters', maxLength:'Must be 15 characters or less'}}/>
                </Row>
                <Row className="form-group">
                <Col md={12}>
                    <Label htmlFor="comment" >Comment</Label>
                </Col> 
                <Col md={12}>   
                    <Control.textarea model=".comment" id="comment" className="form-control" name="comment" rows="6" />
                </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12}>
                    <Button type="submit" color="primary">Submit</Button>
                  </Col>
                </Row>
            </LocalForm>                
            </div>
            </ModalBody>
            </Modal>
            </React.Fragment>            
        );
    }
}

export default CommentForm;