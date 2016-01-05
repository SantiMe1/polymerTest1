Polymer({
	is: 'custom-card',
	properties: {
		nombre: String,
		edad: Number
	},
	ready: function(){
		console.log("Custom card ready");
		this.nombre = "Santiago";
	}
});