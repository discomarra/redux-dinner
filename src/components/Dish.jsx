import React from "react";

export default ({onClick, name, id}) => {
	return (
		<li>
			<a href="#" onClick={() => onClick(id)}> <span>{name}</span></a>
		</li>
	);
}