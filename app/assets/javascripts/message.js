$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="chatMain__messageList--block">
          <div class="messageInfo">
            <div class="messageInfo--userName">
              ${message.user_name}
            </div>
            <div class="messageInfo--createdAt">
              ${message.created_at}
            </div>
          </div>
          <div class="messageText">
            <p class="lower-message__content">
              ${message.body}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="chatMain__messageList--block">
          <div class="messageInfo">
            <div class="messageInfo--userName">
              ${message.user_name}
            </div>
            <div class="messageInfo--createdAt">
              ${message.created_at}
            </div>
          </div>
          <div class="messageText">
            <p class="lower-message__content">
              ${message.body}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chatMain__messageList').append(html);
      $('.chatMain__messageList').animate({scrollTop: $('.chatMain__messageList')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました")
    })
    .always(function(date){
      $('.inputBox--submitBtn').prop('disabled', false);
    })
  })
})