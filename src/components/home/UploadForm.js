// import React, {Component} from 'react';
// import $ from 'jquery';
//
// import Button from 'react-toolbox/lib/button/Button';
//
// class UploadForm extends Component {
//
// 	handleFileUpload() {
//
// 		var formData = new FormData($("#form")[0]);
// 		$.ajax({
// 			url: '/upload' ,
// 			type: 'POST',
// 			enctype: 'multipart/form-data',
// 			data: formData,
// 			contentType: false,
// 			processData: false,
// 			dataType: 'text',
// 			success: function (data) {
// 				console.log(data);
// 			}
// 		});
// 	}
//
// 	render() {
// 		return (
// 			<div>
// 				<form id="form">
// 					<input type="file" name="file" />
// 				</form>
// 				<Button label="Predict" raised primary onMouseUp={this.handleFileUpload}/>
// 			</div>
// 		);
// 	}
// }
//
// export default UploadForm;


import React from 'react';
export default () => (
    <div>{"Upload form"}</div>
);