import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UrlContext from '../../context/url/urlContext';

const MiniURLItem = ({ url }) => {
	const urlContext = useContext(UrlContext);
	const { deleteUrl } = urlContext;

	const { _id, longUrl, miniUrl, clicks } = url;

	return (
		<tr className="table-light">
			<td className="col-md-6">
				<span value={longUrl}>
					{longUrl.length > 50 ? longUrl.slice(0, 45) + '...' : longUrl}
				</span>
			</td>
			<td className="col-md-4">
				<a
					href={`${window.location.host.replace(3, 5)}/r/${miniUrl}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{window.location.host.replace(3, 5) + '/r/' + miniUrl}
				</a>
			</td>
			<td className="col-md-2 text-center">
				<span className="badge badge-secondary badge-pill badge-lg">
					{clicks}
				</span>
			</td>
			<td className="col-md-2">
				<a href="#!" onClick={() => deleteUrl(_id)} className="mx-2">
					<i className="fas fa-trash"></i>
				</a>
			</td>
		</tr>
	);
};

MiniURLItem.propTypes = {
	url: PropTypes.object.isRequired
};

export default MiniURLItem;
