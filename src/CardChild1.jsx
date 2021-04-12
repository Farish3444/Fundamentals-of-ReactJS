// import React from 'react';
import React, { Component } from 'react';
import './card.css';



class CardChild1 extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section className='card-container'>
                 <header className="card-header">
                     <span initials='JS' ></span>
                     <h3>Required to Master</h3>
                     <hr/>
                </header>

                <main>
                    <ul>
                        <li>
                            <span>{this.props.title}</span>
                            {this.props.text}
                        </li>
                    </ul>
                </main>
                
                </section>
            </React.Fragment>
         );
    }
}
 
export default CardChild1;