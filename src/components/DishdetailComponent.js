import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent.js';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
    function RenderDish({dish}) {
        if (dish != null)
            return(
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
            );
        else
            return(
                <div></div>
            );
            }
    function RenderComments({comments,postComment, dishId}){
        if(comments!=null)
        {
        const listItems=comments.map(
            (comment_obj)=>{
                return(
                    <Fade in>
                    <li key={comment_obj.id}>
                    {comment_obj.comment} 
                    <br/><br/>
                    -- {comment_obj.author} , { new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date( Date.parse(comment_obj.date)))}
                    <br/><br/>
                    </li>
                    </Fade>
                );
            }
        );
        return (
            <div>
            <h4> Comments </h4>
            <ul className="list-unstyled">
            <Stagger in>
            {listItems}
            </Stagger>
            </ul>
            <CommentForm dishId={dishId} postComment={postComment}/>
            </div>        
            );
        }
        else {
            return (<div>
                     <CommentForm dishId={dishId} postComment={postComment}/>
            </div>);
        }

    }

const Dishdetail=(props)=>{
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if (props.dish != null) 
      return (
                <div className="container">
              <div className="row">
                <Breadcrumb>
                <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem> <Link to='/menu'>Menu</Link></BreadcrumbItem>                
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                 <h3>{props.dish.name}</h3>
                 <hr/>
                </div>
              </div>
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}>
                    </RenderDish>
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                  <RenderComments comments={props.comments}  postComment={props.postComment}
        dishId={props.dish.id}>
                  </RenderComments>
                  </div>
                </div>
            </div>
        );
    }

export default Dishdetail;