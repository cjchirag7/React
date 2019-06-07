import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent.js';
    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
            }
    function RenderComments({comments,addComment, dishId}){
        if(comments!=null)
        {
        const listItems=comments.map(
            (comment_obj)=>{
                return(
                    <li key={comment_obj.id}>
                    {comment_obj.comment} 
                    <br/><br/>
                    -- {comment_obj.author} , { new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date( Date.parse(comment_obj.date)))}
                    <br/><br/>
                    </li>
                );
            }
        );
        return (
            <div>
            <h4> Comments </h4>
            <ul className="list-unstyled">
            {listItems}
            </ul>
            <CommentForm dishId={dishId} addComment={addComment}/>
            </div>        
            );
        }
        else {
            return (<div>
                     <CommentForm dishId={dishId} addComment={addComment}/>
            </div>);
        }

    }

const Dishdetail=(props)=>{
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
                  <RenderComments comments={props.comments}  addComment={props.addComment}
        dishId={props.dish.id}>
                  </RenderComments>
                  </div>
                </div>
            </div>
        );
    }

export default Dishdetail;