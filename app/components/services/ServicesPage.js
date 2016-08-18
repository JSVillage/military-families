import React, {Component, PropTypes} from 'react';

class ServicesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="well">
                        <h1 className="text-center"> Find Services in your area </h1>
                            <div className="list-group">
                                <a href="#" className="list-group-item active">
                                    <div className="media col-md-3">
                                        <figure className="pull-left">
                                            <img className="media-object img-rounded img-responsive" src="http:/ / placehold.it / 350x250 " alt="placehold.it / 350x250 "></img></figure>
                                        </div>
                                        <div className="col - md - 6 ">
                                            <h4 className="list - group - item - heading ">
                                                List group heading
                                            </h4>
                                            <p className="list - group - item - text ">
                                                Qui diam libris ei, vidisse incorrupte at mel. His euismod salutandi dissentiunt eu. Habeo offendit ea mea. Nostro blandit sea ea, viris timeam molestiae an has. At nisl platonem eum. Vel et nonumy gubergren, ad has tota facilis probatus. Ea legere legimus tibique cum, sale tantas vim ea, eu vivendo expetendis vim. Voluptua vituperatoribus et mel, ius no elitr deserunt mediocrem. Mea facilisi torquatos ad.
                                            </p>
                                        </div>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>;
              }
      }

  ServicesPage.propTypes = {};

  export default ServicesPage;
