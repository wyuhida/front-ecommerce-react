import React, { Component, Fragment } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import parse from 'html-react-parser';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom';

class Privacy extends Component {

    constructor(){
        super()
        this.state = {
            purchase:"",
            loaderDiv:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount(){
        axios.get(AppURL.AllSiteInfo)
            .then(response =>{
                let StatusCode = response.status
                if(StatusCode === 200){
                    let JsonData = (response.data)[0]['privacy']
                    this.setState({purchase:JsonData,loaderDiv:"d-none",mainDiv:""})
                }
            })
            .catch(error =>{})
    }

  render() {
    return (
        <Fragment>
            <Container>

                <div className="breadbody">
                    <Breadcrumb>
                        <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
                        <Breadcrumb.Item> <Link to="/privacy"> Privacy </Link> </Breadcrumb.Item>   
                    </Breadcrumb>
                </div>

                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <div className={this.state.loaderDiv}>

                            <div class="ph-item">
                                <div class="ph-col-12">        
                                    <div class="ph-row">           
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>


                            <div className="ph-item">
                                <div className="ph-col-12">        
                                    <div className="ph-row">           
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={this.state.mainDiv}>
                            <h4 className="section-title-login">Privacy Page </h4>
                            <p className="section-title-contact">
                                {parse(this.state.purchase)}
                            </p>

                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Privacy
