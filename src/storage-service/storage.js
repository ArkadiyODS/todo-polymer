'user strict'


function StorageService(initial){
  var dataBase = window.localStorage;

  if(!dataBase.length || !dataBase.getItem('storage')){
    debugger;
    dataBase.setItem('storage', JSON.stringify(initial))
  }

  return {
    getTasks: function(){
      try {
        let data = JSON.parse(dataBase.getItem('storage'));
        return data;
      }
      catch(err){

      }
      return initial;
    },
    updateStorage: function(storage){
      let dataJson = JSON.stringify(storage);
      if(dataBase.getItem('storage') != dataJson){
        console.log('storage updated');
        dataBase.setItem('storage', dataJson);
      }
    }
  }
}


let workTasks = [
          {
            message: 'First task',
            date: new Date(),
            completed: false
          },
          {
            message: 'Second task',
            date: new Date(),
            completed: false
          }
        ];

        let homeTasks = [
          {
            message: 'Third task',
            date: new Date(),
            completed: true
          },
          {
            message: 'Forth task',
            date: new Date(),
            completed: false
          }
        ];

        let initialStorage =
        [
          { title: 'Work',
            tasks: []
          },
          { title: 'Home',
            tasks: []
          }
        ]


let storage = StorageService(initialStorage);
