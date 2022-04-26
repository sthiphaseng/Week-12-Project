
var app2 = new function() {
    this.el = document.getElementById('goals2');
  
    this.goals2 = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.goals2.length > 0) {
        for (i = 0; i < this.goals2.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.goals2[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.goals2.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-goals2');
      var goal2 = el.value;
  
      if (goal2) {
        this.goals2.push(goal2.trim());
        el.value = '';
        this.FetchAll();
      }
    };
  
    this.Edit = function (item2) {
      var el = document.getElementById('edit-goals2');
      el.value = this.goals2[item];
      document.getElementById('edit-box2').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit2').onsubmit = function() {
        var goal2 = el.value;
  
        if (goal2) {
          self.goals2.splice(item2, 1, goal2.trim());
          self.FetchAll();
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item2) {
      this.goals2.splice(item2, 1);
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter2');
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
  
  app2.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box2').style.display = 'none';
  }
