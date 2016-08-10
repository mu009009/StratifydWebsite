function ValuewithPxStrtoNumValue(str)
{
	var StrOriginal = str;
	var NoPxNum = StrOriginal.substring(0,(StrOriginal.length-2));
	return NoPxNum;
}