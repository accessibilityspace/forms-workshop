import React from 'react';
import ErrorContainer from './ErrorContainer';

class Form extends React.Component {

    constructor() {
        super();
        this.state = { 
            inputs: {},
            isLoading: false 
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    validateForm(ref) {
        if (this.refs[ref]) {
            this.setState(state => {
                return { 
                    inputs: 
                    {
                        ...state.inputs,
                        [ref]: !this.refs[ref].checkValidity()  
                    },
                    isLoading: state.isLoading
                };
            })
        }
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        
        // simulating a submission
        setTimeout(function () {
            this.setState({ isLoading: false });
        }.bind(this), 3000);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <section>
                    <h2>Personal information</h2>
                    <ErrorContainer inputs={this.state.inputs}/>
                    <p>
                        <label>Name
                            <strong><abbr title="required">*</abbr></strong>
                            <input name="name" type="text" ref="name" required aria-required="true" onBlur={this.validateForm.bind(this, "name")}/>
                        </label>
                        <label>Surname
                            <strong><abbr title="required">*</abbr></strong>
                            <input name="surname" type="text" ref="surname" required aria-required="true" onBlur={this.validateForm.bind(this, "surname")}/>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="age">Age</label>
                        <input aria-describedby="age-description" name="age" ref="age" type="number" min="0" max="150" onBlur={this.validateForm.bind(this, "age")} />
                        <span id="age-description" className="field-description">We only accept people that are up to 150 years old to stay in our inn by company policy.</span>
                    </p>
                </section>
                <section>
                    <h2>Additional information</h2>
                    <p>
                        <label htmlFor="currency">
                            <span>Payment currency:</span>
                        </label>
                        <select id="currency" name="currency">
                            <option value="hugs">Hugs</option>
                            <option value="nibblecoins">Nibblecoins</option>
                            <option value="icecreams">Ice creams</option>
                        </select>
                    </p>
                    <fieldset>
                        <legend>Room size</legend>
                        <p>
                            <input type="radio" name="size" id="size_1" value="single"/>
                            <label htmlFor="size_1">Single</label>
                        </p>
                        <p>
                            <input type="radio" name="size" id="size_2" value="double"/>
                            <label htmlFor="size_2">Double</label>
                        </p>
                        <p>
                            <input type="radio" name="size" id="size_3" value="suite"/>
                            <label htmlFor="size_3">Suite with gummy furniture</label>
                        </p>
                    </fieldset>

                </section>
                <button type="submit" disabled={this.state.isLoading}>Send personal details</button>
                <div className="visually-hidden" role="alert" aria-busy={this.isLoading}>{this.state.isLoading ? "Loading..." : ""}</div>
            </form>
        );
    }
}

export default Form;