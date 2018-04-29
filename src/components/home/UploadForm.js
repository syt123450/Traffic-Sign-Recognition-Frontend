/**
 * Author: Bo
 * How to trigger file upload with Button:
 * https://stackoverflow.com/questions/39913863/how-to-manually-trigger-click-event-in-reactjs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 */
import React, {Component} from 'react';
import { Form, Text } from 'react-form';
import axios from 'axios';
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
import { Button, Glyphicon } from 'react-bootstrap';

class UploadForm extends React.Component {
    constructor() {
        super();
        this.fileInput = null;
        this.onUploadClick = this.onUploadClick.bind(this);
    }
    
    onUploadClick() {
        this.fileInput.click();
    }
    
    onInputChange(event) {
        console.log('&&&&&');
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        
        axios({
            url: 'http://localhost:8080/upload',
            method: 'post',
            data: formData,
            headers: {
                dataType: 'text',
                enctype: 'multipart/form-data',
                contentType: false,
                processData: false,
            }})
            .then(response => {
                console.log('upload form ======', response);
                // event.target.value = "";
                // event.target.files[0] = null;
            })
            .catch(error => {
                console.log('error ======', error);
            });
    }
    
    onInputClick(event) {
        event.target.value = '';
    }
    
    render () {
        return (
            <Form>
                {formApi => (
                        <form onSubmit={ formApi.submitForm }  id="upload_form" className="mb-4">
                        
                        <Button onClick={ this.onUploadClick }>
                            <Glyphicon glyph={"camera"}/>
                        </Button>
                        
                        <input name={'file'} ref={input => this.fileInput = input}
                               style={{display: 'none'}} type={"file"} accept={'image/*'}
                               onChange={ this.onInputChange }
                               onClick={ this.onInputClick }
                        />
                    </form>
                )}
            </Form>
        )
    }
}

export default UploadForm