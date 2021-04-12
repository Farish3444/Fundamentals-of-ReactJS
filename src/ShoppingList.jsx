import React, { Component } from 'react';



class ShoppingList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newItems:'',
            groceryItems : [
        { name: 'Bananas', id: 'item-1', completed: false },
        { name: 'Apples', id: 'item-2', completed: true },
        { name: 'Rice', id: 'item-3', completed: false }
            ],
        validationErrors:{},
        submitted:0
       }
       this.handleOnchange = this.handleOnchange.bind(this)
       this.handleCompleteToggle = this.handleCompleteToggle.bind(this)
    //    this.handleDelete = this.handleDelete.bind(this)
    //    this.handleSubmit = this.handleSubmit.bind(this)
    //    this.validateFields = this.validateFields.binds(this)
    }

    handleOnchange(e){
        const target = e.target
        console.log(target)
        const name = e.name
        const value = e.value

    this.setState({
        [name]:value
    })
    }

    handleCompleteToggle(e){
        const target = e.target
        const itemIndexValue = target.attribute.itemIndex.value
        const index = parseInt(index)
    }
    
    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default ShoppingList;