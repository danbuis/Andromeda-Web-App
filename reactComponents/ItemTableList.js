import React from 'react';
import Link from 'next/link';

class ItemTableList extends React.Component {
    render() {
        if(!this.props.items) return null
        const rows = this.props.items.map((info, index) => {
            return (
                <tr key={index}>
                    <td><Link href={"/item/"+info.name}>{info.name}</Link></td>
                </tr>
            );
        });
        
        return <tbody>{rows}</tbody>
    
    }
}

export default ItemTableList;