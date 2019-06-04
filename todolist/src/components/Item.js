import React, {Component} from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class Item extends Component {

    handleShowAlert = (item) => {
        console.log(item);
        this.setState({
            showAlert: true,
            titleAlert: item.name,
            idAlert: item.id
        });
    }

    handleDeleteItem = () => {
        let { idAlert, items } = this.state;

        if (items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === idAlert) {
                    items.splice(i, 1);
                    break;
                }
            }
        }
        this.setState({
            showAlert: false
        });
    }

    render() {
        let {item, index} = this.props;
        if(item === 0) {
            return (
                <tr>
                    <td colSpan="4" className="text-center">
                        <h4>No Item</h4>
                    </td>
                </tr>
            )
        }
        let classNameLabel = '';
        let nameLabel = '';
        switch (item.level) {
            case 1:
                classNameLabel = 'label label-warning';
                nameLabel = 'Medium';
                break;
            case 2:
                classNameLabel = 'label label-danger';
                nameLabel = 'High';
                break;
            default:
                classNameLabel = 'label label-info';
                nameLabel = 'Low';
                break;
        }
        return(
            <tr>
                <td className="text-center">
                    {index}
                </td>
                <td>
                    {item.name}
                </td>
                <td className="text-center">
                    <span className={classNameLabel}>{nameLabel}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.props.handleShowAlert(item)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;