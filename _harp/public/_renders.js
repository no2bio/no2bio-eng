function g( url ) {
	var out = "";
	for ( i=0; i<current.path.length; i++ ) {
		out = out + "../";
	}
	return out + url;
}