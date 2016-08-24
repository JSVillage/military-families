import React, {Component, PropTypes} from 'react';

class SubimtEventPage extends Component {

    constructor(props) {
        super(props);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleSubmitClick(event) {

        const model = {
            name: this.refs.name.value,
            description: this.refs.description.value,
            eventAddress: {
                street: this.refs.street.value,
                city: this.refs.city.value,
                state: this.refs.state.value,
                zip: this.refs.zip.value,
                lat: (Math.random() * (34.44 - 34.46) + 34.46),
                long: -(Math.random() * (112.06 - 112.08) + 112.08)
            },
            date: this.refs.date.value
        };

        this.props.postEvent(model);
    }

    render() {
        return <div>
            <div className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2">Event Name:
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control" ref="name"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Description of Event:
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control" ref="description"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Address:
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control" ref="street"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">City:
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control" ref="city"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">State:
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control" ref="state"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Zip Code:
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control" ref="zip"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Date of Event:
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control" ref="date"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-3">
                        <button className="btn btn-primary" onClick={this.handleSubmitClick}>Submit</button>
                    </div>
                </div>

            </div>
        </div>;
    }
}

SubimtEventPage.displayName = "SubimtEventPage";

export default SubimtEventPage;
