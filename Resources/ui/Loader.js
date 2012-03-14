Ti.viewLoad = function (viewName)
{
	var platformTag = Ti.Platform.osname; 
	
	Ti.API.info("Loading view " + viewName + " for platform tag: " + platformTag);
	
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'ui/views/' + viewName + "_" + platformTag + ".js");
 
	if(!file.exists()) 
	{
		Ti.API.info("View not found for " + viewName + ", loading default iphone view.");
		platformTag = "iphone"; 
	}
	
	Ti.include('ui/views/' + viewName + "_" + platformTag + ".js");
	
	return eval(viewName + "_render()");	
}
