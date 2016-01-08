Polymer({
	is: 'custom-card',
	properties: {
		nombre: String,
		edad: Number,
		employees: {
          type: Array,
          value: function() {
            return [
              { firstname: "Jack", lastname: "Aubrey" },
              { firstname: "Anne", lastname: "Elliot" },
              { firstname: "Stepehen", lastname: "Maturin" },
              { firstname: "Emma", lastname: "Woodhouse" }
            ]
          }
        }
	},
	ready: function(){
		console.log("Custom card readyy");
		this.nombre = "Santiago";
		console.log( this.employees );
	}
});