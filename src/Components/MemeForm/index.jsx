import React from 'react';
import './style.scss';

const MemeForm = ({onChangeInput,onSubmit}) => {
    return (
        <div>
            <form name="meme" className="form">
                <label className="form__label" htmlFor="title">
                    Title
                    <input type="text" name="title" id="title"  required onChange={ onChangeInput }  />
                </label>
                <label className="form__label" htmlFor="url">
                    URL
                    <input type="text" name="url" id="url" required onChange={ onChangeInput }  />
                </label>
                <input type="submit" value="Add" onSubmit={ (event) => onSubmit(event) } />
            </form>
        </div>
    )
}

export default MemeForm;