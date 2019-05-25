import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

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
    function RenderComments({comments}){
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
            </div>            
            );
        }
        else {
            return <div></div>
        }

    }

const Dishdetail=(props)=>{
        return (
            <div className="container">
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish}>
                    </RenderDish>
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                  <RenderComments comments={props.selectedDish&&props.selectedDish.comments}>
                  </RenderComments>
                  </div>
                </div>
            </div>
        );
    }

export default Dishdetail;