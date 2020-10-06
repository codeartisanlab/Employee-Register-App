import React from 'react';
function Update(){
    return (
        <table className="table table-bordered">
            <tr>
                <th>Full Name</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Email</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Contact</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Address</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <input type="submit" className="btn btn-dark" />
                </td>
            </tr>
        </table>
    );
}

export default Update;