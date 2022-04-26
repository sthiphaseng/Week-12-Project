
var app = new function() {
    this.el = document.getElementById('goals');
  
    this.goals = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.goals.length > 0) {
        for (i = 0; i < this.goals.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.goals[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.goals.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-goals');
      var goal = el.value;
  
      if (goal) {
        this.goals.push(goal.trim());
        el.value = '';
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-goals');
      el.value = this.goals[item];
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        var goal = el.value;
  
        if (goal) {
          self.goals.splice(item, 1, goal.trim());
          self.FetchAll();
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      this.goals.splice(item, 1);
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Goals';
  
      if (data) {
          if(data ==1){
              name = 'Goal'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }
