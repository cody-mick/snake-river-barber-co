import React from "react";

export default function Button({ text, link }: any) {
	return (
		<a className="btn" href={link}>
			{text}
		</a>
	);
}
