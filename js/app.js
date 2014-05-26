
(function(){
  //Parse initialization
	Parse.initialize("Z0jS8VlQsCnNNu2YYEZ5CwVDacC8qHhPxwG6FjCd", "epR26mCFHA3wgvL6Aynhj7pQBjj4hKFJ0SpPi6xU");
  //編譯template engine函數();
  //可選-編寫共用函數();
  var compile = {};
  
  var contentsChange = document.getElementById("loginView").text;
			compile["loginView"] = doT.template(contentsChange);
  contentsChange = document.getElementById("evaluationView").text;
			compile["evaluationView"] = doT.template(contentsChange);			
  contentsChange = document.getElementById("updateSuccessView").text;
			compile["updateSuccessView"] = doT.template(contentsChange);
  
  
  var handler = {
    navbar: function(){
	var user = Parse.User.current();
      if(user){
        $("#loginButton").css("display", "none");
		$("#evaluationButton").css("display", "block");
		$("#logoutButton").css("display", "block");
      } 
	  else {
	    $("#loginButton").css("display", "block");
		$("#evaluationButton").css("display", "none");
		$("#logoutButton").css("display", "none");
         }
		
		$("#logoutButton").click(function(){
			Parse.User.logOut();
			$("#loginButton").css("display", "block");
			$("#evaluationButton").css("display", "none");
			$("#logoutButton").css("display", "none");
			
		});
    },
    loginStatus: function(){
		$("content").html(compile.loginView());
      /* 綁定登入表單的學號檢查事件(); // 可以利用TAHelp物件
      綁定註冊表單的學號檢查事件(); // 可以利用TAHelp物件
      綁定註冊表單的密碼檢查事件(); // 參考上課範例
      綁定登入表單的登入檢查事件(); // 送出還要再檢查一次，這裡會用Parse.User.logIn
      綁定註冊表單的註冊檢查事件(); // 送出還要再檢查一次，這裡會用Parse.User.signUp和相關函數 */
    },
    pointView: function(){
      /* // 基本上和上課範例購物車的函數很相似，這邊會用Parse DB
      問看看Parse有沒有這個使用者之前提交過的peer review物件(
      沒有的話: 從TAHelp生一個出來(加上scores: [‘0’, ‘0’, ‘0’, ‘0’]屬性存分數並把自己排除掉)
      把peer review物件裡的東西透過版型印到瀏覽器上();
      綁定表單送出的事件(); // 如果Parse沒有之前提交過的peer review物件，要自己new一個。或更新分數然後儲存。
	   ); */
    }
  };
  
  var Router = Parse.Router.extend({
    "": handler.loginStatus,
    "peer-evaluation": handler.pointView
  });

  /* 讓router活起來(); */
  handler.navbar();
  this.Router = new Router();
  
})();
