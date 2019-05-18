import React from 'react';

import one from '../assets/parrOne.png';
let parallax4 = {
	backgroundImage: `url(${one})`,
	height: '70vh',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const Team = () => {
	return (
		<div style={parallax4}>
			<div
				className="title"
				style={{
					border: '1em solid white',
					color: 'white',
					padding: '2em',
					width: '70%',
					height: '70%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<p style={{ fontSize: '7em', textShadow: '5px 5px 5px #000000' }}>
					Team
				</p>
			</div>
		</div>
	);
};

export default Team;
