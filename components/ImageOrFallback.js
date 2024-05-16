import React, { useState } from "react";
import Image from "next/image";

function ImageWithFallback({ src, alt, fallbackSrc }) {
	const [imageSrc, setImageSrc] = useState(src);

	const onError = () => setImageSrc(fallbackSrc);

	// return <img src={imageSrc ? imageSrc : fallbackSrc} alt={alt} onError={onError} />;
	return <Image src={imageSrc ? imageSrc : fallbackSrc} fill alt={alt} onError={onError} />;
}

export default ImageWithFallback;
