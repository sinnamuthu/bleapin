import React, { Component } from 'react';
import config from './Config';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.exportContacts = this.exportContacts.bind(this);
    }

    exportContacts(){
        axios({
            method: 'get',
            url: config.ROUTE_URL+'/export-contacts'
        }).then(res => {
            if (res.data.status){
                window.location.href = config.ROUTE_URL+'/storage/app/'+res.data.filename;
            }
        });
    }

    componentDidMount(){
        $.DataTable = require('datatables.net');
        require( 'datatables.net-responsive' );
        $(document).ready(function() {
            $('#contact-table').DataTable({
                processing: true,
                serverSide: true,
                responsive: true,
                ajax: config.ROUTE_URL+'/contact-table',
                columns: [
                    {data: 'id', name: 'id'},
                    {data: 'name', name: 'name'},
                    {data: 'phone', name: 'phone'},
                    {data: 'email', name: 'email'},
                    {data: 'city', name: 'city'},
                    {data: 'responsive', name: 'responsive'},
                    {data: 'eCommerce', name: 'eCommerce'},
                    {data: 'digitalMarketing', name: 'digitalMarketing'},
                    {data: 'socialMedia', name: 'socialMedia'},
                    {data: 'seo', name: 'seo'},
                    {data: 'goodleAds', name: 'goodleAds'},
                    {data: 'videoContent', name: 'videoContent'},
                    {data: 'strategic', name: 'strategic'},
                    {data: 'message', name: 'message'},
                    {data: 'created_at', name: 'created_at'},
                    // {data: 'action', name: 'action', orderable: false, searchable: false},
                ],/*
                columnDefs: [{
                    targets: [15],
                    responsivePriority: 1,
                    data: 'action',
                    createdCell: (td, cellData, rowData, row, col) =>
                        ReactDOM.render(
                            <BrowserRouter>
                            <a href={config.ROUTE_URL+'/client/leads/edit/'+cellData}><i className='fa fa-pencil'></i></a>
                            {<Link to={config.ROUTE_URL+'/client/leads/edit/'+cellData}><i className='fa fa-pencil'></i></Link>}
                            </BrowserRouter>,
                            td
                        )
                }],*/
                order: [[ 1, "desc" ]],
                language: {
                    'loadingRecords': '&nbsp;',
                    'processing': 'Loading...'
                }
            });
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Leads</div>
                            <div className="card-body">
                                <a href={config.ROUTE_URL+'/dashboard/add-lead'} className="btn btn-primary">Add New Lead</a>
                                <button className="btn btn-primary" onClick={this.exportContacts}>Export CSV</button>
                                <div className="table-responsive">
                                    <table id="contact-table" className="table table-striped display dt-responsive nowrap" width="100%">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>Responsive</th>
                                                <th>E-Commerce</th>
                                                <th>Digital Marketing</th>
                                                <th>Social Media</th>
                                                <th>SEO</th>
                                                <th>Google Ads</th>
                                                <th>Video Content</th>
                                                <th>Strategic</th>
                                                <th>Message</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;