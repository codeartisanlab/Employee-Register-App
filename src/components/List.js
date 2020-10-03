import React from 'react';
import { Link } from 'react-router-dom';

function List(){
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>7894561230</td>
                    <td>123,NY</td>
                    <td>
                        <Link to="/update/1" className="btn btn-info mr-2">Update</Link>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default List;