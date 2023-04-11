<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<!-- <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> -->
<link rel="icon" type="image/png" href="image/seismictitle.png" />
<title>Seismic-CRM</title>
<base href="${pageContext.request.contextPath}/">
<link rel="stylesheet" type="text/css" href="css/style.css" />
<script src="css/cufon-yui.js" type="text/javascript"></script>
<script src="css/ChunkFive_400.font.js" type="text/javascript"></script>


<script type="text/javascript">
	Cufon.replace('h1', {
		textShadow : '1px 1px #fff'
	});
	Cufon.replace('h2', {
		textShadow : '1px 1px #fff'
	});
	Cufon.replace('h3', {
		textShadow : '1px 1px #000'
	});
	Cufon.replace('.back');
</script>
</head>
<body>
	<div class="wrapper">

		<div class="content">
			<div style="margin-left: 390px;">
				<img src="images/logo5.png">
			</div>
			<div id="form_wrapper" class="form_wrapper" style="margin-top: 0px;">

				<form class="login active"
					action="<c:url value='j_spring_security_check' />" method='POST'>
					<h3>Login</h3>
					<div>
						<label>Username:</label> <input type="text"
							placeholder="Enter Username" name='j_username' id="username"
							required /> <span class="error">This is an error</span>
					</div>
					<div>
						<label>Password: <!-- <a href="#"  class="forgot linkform">Forgot your password?</a> --></label>
						<input type="password" placeholder="Enter Password"
							name='j_password' id="password" required /> <span class="error">This
							is an error</span>
					</div>
					<div class="bottom">
						<!-- <div class="remember"><input type="checkbox" /><span>Keep me logged in</span></div> -->
						<input type="submit" value="Log in"></input>

						<div class="clear"></div>
					</div>
				</form>

			</div>
			<div class="clear"></div>
		</div>

	</div>


	<!-- The JavaScript -->

</body>
</html>