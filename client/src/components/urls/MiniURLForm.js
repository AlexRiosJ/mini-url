import React from 'react';

const MiniURLForm = () => {
	return (
		<form className='form-group form-inline my-4'>
			<label className='col-form-label sr-only' htmlFor='inputDefault'>
				Shorten your link
			</label>
			<input
				required
				type='url'
				name='longUrl'
				className='form-control form-control-lg col mr-2'
				placeholder='Shorten your link'
				id='longUrl'
			></input>
			<button type='submit' className='btn btn-lg btn-secondary'>
				Shorten
			</button>
		</form>
	);
};

export default MiniURLForm;
