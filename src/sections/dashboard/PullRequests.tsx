import React from "react";

interface SearchIconAttributes {
	className?: string;
}

export const PullRequests: React.FC<SearchIconAttributes> = ({
	className = "",
}: SearchIconAttributes) => {
	return (
		<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7.67677 3.07322L10.0732 0.676753C10.2307 0.51926 10.5 0.630802 10.5 0.853529V5.64642C10.5 5.86915 10.2307 5.98069 10.0732 5.8232L7.67677 3.42677C7.57914 3.32914 7.57914 3.17085 7.67677 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11.5 2.5H10.5V4H11.5C12.0523 4 12.5 4.44772 12.5 5V10.628C11.6261 10.9369 11 11.7703 11 12.75C11 13.9926 12.0074 15 13.25 15C14.4926 15 15.5 13.9926 15.5 12.75C15.5 11.7703 14.8739 10.9369 14 10.628V5C14 3.61929 12.8807 2.5 11.5 2.5ZM3 12.75C3 12.3358 3.33579 12 3.75 12C4.16421 12 4.5 12.3358 4.5 12.75C4.5 13.1642 4.16421 13.5 3.75 13.5C3.33579 13.5 3 13.1642 3 12.75ZM12.5 12.75C12.5 12.3358 12.8358 12 13.25 12C13.6642 12 14 12.3358 14 12.75C14 13.1642 13.6642 13.5 13.25 13.5C12.8358 13.5 12.5 13.1642 12.5 12.75Z"
				fill="white"
			/>
		</svg>
	);
};