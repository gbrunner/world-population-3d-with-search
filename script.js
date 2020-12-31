    require([
      "esri/WebScene",
      "esri/views/SceneView",
	  "esri/widgets/Search",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Search) {

      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"fbbbaa2fbfda41b8b3f96427c3ac5c79" 
        }
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'local'
      });
	  
	  var searchWidget = new Search({
        view: view
      });

      // Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: "top-right"
      });

    });
