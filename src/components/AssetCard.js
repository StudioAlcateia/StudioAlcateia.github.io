import { Col } from "react-bootstrap";

export const AssetCard = ({ title, description, imgUrl }) => {
  return (
	<div className="asset-imgbx">
		<img src={imgUrl} />
		<div className="asset-txtx">
		<h4>{title}</h4>
		<span>{description}</span>
		</div>
	</div>
  )
}