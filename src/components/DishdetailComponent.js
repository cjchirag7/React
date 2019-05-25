import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    
    renderDish(dish) {
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
    renderComments(comments){
        if(comments==null){
            return <div></div>
        }
        
        const listItems=comments.map(
            (comment_obj)=>{
                return(
                    <li key={comment_obj.id}>
                    {comment_obj.comment} 
                    <br/><br/>
                    -- {comment_obj.author} , {comment_obj.date.substring(0,10)}
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

    render(){
        return (
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.selectedDish&&this.props.selectedDish.comments)}
                  </div>
                </div>
        );
    }
  
}

export default Dishdetail;