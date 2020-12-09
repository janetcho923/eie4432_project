// function readURL(input) {
//     var url = input.value;
//     var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
//     if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
//         var reader = new FileReader();
    
//         reader.onload = function (e) {
//             $('#proPicArea').attr('src', e.target.result);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
//     else{
//          $('#proPicArea').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Font_Awesome_5_regular_user-circle.svg/991px-Font_Awesome_5_regular_user-circle.svg.png');
//       }
//     }
    $(function(){
        $('#upload').change(function(){
          var input = this;
          var url = $(this).val();
          var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
          if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
           {
              var reader = new FileReader();
      
              reader.onload = function (e) {
                 $('#proPicArea').attr('src', e.target.result);
              }
             reader.readAsDataURL(input.files[0]);
          }
          else
          {
            $('#proPicArea').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Font_Awesome_5_regular_user-circle.svg/991px-Font_Awesome_5_regular_user-circle.svg.png');
          }
        });
      
      });

      function enableField(e){
         if (e==-1) {
            document.getElementById('course').disabled = true;
            document.getElementById('gender').disabled = true;  
            document.getElementById('birthday').disabled = true;
         }
          else if(e==1) {
            document.getElementById('course').disabled = false;
            document.getElementById('gender').disabled = true;  
            document.getElementById('birthday').disabled = true;
          }
          else  {
            document.getElementById('course').disabled = true;
            document.getElementById('gender').disabled = false;  
            document.getElementById('birthday').disabled = false; 
          }
        
      }
      