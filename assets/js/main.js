
function Task (title, duration){
	this.title = title;
	this.duration = duration;
	this.isCompleted = false;
}

function List(){
	this.tasks =[];
	this.initialTasks =[
	  {
	    "userId": 1,
	    "id": 1,
	    "title": "Delectus aut autem",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 2,
	    "title": "Quis ut nam facilis et officia qui",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 3,
	    "title": "Fugiat veniam minus",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 4,
	    "title": "Et porro tempora",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 5,
	    "title": "Laboriosam mollitia et enim quasi adipisci quia provident illum",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 6,
	    "title": "Qui ullam ratione quibusdam voluptatem quia omnis",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 7,
	    "title": "Illo expedita consequatur quia in",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 8,
	    "title": "Quo adipisci enim quam ut ab",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 9,
	    "title": "Molestiae perspiciatis ipsa",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 10,
	    "title": "Illo est ratione doloremque quia maiores aut",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 11,
	    "title": "Vero rerum temporibus dolor",
	    "completed": true
	  },
	]

	this.add = function(task){
		this.tasks.push(task);
	}

	this.toHTML = function (arr, numL){
		var lista = document.getElementById("lista");
		var listaNueva = document.getElementById("lista nueva");

		if(numL == 1){
			for(var i in arr){
		   		lista.innerHTML += '<form action="#"><p><input type="checkbox" name="lis" id="'+i+'"> <label for="'+i+'" class = "task">'+arr[i].title+'<a class="remove-task">remove</a></label></p></form>';
			}
			return true;
		}else if (numL == 2){
			var str = "";
			for(var j = 11 ; j < (11 + arr.length); j++){
				for(var x in arr){ 
					console.log("/"+arr[x].title);  
		   			str+= '<form action="#"><p><input type="checkbox" name="lis" id="'+j+'"> <label for="'+j+'" class = "task">'+arr[x].title+'</label></p></form>';
		   		}
		   		listaNueva.innerHTML = str;
		   		return true;
			}
		}
	}

	this.newTask = function (){
	
		//var newTT = prompt("Escriba nueva tarea");
		//var newTD = prompt("Escriba la duracion de la tarea");
		console.log(this.tasks);
		swal({
            title: "¿Que tarea desea agregar?",
            text: "Ingrese una nueva tarea",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        	},
            function(inputValue){
              if (inputValue === false) return false;

              if (inputValue === "") {
                  swal.showInputError("Debes ingresar una tarea");
                  return false
              }
            var newTT = inputValue;
    
            swal({
                  title: "¿Cuánto tiempo durara?",
                  text: "Ingrese la duracion de la tarea",
                  type: "input",
                  showCancelButton: true,
                  closeOnConfirm: false,
                  animation: "slide-from-top",
                  inputPlaceholder: "Write something"
                },
                  function(inputValue){
                    if (inputValue === false) return false;

                    if (inputValue === "") {
                      swal.showInputError("Debes ingresar un número");
                      return false
                    }
                    var newTD = inputValue;
                  	newTD = parseInt(newTD);
                       
                swal("Perfecto", "Escribiste: " + newTT + ", "+ newTD + " minutos", "success");
				
//se instancio Task dentro del metodo puesto que por propiedades del uso de la libreria sweetAlert no capturaba el array
				var newT = new Task(newTT, newTD);
				
				list.tasks.push(newT);
				list.toHTML(list.tasks,2);
				console.log(list.tasks);
				//return newT;
              });             
      });
	}

	this.completeTask = function (task) {
		task.classList.toggle('task-complete');
		//this.tasks.isCompleted = true;
		//console.log(newT);
	}

	this.removeTask = function(task){
		task.style.opacity = 0;
		setTimeout(function() {
			task.remove();
		}, 400);
	}
}


var list = new List();
printInitial();

var btnAdd= document.getElementById("btnAdd");
btnAdd.onclick = function (){
	list.newTask();
};

function printInitial (){
	var initial = list.initialTasks;
	list.toHTML(initial,1);
}


document.addEventListener('click', function(e) {
	// Remove task
	if ( e.target.classList.contains('remove-task') ) {
		list.removeTask(e.target);

	// Complete Task
	} else if ( e.target.classList.contains('task') ) {
		list.completeTask(e.target);

	}
}, false);


//*****************EXTRA*************

var btnDelete = document.getElementById("btnDelete");
btnDelete.onclick = function (){
	var nombre = document.getElementById("nombre").value;

	for(var i in pasajeros){
		if(pasajeros[i].nombre == nombre){
			console.log(pasajeros[i]);
			pasajeros.splice(i,1);
			reinicia();
			global.style.backgroundColor = "transparent";
			//return true;
		}		
	}
};

/*
var arrFrases = [
	["By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day. Robert Frost"],
	["There are no shortcuts to any place worth going. Beverly Sills" ],
	["I’d rather live with a good question than a bad answer"],
	["Life’s tragedy is that we get old too soon and wise too late.Benjamin Franklin"],
	["The secret of business is to know something nobody else knows. Aristotle Onassis"],
	["Nothing great was ever achieved without enthusiasm.– Ralph Waldo Emerson"],
	["Success is getting what you want. Happiness is wanting what you get.– B.R. Hayden"],
	["Advice is what we ask for when we already know the answer but wish we didn’t.– Erica Jong"],
	["You will never win if you never begin - Helen Rowland"],
	["Nature is something outside our body, but the mind is within us. -Bhumibol Adulyadej"],
	["We are nearer loving those who hate us than those who love us more than we wish. -Francois de La Rochefoucauld"],
	["Travel becomes a strategy for accumulating photographs. -Susan Sontag"],
];*/