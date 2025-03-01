import React from "react";

interface SearchIconAttributes {
	className?: string;
}

export const Check: React.FC<SearchIconAttributes> = ({ className = "" }: SearchIconAttributes) => {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17.225 5.27503C17.4005 5.4508 17.4991 5.68909 17.4991 5.93753C17.4991 6.18597 17.4005 6.42424 17.225 6.60003L8.1625 15.6625C7.98671 15.838 7.74844 15.9367 7.5 15.9367C7.25156 15.9367 7.01328 15.838 6.8375 15.6625L2.775 11.6C2.6094 11.4223 2.51925 11.1873 2.52353 10.9444C2.52781 10.7015 2.6262 10.4698 2.79798 10.298C2.96974 10.1262 3.20148 10.0278 3.44435 10.0236C3.68723 10.0193 3.92228 10.1094 4.1 10.275L7.5 13.675L15.9 5.27503C16.0758 5.09947 16.314 5.00085 16.5625 5.00085C16.8109 5.00085 17.0493 5.09947 17.225 5.27503Z"
				fill="#3FE862"
			/>
		</svg>
	);
};
