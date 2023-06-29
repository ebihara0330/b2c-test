/***********************************************************************
 * title
 * 	・Storyline閲覧用テンプレート
 * 
 * description
 *  ・パラメータを設定してビルドするとStoryline閲覧画面が生成される
 *  　- relativePath 本ファイルからリソースファイルまでの相対パス
 *  　- fileName 閲覧用コンテンツのファイル名
 * 
 ***********************************************************************/

module.exports = () => {

  return `
	
	<!DOCTYPE html>

  <html>
	
		<head>
			<meta charset="UTF-8">
			<link rel="stylesheet" type="text/css" href="../../../../../assets/css/global.css" />
			<link rel="stylesheet" type="text/css" href="../../../../../assets/css/story.css" />
			<script src="../../../../../js/global.js"></script>
		</head>
	
		<body>
			<div class="body-container">
				<div class="actionBar">
					<img src="../../../../../assets/images/BsLogo.png" class="bsImage">
					<div class="actionBarContents">
						<button id="logoutButton" class="logoutButton">Logout</button>
					</div>
				</div>
	
				<div class="Storyline-container">
				  <iframe src="story.html"></iframe>
			  </div>
			</div>
		</body>
	
	</html>

	`;
}

