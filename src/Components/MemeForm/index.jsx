import React from 'react';
import './style.scss';

const MemeForm = ({data,onChangeInput,onSubmit}) => {
    return (
        <div>
            <form name="meme" className="form" onSubmit={(event) => onSubmit(event)}>
                <label className="form__label" htmlFor="title">
                    Title
                    <input type="text" name="title" id="title" value={data.title}  required onChange={ onChangeInput }  />
                </label>
                <label className="form__label" htmlFor="img">
                    URL
                    <input type="text" name="img" id="img" required onChange={onChangeInput} value={data.img} />
                </label>
                <input type="submit" value="Add"  />
            </form>
        </div>
    )
}

export default MemeForm;