import React, {Component} from 'react';

// // import Table from 'react-toolbox/lib/table/Table';
// // import TableHead from 'react-toolbox/lib/table/TableHead';
// // import TableRow from 'react-toolbox/lib/table/TableRow';
// // import TableCell from 'react-toolbox/lib/table/TableCell';
//
// import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
//
// const UserModel = {
//     name: {type: String},
//     twitter: {type: String},
//     // birthdate: {type: Date, title: 'Date of Birth'},
//     // cats: {type: Number},
//     // dogs: {type: Number},
//     // active: {type: Boolean}
// };
// //
// // const users = [
// //     {name: 'Javi Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
// //     {name: 'Javi Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
// // ];
//
// const users = [
//     {name: 'Javi Jimenez', twitter: '@soyjavi'},
//     {name: 'Javi Velasco', twitter: '@javivelasco'}
// ];
//
// class TableTest extends React.Component {
//     state = { selected: [], source: users };
//
//     handleChange = (row, key, value) => {
//         const source = this.state.source;
//         source[row][key] = value;
//         this.setState({source});
//     };
//
//     handleSelect = (selected) => {
//         this.setState({selected});
//     };
//
//     render () {
//         console.log('=====', this.state.source);
//         const users = this.state.source;
//         return (
//             <Table>
//                 <TableHead>
//                     {/*<TableCell onClick={this.handleSortClick} numeric sorted={"asc"}>Calories</TableCell>*/}
//                     <TableCell numeric>Name</TableCell>
//                     <TableCell numeric>Twitter</TableCell>
//                     {/*<TableCell numeric>Calcium (%)</TableCell>*/}
//                     {/*<TableCell numeric>Iron (%)</TableCell>*/}
//                 </TableHead>
//                 {users.map((item, idx) => (
//                     <TableRow key={idx} selected={this.state.selected.indexOf(item.name) !== -1}>
//                         {/*<TableCell>{item.name}</TableCell>*/}
//                         {/*<TableCell numeric>{item.calories}</TableCell>*/}
//                         {/*<TableCell numeric>{item.fat}</TableCell>*/}
//                         {/*<TableCell numeric>{item.sodium}</TableCell>*/}
//                         <TableCell numeric>{item.name}</TableCell>
//                         <TableCell numeric>{item.twitter}</TableCell>
//                     </TableRow>
//                 ))}
//             </Table>
//         );
//     }
// }
//
// export default TableTest;

import Table from 'react-toolbox/lib/table';

const UserModel = {
    name: {type: String},
    twitter: {type: String},
    birthdate: {type: Date,
        title: 'Date of Birth'},
    cats: {type: Number},
    dogs: {type: Number},
    active: {type: Boolean}
};

const users = [
    {name: 'Javi Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
    {name: 'Javi Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
];

class TableTest extends React.Component {
    state = { selected: [], source: users };
    
    handleChange = (row, key, value) => {
        const source = this.state.source;
        source[row][key] = value;
        this.setState({source});
    };
    
    handleSelect = (selected) => {
        this.setState({selected});
    };
    
    render () {
        return (
            <Table
                model={UserModel}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                selectable
                multiSelectable
                selected={this.state.selected}
                source={this.state.source}
            />
        );
    }
}

export default TableTest;
