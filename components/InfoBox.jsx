export default function InfoBox({
	heading,
	backgroundColor = "bg-gray-100",
	textColor = "text-gray-800",
	buttenInfo,
	children,
}) {
	return (
		<div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
			<h2 className={` ${textColor} text-2xl font-bold`}>{heading}</h2>
			<p className={` ${textColor} mt-2 mb-4`}>{children}</p>
			<a
				href={buttenInfo.link}
				className={`inline-block ${buttenInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
			>
				{buttenInfo.text}
			</a>
		</div>
	)
}
