function ImageUpload(props) {

    let onFileUpload = (event) => {
        props.upload(event.target.files[0]);
    }

    return (
        <div>
            <input type="file" name="avatar" onChange={onFileUpload} />
            {
                // <button type="button" onClick={this.submit} > Upload </button>
            }
        </div>
    );
}

export default ImageUpload;