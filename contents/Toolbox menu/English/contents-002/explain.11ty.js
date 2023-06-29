/***********************************************************************
 * title
 * 	・コンテンツ説明用テンプレート
 * 
 * description
 *  ・パラメータを設定してビルドするとコンテンツ説明画面が生成される
 *  　- relativePath 本ファイルからリソースファイルまでの相対パス
 *  　- description コンテンツの説明文言
 *  　- link コンテンツの閲覧リンク
 * 
 ***********************************************************************/

module.exports = () => {

  return `
	
  <!DOCTYPE html>

	<html>  
		<head>
			<meta charset="UTF-8">
			<link rel="stylesheet" type="text/css" href="../../../../../assets/css/global.css" />
			<link rel="stylesheet" type="text/css" href="../../../../../assets/css/explain.css" />
			<script src="../../../../../js/global.js"></script>
		</head>

		<body>

			<div class="actionBar">
				<img src="../../../../../assets/images/BsLogo.png" class="bsImage">
				<div class="actionBarContents">
					<button id="logoutButton" class="logoutButton">Logout</button>
				</div>	
			</div>

			<div class="body-container">

				<div class="explain">
					<div class="wording">
											  <h1>contents2(English)</h1>
					  <br>Toolbox INSTA data download<br>
					  This document introduces <span style="font-weight: bold;">How to check data already entered in Toolbox INSTA through Insights</span>. <br><br>
					  In order to use Insights, it is necessary to set up a login separately from Toolbox, so if you have not set up, please contact BSJ Digital Solution Promotion Section (BSJ9432). <br><br>
					  In addition, from the viewpoint of system security, Insights users are limited to employees of BS Group companies. <br><br>
					  Insights is available in English only. <br>
					  The number of menus that appear on the screen will vary depending on your settings. <br>
					  If you have any questions, please contact BSJ9432. <br><br>
					  This manual is based on the latest version of Insights at the time of creation.
					  
					</div>
					<div class="contents"><a href="../20210728_How to Access Toolbox Tableau Reports_V1.1/index.html">20210728_How to Access Toolbox Tableau Reports_V1.1.pdf</a><br></div>
				</div>

				<div class="footer">
						<div class="footer-text">&copy; Bridgestone Corporation</div>
				</div>
			</div>
		</body>
	</html>
  
	`;
}
