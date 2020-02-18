
$(document).ready(function(){
  counter = 0;
  arr = [
    // {id: 12, name: "kobi", check: true},
    // {id: 44, name: "ron", check: false},
  ]; 

   buildList(arr);
   
   $(document).on('keyup', '.db_build ', function(){
      var new_val = $(this).val();
      var id = $(this).parent().attr('data_id');
      $(arr).each(function(){
        if(this.id == id){
          this.name = new_val;
        }
      });
   });
});

function buildList(arr){
  $('.db_rec_row').html("");
    $(arr).each(function(){
      $('.db_rec_row').append("<div class='rec_row' data_id=" + this.id + "><input type='checkbox' checked="+ this.check +" class='done_check'><input type='text' value=" + this.name + " class='rec_name db_build'><i class='del_rec'>X</i></div>");
    });
}

function addRow(){
  var name = $('.add_item_in').val();
  var new_row = {
    id: counter,
    name: name,
    check: false
  }
  arr.push(new_row);
  counter++;
}

function insertRow(){
  addRow();
  buildList(arr);
  $('.add_item_in').val("");
}

function deleteRow(){
  // sorry.. spent a lot of time on php exercise
}

